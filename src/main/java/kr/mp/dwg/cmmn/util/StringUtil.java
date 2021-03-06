package kr.mp.dwg.cmmn.util;

import java.io.BufferedReader;


import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.Clob;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

/**
 * Class Name 	: StringUtil.java
 * Description 	: 문자열 처리를 담당하는 유틸
 * Modification Information
 *
 *       수정일                         수정자             		    수정내용
 *    -----------      -----------     	---------------------
 *     2010.10.27			이진욱				nullChk() exception 제거

 * 
 * @author 차근수
 * @since 2010.09.08
 * @version 1.0
 */
public class StringUtil{
	              
	/**
	 * clob 을 스트링으로 변경 
	 * @param clob
	 * @return
	 * @throws SQLException
	 * @throws IOException
	 */
	public static String clobToString(Clob clob) throws SQLException,
	   IOException {

	  if (clob == null) {
	   return "";
	  }

	  StringBuffer strOut = new StringBuffer();

	  String str = "";

	  BufferedReader br = new BufferedReader(clob.getCharacterStream());

	  while ((str = br.readLine()) != null) {
	   strOut.append(str);
	  }
	  return strOut.toString();
	 }


	/**
	 * null 이면 ""공백으로
	 * @param str
	 * @return
	 * @throws Exception
	 */
	public static String nullChk(String str)  {
		
		if(str == null){
			return "";
		}else if(str.equals("null")){
			return "";
		}else if(str.equals("NULL")){
			return "";
		}else{ 
			return str;
		}
	}
	
	
	/**
	 * null 이면 ""공백으로
	 * @param str
	 * @return
	 * @throws Exception
	 */
	public static String nullChk(Object str)  {
		
		if(str == null){
			return "";
		}else if(str.equals("null")){
			return "";
		}else if(str.equals("NULL")){
			return "";
		}else{ 
			return str.toString();
		}
	}
	
	/**
	 * String 문자열을 boolean으로 변환
	 * @param 	paramStr : 변경할 문자열
	 * @return 	boolean
	 */
	public static boolean strToBoolean(String paramStr){
		boolean result = false;
		if(paramStr.equals("Y")||paramStr.equals("y"))
			result = true;
		return result;
	}
	
	/**
	 * String 문자열을 날짜 형식으로 변경
	 * @param 	paramStr  : 변경할 문자열
	 * @param 	len		  : 8 - 년월일
	 * 					    12 - 년월일시분
	 * 					    14 - 년월일시분초
	 * 					    17 - 년월일시분초밀리세컨드
	 * @return	String
	 */
	public static String strToDateFormat(String paramStr, int len){
		
		if(paramStr == null || paramStr.equals("") || paramStr.equals(" ")){
			return "";
			
		}else{
			
			if(len == 8){
				return paramStr.substring(0, 4) + "/" + paramStr.substring(4, 6) + "/" + paramStr.substring(6, 8) ;
				
			}else if(len == 12){
				return paramStr.substring(0, 4) + "/" + paramStr.substring(4, 6) + "/" + paramStr.substring(6, 8) + " " + 
					   paramStr.substring(8, 10) + ":" + paramStr.substring(10, 12);
			
			}else if(len == 14){
				return paramStr.substring(0, 4) + "/" + paramStr.substring(4, 6) + "/" + paramStr.substring(6, 8) + " " + 
				       paramStr.substring(8, 10) + ":" + paramStr.substring(10, 12) + ":" + paramStr.substring(12, 14);
				
			}else if(len == 17){
				return paramStr.substring(0, 4) + "/" + paramStr.substring(4, 6) + "/" + paramStr.substring(6, 8) + " " + 
			       	   paramStr.substring(8, 10) + ":" + paramStr.substring(10, 12) + ":" + paramStr.substring(12, 14) + "." +
					   paramStr.substring(14, 17);
				
			}else{
				return paramStr;
			}
		}
	}
	
	/**
	 * String 문자열을 밀리초 형식으로 변경(밀리초는 3자리)
	 * @param 	paramStr : 변경할 문자열
	 * 		  	msLen	 : 밀리초 길이
	 * @return 	String
	 */
	public static String strToTimeFormat(String paramStr, int msLen){
		if(paramStr == null || paramStr.equals("") || paramStr.equals(" ")){
			return "";
			
		}else{
			String zero = "0";
			String spot = ".";

			if( msLen >= paramStr.length() ){
				return zero + spot + setPad(paramStr, msLen - paramStr.length(), zero, "L");
			}else{
				return paramStr.substring(0, paramStr.length() - msLen) + spot + paramStr.substring(paramStr.length() - msLen, paramStr.length());
			}
		}
	}
	
