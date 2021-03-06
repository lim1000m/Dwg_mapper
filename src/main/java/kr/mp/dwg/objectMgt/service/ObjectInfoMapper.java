package kr.mp.dwg.objectMgt.service;

import java.util.HashMap;

import java.util.List;

import kr.mp.dwg.domain.ObjectInfoVO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;
import egovframework.rte.psl.dataaccess.util.EgovMap;


/**
 * 
 * @Class Name : ObjectInfoMapper.java
 * @Description : ObjectInfoMapper Sql Mapper
 * @Modification Information  
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2013. 4. 15.    김영훈       최초생성
 * 
 * @author 이에스이 박용택
 * @since 2013. 4. 15.
 * @version 1.0
 * @see
 * 
 *  Copyright (C) by ESE All right reserved.
 */
@Mapper("objectInfoMapper")
public interface ObjectInfoMapper {
	/**
	 * 
	 * @methodName : selectObjectInfoList
	 * @author 박용택
	 * @since 2013. 12. 23.
	 * @comment 
	 *   객체 정보 리스트 조회
	 * @param HashMap<String, Object> map	검색 조건
	 * @return ArrayList<EgovMap>
	 *
	 */
	public List<EgovMap> selectObjectInfoGridByMap(HashMap<String, Object> searchData);
	/**
	 * 
	 * @methodName : selectObjectInfoList
	 * @author 박용택
	 * @since 2013. 12. 23.
	 * @comment 
	 *   객체 정보 카운트 조회
	  * @param HashMap<String, Object> map	검색 조건
	 * @return int
	 *
	 */
	public int selectObjectInfoGridByMapCnt(HashMap<String, Object> searchData);
	
	/**
	 * 
	 * @methodName : selectObjectInfoList
	 * @author 박용택
	 * @since 2013. 12. 23.
	 * @comment 
	 *   객체 정보 조회
	 * @param HashMap 목록 조회를 위한 조건
	 * @return int
	 *
	 */
	public ObjectInfoVO getObjectInfoKey(String objId);
	/**
	 * 
	 * @methodName : selectObjectInfoList
	 * @author 박용택
	 * @since 2013. 12. 23.
	 * @comment 
	 *   객체 정보 등록
	 * @param HashMap 목록 조회를 위한 조건
	 * @return int
	 *
	 */
	
	public int insertObject(ObjectInfoVO vo) throws Exception;
	/**
	 * 
	 * @methodName : updateObject
	 * @author 박용택
	 * @since 2013. 12. 23.
	 * @comment 
	 *   객체 정보 수정
	 * @param HashMap 목록 조회를 위한 조건
	 * @return int
	 *
	 */
    public int updateObject(ObjectInfoVO vo) throws Exception;
    /**
	 * 
	 * @methodName : deleteObject
	 * @author 박용택
	 * @since 2013. 12. 23.
	 * @comment 
	 *   객체 정보 삭제
	 * @param HashMap 목록 조회를 위한 조건
	 * @return int
	 *
	 */
	public int deleteObject(int serNo) throws Exception;
	/**
	 * 
	 * @methodName : getObjectDelYn
	 * @author 박용택
	 * @since 2013. 12. 23.
	 * @comment 
	 *   객체 삭제 여부 조회
	 * @param HashMap 목록 조회를 위한 조건
	 * @return int
	 *
	 */
	public int getObjectDelYn(int objId);
	/**
	 * 
	 * @methodName : getObjectNmChk
	 * @author 박용택
	 * @since 2013. 12. 23.
	 * @comment 
	 *   객체 명 중복 체크 조회
	 * @param HashMap 목록 조회를 위한 조건
	 * @return int
	 *
	 */
	public int getObjectNmChk(String objNm) throws Exception;
}
