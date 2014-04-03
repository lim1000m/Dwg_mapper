package kr.mp.dwg.cmmn.util;

import java.lang.reflect.Method;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Locale;
import java.util.Random;
import java.util.UUID;

import org.springframework.context.ApplicationContext;
import org.springframework.context.MessageSource;



/**
 * Class Name 	: CommUtil.java
 * Description 	: ID 생성 및 공통으로 사용하는 유틸
 * Modification Information
 *
 *       수정일                         수정자             		    수정내용
 *    -----------      -----------     	---------------------
 *     
 * 
 * @author 차근수
 * @since 2010.09.08
 * @version 1.0
 */
public class CommUtil {
	private static int SEQ = 0;
	private static int SEQ4 = 0;
	
	/**
	 * UniqueID 생성(20자리)
	 * @param prefix : prefix
	 * @return prefix_현재시간17자리
	 */
	public static String getUniqueID(String prefix){
		String rtnStr = "";
		rtnStr = prefix + "_" + getCurrentTime14()+getNextSequenceValue();
		
		return rtnStr;
	}
	/**
     * UniqueID 생성(20자리/24자리)
     * @param prefix : prefix, length: 아이디 길이
     * @return prefix_현재시간14자리SEQ3자리/prefix_현재시간17자리SEQ3자리
     */
    public static String getUniqueID(String prefix, int length){
        String rtnStr = "";
        if(length == 20)
            rtnStr = prefix + "_" + getCurrentTime14()+getNextSequenceValue();
        else if(length == 24)
            rtnStr = prefix + "_" + getCurrentTime17()+getNextSequenceValue();
        
        return rtnStr;
    }
    
    /**
	 * UUID 20자리 생성
	 * @param args
	 */
	public static String getUUID() {
        String uuid = UUID.randomUUID().toString().replaceAll("-","").substring(0,20);
        
        return uuid.substring(0, 20);
        
    }
    
	/**
	 * UUID 20자리 생성
	 * @param args
	 */
	public static String getUUID_20() {
        String uuid = UUID.randomUUID().toString().replaceAll("-","").substring(0,20);
        
        return uuid.substring(0, 20);
        
    }
	
	/**
	 * UniqueID 생성(20자리)
	 * @return	String(현재시간17자리 + 랜덤3자리)
	 */
	public static String getUniqueID(){
		String rtnStr = "";
		rtnStr =getCurrentTime17()+getNextSequenceValue();
		return rtnStr;
	}
	
	/**
	 * Random 숫자 구하기
	 * @param 	length : 자리수
	 * @return	String
	 */
	public static String getRandomValue(int length){
		String rtnStr = "";
		Random rand = new Random(System.currentTimeMillis());

		int ranVal = Math.abs(rand.nextInt());
		int ranVal2 = Math.abs(rand.nextInt());
		int ranVal3 = ranVal + ranVal2;
		String ranStr = Integer.toString(ranVal3);
		rtnStr = ranStr.substring(ranStr.length()- length);
		
		return rtnStr;
	}
	
	/**
	 * 현재시간 구하기 14자리(년월일시분초)
	 * @return String
	 */
	public static String getCurrentTime14() {
		GregorianCalendar calendar = new GregorianCalendar();
		StringBuffer rtnStr = new StringBuffer();
		
		rtnStr.append(checkByte(Integer.toString(calendar.get(Calendar.YEAR)), 4, "0"));
		rtnStr.append(checkByte(Integer.toString(calendar.get(Calendar.MONTH) + 1), 2, "0"));
		rtnStr.append(checkByte(Integer.toString(calendar.get(Calendar.DATE)), 2, "0"));
		rtnStr.append(checkByte(Integer.toString(calendar.get(Calendar.HOUR_OF_DAY)), 2, "0"));
		rtnStr.append(checkByte(Integer.toString(calendar.get(Calendar.MINUTE)), 2, "0"));
		rtnStr.append(checkByte(Integer.toString(calendar.get(Calendar.SECOND)), 2, "0"));
		
		return rtnStr.toString();
	}
	