	/**
	 * LPAD, RPAD 처리
	 * @param 	str 	: 입력문자열
	 * @param 	padLen	: 총자리수
	 * @param 	padChar	: 채워야할 문자
	 * @param 	padFlag	: 'L' LPAD, 'R' RPAD 구분
	 * @return 	String
	 */
	public static String setPad(String str, int padLen, String padChar, String padFlag){
		if (str == null) str = "";
		
		// LPAD
		if( padFlag.equals("L") ){
			while (str.length() < padLen)
				str = padChar + str;
		// RPAD
		}else if( padFlag.equals("R") ){
			while (str.length() < padLen)
				str =  str + padChar;
		}
		
		return str;
	}
	
	public static String setPad(int str, int padLen, String padChar, String padFlag){
		
		return setPad(Integer.toString(str), padLen, padChar,  padFlag);
	}
	
	/**
	 * LPAD, RPAD 처리
	 * @param 	str 	: 입력문자열
	 * @param 	padLen	: 총자리수
	 * @param 	padChar	: 채워야할 문자
	 * @param 	padFlag	: 'L' LPAD, 'R' RPAD 구분
	 * @return 	String
	 */
	public static String setPadByte(String str, int padLen, String padChar, String padFlag){
		if (str == null) str = "";
		
		// LPAD
		if( padFlag.equals("L") ){
			while (str.getBytes().length < padLen)
				str = padChar + str;
		// RPAD
		}else if( padFlag.equals("R") ){
			while (str.getBytes().length < padLen)
				str =  str + padChar;
		}
		
		return str;
	}
	public static String toHan(String str) throws UnsupportedEncodingException {

	    if (str==null) 
	      return null;

	    else
	      return new String(str.getBytes("ISO-8859-1"),"euc-kr");
	}
	
	/**
	 * 주어진 문자열이 문자로만 구성되어 있는지 확인한다. 공백은 false를 반환한다.
     * 입력된 String을 대문자로 모두 변환한다. (알파벳은 65(A)에서 90(Z)까지이다.)
	 * @param	String	: 문자열
	 * @return 	boolean	: 문자열이 모두 문자로만 이루어진경우 true
	 */
	public static boolean isAlpha(String str) {
		if (str==null || str.equals("")) return false;

		for (int i=0; i<str.length(); i++) {
			if ((int)str.charAt(i) < 65 && ((int)str.charAt(i) != 32)) return false;
		}
		return true;
	}
	
	/**
	 * 주어진 문자열이 숫자로만 구성되어 있는지 확인한다. 공백이 있으면 false를 반환한다.
	 * char값이 48에서 57사이이면 숫자이다.
	 * @param	String	: 문자열
	 * @return 	boolean	: 문자열이 모두 숫자로만 이루어진경우 true
	 */
	public static boolean isNumeric(String str) {
		if (str==null || str.equals("")) return false;

		for (int i=0; i<str.length(); i++) {
			if ((int)str.charAt(i) < 48 || (int)str.charAt(i) > 57) return false;
		}
		return true;
	}
	
	/**
	 * 주어진 문자열에서 해당하는 위치의 문자를 변경한다.
	 * @param src			: 입력값
	 * @param replaceStr	: 변경문자열
	 * @param startPoint	: 변경하고자 하는 문자 시작 위치
	 * @param endPoint		: 변경하고자 하는 문자 끝 위치
	 * @return
	 */
	public static String replaceStr(String src, String replaceStr, int startPoint, int endPoint){
		StringBuffer sb = new StringBuffer();
		
		int padLen = endPoint-startPoint;
		
		sb.append(src.substring(0,startPoint));
		sb.append(StringUtil.setPadByte(replaceStr, padLen, " ", "L"));
		sb.append(src.substring(endPoint));
		
		return sb.toString();
	}
	
	/**
	 * String Escape 처리
	 * @param src
	 * @return
	 */
	public static String escape(String src) {
		int i;
		char j;
		StringBuffer tmp = new StringBuffer();
		tmp.ensureCapacity(src.length() * 6);
		for (i = 0; i < src.length(); i++) {
			j = src.charAt(i);
			if (Character.isDigit(j) || Character.isLowerCase(j)
					|| Character.isUpperCase(j))
				tmp.append(j);
			else if (j < 256) {
				tmp.append("%");
				if (j < 16)
					tmp.append("0");
				tmp.append(Integer.toString(j, 16));
			} else {
				tmp.append("%u");
				tmp.append(Integer.toString(j, 16));
			}
		}
		return tmp.toString();
	}
	
