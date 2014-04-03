package kr.mp.dwg.mapperMgt.service;

import java.util.ArrayList;
import java.util.HashMap;
import egovframework.rte.psl.dataaccess.mapper.Mapper;
import egovframework.rte.psl.dataaccess.util.EgovMap;

/**
 * 
 * @Class Name : MapperMgtMapper.java
 * @Description : MapperMgtMapper Sql Mapper
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
@Mapper("mapperMgtMapper")
public interface MapperMgtMapper {
	
	/**
	 * 
	 * 매핑된 데이터 조회
	 * @version 1.0
	 * @since 2013. 4. 15.
	 * @param HashMap<String, Object> map	검색 조건
	 * @return ArrayList<EgovMap>
	 * @exception DataAccessException
	 */
	public ArrayList<EgovMap> getDwgInfoByObject(HashMap<String, Object> map);
	
	/**
	 * 
	 * 매핑된 데이터 조회 CNT
	 * @version 1.0
	 * @since 2013. 4. 15.
	 * @param HashMap<String, Object> map	검색 조건
	 * @return int
	 * @exception DataAccessException
	 */
	public int getDwgInfoByObjectCnt(HashMap<String, Object> map);
	
	/**
	 * 
	 * 매핑된 데이터 조회 조건추가 CNT
	 * @version 1.0
	 * @since 2013. 4. 15.
	 * @param HashMap<String, Object> map	검색 조건
	 * @return int
	 * @exception DataAccessException
	 */
	public int getDwgInfoByObjectCount(HashMap<String, Object> map);
	
	/**
	 * 
	 * Object Id 조회
	 * @version 1.0
	 * @since 2013. 4. 15.
	 * @param HashMap<String, Object> params
	 * @return int
	 * @exception DataAccessException
	 */
	public ArrayList<EgovMap> getObjectId(HashMap<String, Object> params);
	
	/**
	 * 
	 * Object Id 조회
	 * @version 1.0
	 * @since 2013. 4. 15.
	 * @param HashMap<String, Object> params
	 * @return int
	 * @exception DataAccessException
	 */
	public int getObjectIdCnt(HashMap<String, Object> params);
	
	/**
	 * getSearchDwg
	 * 도면 조회(검색)
	 * @version 1.0
	 * @since 2013. 4. 15.
	 * @param HashMap<String, Object> params
	 * @return  ArrayList<EgovMap>
	 * @exception ExceptDataAccessExceptionion
	 */
	public ArrayList<EgovMap> getSearchDwg(HashMap<String, Object> params);
	
	/**
	 * getSearchDwgCnt
	 * 도면 조회(검색) - 카운트
	 * @version 1.0
	 * @since 2013. 4. 15.
	 * @param HashMap<String, Object> params
	 * @return  int
	 * @exception DataAccessException
	 */
	public int getSearchDwgCnt(HashMap<String, Object> params);
}
