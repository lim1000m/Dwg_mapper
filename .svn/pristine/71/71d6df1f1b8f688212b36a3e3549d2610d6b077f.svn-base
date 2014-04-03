package kr.mp.dwg.searchMgt.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import javax.management.ReflectionException;
import kr.mp.dwg.cmmn.util.InitDwgSys;
import kr.mp.dwg.cmmn.util.MapperUtils;
import kr.mp.dwg.domain.DwgKndVO;
import kr.mp.dwg.domain.DwgMappVO;
import kr.mp.dwg.domain.DwgVO;
import kr.mp.dwg.domain.search.Response;
import kr.mp.dwg.extMapper.service.ExtMapper;
import kr.mp.dwg.searchMgt.service.DwgMapper;
import kr.mp.dwg.searchMgt.service.DwgService;

import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import egovframework.rte.fdl.cmmn.AbstractServiceImpl;
import egovframework.rte.psl.dataaccess.util.EgovMap;

/**
 * 
 * @className DwgServiceImpl 
 * @author 김영훈
 * @since 2012. 8. 23.
 * @version 1.0
 * @comment 
 *  DwgServiceImpl 정보 관리를 위한 implements Class  
 * @Modification Information  
 * 
 *       수정일        수정자                    수정내용
 *     ----------   ---------   -------------------------------
 *  
 * 
 * 
 *  Copyright (C) by ESE All right reserved.
 */

