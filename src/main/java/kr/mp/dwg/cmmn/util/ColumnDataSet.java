package kr.mp.dwg.cmmn.util;

import java.util.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.URLDecoder;
import javax.management.ReflectionException;
import javax.servlet.http.HttpServletRequest;
import kr.mp.dwg.domain.JqGridVO;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.MessageSource;
import org.jdom.input.SAXBuilder;
import org.jdom.CDATA;
import org.jdom.Document;
import org.jdom.Element;

import egovframework.rte.psl.dataaccess.util.EgovMap;

/**   
 * 
 * @Class Name : ColumnDataSet.java
 * @Description : 공통 데이터 처리를 위한 Class
 * @Modification Information  
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 11.12.08     김영훈       최초생성
 * 
 * 
 * @author 이에스이 길기용
 * @since 2011. 12. 8.
 * @version 1.0
 * @see
 * 
 *  Copyright (C) by ESE All right reserved.
 */
public class ColumnDataSet {
	
	private static  Logger log = LoggerFactory.getLogger("LoggingAspect");
	
	private static ColumnDataSet INSTANCE = null;
	
	private static HashMap<String, ColumnSet> columnSets = null;
	private static String gridConfigFileName = "";
	
	public ColumnDataSet() {
		columnSets = new HashMap<String, ColumnSet>();
		InitServlet initServlet = new InitServlet();
		gridConfigFileName = initServlet.getGridRealPath();
		loadConfig();
	}
	
	private synchronized static void createInstance() { 
		if (INSTANCE == null)
			INSTANCE = new ColumnDataSet(); 
	}
	
	
	public static ColumnDataSet getInstance() {
		if (INSTANCE == null)
			createInstance();
		
		return INSTANCE;
	}
	

	public void loadConfig() {
		loadGridData();
	}
	
	/**
	 * ddms-config.xml을 다시 읽어들임.
	 */
	public void reloadConfig() {
		columnSets.clear();
		loadConfig();
	}

