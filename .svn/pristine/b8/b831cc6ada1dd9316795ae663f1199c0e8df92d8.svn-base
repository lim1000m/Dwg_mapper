package kr.mp.dwg.extMapper.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import kr.mp.dwg.domain.DwgKndVO;
import kr.mp.dwg.domain.DwgMappVO;
import kr.mp.dwg.domain.DwgVO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;
import egovframework.rte.psl.dataaccess.util.EgovMap;

/**
 * 
 * @Class Name : ExtMapper.java
 * @Description : ExtMapper Sql Mapper
 * @Modification Information  
 * @
 * @  외부 도면 연계를 위한 별도의 Mapper
 * @ ---------   ---------   -------------------------------
 * 
 * @author Miller
 * @since 2013. 4. 15.
 * @version 1.0S
 * @see
 * 
 *  Copyright (C) by ESE All right reserved.
 */
@Mapper("extMapper")
public interface ExtMapper {
	
	/**
	 * 도면 종류 조회
	 * @author ESE-MILLER
	 * @return
	 */
	public List<DwgKndVO> getDwgKndList();
	
	/**
	 * 분류체계 트리 조회
	 * @author ESE-MILLER
	 * @param paramMap
	 * @return
	 */
	public List<DwgVO> getDwgScript(Map<String, String> paramMap);
	
	/**
	 * 도면 Drwng_Serno 조회
	 * @author ESE-MILLER
	 * @param dwgId
	 * @return
	 */
	public DwgMappVO getDwgKeyInfo(String dwgId);
	
	/**
	 * 도면 목록 조회
	 * @author ESE-MILLER
	 * @param searchData
	 * @return
	 */
	public List<EgovMap> selectMappDwgGridByMap(HashMap<String, Object> searchData);
	
	/**
	 * 도면 목록 조회 CNT
	 * @author ESE-MILLER
	 * @param searchData
	 * @return
	 */
	public int selectMappDwgGridByMapCnt(HashMap<String, Object> searchData);
	
	/**
	 * 도면 DwrngSerno 목록 조회(검색)
	 * @author ESE-MILLER
	 * @param searchData
	 * @return
	 */
	public ArrayList<EgovMap> getDrwngSerno(HashMap<String, Object> searchData);
}