	/**
	 * escape 된 문자열 unescape
	 * @param str
	 * @return
	 */
	public static String unescape(String str) {
	    String rtnStr = new String();
	    char [] arrInp = str.toCharArray();
	    int i;
	    
	    for(i=0; i<arrInp.length; i++) {
	    	
	        if(arrInp[i] == '%') {
	        
	        	String hex;
	            if(arrInp[i+1] == 'u') {    //유니코드.
	                hex = str.substring(i+2, i+6);
	                i += 5;
	                
	            } else {    //ascii
	                hex = str.substring(i+1, i+3);
	                i += 2;
	            }
	            
	            try{
	                rtnStr += new String(Character.toChars(Integer.parseInt(hex, 16)));
	                
	            } catch(NumberFormatException e) {
	                rtnStr += "%";
	                i -= (hex.length()>2 ? 5 : 2);
	            }
	        } else {
	            rtnStr += arrInp[i];
	        }
	    }
	 
	    return rtnStr;
	}
	
	/**
	 * 문자열내의 내용은 regex에 해당하는 내용을 찾아 replacement로 바꿈
	 * @param original 원분문자열
	 * @param regex 찾을 대상(정규표현식 or 문자열)
	 * @param replacement 대체할 문자열
	 * @return 변경된 문자열
	 */
	public static String replaceAll(String original, String regex, String replacement) {
		regex = regex.replaceAll("(\\p{Punct})", "\\\\$1");
		replacement = replacement.replaceAll("(\\p{Punct})", "\\\\$1");
		return original.replaceAll(regex, replacement);
	}
	
	/**
	 * 문자열내의 %1 %2 식으로 파라미터를 채울 부분을 파라미터 리스트에서 찾아 바꿈
	 * @param 파라미터 문자열
	 * @param 파라미터에 넣으을 값리스트
	 * @return 변경된 문자열
	 */
	public static String fillParam(String str, @SuppressWarnings("rawtypes") List paramList){
		String temp = str;
		for(int i=0; i<paramList.size(); i++){
			int index = i+1;
			temp = temp.replace("%"+index, String.valueOf((paramList.get(i))));
		}
		return temp;
	}
	
	/**
	 * 문자열내의 #key1# #key2# 식으로 파라미터를 채울 부분을 파라미터 리스트에서 찾아 바꿈
	 * @param str 파라미터 문자열
	 * @param paramMap 파라미터에 넣으을 값 맵
	 * @return 변경된 문자열
	 */
	public static String fillParam(String str, @SuppressWarnings("rawtypes") Map paramMap){
		String temp = str;
		Object[] keyAry = paramMap.keySet().toArray();
		for(Object key : keyAry){
			temp = temp.replace("#"+String.valueOf(key)+"#", String.valueOf(paramMap.get(key)));
		}
		return temp;
	}
	
	/**
	 * 문자열내의 #key1# #key2# 식으로 파라미터를 채울 부분을 파라미터 리스트에서 찾아 바꿈
	 * @param str 파라미터 문자열
	 * @param paramMap 파라미터에 넣으을 값 맵
	 * @return 변경된 문자열
	 */
	public static byte[] hexStrToByteArray(String hexStr){
		if (hexStr == null || hexStr.length() % 2 != 0) {
            return new byte[]{};
        }

        byte[] bytes = new byte[hexStr.length() / 2];
        for (int i = 0; i < hexStr.length(); i += 2) {
            byte value = (byte)Integer.parseInt(hexStr.substring(i, i + 2), 16);
            bytes[(int) Math.floor(i / 2)] = value;
        }
        return bytes;
	}
	/**
     * 연속된 숫자형태의 문자열을 전화번호 포맷으로 변환한다.
     * 
     * @author hyunjoo
     * @param str
     * @return
     */
    public static String setTelNumberFormat(String str) {
        if (str == null || str.equals("")) {
            return "";
        }
        
        try {
            String telNum1 = "";
            String telNum2 = "";
            String telNum3 = "";
            
            int len = str.length();
            
            // 지역번호 02
            if (str.substring(0, 2).equals("02")) {
                telNum1 = str.substring(0, 2);
                telNum2 = str.substring(2, len-4);
                telNum3 = str.substring(len-4, len);
            
             // 그외 지역번호, 핸드폰 통신사 앞자리 등
            } else {
                telNum1 = str.substring(0, 3);
                telNum2 = str.substring(3, len-4);
                telNum3 = str.substring(len-4, len);
            }

            str = telNum1 + "-" + telNum2 + "-" + telNum3;
        }
        catch(Exception e){}
        
        return str;
    }
}