	/**
	 * 현재시간 구하기 17자리(년월일시분초SSS)
	 * @return String
	 */
	public static String getCurrentTime17() {
		GregorianCalendar calendar = new GregorianCalendar();
		StringBuffer rtnStr = new StringBuffer();
		
		rtnStr.append(checkByte(Integer.toString(calendar.get(Calendar.YEAR)), 4, "0"));
		rtnStr.append(checkByte(Integer.toString(calendar.get(Calendar.MONTH) + 1), 2, "0"));
		rtnStr.append(checkByte(Integer.toString(calendar.get(Calendar.DATE)), 2, "0"));
		rtnStr.append(checkByte(Integer.toString(calendar.get(Calendar.HOUR_OF_DAY)), 2, "0"));
		rtnStr.append(checkByte(Integer.toString(calendar.get(Calendar.MINUTE)), 2, "0"));
		rtnStr.append(checkByte(Integer.toString(calendar.get(Calendar.SECOND)), 2, "0"));
		rtnStr.append(checkByte(Integer.toString(calendar.get(Calendar.MILLISECOND)), 3, "0"));
		
		return rtnStr.toString();
	}

	/**
	 * 자리수 채우기
	 * @param 	source : 문자열
	 * @param 	digit  : 자리수
	 * @param 	fillString : 채울문자
	 * @return	String
	 */
	public static String checkByte(String source, int digit, String fillString) {
		
		String rtnStr = "";

		if (source.length() < digit) 
			for (int i = 0; i < digit - source.length(); i++) 
				rtnStr += fillString;
			
		
		rtnStr += source;
		
		return rtnStr;

	}
	
	public static String removeInvalidXMLCharacters(String s) {

        StringBuilder out = new StringBuilder();                // Used to hold the output.

    	int codePoint;                                          // Used to reference the current character.

    	//String ss = "\ud801\udc00";                           // This is actualy one unicode character, represented by two code units!!!.

    	//System.out.println(ss.codePointCount(0, ss.length()));// See: 1

		int i=0;

    	while(i<s.length()) {

    		codePoint = s.codePointAt(i);                       // This is the unicode code of the character.

			if ((codePoint == 0x9) ||          				    // Consider testing larger ranges first to improve speed. 

					(codePoint == 0xA) ||

					(codePoint == 0xD) ||
					
					(codePoint == 0xdc21) ||

					((codePoint >= 0x20) && (codePoint <= 0xD7FF)) ||

					((codePoint >= 0xE000) && (codePoint <= 0xFFFD)) ||

					((codePoint >= 0x10000) && (codePoint <= 0x10FFFF))) {

				out.append(Character.toChars(codePoint));

			}				

			i+= Character.charCount(codePoint);                 // Increment with the number of code units(java chars) needed to represent a Unicode char.  

    	}

    	return out.toString();

    } 
	
	/**
	 * 시퀀스값 생성 3자리
	 * @return String
	 */
	public static String getNextSequenceValue(){
		String rtnStr = Integer.toString(SEQ);
		if(SEQ == 999)
			SEQ = 0;
		
		if(rtnStr.length() == 1) 
			rtnStr = "00" + rtnStr;
		else if (rtnStr.length() == 2 )
			rtnStr = "0" + rtnStr;
		SEQ++;
		return rtnStr;
	}
	
