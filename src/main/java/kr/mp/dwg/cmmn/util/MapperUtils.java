package kr.mp.dwg.cmmn.util;

import java.io.ByteArrayOutputStream;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import javax.management.ReflectionException;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.transform.Result;
import javax.xml.transform.stream.StreamResult;

import egovframework.rte.psl.dataaccess.util.EgovMap;

/**
 * Mapper에서 사용하는 페이징이랑 JAXB Utils
 * MapperUtils
 * @category CLASS
 * @author ESE-MILLER
 * @since 2013-12-05
 * @version 1.0
 */
public class MapperUtils {

	static MapperUtils mapperUtils = null;
	
	public MapperUtils() {
		super();
	}
	
	/**
	 * getInstance 
	 * 이 클래스의 인스턴스 반환
	 * @category method
	 * @author ESE-MILLER
	 * @return MapperUtils
	 * @since 2013-12-05
	 */
	public static MapperUtils getInstance() {
		if(mapperUtils == null) 
			return new MapperUtils();
		else
			return mapperUtils;
	}
	
    /**
     * 
     * @methodName : createJaxbReresult
     * @author 김영훈
     * @since 2012. 8. 23.
     * @comment 
     *   JAXB 생성
     * @param dwgRow 도면 페이지당 표시 ROW 개수
     * @param dwgOrd 도면 정렬 컬럼명
     * @return Response 
     * @throws JAXBException 
     * @throws UnsupportedEncodingException 
     * @throws ClassNotFoundException 
     *
     */
    public String createJaxbReresult(Object response, String pack) throws JAXBException, UnsupportedEncodingException, ClassNotFoundException {
    		ByteArrayOutputStream bos = new ByteArrayOutputStream();
        	JAXBContext jaxbContext = JAXBContext.newInstance(Class.forName(pack));
    		Marshaller marshaller = jaxbContext.createMarshaller();
    		marshaller.setProperty( Marshaller.JAXB_ENCODING , "UTF-8" );
    		Result result = new StreamResult(bos);
    		marshaller.marshal(response, result);
    		String returnXml =  bos.toString("UTF-8");	
    	
		return returnXml;
    }
    
	/**
	 * 페이징을 위한 값을 조회한다.
	 * @author ESE-MILLER
	 * @since 2013.11.11
	 * @param int rowCount
	 * @param int pageNum
	 * @param int rowTotal
	 * @return Object[]
	 */
	public Object[] getPagingStat(String rowCnt, String crCnt, int rowTotal, HashMap<String, Object> params){
		
		Integer[] ojb = new Integer[3];
		
		int rowCount = Integer.parseInt(rowCnt);
		int pageNum = Integer.parseInt(crCnt);
		 
		int pageTotal   = (int)(rowTotal / rowCount);               // 전체 페이지 수

		if((rowTotal % rowCount) > 0 ) pageTotal++;

		if( pageNum > pageTotal)
			pageNum = pageTotal;

		int beginRow = (pageNum - 1) * rowCount+1;                  // 시작 레코드 번호
		int endRow = beginRow + rowCount-1;           
		
		ojb[0] = beginRow;
		ojb[1] = endRow;
		ojb[2] = rowTotal;
		
		return ojb;
	}
	
	
	/**
	 * DrwngList의 페이징 처리
	 * drwngResult
	 * @author ESE-MILLER
	 * @param dwgList
	 * @param sNum
	 * @param eNum
	 * @return
	 */
	public ArrayList<EgovMap> drwngResult(ArrayList<EgovMap> dwgList, Object sNum, Object eNum) {
		
		ArrayList<EgovMap> pageList = new ArrayList<EgovMap>();
		
		int startNum = Integer.parseInt(sNum.toString())-1;
		int endNum = Integer.parseInt(eNum.toString())-1;
		int cnt = 0;
		
		for(EgovMap dwg : dwgList) {
			if(cnt >= startNum && cnt <= endNum)
				pageList.add(dwg);
			cnt++;
		}
		
		return pageList;
	}
	
	/**
	 * 사이즈랑 상관없는 obj ID 추려서 return
	 * drwngResultSize
	 * @author ESE-MILLER
	 * @param HashMap<String, Object> params, ArrayList<EgovMap> drwngList
	 * @return int
	 */
	public Object[] drwngResultSize(String objId, ArrayList<EgovMap> drwngList) {
		Object[] obj = new Object[2];
		ArrayList<EgovMap> newDwgMap = new ArrayList<EgovMap>();
		for(EgovMap map :  drwngList) 
			if(objId.equals(map.get("objId").toString())) 
				newDwgMap.add(map);

		obj[0] = newDwgMap;
		obj[1] = newDwgMap.size();
		return obj;
	}
	
	/**
	 * 파라미터 설정에 대한 String 생성
	 * getCustumParams
	 * @author ESE-MILLER
	 * @return String
	 * @throws ReflectionException 
	 */
	public String getCustumParams(EgovMap dwgMap) throws ReflectionException {
		Class<?> cla = InitDwgSys.class;
		Method[] methods = cla.getMethods();
		StringBuffer sbf = new StringBuffer();
		try {
			for(int i=0; i<methods.length; i++) {
				if(methods[i].toString().indexOf("getParams") != -1) {
					Method m = cla.getMethod(methods[i].getName());
					sbf.append((String) m.invoke(cla)+"@@");
				}
			}
		} catch (Exception e) {
			throw new ReflectionException(e);
		} 
		return sbf.toString().substring(0, sbf.toString().length()-2);
	}
	
	/**
	 * 파라미터 URL 만들기
	 * getParameterUrl
	 * @author ESE-MILLER
	 * @return String
	 * @throws ReflectionException 
	 */
	public String getParameterUrl(String str, EgovMap map) {
		String[] lvl1 = str.split("@@");
		StringBuffer sbf = new StringBuffer();
		sbf.append("?");
		for(int i=0; i< lvl1.length; i++) {
			String[] lvl2 = lvl1[i].split("=");
			sbf.append(lvl2[0]+"="+map.get(lvl2[1])+"&");
		}
		return sbf.toString().substring(0, sbf.toString().length()-1);
	}
}
