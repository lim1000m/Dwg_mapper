package kr.mp.dwg.mapDwgMgt.service;

import java.util.HashMap;
import java.util.Map;
import kr.mp.dwg.domain.ObjectInfoVO;

/**
 * 
 * @className MapperService
 * @author 박용택
 * @since 2013. 12. 23.
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
public interface MappDwgService {
	/**
	 * 
	 * @methodName : getObjectInfoList
	 * @author 박용택
	 * @since 2013. 12. 23.
	 * @comment 
	 *   오브젝트 정보 조회
	 * @param HashMap 목록 조회를 위한 조건
	 * @return ObjectInfoVO
	 *
	 */
	public ObjectInfoVO getObjectInfoList(Map<String, String> paramMap);
	
	/**
	 * 
	 * @methodName : selectMappDwgList
	 * @author 박용택
	 * @since 2013. 12. 23.
	 * @comment 
	 *   도면 검색에서 사용하는 도면 리스트, 카운트 조회
	 * @param HashMap<String, Object> params
	 * @return Object[]
	 *
	 */
	public Object[] selectMappDwgList(HashMap<String, Object> searchList);
}