@Service("dwgService")
public class DwgServiceImpl  extends AbstractServiceImpl implements
	DwgService {
	
	/** DwgMapper */
    @Resource(name="dwgMapper")
    private DwgMapper dwgMapper;
    
    /** ExtMapper */
    @Resource(name="extMapper")
    private ExtMapper extMapper;
    
    
    // 스크립트
    private String completeScript ;
    /**
     * 
     * @methodName : getSearchDwg
     * @author 김영훈
     * @since 2012. 8. 23.
     * @comment 
     *   도면 객체 검색
     * @return Response
     */
    public Response getSearchDwg(HashMap<String, Object> params) throws DataAccessException ,ReflectionException {
    	
    	ArrayList<EgovMap> resultList = new ArrayList<EgovMap>();
    	
    	List<EgovMap> dwgSernoList = extMapper.getDrwngSerno(params);
    	List<EgovMap> searchList =  dwgMapper.searchDwg(params);
    	
    	ArrayList<EgovMap> gridList = new ArrayList<EgovMap>();
    	
    	for(EgovMap eMap : searchList) {
    		for(EgovMap dwgMap : dwgSernoList) {
    			if(eMap.get("mpDwgSerno").toString().equals(dwgMap.get("drwngSerno").toString())){
    				gridList.add(eMap);
    				continue;
    			}
    		}
    	}
    	
    	//여기서 가운트를 구하기 위해 조인하는 부분
    	Object[] paging = new Object[3];
    	paging = MapperUtils.getInstance().getPagingStat(params.get("dwgRow").toString(), params.get("dwgPage").toString(), gridList.size(), params);
    	params.put("startNum", paging[0]);
    	params.put("endNum", paging[1]);
    	params.put("total", gridList.size());

    	int resultCnt = 0;
    	for(EgovMap gMap : gridList) {
			if(resultCnt >= Integer.parseInt(params.get("startNum").toString())-1 && resultCnt <= Integer.parseInt(params.get("endNum").toString())-1)
				resultList.add(gMap);
			resultCnt++;
    	}
    	
		return getResponseSearch(resultList, params);
    }
    
    public Response getResponseSearch(ArrayList<EgovMap> searchList, HashMap<String, Object> params) throws ReflectionException {
    	
    	Response response = new Response();
    	Response.DwgList dwgList = new Response.DwgList();
    	Response.DwgList.DwgListInfo dwgListInfo = new Response.DwgList.DwgListInfo();
    	Response.DwgList.Dwg dwgInfo = null;
    	Response.DwgList.Dwg.ObjectInfo objectInfo = null;
    	
    	if(searchList.size() > 0) {
    	
    	dwgListInfo.setPage(Integer.parseInt(params.get("dwgPage").toString()));
    	dwgListInfo.setTotal(Integer.parseInt(params.get("total").toString()));
    	dwgListInfo.setRecords(Integer.parseInt(params.get("dwgRow").toString()));
    	
    	for(EgovMap eMap : searchList) {
    		dwgInfo = new Response.DwgList.Dwg();
        	objectInfo = new Response.DwgList.Dwg.ObjectInfo();
    		dwgInfo.setDwgID(eMap.get("mpDwgSerno").toString());
    		dwgInfo.setDwgName(eMap.get("mpDwgNm").toString());
    		dwgInfo.setDwgViewURL(InitDwgSys.viewUrl+MapperUtils.getInstance().getParameterUrl(MapperUtils.getInstance().getCustumParams(eMap), eMap));
    		objectInfo.setObjectID(eMap.get("objId").toString());
    		objectInfo.setObjectNm(eMap.get("objNm").toString());
    		objectInfo.setCoordX(eMap.get("objX").toString());
    		objectInfo.setCoordY(eMap.get("objY").toString());
    		objectInfo.setObjectType(eMap.get("objTyp").toString());
    		dwgInfo.setObjectInfo(objectInfo);
    		dwgList.getDwg().add(dwgInfo);
    	}
    	dwgList.setDwgListInfo(dwgListInfo);
    	response.setDwgList(dwgList);
    	response.setCode("2000");
    	} else {
        	response.setCode("2000");
    	}
    	return response;
    }
    
    /**
     * 스크립트 생성
     * @return
     */
    public String createScript(){
        completeScript = "<ul id='browser' class='filetree'>";
        completeScript += createScriptDwgLv1();
        
        return completeScript;
    }
    
    /**
     * 도면 스크립트 생성
     * @return
     */
    private String createScriptDwgLv1(){
    	String groupLvl="1";
    	String dvsnCd="CI";
    	String prntGroupSerno="0";
    	///=String groupOrd="2";
    	Map<String, String> paramMap = new HashMap<String, String>();
    	paramMap.put("groupLvl", groupLvl);   
    	paramMap.put("dvsnCd", dvsnCd);
    	paramMap.put("prntGroupSerno", prntGroupSerno);
        String script = "";
        List<DwgVO> dwgLst = extMapper.getDwgScript(paramMap);
        if(dwgLst.size() > 0) {
            script = open_UL();
            for(DwgVO vo : dwgLst) {
                if(createScriptDwgLv2(vo.getGroupSerno()).equals("")) {
                    script += open_LI() + open_SPAN("folder2",vo.getGroupLvl(),vo.getGroupSerno()) + vo.getGroupNm() + close_SPAN();
                    
                    script += createScriptDwgLv2(vo.getGroupSerno());
                } else {
                    script += open_LI() + open_SPAN("folder",vo.getGroupLvl(),vo.getGroupSerno()) + vo.getGroupNm() + close_SPAN();
                    script += createScriptDwgLv2(vo.getGroupSerno());
                }
                
                script += close_LI();
            }
            
            script += close_UL();
            return script;
        }
        return script; 
    }
    public String createScriptDwgLv2(String prntGroupSerno) {
    	String groupLvl="2";
    	String dvsnCd="CI";
    	Map<String, String> paramMap = new HashMap<String, String>();
    	paramMap.put("groupLvl", groupLvl);   
    	paramMap.put("dvsnCd", dvsnCd);
    	paramMap.put("prntGroupSerno", prntGroupSerno);
        String script = "";
        List<DwgVO> dwgLst = extMapper.getDwgScript(paramMap);
        if(dwgLst.size() > 0) {
            script = open_UL();
            script += "<span class='forder' id='"+groupLvl+"'>";
            for(DwgVO vo : dwgLst) {
                if(createScriptDwgLv3(vo.getGroupSerno()).equals("")) {
                    script += open_LI() + open_SPAN("folder2",vo.getGroupLvl(),vo.getGroupSerno()) + vo.getGroupNm() + close_SPAN();
                    script += createScriptDwgLv3(vo.getGroupSerno());
                } else {
                    script += open_LI() + open_SPAN("folder",vo.getGroupLvl(),vo.getGroupSerno()) + vo.getGroupNm() + close_SPAN();
                    script += createScriptDwgLv3(vo.getGroupSerno());
                }
                
                script += close_LI();
            }
            
            script += close_UL();
            return script;
        }
        
        return "";
    }
    public String createScriptDwgLv3(String prntGroupSerno) {
    	String groupLvl="3";
    	String dvsnCd="CI";
    	Map<String, String> paramMap = new HashMap<String, String>();
    	paramMap.put("groupLvl", groupLvl);   
    	paramMap.put("dvsnCd", dvsnCd);
    	paramMap.put("prntGroupSerno", prntGroupSerno);
        String script = "";
        List<DwgVO> dwgLst = extMapper.getDwgScript(paramMap);
        if(dwgLst.size() > 0) {
            script = open_UL();
            script += "<span class='forder' id='"+groupLvl+"'>";
            for(DwgVO vo : dwgLst) {
                if(createScriptDwgLv4(vo.getGroupSerno()).equals("")) {
                    script += open_LI() + open_SPAN("folder2",vo.getGroupLvl(),vo.getGroupSerno()) + vo.getGroupNm() + close_SPAN();
                    script += createScriptDwgLv4(vo.getGroupSerno());
                } else {
                    script += open_LI() + open_SPAN("folder",vo.getGroupLvl(),vo.getGroupSerno()) + vo.getGroupNm() + close_SPAN();
                    script += createScriptDwgLv4(vo.getGroupSerno());
                }
                
                script += close_LI();
            }
            
            script += close_UL();
            return script;
        }
        
        return "";
    }
    
    public String createScriptDwgLv4(String prntGroupSerno) {
    	String groupLvl="4";
    	String dvsnCd="CI";
    	Map<String, String> paramMap = new HashMap<String, String>();
    	paramMap.put("groupLvl", groupLvl);   
    	paramMap.put("dvsnCd", dvsnCd);
    	paramMap.put("prntGroupSerno", prntGroupSerno);
        String script = "";
        List<DwgVO> dwgLst = extMapper.getDwgScript(paramMap);
        if(dwgLst.size() > 0) {
            script = open_UL();
            
            for(DwgVO vo : dwgLst) {
            	script += open_LI() + open_SPAN("folder",vo.getGroupLvl(),vo.getGroupSerno()) + vo.getGroupNm() + close_SPAN();
            }
            
            script += close_UL();
            return script;
        }
        
        return "";
    }
    private String open_LI(){
        return "<li class='closed'>";
    }
    
    private String close_LI(){
        return "</li>";
    }
    
    private String open_UL(){
        return "<ul>";
    }
    
    private String close_UL(){
        return "</ul>";
    }
    
    private String open_SPAN(String flag, String lvl, String groupSerno){
        return "<span class='" + flag + "' id='"+lvl+"' name='"+groupSerno+"'>";
    }
    
    private String close_SPAN(){
        return "</span>";
    }
    
    public int dwgAdd(List<DwgMappVO> dwgMappList) throws Exception {
    	int res = 0;
		for (int inx = 0; inx < dwgMappList.size(); inx ++) {
			int insert = dwgMapper.dwgAdd(dwgMappList.get(inx));
			if(insert == 0) 
				res = 0;
		}
		return res;
    }
    public int dwgDelete(int mpDwgSerno) throws Exception{
    	return dwgMapper.dwgDelete(mpDwgSerno);
    }
    
	
    @Override
	public Object[] selectMappDwgList(HashMap<String, Object> searchData) {
		Object[] result = new Object[2];

		ArrayList<EgovMap> drwngSernoList = dwgMapper.getMappingDwgNo(searchData);
		
		if(drwngSernoList.size() > 0) {
			searchData.put("iterCheck", "Y");
			searchData.put("dwgNoList", drwngSernoList);
		}else {
			searchData.put("iterCheck", "N");
		}
		
		result[0] = extMapper.selectMappDwgGridByMap(searchData);		// Grid 목록 조회
		result[1] = extMapper.selectMappDwgGridByMapCnt(searchData);	// Grid 전체 행 개수
		
		return result;
	}
    public DwgMappVO getDwgKeyInfo(String dwgId){
    	return extMapper.getDwgKeyInfo(dwgId);
    }
    
    public List<DwgKndVO> getDwgKndList(){
		return extMapper.getDwgKndList();
    	
    }
}