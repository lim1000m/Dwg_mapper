package kr.mp.dwg.searchMgt.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import kr.mp.dwg.cmmn.util.ColumnDataSet;
import kr.mp.dwg.cmmn.util.MapperUtils;
import kr.mp.dwg.cmmn.util.ProcResultMsg;
import kr.mp.dwg.cmmn.util.StringUtil;
import kr.mp.dwg.domain.DwgKndVO;
import kr.mp.dwg.domain.DwgMappVO;
import kr.mp.dwg.domain.JqGridVO;
import kr.mp.dwg.domain.search.Response;
import kr.mp.dwg.searchMgt.service.DwgService;

import org.jdom.output.Format;
import org.jdom.output.XMLOutputter;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import egovframework.rte.psl.dataaccess.util.EgovMap;

/**
 * 
 * @className DwgController
 * @author 김영훈
 * @since 2012. 8. 23.
 * @version 1.0
 * @comment 
 *    도면 객체 검색
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
public class DwgController {
	
	/** DwgService */
    @Resource(name  = "dwgService")
    private DwgService dwgService;
    
    /** MessageResource */
    @Resource(name = "messageSource")
    private MessageSource messageSource;
    /**
     * 
     * @methodName : getSearchDwg
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
    @RequestMapping(value="/dwg/getSearchDwg.do")
    public String getSearchDwg(
    		@RequestParam(value="searchType") String searchType,
    		@RequestParam(value="keyWord") String keyWord,
    		@RequestParam(value="dwgPage", required=false) String dwgPage,
    		@RequestParam(value="dwgRow", required=false) String dwgRow,
    		@RequestParam(value="dwgOrd", required=false) String dwgOrd,
    		HttpServletRequest request,
    		ModelMap model) throws Exception {
    	
    	HashMap<String, Object> params = ColumnDataSet.getInstance().getSearchList(request, "N");
    	
		String xmlOutput = null;
		Response response = new Response();
    	try {
		response = dwgService.getSearchDwg(params);
		xmlOutput = MapperUtils.getInstance().createJaxbReresult((Object)response, "kr.mp.dwg.domain.search.Response");
    	} catch(Exception e) {
    		e.getCause();
    		e.getMessage();
    		xmlOutput = "<Response Code='2003'>";	
    	}
    	model.addAttribute("result",xmlOutput);
		return "cmmn/result";
    }
    /**
     * @methodName : mainView
     * @author 박용택
     * @since 2013. 12. 23.
     * @comment 
     *   도면 등록 메인 form
     * @param objId
     * @param request
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping(value="/dwg/gwdRegister/main.do")
    public String mainView(
    		@RequestParam("objId") String objId,
    		HttpServletRequest request,
    		ModelMap model) throws Exception {
    	
    	List<DwgKndVO> dwgKndList = dwgService.getDwgKndList();
    	String dwgCrgLst   = StringUtil.nullChk(dwgService.createScript());
    	model.addAttribute("dwgCrgLst",dwgCrgLst);
    	model.addAttribute("objId",objId);
    	model.addAttribute("dwgKndList",dwgKndList);
		return "searchDwg/dwgRegister";
    }
    /**
     * @methodName : dwgDelete
     * @author 박용택
     * @since 2013. 12. 23.
     * @comment 
     *   도면 삭제
     * @param objId
     * @param request
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping(value="/dwg/dwgDelete.do", method=RequestMethod.POST)
    public String dwgDelete(
    		@RequestParam("mpDwgSerno") int mpDwgSerno,
    		@RequestParam("objIdNum") String objId,
    		HttpServletResponse response,
    		ModelMap model) throws Exception{
    	
    	int result = dwgService.dwgDelete(mpDwgSerno);	// 수정인 경우 정보 조회
    	String redirectURL = "/DWGMP/dwg/mappDwg/main.do?objId="+objId+"&result="+result;
    	ProcResultMsg procResultMsg = new ProcResultMsg(response, redirectURL,"replace");
    	procResultMsg.reload();
    	return null;
    }
    
    /**
     * @methodName : makeGridVoList
     * @author 박용택
     * @since 2013. 12. 23.
     * @comment 
     *   도면 다중 등록을 위한 로직 
	 * @param request
	 * @return
	 */
	private List<DwgMappVO> makeGridVoList(String[] objId,String[] mpDwgSerno) {
		List<DwgMappVO> res = new ArrayList<DwgMappVO>();

		DwgMappVO buffer 		= null;
		
		
		int gridListCount = objId.length;
		
		for (int inx = 0; inx < gridListCount ; inx ++) {
			buffer = new DwgMappVO();
			buffer=dwgService.getDwgKeyInfo(mpDwgSerno[inx]);
			buffer.setObjId(Integer.parseInt(objId[inx]));
			res.add(buffer);
		}

		return res;
	}
	
	/**
     * @methodName : dwgAdd
     * @author 박용택
     * @since 2013. 12. 23.
     * @comment 
     *   도면 등록 메소드
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/dwg/gwdRegister/dwgAdd.do", method=RequestMethod.POST)
	public String dwgAdd(
	    		@RequestParam("objId") String[] objId,
	    		@RequestParam("objIdOne") String objIdOne,
	    		@RequestParam("drwngSerno") String[] mpDwgSerno,
	    		HttpServletResponse response,
	    		ModelMap model) throws Exception{
	    	
	    	List<DwgMappVO> dataList = makeGridVoList(objId,mpDwgSerno);
	    	int result = dwgService.dwgAdd(dataList);	
	    	String redirectURL = "/DWGMP/dwg/mappDwg/main.do?objId="+objIdOne+"&result="+result;
	    	ProcResultMsg procResultMsg = new ProcResultMsg(response, redirectURL,"replace");
	    	procResultMsg.popupReload();
	    	return null;
	    }
	
	    @RequestMapping(value="/dwg/gwdRegister/mappDwgGridFrom.do")
		public String mainView(HttpServletRequest request, 
	    		ModelMap modelMap,
	    		HttpSession session,
	    		@RequestParam(value="objId") String objId){			
	    	
    	String lang = (String)session.getAttribute("lang");
    	String girdName = "dwgRegister";
    	String gridHeader = ColumnDataSet.getInstance().getJqGridHeader(girdName);
    	String gridHeaderName = ColumnDataSet.getInstance().getJqGridHeaderName(girdName,messageSource, lang);
    	
    	modelMap.addAttribute("gridHeader", gridHeader);						// header 속성 데이터
    	modelMap.addAttribute("gridHeaderName", gridHeaderName);		// 그리드 컬럼 타이틀

    	modelMap.addAttribute("dataName", girdName);							// dataSet Name
    	modelMap.addAttribute("dataKind", "Grid");									// dataSet Kind
    	modelMap.addAttribute("objId", objId);									// dataSet Kind
    	modelMap.addAttribute("lang", lang);
    	return "searchDwg/dwgRegister_G";
	    }
	    
	    @SuppressWarnings("unchecked")
		@RequestMapping(value="/dwg/gwdRegister/mappDwgGridList.do")
	    public String mappDwgGridList(
	    		@RequestParam("page") int page,
	    		@RequestParam("rows") int rows,
	    		@RequestParam("dataName") String dataName,
	    		@RequestParam("mpDwgSerno") String mpDwgSerno,
	    		@RequestParam("dataKind") String dataKind,
	    		@RequestParam(value="sidx", required=false) String sidx,
	    		@RequestParam(value="sord", required=false) String sord,
	    		HttpServletRequest request,
	    		ModelMap model) {
	    	
	    	// requestParam 데이터를 Map 형태로 변환
	    	HashMap<String, Object> searchList = ColumnDataSet.getInstance().getSearchListEscape(request);
	    	
	    	int startNum = (page-1) * rows + 1;		// 데이터 조회 시작 rownum
	    	int endNum = page * rows;						// 데이터 조회 종료 rownum
	    	JqGridVO jqGridVO = new JqGridVO();		// Grid 데이터를 위한 VO 객체
	    	
	    	// 조회 조건 범위 지정
	    	searchList.put("startNum", startNum);
	    	searchList.put("endNum", endNum);
	    	searchList.put("sidx", ColumnDataSet.getInstance().getDbColumn(sidx));	// Sort 컬럼 지정
	    	searchList.put("sord", sord);	
	    	searchList.put("groupSerno", StringUtil.nullChk(request.getParameter("groupSerno")));
	    	searchList.put("groupLvl", StringUtil.nullChk(request.getParameter("groupLvl")));	
	    	searchList.put("dwgKnd", StringUtil.nullChk(request.getParameter("dwgKnd")));
	    	searchList.put("dwgNm", StringUtil.nullChk(request.getParameter("dwgNm")));	
	    	searchList.put("mpDwgSerno", StringUtil.nullChk(request.getParameter("mpDwgSerno")));	
	    	
	    	Object[] result = dwgService.selectMappDwgList(searchList);
	    	
	        jqGridVO.setPage(page);							// 현재 페이지 정보 셋팅
	        jqGridVO.setRecords((Integer)result[1]);		// 전체 Grid row 개수
	        jqGridVO.setRows((List<EgovMap>)result[0]);		// 조회 결과
	        if(((Integer)result[1] % rows) > 0 ) {
	        	jqGridVO.setTotal((Integer)result[1] / rows + 1);	// 전체 페이지 개수 (total row / rows)
	        }else{
	        	jqGridVO.setTotal((Integer)result[1] / rows);	// 전체 페이지 개수 (total row / rows)
	        }
	        
	        XMLOutputter outputter = new XMLOutputter();

	    	Format format = outputter.getFormat(); 
	    	format = Format.getPrettyFormat();		// Grid 줄바꿈 설정
	    	format = format.setEncoding("utf-8");	// 캐릭터셋 설정 
	    	outputter.setFormat(format);
	    	
	    	// 그리드 xml 결과 전달
	        model.addAttribute("gridList", outputter.outputString(ColumnDataSet.getInstance().getGridXmlData(jqGridVO, dataName, dataKind)));    	
	    	return "cmmn/grid";
	    }
}