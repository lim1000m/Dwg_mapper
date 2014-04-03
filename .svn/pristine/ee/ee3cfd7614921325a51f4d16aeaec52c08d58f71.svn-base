package kr.mp.dwg.objectMgt.service;

import java.util.HashMap;

import kr.mp.dwg.domain.ObjectInfoVO;
/**
 * 
 * @className ObjectInfoServiceImpl 
 * @author 박용택
 * @since 2013. 12. 23.
 * @version 1.0
 * @comment 
 *   mappDwg Table 정보 관리를 위한 Interface Class 
 * @Modification Information  
 * 
 *       수정일        수정자                    수정내용
 *     ----------   ---------   -------------------------------
 *  
 * 
 * 
 *  Copyright (C) by ESE All right reserved.
 */
public interface ObjectInfoService {
	/**
	 * 
	 * @methodName : selectObjectInfoList
	 * @author 박용택
	 * @since 2013. 12. 23.
	 * @comment 
	 *   객체 정보 리스트, 카운트 조회
	 * @param HashMap 목록 조회를 위한 조건
	 * @return int
	 *
	 */
	public Object[] selectObjectInfoList(HashMap<String, Object> searchList);
	
	/**
	 * 
	 * @methodName : updateObject
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
	 * @methodName : insertObject
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