	/**
	 * ddms-config.xml의 파일을 읽어들임.
	 * <DataSet> Element 의 Name, DataKind 어트리뷰트를 읽고, <Column> Element 의 Column, Name, Type, Length, Align, Length, Show, Sort, Style, ColumnType, Editable 의 값을 읽어 들임.
	 * 각 Element 이름은 대소문자를 구별함.
	 */
	@SuppressWarnings("unchecked")
	public void loadGridData(){
		
		File file = null;
		FileInputStream fs = null;
		SAXBuilder builder = null;
		Document doc = null;
		try {
			file = new File(gridConfigFileName);
			fs = new FileInputStream(file);
			InputStream is = fs;
			builder = new SAXBuilder();
			doc = builder.build(is);
		} catch (Exception e) {
			e.printStackTrace();
		}
		try {
			Element root = doc.getRootElement();
			List<Element> dataSets = root.getChildren("DataSet");
			for (Element dataSet: dataSets) {
				ColumnSet cs = new ColumnSet();
				cs.setSetName(dataSet.getAttribute("Name").getValue());
				cs.setDataKind(dataSet.getAttribute("DataKind").getValue());
				List<Element> columns = dataSet.getChildren("Column");
				for (Element column: columns) {
					try {
						cs.addCodeList(column.getChild("Code").getTextTrim());
					} catch (Exception e) {
						cs.addCodeList("");
					}
					try {
						cs.addNameList(column.getChild("Name").getTextTrim());
					} catch (Exception e) {
						cs.addNameList("");
					}
					try {
						cs.addTypeList(column.getChild("Type").getTextTrim());
					} catch (Exception e) {
						cs.addTypeList("");
					}
					try {
						cs.addLengthList(column.getChild("Length").getTextTrim());
					} catch (Exception e) {
						cs.addLengthList("");
					}
					try {
						cs.addAlignList(column.getChild("Align").getTextTrim());
					} catch (Exception e) {
						cs.addAlignList("");
					}
					try {
						cs.addSortList(column.getChild("Sort").getTextTrim());
					} catch (Exception e) {
						cs.addSortList("");
					}
					try {
						cs.addHiddenList(column.getChild("Hidden").getTextTrim());
					} catch (Exception e) {
						cs.addHiddenList("");
					}
					
					try {
						List<Element> jsFunctions = column.getChildren("JSFunction");
						for(Element jsFunction  : jsFunctions){
							FunctionSet funcSet = new FunctionSet(jsFunction.getChild("FcName").getTextTrim());
							funcSet.setFuncCode(jsFunction.getChildText("FuncCode"));
							funcSet.setFuncValue(jsFunction.getChildText("FuncValue"));
							List<Element> params = jsFunction.getChildren("FcParam");
							for(Element param : params){
								funcSet.addParam(param.getTextTrim());
							}
							cs.addFuncList(funcSet);
						}							
					} catch (Exception e) {
						cs.addFuncList(new FunctionSet());
					}
				}
				columnSets.put(cs.getDataKind().toLowerCase() + "_" + cs.getSetName().toLowerCase(), cs);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

	/**
	 * 지정된 이름과 종류의 ColumnSet을 리턴함.
	 * @param name ColumnSet의 이름.
	 * @param dataKind ColumnSet의 종류.
	 * @return 지정된 이름과 종류의 ColumnSet
	 */
	public ColumnSet getColumnSet(String dataName, String dataKind) {
		String key = dataKind.toLowerCase() + "_" + dataName.toLowerCase();
		return columnSets.get(key);
	}
	
	/**
	 * 지정된 이름과 종류의 ColumnSet이 있는지 찾음.
	 * @param name ColumnSet의 이름
	 * @param dataKind ColumnSet의 종류
	 * @return 이름과 종류의 ColumnSet이 있을 경우 true, 없을 경우 false
	 */
	public boolean hasKey(String dataName, String dataKind) {
		String key = dataKind + "_" + dataName;
		return columnSets.containsKey(key);
	}

	/**
	 * 이름과 데이터 종류로 xml을 읽어서 jQuery 그리드 헤더를 json 형태로 리턴
	 * @param name		ColumnSet의 이름
	 * @param dataKind	ColumnSet의 종류
	 * @return String	종류와 이름으로 해당 Column의 String return
	 */
	public String getJqGridHeader(String dataName){
		
		return getJqGridHeader(dataName, "Grid");
	}
	
	/**
	 * 이름과 데이터 종류로 xml을 읽어서 jQuery 그리드 헤더를 json 형태로 리턴
	 * @param name		ColumnSet의 이름
	 * @param dataKind	ColumnSet의 종류
	 * @return String	종류와 이름으로 해당 Column의 String return
	 */
	public String getJqGridHeader(String dataName, String dataKind){
		String header = "";
		ColumnSet cs = ColumnDataSet.getInstance().getColumnSet(dataName, dataKind);
		
		for(int i=0; i< cs.size(); i++){
			header += "{name : '" + cs.getCode(i) + "', index : '" + cs.getCode(i) + "', width : '" + cs.getLength(i) + "', sortable : " + cs.getSort(i) + ", align : '" + cs.getAlign(i) + "', hidden : " + cs.getHidden(i);
			header +=  " },";
		}
		
		header = header.substring(0, header.length() - 1);
		return header;
	}
	
	public String getJqGridHeaderName(String dataName, MessageSource message, String lang){
		return getJqGridHeaderName(dataName, "Grid", message, lang);
	}
	
	/**
	 * 이름과 데이터 종류로 xml을 읽어서 jQuery 그리드 헤더 이름 조회
	 * @param name ColumnSet의 이름
	 * @param dataKind ColumnSet의 종류
	 * @return 이름과 종류의 ColumnSet이 있을 경우 true, 없을 경우 false
	 */
	public String getJqGridHeaderName(String dataName, String dataKind, MessageSource message, String lang){
		String headerName = "";
		ColumnSet cs = ColumnDataSet.getInstance().getColumnSet(dataName, dataKind);
		
		MessageSource messageSource =  message; 
		for(int i=0; i< cs.size(); i++){
			headerName += "'"+messageSource.getMessage(cs.getName(i), new String[]{"Has No Properties"}, new Locale(lang)) +"',";
		}
		
		headerName = headerName.substring(0, headerName.length() - 1);
		return headerName;
	}
	
	/**
     * 
     * jqGridVO 데이터를 Grid에 적합한 xml 형태로 변환 
     * @version 1.0
     * @since 2012. 1. 3.
     * @param jqGridVO	grid 조회 Parameter
     * @return String[]	조회 결과
     * @exception Exception
     */
    public Element getGridXmlData(JqGridVO jqGridVO, String dataName, String dataKind){
    	
    	// Root node 생성
    	Element gridElement = new Element("rows");
    	
    	gridElement.addContent(new Element("page").setText(Integer.toString(jqGridVO.getPage())));
    	gridElement.addContent(new Element("total").setText(Integer.toString(jqGridVO.getTotal())));
    	gridElement.addContent(new Element("records").setText(Integer.toString(jqGridVO.getRecords())));
    	
    	ColumnSet cs = ColumnDataSet.getInstance().getColumnSet(dataName, dataKind);
    	
    	int cSize = jqGridVO.getRecords();
    	List<EgovMap> dataRows = (List<EgovMap>)jqGridVO.getRows();
    	
    	if(dataRows != null && dataRows.size() < cSize)
    		cSize = dataRows.size();
    	
    	for(int cnt=0; cnt < cSize; cnt++){
    		// 조회된 Row 데이터 Get
    		EgovMap map = dataRows.get(cnt);
    		// row 엘리먼트 생성
    		Element rowElement = new Element("row").setAttribute("id", strToXML(map.get(cs.getCode(0)).toString()));
    		
    		for(int i=0; i< cs.size(); i++){
    			
    			if(cs.getType(i) != null && cs.getType(i).toLowerCase().equals("function")){
    				
    				List<FunctionSet> funcList = cs.getFuncList();
					String function = "";
					String text = "";
					for(FunctionSet func : funcList){
						
						if(cs.getCode(i).equals(func.getFuncCode())){
							ArrayList<String> paramList = func.getParamList();
							ArrayList<String> value = new ArrayList<String>();

							for(int val=0; val<paramList.size(); val ++){
								value.add(StringUtil.nullChk(map.get(paramList.get(val))));
							}
							
							function += func.getJavaScriptFunc(value) + ";";				
							text = func.getFuncValue();
						}
					}
					
					rowElement.addContent(new Element("cell").addContent(new CDATA("CDATA").setText("<a href=\"javascript:" + function + "\">" + text +"</a>")).toString());
    				
    			}else if(cs.getType(i) != null && cs.getType(i).toLowerCase().equals("checkbox")){
    			
    				String checked = "";
    				
    				if("Y".equals(StringUtil.nullChk(map.get(cs.getCode(i)))))
    					checked = " checked='checked'";
    				
    				rowElement.addContent(new Element("cell").addContent(new CDATA("CDATA").setText(
    						"<input type='checkbox' name='" + cs.getCode(i) + i  + "' id='" + cs.getCode(i) + i  + "' " + checked + " value='Y' />")).toString());
    			} else{
    				if(map.get(cs.getCode(i)) != null){
    					Element cellElt = new Element("cell");
    					cellElt.addContent(new CDATA("CDATA").setText(map.get(cs.getCode(i)).toString())).toString();
    					rowElement.addContent(cellElt);
    				}else{
    					rowElement.addContent(new Element("cell"));
    				}
    			}
            }
    		
    		gridElement.addContent(rowElement);			
    	}
    	
    	return gridElement;
    }

    /**
     * 
     * jqGridVO 데이터를 Grid에 적합한 xml 형태로 변환 
     * @version 1.0
     * @since 2012. 1. 3.
     * @param jqGridVO	grid 조회 Parameter
     * @return String[]	조회 결과
     * @exception Exception
     */
    public Element getTreeGridXmlData(JqGridVO jqGridVO, String dataName, String dataKind){
    	
    	// Root node 생성
    	Element gridElement = new Element("rows");
    	
    	gridElement.addContent(new Element("page").addContent(String.valueOf(jqGridVO.getPage())).toString());			// 페이지 정보 추가
    	gridElement.addContent(new Element("total").addContent(String.valueOf(jqGridVO.getTotal())).toString());		// 페이지 합계
    	gridElement.addContent(new Element("records").addContent(String.valueOf(jqGridVO.getRecords())).toString());	// Row 합계 정보 추가
    	
    	ColumnSet cs = ColumnDataSet.getInstance().getColumnSet(dataName, dataKind);
    	
    	int cSize = jqGridVO.getRecords();
    	List<EgovMap> dataRows = (List<EgovMap>)jqGridVO.getRows();
    	
    	if(dataRows != null && dataRows.size() < cSize)
    		cSize = dataRows.size();
    	
    	for(int cnt=0; cnt < cSize; cnt++){
    		
    		// 조회된 Row 데이터 Get
    		EgovMap map = dataRows.get(cnt);
    		
    		// row 엘리먼트 생성
    		Element rowElement = new Element("row").setAttribute("id", strToXML(map.get(cs.getCode(0)).toString()));
    		
    		for(int i=0; i< cs.size(); i++){
    			
    			if(cs.getType(i) != null && cs.getType(i).toLowerCase().equals("function")){
    				
    				List<FunctionSet> funcList = cs.getFuncList();
    				String function = "";
    				
    				for(FunctionSet func : funcList){
    					
    					ArrayList<String> paramList = func.getParamList();
    					ArrayList<String> value = new ArrayList<String>();
    					
    					for(int val=0; val<paramList.size(); val ++){
    						value.add(StringUtil.nullChk(map.get(paramList.get(val))));
    					}
    					
    					function += func.getJavaScriptFunc(value) + ";";
    				}
    				
    				rowElement.addContent(new Element("cell").addContent(new CDATA("CDATA").setText("<a href='javascript:" + function + "'>" + cs.getCode(i) +"</a>")).toString());
    				
    			}else if(cs.getType(i) != null && cs.getType(i).toLowerCase().equals("checkbox")){
    				
    				String checked = "";
    				
    				if("Y".equals(StringUtil.nullChk(map.get(cs.getCode(i)))))
    					checked = " checked='checked'";
    				
    				rowElement.addContent(new Element("cell").addContent(new CDATA("CDATA").setText(
    						"<input type='checkbox' name='" + cs.getCode(i) + i  + "' id='" + cs.getCode(i) + i  + "' " + checked + " value='Y' disabled='disabled' />")).toString());
    				
    			} else{
    				if(map.get(cs.getCode(i)) != null){
    					Element cellElt = new Element("cell");
    					cellElt.addContent(new CDATA("CDATA").setText(map.get(cs.getCode(i)).toString())).toString();
    					rowElement.addContent(cellElt);
    				}else{
    					rowElement.addContent(new Element("cell"));
    				}
    			}
    			
    		}
    		rowElement.addContent(new Element("cell").addContent(new CDATA("CDATA").setText(map.get("lvl").toString())).toString());
    		rowElement.addContent(new Element("cell").addContent(new CDATA("CDATA").setText(map.get("parentId").toString())).toString());
    		rowElement.addContent(new Element("cell").addContent(map.get("isLeaf").toString()).toString());
    		rowElement.addContent(new Element("cell").addContent("false").toString());
    		gridElement.addContent(rowElement);			
    	}
    	
    	return gridElement;
    }


    /**
     * 
     * 조회된 데이터를 Tree에 적합한 xml 형태로 변환 
     * @version 1.0
     * @since 2013. 7. 5.
     * @param List<EgovMap>	조회 결과
     * @param String					Tree 유형
     * @return Element				조회 결과
     * 참고사항 : Tree 키 값은 id로 DB Alias 지정, 표시될 항목은 name으로 DB Alias 지정
     */
    @SuppressWarnings("unchecked")
	public Element getTreeXmlData(List<EgovMap> dataList){
    	Element rootElt = new Element("root");
    	if(dataList != null && dataList.size()>0){
        	
        	for(EgovMap data : dataList){
        		Element itemElt = new Element("item");
        		
        		Iterator<String> iterator = data.keySet().iterator();
        		while (iterator.hasNext()) {
        			String key = iterator.next();
        			if("name".equals(key)){
        				Element contentElt = new Element("content");
        				
        				// 이름 표시
        				if("Y".equals(data.get("gray"))){
        					Element nameElt = new Element("name");
        					Element fontElt = new Element("font").setAttribute("color", "#cccccc");
        					fontElt.addContent(FormatChanger.strToXML(data.get(key).toString()));
        					
        					nameElt.addContent(fontElt);
        					contentElt.addContent(nameElt);
        				}else{
        					Element nameElt = new Element("name");
        					nameElt.addContent(FormatChanger.strToXML(data.get(key).toString())).toString();
        					
        					contentElt.addContent(nameElt);
        				}
        				
        				itemElt.addContent(contentElt);
        				        				
        			}else if("isLeaf".equals(key)){
        				// 하위 분류가 존재하는 경우 open 아이콘 표시
        				if(data.get(key).toString().equals("Y"))
        					itemElt.setAttribute("state", "closed");
        			}else{
        				// 그 외 
        				itemElt.setAttribute(key, FormatChanger.strToXML(data.get(key).toString()));
        			}
        		}
				
        		// 적용된 xml을 root 하위에 생성
        		rootElt.addContent(itemElt);
        	}
    	}else{	
    		Element itemElt = new Element("item").setAttribute("id", "-1").setAttribute("gray", "Y");
			Element contentElt = new Element("content");
			Element nameElt = new Element("name");
			Element fontElt = new Element("font").setAttribute("color", "#cccccc");
			fontElt.addContent("정보없음");

			nameElt.addContent(fontElt);
			contentElt.addContent(nameElt);
			itemElt.addContent(contentElt);
			rootElt.addContent(itemElt);
    	}
    	return rootElt;
    }
	/**
     * 
     * data 값을 DB 컬럼 형태로 변환 ('_' 포함) 
     * @version 1.0
     * @since 2012. 1. 3.
     * @param String voColumn
     * @return String DB 컬럼 정보
     */
    public String getDbColumn(String voColumn){
    	
    	StringBuffer result = new StringBuffer();
    	
    	if(voColumn != null){
    		for(int i=0; i<voColumn.length(); i++){
        		int code = voColumn.charAt(i);
        		
        		if(code >= 65 && code <= 90){		// 대문자인 경우
        			result.append("_" + Character.toLowerCase((char) code));
        		}else{								// 소문자인 경우
        			result.append((char) code);
        		}
        	}
    	}
    	return result.toString();
    }
    
    /**
     * 
     * request에 담긴 정보를 HashMap 형태로 변환
     * @version 1.0
     * @since 2012. 1. 3.
     * @param request	request 객체
     * @return HashMap	데이터 정보
     * @throws Exception 
     */
    @SuppressWarnings("rawtypes")
	public HashMap<String, Object> getSearchList(HttpServletRequest request, String useRebuild) throws Exception{
    	
    	HashMap<String, Object> searchList = new HashMap<String, Object>();
    	Enumeration paramNames = request.getParameterNames();           

        while(paramNames.hasMoreElements()) {
            
        	String paramName = (String) paramNames.nextElement();
        	
        	if(paramName != null && !paramName.equals("page") && !paramName.equals("rows")
        			&& !paramName.equals("dataName") && !paramName.equals("dataKind")&& !paramName.equals("sidx") && !paramName.equals("sord")){
        		searchList.put(paramName, request.getParameter(paramName));
        	}
        }
        
        if(useRebuild.equals("Y"))
        	return rebuildParameter(searchList);
        else 
        	return searchList;
    }
    
    /**
     * 
     * Request에 없는 변수를 request에 셋팅
     * @version 1.0
     * @since 2012. 1. 3.
     * @param request	request 객체
     * @return HashMap	데이터 정보
     * @throws NoSuchMethodException 
     * @throws SecurityException 
     * @throws InvocationTargetException 
     * @throws IllegalAccessException 
     * @throws IllegalArgumentException 
     * @throws Exception 
     */
    public HashMap<String, Object> rebuildParameter(HashMap<String, Object> request) throws ReflectionException, SecurityException, NoSuchMethodException, IllegalArgumentException, IllegalAccessException, InvocationTargetException {
    	
    	Class<?> cla = InitDwgSys.class;
    	Method[] methods = cla.getMethods();
    	String firstStr = "";
    	String newStr = "";
    	
    	Set<String> requestMap = request.keySet();
    	Iterator<String> iter = requestMap.iterator();
    	ArrayList<String> key = new ArrayList<String>();
		while(iter.hasNext()) {
			key.add(iter.next());
		}
    	for(int i=0; i<methods.length; i++) {
    		if(methods[i].getName().startsWith("getDwg") || methods[i].getName().startsWith("getObj")) {
    			boolean exist = false;
    			firstStr = new Character(methods[i].getName().replace("get", "").charAt(0)).toString();
    			newStr = firstStr.toLowerCase()+methods[i].getName().replace("get", "").substring(1);
    			for(String keyList : key){
    				String iterVal = keyList.replace("get", "").toUpperCase();
    				if(newStr.toUpperCase().equals(iterVal)){
    					exist = true;
    					break;
    				}
    			}
    			if(exist == false) {
    				Method m = cla.getMethod(methods[i].getName());
    				request.put(newStr, m.invoke(cla).toString());	
    			}
    		}
    	}
    	return request;
    }
    
    
    /**
     * 
     * request에 담긴 정보를 HashMap 형태로 변환
     * @version 1.0
     * @since 2012. 1. 3.
     * @param request	request 객체
     * @return HashMap	데이터 정보
     */
    @SuppressWarnings("rawtypes")
    public HashMap<String, Object> getSearchListEscape(HttpServletRequest request){
    	
    	HashMap<String, Object> searchList = new HashMap<String, Object>();
    	Enumeration paramNames = request.getParameterNames();           
    	
    	while(paramNames.hasMoreElements()) {
    		
    		String paramName = (String) paramNames.nextElement();
    		
    		if(paramName != null && !paramName.equals("page") && !paramName.equals("rows")
    				&& !paramName.equals("dataName") && !paramName.equals("dataKind")&& !paramName.equals("sidx") && !paramName.equals("sord")){
    			try {
					searchList.put(paramName, URLDecoder.decode(request.getParameter(paramName), "utf-8"));
				} catch (UnsupportedEncodingException e) {
					log.error(e.toString());
				}
    		}
    	}
	
    	return searchList;
    }
    
    
    /**
     * 특수문자를 XML에 맞도록 변환해주는 메소드
     * @param strString
     * @return String
     */
    public static String strToXML(String strString) {
        Vector<String> aResult = new Vector<String>();
        String strResult = "";

        try {
            if (strString.indexOf("&") != -1) {
                aResult = strGetSplit(strString, "&");
                strString = "";
                for (String str: aResult) {
                    strString += str + "&amp;";
                }
                aResult = null;
                strString = strString.substring(0, strString.length() - 5);
            }

            if (strString.indexOf("<") != -1) {
                aResult = strGetSplit(strString, "<");
                strString = "";
                for (String str: aResult) {
                    strString += str + "&lt;";
                }
                aResult = null;
                strString = strString.substring(0, strString.length() - 4);
            }

            if (strString.indexOf(">") != -1) {
                aResult = strGetSplit(strString, ">");
                strString = "";
                for (String str: aResult) {
                    strString += str + "&gt;";
                }
                aResult = null;
                strString = strString.substring(0, strString.length() - 4);
            }

            if (strString.indexOf("'") != -1) {
                aResult = strGetSplit(strString, "'");
                strString = "";
                for (String str: aResult) {
                    strString += str + "&apos;";
                }
                aResult = null;
                strString = strString.substring(0, strString.length() - 6);
            }

            if (strString.indexOf("\"") != -1) {
                aResult = strGetSplit(strString, "\"");
                strString = "";
                for (String str: aResult) {
                    strString += str + "&quot;";
                }
                aResult = null;
                strString = strString.substring(0, strString.length() - 6);
            }
            strResult = strString;
        } catch (Exception e) {
        	
        	log.error(e.toString());
            return null;
        }
        return strResult;
    }
    
    /**
     * 스트링을 특정 문자를 기준으로 나누어 준다.
     * @param      strString String         : input string
     * @param      strDelimeter String      : delimeter character
     * @return     Vector      vResult      : result string
     */
    public static Vector<String> strGetSplit(String strString, String strDelimeter) {
        Vector<String> vResult = new Vector<String>();
        int nCount = 0, nLastIndex = 0;

        try {
            nLastIndex = strString.indexOf(strDelimeter);
            if (nLastIndex == -1) {
                vResult.add(0, strString);
            } else {
                while ((strString.indexOf(strDelimeter) > -1)) {
                    nLastIndex = strString.indexOf(strDelimeter);
                    vResult.add(nCount, strString.substring(0, nLastIndex));
                    strString = strString.substring(
                            nLastIndex + strDelimeter.length(),
                            strString.length());
                    nCount++;
                }
                vResult.add(nCount, strString);
            }
        } catch (Exception e) {
        	log.error(e.toString());
            return null;
        }
        return vResult;
    }
    
	/**
	 * 
	 * String[] 배열 형태를 String 데이터로 return
	 * @version 1.0
	 * @since 2011. 12. 22.
	 * @param dataRows	selectBox data
	 * @return String	selectBox String
	 * @exception Exception
	 */
	public String convertCodeList(ArrayList<String[]> dataRows) throws Exception{
		String dataList = "";
		if(dataRows.size()>0){
			for (String[] data : dataRows) {
				dataList += data[0] + "##" + data[1] +  "@@";
			}
			dataList = dataList.substring(0, dataList.length() - 2);
		}
		return dataList;
	}
	
	/**
	 * 
	 * @methodName : egovMapToJson
	 * @author 길기용
	 * @since 2012. 11. 19.
	 * @comment 
	 *   eGovMap 형태의 데이터를 json으로 변환
	 * @param String 파라미터 정보 설명
	 * @return JSONArray 리턴 정보 설명
	 *
	 */
	public JSONArray egovMapToJson(List<EgovMap> dataRows){
		JSONArray result = new JSONArray();
		for(int i=0; i<dataRows.size(); i++){
			
			EgovMap data = dataRows.get(i);
			JSONObject jsonData = new JSONObject();
			jsonData.put("id", i);
			
			@SuppressWarnings("unchecked")
			List<String> keyData = data.keyList();
			for(String key : keyData){
				jsonData.put(key, data.get(key));
				
			}
			result.add(jsonData);
		}
		return result;
	}
	
	public ArrayList<String> convertCrdntList(ArrayList<String[]> dataRows) {
		ArrayList<String> dataList = new ArrayList<String>();
		String xCrdntList = "";
		String yCrdntList = "";
		if(dataRows.size()>0){
			for (String[] data : dataRows) {
				xCrdntList += data[0] + "##" ;
				yCrdntList += data[1] + "##" ;
			}
			xCrdntList = xCrdntList.substring(0, xCrdntList.length() - 2);
			yCrdntList = yCrdntList.substring(0, yCrdntList.length() - 2);
		}
		dataList.add(xCrdntList);
		dataList.add(yCrdntList);
		return dataList;
	}
}