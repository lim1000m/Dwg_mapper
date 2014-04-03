package kr.mp.dwg.objectMgt.service.impl;

import java.util.HashMap;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;
import kr.mp.dwg.domain.ObjectInfoVO;
import kr.mp.dwg.objectMgt.service.ObjectInfoMapper;
import kr.mp.dwg.objectMgt.service.ObjectInfoService;
/**
 * 
 * @className ObjectInfoServiceImpl 
 * @author 박용택
 * @since 2013. 12. 23.
 * @version 1.0
 * @comment 
 *   ObjectInfoServiceImpl 정보 관리를 위한 implements Class  
 * @Modification Information  
 * 
 *       수정일        수정자                    수정내용
 *     ----------   ---------   -------------------------------
 *  
 * 
 * 
 *  Copyright (C) by ESE All right reserved.
 */
@Service("objectInfoService")
public class ObjectInfoServiceImpl extends AbstractServiceImpl implements ObjectInfoService {

	@Resource(name="objectInfoMapper")
    private ObjectInfoMapper objectInfoMapper;
	/**
	 * 
	 * @methodName : selectObjectInfoList
	 * @author 박용택
	 * @since 2013. 12. 23.
	 * @comment 
	 *   객체 정보 리스트 조회
	 * @param HashMap 목록 조회를 위한 조건
	 * @return Object[]
	 *
	 */
    @Override
	public Object[] selectObjectInfoList(HashMap<String, Object> searchData) {
		Object[] result = new Object[2];

		result[0] = objectInfoMapper.selectObjectInfoGridByMap(searchData);		
		result[1] = objectInfoMapper.selectObjectInfoGridByMapCnt(searchData);	
		
		return result;
	}
    /**
	 * 
	 * @methodName : getObjectInfoKey
	 * @author 박용택
	 * @since 2013. 12. 23.
	 * @comment 
	 *   객체 정보 조회
	 * @param HashMap 목록 조회를 위한 조건
	 * @return ObjectInfoVO
	 *
	 */
    public ObjectInfoVO getObjectInfoKey(String objId) {
	      
        return objectInfoMapper.getObjectInfoKey(objId);
    }
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
	public int insertObject(ObjectInfoVO vo) throws Exception {
    	return objectInfoMapper.insertObject(vo);
    }
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
    public int updateObject(ObjectInfoVO vo) throws Exception {
    	return objectInfoMapper.updateObject(vo);
    }
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
	public int deleteObject(int serNo) throws Exception {
		return objectInfoMapper.deleteObject(serNo);
	}
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
	public int getObjectDelYn(int objId){
		return objectInfoMapper.getObjectDelYn(objId);
	}
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
	public int getObjectNmChk(String objNm) throws Exception {
		return objectInfoMapper.getObjectNmChk(objNm);
	}
}
