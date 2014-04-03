package kr.mp.dwg.mapperMgt.service.impl;

import java.sql.SQLException;


import java.util.ArrayList;
import java.util.HashMap;
import javax.annotation.Resource;
import javax.management.ReflectionException;

import kr.mp.dwg.cmmn.util.InitDwgSys;
import kr.mp.dwg.cmmn.util.MapperUtils;
import kr.mp.dwg.domain.mapper.Response;
import kr.mp.dwg.mapperMgt.service.MapperMgtMapper;
import kr.mp.dwg.mapperMgt.service.MapperMgtService;

import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import egovframework.rte.fdl.cmmn.AbstractServiceImpl;
import egovframework.rte.psl.dataaccess.util.EgovMap;

/**
 * 
 * @className MapperServiceImpl 
 * @author 김영훈
 * @since 2012. 8. 23.
 * @version 1.0
 * @comment 
 *   MapperServiceImpl 정보 관리를 위한 implements Class  
 * @Modification Information  
 * 
 *       수정일        수정자                    수정내용
 *     ----------   ---------   -------------------------------
 *  
 * 
 * 
 *  Copyright (C) by ESE All right reserved.
 */

@Service("mapperMgtService")
public class MapperMgtServiceImpl  extends AbstractServiceImpl implements
	MapperMgtService {
	
	/** mapperMgtMapper */
    @Resource(name="mapperMgtMapper")
    private MapperMgtMapper mapperMgtMapper;
    
	/**
	 * 
	 * @methodName : getObjectIntgDrwngList
	 * @author 김영훈
	 * @since 2012. 8. 23.
	 * @comment 
	 *   오브젝트 및 정보 조회
	 * @param HashMap 목록 조회를 위한 조건
	 * @return Response
	 * @throws ReflectionException 
	 * @throws SQLException 
	 *
	 */
	public Response getObjectIntgDrwngList(HashMap<String, Object> params) throws ReflectionException, DataAccessException, NullPointerException{
		
		int objCnt = 0;
		ArrayList<EgovMap> objList = null;
		ArrayList<EgovMap> dwgList = null;
		
		//오브젝트 카운트를 조회함
		objCnt = mapperMgtMapper.getObjectIdCnt(params);
		
		Object[] pager = new Object[3];
		pager = MapperUtils.getInstance().getPagingStat(params.get("objRow").toString(), params.get("objPage").toString(), objCnt, params);
		params.put("startNum", pager[0]);
		params.put("endNum", pager[1]);
		
		//오브젝트 목록을 조회한다.
		objList = mapperMgtMapper.getObjectId(params);
		if(objList.size() > 0) {
			params.put("objList", objList);
			//gis_dwg_mapper와 gis_map_mapper를 연계해서 매핑된 도면 목록을 가져온다.
			dwgList = mapperMgtMapper.getDwgInfoByObject(params);
		}
		
		return getResponseObj(params, objCnt, objList, dwgList);
	}
	
	/**
	 * 
	 * @methodName : getDwgInfoByPoint
	 * @author 김영훈
	 * @since 2012. 8. 23.
	 * @comment 
	 *   좌표 정보로 조회
	 * @param HashMap 목록 조회를 위한 조건
	 * @return Response
	 * @throws ReflectionException 
	 *
	 */
	public Response getResponseObj(HashMap<String, Object> params, int objCnt, ArrayList<EgovMap> objList, ArrayList<EgovMap> dwgList) throws ReflectionException {
		
		Response map = new Response();
		Response.ObjectInfo objectList = null;
		Response.ObjectListInfo objectInfo = new  Response.ObjectListInfo();
		
		if(objList.size() > 0) {
			
			objectInfo.setPage(Integer.parseInt(params.get("objPage").toString()));
			objectInfo.setRecords(Integer.parseInt(params.get("objRow").toString()));
			objectInfo.setTotal(objCnt);
							
			for(EgovMap obj : objList) {
				objectList = new Response.ObjectInfo();
				objectList.setObjectID(obj.get("objId").toString());
				objectList.setObjectType(obj.get("objTyp").toString());
				objectList.setCoordX(obj.get("objX").toString());
				objectList.setCoordY(obj.get("objY").toString());
				objectList.setObjectNm(obj.get("objNm").toString());
				
				if(params.get("dwgFlag").toString().equals("Y"))
					objectList = getObjectInfo(obj.get("objId").toString(), params, dwgList, objectList);

				map.setObjectListInfo(objectInfo);
				map.getObjectInfo().add(objectList);
				map.setCode("2000");
			}
		} else {
			map.setCode("2000");
		}
		return map;
	}
	
	/**
	 * 서브 DWG 목록 셋팅
	 * @category METHOD
	 * @author ESE-MILLER
	 * @param objId
	 * @param params
	 * @param dwgList
	 * @param objectList
	 * @return
	 * @throws ReflectionException 
	 */
	@SuppressWarnings("unchecked")
	public Response.ObjectInfo getObjectInfo(String objId, HashMap<String, Object> params, ArrayList<EgovMap> dwgList, Response.ObjectInfo objectList) throws ReflectionException {
		
		Response.ObjectInfo.DwgList drwngList = null;
		Response.ObjectInfo.DwgList.Dwg drwng = null;
		Response.ObjectInfo.DwgList.DwgListInfo dwgInfo = null;
		
		Object[] dwgObj = new Object[2];
		Object[] pager = new Object[3];
		
		
		drwngList = new Response.ObjectInfo.DwgList();
		dwgInfo = new Response.ObjectInfo.DwgList.DwgListInfo();
		
		dwgObj = MapperUtils.getInstance().drwngResultSize(objId, dwgList);
		
		pager = MapperUtils.getInstance().getPagingStat(params.get("dwgRow").toString(), params.get("dwgPage").toString(), Integer.parseInt(dwgObj[1].toString()), params);
		
		dwgList = MapperUtils.getInstance().drwngResult((ArrayList<EgovMap>)dwgObj[0], pager[0], pager[1]);
		
		if(dwgList.size() > 0) {
			dwgInfo.setPage(Integer.parseInt(params.get("dwgPage").toString()));
			dwgInfo.setRecords(Integer.parseInt(params.get("dwgRow").toString()));
			dwgInfo.setTotal(Integer.parseInt(dwgObj[1].toString()));
			drwngList.setDwgListInfo(dwgInfo);
			for(EgovMap dwg : dwgList){
				drwng = new Response.ObjectInfo.DwgList.Dwg();
				drwng.setDwgID(dwg.get("mpDwgSerno").toString());
				drwng.setDwgName(dwg.get("mpDwgNm").toString());
				drwng.setDwgViewURL(InitDwgSys.viewUrl+MapperUtils.getInstance().getParameterUrl(MapperUtils.getInstance().getCustumParams(dwg), dwg));
				drwngList.getDwg().add(drwng);
			}
			objectList.setDwgList(drwngList);
		}
		return objectList;
	}
	
	/**
	 * 검색에서 dwrngserno로 도면 검색 갯수
	 * @category METHOD
	 * @author ESE-MILLER
	 * @param HashMap<String, Object> params
	 * @return int
	 */
	public int getSearchDwgCnt(HashMap<String, Object> params) {
		return  getSearchDwgCnt(params);
	}
	
	/**
	 * 검색에서 dwrngserno로 도면 검색
	 * @category METHOD
	 * @author ESE-MILLER
	 * @param HashMap<String, Object> params
	 * @return ArrayList<EgovMap>
	 */
	public ArrayList<EgovMap> getSearchDwg(HashMap<String, Object> params) {
		return  getSearchDwg(params);
	}
}