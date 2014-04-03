package kr.mp.dwg.mapDwgMgt.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import kr.mp.dwg.cmmn.util.ColumnDataSet;
import kr.mp.dwg.cmmn.util.StringUtil;
import kr.mp.dwg.domain.DwgKndVO;
import kr.mp.dwg.domain.JqGridVO;
import kr.mp.dwg.domain.ObjectInfoVO;
import kr.mp.dwg.mapDwgMgt.service.MappDwgService;
import kr.mp.dwg.searchMgt.service.DwgService;
import org.jdom.output.Format;
import org.jdom.output.XMLOutputter;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

import egovframework.rte.psl.dataaccess.util.EgovMap;
/**
 * 
 * @className MappDwgController
 * @author 박용택
 * @since 2013. 12. 23.
 * @version 1.0
 * @comment 
 *    MappDwgController
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
public class MappDwgController extends MultiActionController {
	/** MappDwgService */
    @Resource(name  = "mappDwgService")
    private MappDwgService mappDwgService;   
    
    /** DwgService */
    @Resource(name  = "dwgService")
    private DwgService dwgService;
    
    /** MessageResource */
    @Resource(name = "messageSource")
    private MessageSource messageSource;
    
    /**
     * @methodName : mappDwgMain
     * @author 박용택
     * @since 2013. 12. 23.
     * @comment 
     *   매핑 도면 관리 메인 
     * @param objId
     * @param request
     * @param model
     * @return
     * @throws Exception
     */
    @RequestMapping(value="/dwg/mappDwg/main.do")
    public String mappDwgMain(
    		@RequestParam(value="objId") String objId,
    		@RequestParam(value="result", required=false) String result,
    		HttpServletRequest request,
    		ModelMap model) throws Exception {
    	
    	List<DwgKndVO> dwgKndList = dwgService.getDwgKndList();
    	Map<String, String> paramMap = new HashMap<String, String>();
    	paramMap.put("objId", objId);        
    	ObjectInfoVO objVo = mappDwgService.getObjectInfoList(paramMap);
    	model.addAttribute("result", result);
    	model.addAttribute("objVo", objVo);		
    	model.addAttribute("dwgKndList",dwgKndList);
		return "mappMgt/mappDwgMgt";
    }
    /**
     * @methodName : mappDwgGridForm
     * @author 박용택
     * @since 2012. 12. 23.
     * @comment
     * 도면 맵핑 관리 그리드 Form
     * @param request
     * @param modelMap
     * @param session
     * @param objId
     * @return
     */
    @RequestMapping(value="/dwg/mappDwgMgt/mappDwgGridForm.do")
    public String mappDwgGridForm(HttpServletRequest request, 
    		ModelMap modelMap,
    		HttpSession session,
    		@RequestParam(value="objId") String objId
    		) {
    	
    	
    	String lang = (String)session.getAttribute("lang");
    	String girdName = "mappDwgMgt";
    	
    	String gridHeader = ColumnDataSet.getInstance().getJqGridHeader(girdName);
    	String gridHeaderName = ColumnDataSet.getInstance().getJqGridHeaderName(girdName,messageSource, lang);
    	
    	modelMap.addAttribute("gridHeader", gridHeader);		
    	modelMap.addAttribute("gridHeaderName", gridHeaderName);

    	modelMap.addAttribute("dataName", girdName);			
    	modelMap.addAttribute("dataKind", "Grid");				
    	modelMap.addAttribute("objId", objId);	
    	modelMap.addAttribute("lang", lang);
    	return "mappMgt/mappDwgMgt_G";
    }
    /**
     * @methodName : mappDwgGridList
     * @author 박용택
     * @since 2012. 12. 23.
     * @comment 
     *   도면 맵핑 리스트 조회
     * @param page
     * @param rows
     * @param dataName
     * @param dataKind
     * @param objId
     * @param sidx
     * @param sord
     * @param request
     * @param model
     * @return
     */
    @SuppressWarnings("unchecked")
	@RequestMapping(value="/dwg/mappDwgMgt/mappDwgGridList.do")
    public String mappDwgGridList(
    		@RequestParam("page") int page,
    		@RequestParam("rows") int rows,
    		@RequestParam("dataName") String dataName,
    		@RequestParam("dataKind") String dataKind,
    		@RequestParam(value="objId") String objId,
    		@RequestParam(value="sidx", required=false) String sidx,
    		@RequestParam(value="sord", required=false) String sord,
    		HttpServletRequest request,
    		ModelMap model) {
    	
    	
    	HashMap<String, Object> searchList = ColumnDataSet.getInstance().getSearchListEscape(request);
    	Map<String, String> paramMap = new HashMap<String, String>();
    	paramMap.put("objId", objId);        
    	ObjectInfoVO objVo = mappDwgService.getObjectInfoList(paramMap);
    	
    	int startNum = (page-1) * rows + 1;		
    	int endNum = page * rows;				
    	JqGridVO jqGridVO = new JqGridVO();		
    	
    	searchList.put("startNum", startNum);
    	searchList.put("endNum", endNum);
    	searchList.put("sidx", ColumnDataSet.getInstance().getDbColumn(sidx));	
    	searchList.put("sord", sord);											
    	searchList.put("objId", objVo.getObjId());		
    	searchList.put("dwgKnd", StringUtil.nullChk(request.getParameter("dwgKnd")));
    	searchList.put("dwgNm", StringUtil.nullChk(request.getParameter("dwgNm")));	
    	
    	Object[] result = mappDwgService.selectMappDwgList(searchList);
    	
        jqGridVO.setPage(page);							
        jqGridVO.setRecords((Integer)result[1]);		
        jqGridVO.setRows((List<EgovMap>)result[0]);		
        if(((Integer)result[1] % rows) > 0 ) {
        	jqGridVO.setTotal((Integer)result[1] / rows + 1);
        }else{
        	jqGridVO.setTotal((Integer)result[1] / rows);	
        }
        XMLOutputter outputter = new XMLOutputter();

    	Format format = outputter.getFormat(); 
    	format = Format.getPrettyFormat();		
    	format = format.setEncoding("utf-8");	 
    	outputter.setFormat(format);
        model.addAttribute("gridList", outputter.outputString(ColumnDataSet.getInstance().getGridXmlData(jqGridVO, dataName, dataKind)));    	
    	return "cmmn/grid";
    }
    
}
