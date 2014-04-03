package kr.mp.dwg.mapperMgt.service;

import java.util.ArrayList;
import java.util.HashMap;

import javax.management.ReflectionException;

import org.springframework.dao.DataAccessException;

import egovframework.rte.psl.dataaccess.util.EgovMap;

import kr.mp.dwg.domain.mapper.Response;

/**
 * 
 * @className MapperService
 * @author 김영훈
 * @since 2012. 8. 23.
 * @version 1.0
 * @comment 
 *   Mapper Table 정보 관리를 위한 Interface Class 
 * @Modification Information  
 * 
 *       수정일        수정자                    수정내용
 *     ----------   ---------   -------------------------------
 *  
 * 
 * 
 *  Copyright (C) by ESE All right reserved.
 */
public interface MapperMgtService {
	
	
	/**
	 * 
	 * @methodName : getObjectIntgDrwngList
	 * @author 김영훈
	 * @since 2012. 8. 23.
	 * @comment 
	 *   오브젝트 및 도면 조회
	 * @param HashMap 목록 조회를 위한 조건
	 * @return Response
	 * @throws ReflectionException 
	 * @throws DataAccessException 
	 *
	 */
	public Response getObjectIntgDrwngList(HashMap<String, Object> params) throws ReflectionException, DataAccessException;
	
	/**
	 * 
	 * @methodName : getSearchDwgCnt
	 * @author 김영훈
	 * @since 2012. 8. 23.
	 * @comment 
	 *  도면 검색에서 사용하는 도면 카운트 조회
	 * @param HashMap<String, Object> params
	 * @return int
	 *
	 */
	public int getSearchDwgCnt(HashMap<String, Object> params);
		
	/**
	 * 
	 * @methodName : getSearchDwg
	 * @author 김영훈
	 * @since 2012. 8. 23.
	 * @comment 
	 *   도면 검색에서 사용하는 도면 카운트 조회
	 * @param HashMap<String, Object> params
	 * @return ArrayList<EgovMap>
	 *
	 */
	public ArrayList<EgovMap> getSearchDwg(HashMap<String, Object> params);
}