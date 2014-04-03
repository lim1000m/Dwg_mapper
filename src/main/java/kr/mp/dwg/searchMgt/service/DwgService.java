package kr.mp.dwg.searchMgt.service;

import java.util.HashMap;
import java.util.List;

import javax.management.ReflectionException;

import kr.mp.dwg.domain.DwgKndVO;
import kr.mp.dwg.domain.DwgMappVO;
import kr.mp.dwg.domain.search.Response;


/**
 * 
 * @className DwgService
 * @author 김영훈
 * @since 2012. 8. 23.
 * @version 1.0
 * @comment 
 *   도면 검색을 위한 Service Class 
 * @Modification Information  
 * 
 *       수정일        수정자                    수정내용
 *     ----------   ---------   -------------------------------
 *  
 * 
 * 
 *  Copyright (C) by ESE All right reserved.
 */
public interface DwgService {
	
    /**
     * 
     * @methodName : getSearchDwgList
     * @author 김영훈
     * @since 2012. 8. 23.
     * @comment 
     *   도면 객체 검색
     * @return Response
     * @throws ReflectionException 
     */
	public Response getSearchDwg(HashMap<String, Object> map) throws ReflectionException;
	
	/**
	 * 
	 * @return
	 */
	public String createScript();
	
	/**
	 * @methodName : getSearchDwgList
     * @author 김영훈
     * @since 2012. 8. 23.
     * @comment 
     *   도면 객체 검색
	 * @param dwgMappList
	 * @return
	 * @throws Exception
	 */
	public int dwgAdd(List<DwgMappVO> dwgMappList) throws Exception;
	
	/**
	 * 
	 * @param mpDwgSerno
	 * @return
	 * @throws Exception
	 */
	public int dwgDelete(int mpDwgSerno) throws Exception;
	
	/**
	 * 
	 * @param searchList
	 * @return
	 */
	public Object[] selectMappDwgList(HashMap<String, Object> searchList);
	
	/**
	 * 
	 * @param dwgId
	 * @return
	 */
	public DwgMappVO getDwgKeyInfo(String dwgId);
	
	/**
	 * 
	 * @return
	 */
	public List<DwgKndVO> getDwgKndList();
	
}