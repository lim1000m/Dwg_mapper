package kr.mp.dwg.mapDwgMgt.service.impl;

import java.util.HashMap;
import java.util.Map;
import javax.annotation.Resource;
import kr.mp.dwg.domain.ObjectInfoVO;
import kr.mp.dwg.mapDwgMgt.service.MappDwgMapper;
import kr.mp.dwg.mapDwgMgt.service.MappDwgService;

import org.springframework.stereotype.Service;

/**
 * 
 * @className MapperServiceImpl 
 * @author 박용택          
 * 
 * 
 * 
 * @since 2013. 12. 23.
 * @version 1.0
 * @comment 
 *   MappDwgServiceImpl 정보 관리를 위한 implements Class  
 * @Modification Information  
 * 
 *       수정일        수정자                    수정내용
 *     ----------   ---------   -------------------------------
 *  
 * 
 * 
 *  Copyright (C) by ESE All right reserved.
 */
@Service("mappDwgService")
public class MappDwgServiceImpl implements MappDwgService  {
	
	/** MappDwgDAO */
    @Resource(name="mappDwgMapper")
    private MappDwgMapper mappDwgMapper;
    
    /**
	 * 
	 * @methodName : getObjectInfoList
	 * @author 박용택
	 * @since 2013. 12. 23.
	 * @comment 
	 *   객체 정보 조회
	 * @param HashMap 목록 조회를 위한 조건
	 * @return ObjectInfoVO
	 *
	 */
	public ObjectInfoVO getObjectInfoList(Map<String, String> paramMap){
		ObjectInfoVO vo = mappDwgMapper.getObjectInfoKey(paramMap);
		return  vo;
	}
	
	/**
	 * 
	 * @methodName : selectMappDwgList
	 * @author 박용택
	 * @since 2013. 12. 23.
	 * @comment 
	 *   도면  정보   조회
	 * @param HashMap 목록 조회를 위한 조건
	 * @return Object[]
	 *
	 */
    @Override
	public Object[] selectMappDwgList(HashMap<String, Object> searchData) {
		Object[] result = new Object[2];

		result[0] = mappDwgMapper.selectMappDwgGridByMap(searchData);		
		result[1] = mappDwgMapper.selectMappDwgGridByMapCnt(searchData);	
		
		return result;
	}
}