	/**
	 * VO 객체 toString 으로 변환(디버그시 사용)
	 * @param obj 	: 변환하고자하는 vo 객체
	 * @param first	: 
	 * @return
	 */
	public static String toString(Object obj , boolean first) {
		@SuppressWarnings("rawtypes")
		Class cls = obj.getClass();	
		
		String mthNm = "";

		StringBuffer sb = new StringBuffer();
		
		try{
			Method[] mthArr = cls.getMethods();
			Method mth = null;
			
			if(!first)
				sb.append(" { ");	
			
			sb.append(cls.getName()+ " && ");
			
			for(int j = 0; j < mthArr.length ; j++){
				mthNm = mthArr[j].getName();
				
				if(mthNm.toUpperCase().startsWith("GET") && !mthNm.toUpperCase().startsWith("GETCLASS")) {
					sb.append(mthNm.substring(3) +" == ");
					Object rtnObj = mthArr[j].invoke(obj, new Object[]{});
					
					if(rtnObj != null) {
						if(rtnObj instanceof String[]) {
							String[] instanceX = (String[]) rtnObj;
							
							for(int x=0 ; x < instanceX.length ; x++){
								sb.append(instanceX[x]);
								
								if(x < instanceX.length -1)
									sb.append(" # ");
							}
							
							sb.append(" | ");
							
						}else if(rtnObj instanceof Integer){
							sb.append(rtnObj.toString() + " | ");
							
						}else if(rtnObj instanceof String){
							sb.append(rtnObj.toString() + " | ");
							
						}else if(rtnObj instanceof Long){
							sb.append(rtnObj.toString() + " | ");
							
						}else if(rtnObj instanceof Double){
							sb.append(rtnObj.toString() + " | ");
							
						}else{
							sb.append(CommUtil.toString(rtnObj,false)+" | ");
						}	
					}
				}
			}
			
			if(!first)
				sb.append(" } ");	
			
		}catch(Exception e){
			e.printStackTrace();	
		}
		
		return sb.toString();
	}	
	
	/**
	* 시퀀스값 생성 4자리
	* @return String
	*/
	public synchronized static String getNextSequenceValue4(){
		String rtnStr = Integer.toString(SEQ4);
		if(SEQ4 == 9999)
			SEQ4 = 0;
	
		if(rtnStr.length() == 1)
			rtnStr = "000" + rtnStr;
		else if (rtnStr.length() == 2 )
			rtnStr = "00" + rtnStr;
		else if (rtnStr.length() == 3 )
			rtnStr = "0" + rtnStr;
		
		SEQ4++;
		
		return rtnStr;
	}
	
	
    final static char[] digits = {
    	'0' , '1' , '2' , '3' , '4' , '5' ,
    	'6' , '7' , '8' , '9' , 'a' , 'b' ,
    	'c' , 'd' , 'e' , 'f' , 'g' , 'h' ,
    	'i' , 'j' , 'k' , 'l' , 'm' , 'n' ,
    	'o' , 'p' , 'q' , 'r' , 's' , 't' ,
    	'u' , 'v' , 'w' , 'x' , 'y' , 'z'
    };

    /**
	 * 현재 시각과 노드명에 기반한 pseudo random 생성된 32자리의 ID를 반환한다.
	 * 
	 * @return Global Unique ID
	 */
	public static String getUUID32() {
		UUID uuid = UUID.randomUUID();
		char[] buffer = new char[32];
		long msbs = uuid.getMostSignificantBits();
		long lsbs = uuid.getLeastSignificantBits();
		long mask = 0x0f;
		int shift;
		for (int i = 0; i < 16; i++) {
			shift = (15 - i) * 4;
			buffer[i] = digits[(int)(((msbs & (mask << shift)) >>> shift))];  
		}
		for (int i = 0; i < 16; i++) {
			shift = (15 - i) * 4;
			buffer[i + 16] = digits[(int)(((lsbs & (mask << shift)) >>> shift))];  
		}

		return new String(buffer);
	}
	
	public static void main(String[] args) {
		
		for (int i = 0; i < 100; i++) System.out.println(getUUID32());
	}
	
	public static String convertSqlNamespace(String namespace, String dbType){
		StringBuffer sb = new StringBuffer();
		sb.append(namespace);
		sb.append("_");
		sb.append(dbType.toLowerCase());
		return sb.toString();
	}
	
	public static String getAppContextMsgByLang(ApplicationContext applicationContext, String key, String languageCode){
		MessageSource messageSource = (MessageSource) applicationContext;
		return messageSource.getMessage(key, new String[]{"Has No Properties"}, new Locale(languageCode));		
	}
	
}

