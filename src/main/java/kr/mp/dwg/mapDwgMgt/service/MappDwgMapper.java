package kr.mp.dwg.mapDwgMgt.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import kr.mp.dwg.domain.ObjectInfoVO;
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
 * @ 2013. 12. 23.    박용택       최초생성
 * 
 * @author 이에스이 박용택
 * @since 2013. 12. 23.
 * @version 1.0
 * @see
 * 
 *  Copyright (C) by ESE All right reserved.
 */
@Mapper("mappDwgMapper")
public interface MappDwgMapper {
	
	/**
	 * 오브젝트 정보 조회
	 * @version 1.0
	 * @since 2013. 12. 23.
	 * @param HashMap<String, Object> map	검색 조건
	 * @return ObjectInfoVO
	 */
	public ObjectInfoVO getObjectInfoKey(Map<String, String> paramMap);
	/**
	 * 도면 리스트 조회
	 * @version 1.0
	 * @since 2013. 12. 23.
	 * @param HashMap<String, Object> map	검색 조건
	 * @return ArrayList<EgovMap>
	 */
	public List<EgovMap> selectMappDwgGridByMap(HashMap<String, Object> searchData);
	
	/**
	 * 도면 카운트 조회
	 * @version 1.0
	 * @since 2013. 12. 23.
	 * @param HashMap<String, Object> map	검색 조건
	 * @return ArrayList<EgovMap>
	 */
	public int selectMappDwgGridByMapCnt(HashMap<String, Object> searchData);
	
	
}
