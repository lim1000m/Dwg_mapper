package kr.mp.dwg.mapperMgt.web;


import java.util.HashMap;



import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import kr.mp.dwg.cmmn.util.ColumnDataSet;
import kr.mp.dwg.cmmn.util.MapperUtils;
import kr.mp.dwg.domain.mapper.Response;
import kr.mp.dwg.mapperMgt.service.MapperMgtService;
import org.apache.ibatis.reflection.ReflectionException;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

/**
 * 
 * @className MapperMgtController
 * @author 김영훈
 * @since 2012. 8. 23.
 * @version 1.0
 * @comment 
 *    MapperMgtController
 * @Modification Information  
 * 
 *       수정일        수정자                    수정내용
 *     ----------   ---------   -------------------------------
 *  
 * 
 * 
 *  Copyright (C) by ESE All right reserved.
 */

@Controller
@SessionAttributes({"editVO", "serNo"})
public class MapperMgtController {
	
	/** mapperMgtService */
    @Resource(name  = "mapperMgtService")
    private MapperMgtService mapperMgtService;
    
    /**
     * 
     * @methodName : getDwgInfoByObject
     * @author 김영훈
     * @since 2012. 8. 23.
     * @comment 
     *   객체 오브젝트 조회
     * @param  ObjectID 오브젝트 ID
     * @param  dwgPage 도면 현재 페이지
     * @param  dwgRow 도면 페이지당 표시 개수
     * @param  dwgOrd 도면 정렬 컬럼명
     * @return String view url
     * @throws Exception 
     *
     */
    @RequestMapping(value="/dwg/getDwgInfoByObject.do")
    public String getDwgInfoByObject(
    		@RequestParam(value="ObjectID") String objectId,
    		@RequestParam(value="objPage", required=false) String objPage,
    		@RequestParam(value="objRow", required=false) String objRow,
    		@RequestParam(value="objOrd", required=false) String objOrd,
    		@RequestParam(value="dwgPage", required=false) String dwgPage,
    		@RequestParam(value="dwgRow", required=false) String dwgRow,
    		@RequestParam(value="dwgOrd", required=false) String dwgOrd,
    		HttpServletRequest request,
    		ModelMap model) throws DataAccessException, ReflectionException {
    	
    	HashMap<String, Object> params;
    	
		String xmlOutput = null;
		Response response = new Response();
    	try {
    		params = ColumnDataSet.getInstance().getSearchList(request, "Y");
			response = mapperMgtService.getObjectIntgDrwngList(params);
			xmlOutput = MapperUtils.getInstance().createJaxbReresult((Object)response, "kr.mp.dwg.domain.mapper.Response");
    	} catch(Exception e) {
    		System.out.println(e.getMessage());
    		xmlOutput = "<Response Code='2003'>";
    	} 
    	model.addAttribute("result",xmlOutput);
		return "cmmn/result";
    }
    
    /**
     * 
     * @methodName : getDwgInfoByPoint
     * @author 김영훈
     * @since 2012. 8. 23.
     * @comment 
     *   좌표 기반 도면조회
     * @param xCoord x 좌표 
     * @param yCoord y 좌표
     * @param objTyp 오브젝트 타입
     * @param dwgFlag 도면 정보를 포함할지 여부
     * @param objPage 오브젝트 현재 페이지
     * @param objRow 오브젝트 페이지당 표시 갯수
     * @param objOrd 오브젝트 정렬 컬럼명
     * @return String view url
     *
     */
    @RequestMapping(value="dwg/getDwgInfoByPoint.do")
    public String getDwgInfoByPoint(
    		@RequestParam(value="xCoord") String xCoord,
    		@RequestParam(value="yCoord") String yCoord,
    		@RequestParam(value="objTyp", required=false) String objTyp,
    		@RequestParam(value="dwgFlag", required=false) String dwgFlag, 
    		@RequestParam(value="objPage", required=false) String objPage,
    		@RequestParam(value="objRow", required=false) String objRow,
    		@RequestParam(value="objOrd", required=false) String objOrd,
    		@RequestParam(value="dwgPage", required=false) String dwgPage,
    		@RequestParam(value="dwgRow", required=false) String dwgRow,
    		@RequestParam(value="dwgOrd", required=false) String dwgOrd,
    		HttpServletRequest request,
    		ModelMap model) throws Exception {
		
    	HashMap<String, Object> params = ColumnDataSet.getInstance().getSearchList(request, "Y");

    	String xmlOutput = null;
    	
    	try {
    		Response response = mapperMgtService.getObjectIntgDrwngList(params);	
    		xmlOutput = MapperUtils.getInstance().createJaxbReresult((Object)response, "kr.mp.dwg.domain.mapper.Response");
    	} catch(Exception e) {
    		e.getMessage();
    		xmlOutput = "<Response Code='2003'>";
    	}
    	
    	model.addAttribute("result",xmlOutput);
		return "cmmn/result";
    }
    
    /**
     * 
     * @methodName : getDwgInfoByArea
     * @author 김영훈
     * @since 2012. 8. 23.
     * @comment 
     *   영역 GIS 좌표 기반 도면 정보 제공
     * @param xMinCoord X 영역 최소 좌표
     * @param yMinCoord Y 영역 최소 좌표
     * @param xMaxCoord X 영역 최대 좌표
     * @param yMaxCoord Y 영역 최대 좌표
     * @param objTyp 오브젝트 타입
     * @param dwgFlag 도면 정보를 포함할지 여부
     * @param objRow 오브젝트 페이지당 표시 ROW 개수
     * @param objPage 오브젝트 현재 페이지
     * @param objOrd 오브젝트 정렬 컬럼명
     * @param dwgPage 도면 현재 페이지
     * @param dwgRow 도면 페이지당 표시 ROW 개수
     * @param dwgOrd 도면 정렬 컬럼명
     * @return String view url
     *
     */
    @RequestMapping(value="/dwg/getDwgInfoByArea.do")
    public String getDwgInfoByArea(
    		@RequestParam(value="xMinCoord") String xMinCoord,
    		@RequestParam(value="yMinCoord") String yMinCoord,
    		@RequestParam(value="xMaxCoord") String xMaxCoord,
    		@RequestParam(value="yMaxCoord") String yMaxCoord,
    		@RequestParam(value="objTyp", required=false) String objTyp,
    		@RequestParam(value="dwgFlag", required=false) String dwgFlag, 
    		@RequestParam(value="objPage", required=false) String objPage,
    		@RequestParam(value="objRow", required=false) String objRow,
    		@RequestParam(value="objOrd", required=false) String objOrd,
    		@RequestParam(value="dwgPage", required=false) String dwgPage,
    		@RequestParam(value="dwgRow", required=false) String dwgRow,
    		@RequestParam(value="dwgOrd", required=false) String dwgOrd,
    		HttpServletRequest request,
    		ModelMap model) throws Exception {
		
    		HashMap<String, Object> params = ColumnDataSet.getInstance().getSearchList(request, "Y");
        	
    		String xmlOutput = "";
    		
    	try {
    		Response response = mapperMgtService.getObjectIntgDrwngList(params);
    		xmlOutput = MapperUtils.getInstance().createJaxbReresult((Object)response, "kr.mp.dwg.domain.mapper.Response");
    	} catch(Exception e) {
    		System.out.println(e.getMessage());
    		xmlOutput = "<Response Code='2003'>";
    	}
    	model.addAttribute("result",xmlOutput);
		return "cmmn/result";
    }
}

