package kr.mp.dwg.searchMgt.service;

import java.util.ArrayList;
import java.util.HashMap;
import kr.mp.dwg.domain.DwgMappVO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;
import egovframework.rte.psl.dataaccess.util.EgovMap;

/**
 * 
 * @Class Name : MapperMapper.java
 * @Description : MapperMapper Sql Mapper
 * @Modification Information  
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2013. 4. 15.    김영훈       최초생성
 * 
 * @author 이에스이 김영훈
 * @since 2013. 4. 15.
 * @version 1.0
 * @see
 * 
 *  Copyright (C) by ESE All right reserved.
 */
@Mapper("dwgMapper")
public interface DwgMapper {
	
    /**
     * 
     * @methodName : searchDwg
     * @author 김영훈
     * @since 2012. 8. 23.
     * @comment 
     *   도면 객체 검색
     * @return ArrayList<EgovMap>
     * @exception DataAccessException
     */
	public ArrayList<EgovMap> searchDwg(HashMap<String, Object> params);

    /**
     * 
     * @methodName : searchDwgCnt
     * @author 김영훈
     * @since 2012. 8. 23.
     * @comment 
     *   도면 객체 검색 CNT
     * @return int
     * @exception DataAccessException
     */
	public int searchDwgCnt(HashMap<String, Object> params);
	
	/**
	 * 매핑 도면 등록
	 * @author ESE-MILLER
	 * @param dwgMappVO
	 * @return
	 * @throws Exception
	 */
	public int dwgAdd(DwgMappVO dwgMappVO) throws Exception;
	
	/**
	 * 매핑 도면 삭제
	 * @author ESE-MILLER
	 * @param mpDwgSerno
	 * @return
	 */
	public int dwgDelete(int mpDwgSerno);
	
	/**
	 * 오브젝트에 속한 DwrngSerno를 가져온다
	 * @author ESE-MILLER
	 * @param searchData
	 * @return
	 */
	public ArrayList<EgovMap> getMappingDwgNo(HashMap<String, Object> searchData);
	
}

