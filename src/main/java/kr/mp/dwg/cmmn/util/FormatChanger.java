package kr.mp.dwg.cmmn.util;

import java.sql.Date;
import java.sql.Timestamp;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Vector;
import java.math.BigDecimal;

/**
 * 데이타를 변환해주는 유틸리티 클래스
 * <pre>
 * 수정이력:
 * 
 * </pre>
 * @author 이서비스
 * @author 김유리
 * @version 1.0.0 (2004.12.31)
 */
public class FormatChanger {
    // 통화 단위로 변환해 주는 NumberFormat
    private static final DecimalFormat df = new DecimalFormat("#,###.####");

    

    /**
     *	String(yyyymmdd) -> String(yyyy-mm-dd)
     *	@param	cToStr String
     *	@return	String
     */
    public static String strToStrDash(String cToStr) {
        if (cToStr != null && !cToStr.equals("")) {
            StringBuffer cTemp = new StringBuffer();

            cTemp.append(cToStr.substring(0, 4));
            cTemp.append("-");
            cTemp.append(cToStr.substring(4, 6));
            cTemp.append("-");
            cTemp.append(cToStr.substring(6, 8));
            String rToStr = cTemp.toString();

            return rToStr;
        }
        return "";
    }

    /**
     *	String(yyyymmdd) -> String(yyyy/mm/dd)
     *	@param	cToStr String
     *	@return	String
     */
    public static final String strToStrSlash(String cToStr) {
        if (cToStr != null && !cToStr.equals("")) {
            StringBuffer cTemp = new StringBuffer();

            cTemp.append(cToStr.substring(0, 4));
            cTemp.append("/");
            cTemp.append(cToStr.substring(4, 6));
            cTemp.append("/");
            cTemp.append(cToStr.substring(6, 8));
            String rToStr = cTemp.toString();

            return rToStr;
        }
        return "";
    }

    /**
     *	String(yyyymmdd) -> String(yyyy.mm.dd)
     *	@param	cToStr String
     *	@return	String
     */
    public static final String strToStrDot(String cToStr) {
        if (cToStr != null && !cToStr.equals("")) {
            StringBuffer cTemp = new StringBuffer();

            cTemp.append(cToStr.substring(0, 4));
            cTemp.append(".");
            cTemp.append(cToStr.substring(4, 6));
            cTemp.append(".");
            cTemp.append(cToStr.substring(6, 8));
            String rToStr = cTemp.toString();

            return rToStr;
        }
        return "";
    }
    
	/**
	 *	String(yyyyMMddHHmmss) -> String(yyyy.MM.dd HH:mm:ss)
	 *	@param	date DateString
	 *	@return	String
	 */
	public static final String StrToStrDateTime(String date) {
		if (date != null && !date.equals("")) {
			StringBuffer cTemp = new StringBuffer();

			cTemp.append(date.substring(0, 4));
			cTemp.append(".");
			cTemp.append(date.substring(4, 6));
			cTemp.append(".");
			cTemp.append(date.substring(6, 8));
			cTemp.append(" ");
			cTemp.append(date.substring(8, 10));
			cTemp.append(":");
			cTemp.append(date.substring(10, 12));
			cTemp.append(":");
			cTemp.append(date.substring(12));
			String rToStr = cTemp.toString();

			return rToStr;
		}
		return "";
	}    

    /**
     *	String(yyyy-mm-dd) -> String(yyyy/mm/dd)
     *	@param	cToStr	String
     *	@return	String
     */
    public static final String dashToStrSlash(String cToStr) {
        if (cToStr != null && !cToStr.equals("")) {
            StringBuffer cTemp = new StringBuffer();

            cTemp.append(cToStr.substring(0, 4));
            cTemp.append("/");
            cTemp.append(cToStr.substring(5, 7));
            cTemp.append("/");
            cTemp.append(cToStr.substring(8, 10));
            String rToStr = cTemp.toString();

            return rToStr;
        }
        return "";
    }

    /**
     *	String(yyyy-mm-dd) -> String(yyyymmdd)
     *	@param	cToStr String
     *	@return	String
     */
    public static final String dashToStr(String cToStr) {
        if (cToStr != null && !cToStr.equals("")) {
            StringBuffer cTemp = new StringBuffer();

            cTemp.append(cToStr.substring(0, 4));
            cTemp.append(cToStr.substring(5, 7));
            cTemp.append(cToStr.substring(8, 10));
            String rToStr = cTemp.toString();

            return rToStr;
        }
        return "";
    }

    /**
     *	String(yyyy/mm/dd) -> String(yyyymmdd)
     *	@param	cToStr	String
     *	@return	String
     */
    public static final String slashToStr(String cToStr) {
        if (cToStr != null && !cToStr.equals("")) {
            StringBuffer cTemp = new StringBuffer();

            cTemp.append(cToStr.substring(0, 4));
            cTemp.append(cToStr.substring(5, 7));
            cTemp.append(cToStr.substring(8, 10));
            String rToStr = cTemp.toString();

            return rToStr;
        }
        return "";
    }

    /**
     *	String(yyyy.mm.dd) -> String(yyyymmdd)
     *	@param	cToStr String
     *	@return	String
     */
    public static final String dotToStr(String cToStr) {
        if (cToStr != null && !cToStr.equals("")) {
            StringBuffer cTemp = new StringBuffer();

            cTemp.append(cToStr.substring(0, 4));
            cTemp.append(cToStr.substring(5, 7));
            cTemp.append(cToStr.substring(8, 10));
            String rToStr = cTemp.toString();

            return rToStr;
        }
        return "";
    }

    /**
     *	String(yyyy-mm-dd) -> String(yyyy.mm.dd)
     *	@param	cToStr	String
     *	@return	String
     */
    public static final String dashToStrDot(String cToStr) {
        if (cToStr != null && !cToStr.equals("")) {
            StringBuffer cTemp = new StringBuffer();

            cTemp.append(cToStr.substring(0, 4));
            cTemp.append(".");
            cTemp.append(cToStr.substring(5, 7));
            cTemp.append(".");
            cTemp.append(cToStr.substring(8, 10));
            String rToStr = cTemp.toString();

            return rToStr;
        }
        return "";
    }

    /*
     *---------------------------------------------------
     *     String을 date 로 변환해주는 method
     *---------------------------------------------------
     */

    /**
     *	String(yyyymmdd) -> Date(yyyy-mm-dd)
     *	@param	cToStr String
     *	@return	Date
     */
    public static Date strToDate(String cToStr) {
        if (cToStr != null && !cToStr.equals("")) {
            String cTemp = strToStrDash(cToStr);
            Date cToDate = Date.valueOf(cTemp);

            return cToDate;
        }
        return null;
    }

    /**
     *	String(yyyy/mm/dd) -> Date(yyyy-mm-dd)
     *	@param	cToStr String
     *	@return	Date
     */
    public static final Date strToDateSlash(String cToStr) {
        if (cToStr != null && !cToStr.equals("")) {
            StringBuffer cTemp = new StringBuffer();

            cTemp.append(cToStr.substring(0, 4));
            cTemp.append(cToStr.substring(5, 7));
            cTemp.append(cToStr.substring(8, 10));
            String rToStr = cTemp.toString();

            return strToDate(rToStr);
        }
        return null;
    }

    /**
     *	String(yyyy-mm-dd) -> Date(yyyy-mm-dd)
     *	@param	cToStr String
     *	@return	Date
     */
    public static final Date strToDateDash(String cToStr) {
        if (cToStr != null && !cToStr.equals("")) {
            Date cToDate = Date.valueOf(cToStr);

            return cToDate;
        }
        return null;
    }

    /**
     *	String(yyyy.mm.dd) -> Date(yyyy-mm-dd)
     *	@param	cToStr String
     *	@return	Date
     */
    public static Date strDotToDate(String cToStr) {
        if (cToStr != null && !cToStr.equals("")) {
            StringBuffer cTemp = new StringBuffer();

            cTemp.append(cToStr.substring(0, 4));
            cTemp.append(cToStr.substring(5, 7));
            cTemp.append(cToStr.substring(8, 10));
            String rToStr = cTemp.toString();

            return strToDate(rToStr);
        }
        return null;
    }

    /*
     *------------------------------------------------
     *          Date를 String으로 변환하는 method
     *------------------------------------------------
     */

    /**
     *	Date(yyyy-mm-dd) -> String(yyyymmdd)
     *	@param	cToDate Date
     *	@return	String
     */
    public static final String dateToStr(Date cToDate) {
        if (cToDate != null) {
            SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");
            String cToStr = formatter.format(cToDate);

            return cToStr;
        }
        return "";
    }
    
	/**
	 *	DateTime(yyyyMMddHHmmss) -> String(yyyyMMddHHmmss)
	 *	@param	cToDate Date
	 *	@return	String
	 */
	public static final String dateTimeToStr(Date cToDate) {
		if (cToDate != null) {
			SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
			String cToStr = formatter.format(cToDate);

			return cToStr;
		}
		return "";
	}    
	
    /**
     *	Date(yyyy-mm-dd) -> String(yyyy/mm/dd)
     *	@param	cToDate Date
     *	@return	String
     */
    public static final String dateToStrSlash(Date cToDate) {
        if (cToDate != null) {
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy/MM/dd");
            String cToStr = formatter.format(cToDate);

            return cToStr;
        }
        return "";
    }

    /**
     *	Date(yyyy-mm-dd) -> String(yyyy-mm-dd)
     *	@param	cToDate Date
     *	@return	String
     */
    public static final String dateToStrDash(Date cToDate) {
        if (cToDate != null) {
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            String cToStr = formatter.format(cToDate);

            return cToStr;
        }
        return "";
    }

    /**
     *	Date(yyyy-mm-dd) -> String(yyyy.mm.dd)
     *	@param	cToDate Date
     *	@return	String
     */
    public static final String dateToStrDot(Date cToDate) {
        if (cToDate != null) {
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy.MM.dd");
            String cToStr = formatter.format(cToDate);

            return cToStr;
        }
        return "";
    }

    /*
     *------------------------------------------------
     *    Date type을 Calendar로 변환하는 method
     *------------------------------------------------
     */

    /**
     *	Date(yyyy-mm-dd) -> Calendar
     *	@param	cToDate Date
     *	@return	Calendar
     */
    public static final Calendar dateToCal(Date cToDate) {
        if (cToDate != null) {
            java.util.Calendar dateToCal = java.util.Calendar.getInstance();

            dateToCal.setTime(cToDate);
            dateToCal.add(java.util.Calendar.DATE, 0);
            return dateToCal;
        }
        return null;
    }

    /*
     *------------------------------------------------
     *    Date type을 TimeStamp로 변환하는 method
     *------------------------------------------------
     */

    /**
     *	Date(yyyy-mm-dd) -> TimeStamp
     *	@param	cToDate Date
     *	@return	Timestamp
     */
    public static final Timestamp dateToTimestamp(Date cToDate) {
        if (cToDate != null) {
            Timestamp tsDate = new Timestamp(cToDate.getTime());

            return tsDate;
        }
        return null;
    }

    /*
     *==============================================================================
     * 숫자를 받아 ,를 붙인후 문자로 돌려준다.
     *==============================================================================
     */

    /**
     *  숫자값에 콤마(,)를 찍어 스트링으로 반환한다.
     *  @param	rdData double
     *  @return	String
     */

    public static final String getMoneyType(double rdData) {
        return df.format(rdData);
    }

    /**
     *  숫자값에 콤마(,)를 찍어 스트링으로 반환한다.
     *  @param	rdData float
     *  @return	String
     */

    public static final String getMoneyType(float rdData) {
        return df.format(rdData);
    }

    /**
     *  숫자값에 콤마(,)를 찍어 스트링으로 반환한다.
     *  @param	rdData int
     *  @return	String
     */
    public static final String getMoneyType(int rdData) {
        return df.format(rdData);
    }

    /**
     *  숫자값에 콤마(,)를 찍어 스트링으로 반환한다.
     *  @param	rdData long
     *  @return	String
     */
    public static final String getMoneyType(long rdData) {
        return df.format(rdData);
    }

    /**
     *  숫자값에 콤마(,)를 찍어 스트링으로 반환한다.
     *  @param	rsData String
     *  @return	String
     */
    public static final String getMoneyType(String rsData) {
        String dsData;

        if (rsData == null || rsData.equals("")) {
            dsData = nullCheck(rsData);
        } else {
            if (rsData.length() < 14) {
                java.math.BigDecimal dcData = new java.math.BigDecimal(rsData);

                dsData = df.format(dcData);
            } else {
                dsData = getMoneyTypes(rsData);
            }
        }
        return dsData;
    }

    /**
     * String 자릿수가 14개가 넘어갈때 작동하는 Format 메소드
     * @param rsData String
     * @return String
     */
    public static final String getMoneyTypes(String rsData) {
        StringBuffer strMoneyType = new StringBuffer();
        StringBuffer temp = new StringBuffer();
        String strHeader = new String();
        String strFooter = new String();

        if (rsData != null && !rsData.equals("")) {
            int idxHeader = 0;
            int idxFooter = rsData.length();

            try {
                if (rsData.indexOf('-') != -1) {
                    strMoneyType.append("-");
                    idxHeader = rsData.indexOf('-') + 1;
                }

                if (rsData.indexOf('.') != -1) {
                    idxFooter = rsData.indexOf('.');
                    strFooter = rsData.substring((idxFooter + 1),
                            rsData.length());
                }
                strHeader = rsData.substring(idxHeader, idxFooter);
                int headerLength = strHeader.length();

                if (strHeader.length() > 3) {
                    int divLength = (headerLength / 3);
                    String[] arrayTemp = new String[divLength];

                    for (int i = headerLength; i > 0; i--) {
                        int hl = headerLength % 3;

                        if (hl == 0) {
                            if ((headerLength - i) % 3 == 0) {
                                if ((i - 3) > 0) {
                                    arrayTemp[(i / 3) - 1] = strHeader.substring(
                                            (i - 3), i);
                                } else if ((i - 3) == 0) {
                                    arrayTemp[0] = strHeader.substring(0, 3);
                                }
                            }
                        } else if (hl == 1) {
                            if ((headerLength - i) % 3 == 0) {
                                if ((i - 3) > 0) {
                                    arrayTemp[(i / 3) - 1] = strHeader.substring(
                                            (i - 3), i);
                                }
                            } else if ((headerLength - i) % 3 == 2
                                    && (i - 3) < 0) {
                                temp.append(strHeader.substring(0, 1));
                            }
                        } else if (hl == 2) {
                            if ((headerLength - i) % 3 == 0) {
                                if ((i - 3) > 0) {
                                    arrayTemp[(i / 3) - 1] = strHeader.substring(
                                            (i - 3), i);
                                }
                            } else if ((headerLength - i) % 3 == 1
                                    && (i - 3) < 0) {
                                temp.append(strHeader.substring(0, 2));
                            }
                        }
                    }

                    for (int k = 0; k < divLength; k++) { // Start for k
                        if ((headerLength % 3) != 0 || k != 0) {
                            temp.append(",");
                        }
                        temp.append(arrayTemp[k]);
                    }// End for k
                } else {
                    temp.append(strHeader);
                }
                strMoneyType.append(temp.toString());

                if (strFooter.length() > 0) {
                    strMoneyType.append(".");
                    strMoneyType.append(strFooter);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return strMoneyType.toString();
    }

    // ==============================================================================
    // 문자를 받아 ,를 뺀후 값을 돌려주다.
    // ==============================================================================

    /**
     *  문자값에서 콤마(,)를 삐고 float로 반환
     *  @param	rsStr String
     *  @return	float
     *  @exception NumberFormatException
     */
    public final static float getOnlyNumberFloat(String rsStr)
        throws NumberFormatException {
        if (rsStr != null && !rsStr.equals("")) {
            return  new Float(getOnlyNumberStr(rsStr)).floatValue();
        }
        return 0;
    }

    /**
     *  문자값에서 콤마(,)를 삐고 int 반환
     *  @param	rsStr String
     *  @return	int
     *  @exception NumberFormatException
     */
    public final static int getOnlyNumberInt(String rsStr)
        throws NumberFormatException {
        if (rsStr != null && !rsStr.equals("")) {
            return  new Integer(getOnlyNumberStr(rsStr)).intValue();
        }
        return 0;
    }

    /**
     *  문자값에서 콤마(,)를 삐고 long 반환
     *  @param	rs_str String
     *  @return	long
     *  @exception NumberFormatException
     */
    public final static long getOnlyNumberLong(String rsStr)
        throws NumberFormatException {
        if (rsStr != null && !rsStr.equals("")) {
            return  new Long(getOnlyNumberStr(rsStr)).longValue();
        }
        return 0;
    }

    /**
     *  문자값에서 콤마(,)를 삐고 double 반환
     *  @param	rsStr String
     *  @return	double
     *  @exception NumberFormatException
     */
    public final static double getOnlyNumberDouble(String rsStr)
        throws NumberFormatException {
        if (rsStr != null && !rsStr.equals("")) {
            return  new Double(getOnlyNumberStr(rsStr)).doubleValue();
        }
        return 0.0;
    }

    /**
     *  문자값에서 콤마(,)를 삐고 String 반환
     *  @param	str String
     *  @return	String
     *  @exception NumberFormatException
     */
    public final static String getOnlyNumberStr(String str)
        throws NumberFormatException {
        if (str.equals("")) {
            return "";
        }

        str = str.trim();
        byte[] source = str.getBytes();
        byte[] result = new byte[source.length];
        int j = 0;

        for (int i = 0; i < source.length; i++) {
            if (source[i] == (byte) ',') {
                i++;
            }
            result[j++] = source[i];
        }
        return new String(result).trim();
    }

    /**
     * 스트링을 좌측을 기준으로 일정 크기로 자른다..
     * @param     strString String
     * @param      nLength int
     * @return     String
     */
    public static String strGetLeft(String strString, int nLength) {
        try {
            strString = strString.substring(0, nLength);
        } catch (Exception e) {
            System.out.println(e.toString());
            return null;
        }
        return strString;
    }

    /**
     * 스트링을 우측을 기준으로 일정 크기로 자른다..
     * @param      strString String : 입력스트링
     * @param      nLength int   : 자를 사이즈
     * @return     String
     */
    public static String strGetRight(String strString, int nLength) {
        try {
            strString = strString.substring(strString.length() - nLength, strString.length());
        } catch (Exception e) {
            System.out.println(e.toString());
            return null;
        }
        return strString;
    }

    /**
     * 입력 스트링을 시작과 끝 크기로 자른다.
     * @param      strString String       : input string
     * @param      nStart    int          : start string location
     * @param      nLength   int          : end string location
     * @return     String      strString  : return value
     */
    public static String getMid(String strString, int nStart, int nLength) {
        try {
            strString = strString.substring(nStart, nLength + nStart);
        } catch (Exception e) {
            System.out.println(e.toString());
            return null;
        }
        return strString;
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
            System.out.println(e.toString());
            return null;
        }
        return vResult;
    }

    /**
     * 입력 String에 있는 특정문자를 삭제해준다.
     * @param      strString String      : input String
     * @param      strChar   String      : special character
     * @return     String      vResult   : return vector
     */
    public static String deleteChar(String strString, char strChar) {
        String retStr = "";

        for (int i = 0; i < strString.length(); i++) {
            if (!(strString.charAt(i) == strChar)) {
                retStr += strString.substring(i, i + 1);
            }
        }
        return retStr;
    }

    /*
     *==============================================================================
     * 하이픈을 추가한다.
     *==============================================================================
     */

    /**
     *  실명번호,사업자등록번호,주민번호 하이픈 추가
     *  @param	rs_oriNo String
     *  @return	String
     */
    public static final String addOriNotHyp(String rsOriNo) {
        if (rsOriNo == null || rsOriNo.equals("")) {
            return "";
        }

        if (rsOriNo.length() == 10) {
            return rsOriNo.substring(0, 3) + "-" + rsOriNo.substring(3, 5)
                    + "-" + rsOriNo.substring(5);
        } else if (rsOriNo.length() == 13) {
            return rsOriNo.substring(0, 6) + "-" + rsOriNo.substring(6);
        } else {
            return rsOriNo;
        }
    }

    /**
     *  null을 체크해서 널일경우 공백을 리턴한다.
     *  @param	nullStr String
     *  @return	String
     */
    public static final String nullCheck(String nullStr) {
        if (nullStr != null && !nullStr.equals("")) {
            return nullStr;
        }
        return "";
    }

    /**
     * null을 다른 문자로 변환해 준다.
     * @param nullStr
     * @param rplStr
     * @return String
     */
    public static final String replaceNull(String nullStr, String rplStr) {
        String result = "";

        if (nullStr == null || nullStr.trim().length() < 1) {
            result = rplStr;
        } else {
            result = nullStr;
        }
        return result;
    }

    /**
     * 바꾸고자 하는 스트링의 인덱스 모음을 구한다.
     * @param      sql String
     * @param      word String
     * @return     Vector      tempindexArray
     */
    public static Vector<Integer> getSelectedTextIndex(String sql, String word) {
        int index = 0;
        int fromIndex = 0;
        Vector<Integer> tempIndexArray = new Vector<Integer>();

        do {
            index = sql.indexOf(word, fromIndex);
            if (index != -1) {
                tempIndexArray.add(index);
                fromIndex = index + word.length();
            }
        } while (index != -1);
        return tempIndexArray;
    }

    /**
     * 특정문자를 특정 문자로 바꿔준다.
     * @param      strString     String    : input string
     * @param      strOld        String    :
     * @param      strNew        String
     * @return     Vector      vResult     : return string
     */
    public static String strGetReplace(String strString, String strOld, String strNew) {
        Vector<String> aResult = new Vector<String>();
        String strResult = "";

        try {
            aResult = strGetSplit(strString, strOld);
            for (int i = 0; i < aResult.size(); i++) {
                strResult += aResult.get(i) + strNew;
            }
            strResult = strResult.substring(0,
                    strResult.length() - strNew.length());
        } catch (Exception e) {
            System.out.println(e.toString());
            return null;
        }
        return strResult;
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
            System.out.println(e.toString());
            return null;
        }
        return strResult;
    }

    /**
     * 우편번호 포맷(XXX-XXX)으로 변환해주는 메소드
     * @param cToStr String
     * @return String
     */
    public static String strToPsNo(String cToStr) {
        int iLength = cToStr.length();

        if (cToStr != null && !cToStr.equals("")) {
            StringBuffer cTemp = new StringBuffer();

            cTemp.append(cToStr.substring(0, 3));
            cTemp.append("-");
            cTemp.append(cToStr.substring(3, iLength));
            String rToStr = cTemp.toString();

            return rToStr;
        }
        return "";
    }

    /**
     * '\r'을 <br>로  변환해주는 메소드
     * @param oldString String
     * @return String
     */
    public static String convertToBR(String oldString) {
        StringBuffer newString = new StringBuffer(64);

        if (oldString == null && "".equals(oldString)) {
            return "";
        } else {
            for (int i = 0; i < oldString.length(); i++) {
                if (oldString.charAt(i) == '\r') {
                    newString.append("<br>");
                } else {
                    newString.append(oldString.charAt(i));
                }
            }
        }
        return newString.toString();
    }

    /**
     * & 를 HTML &amp; 로 변환
     * @param strString
     * @return String
     */
    private static String convertToAMP(String strString) {
        StringBuffer strResult = new StringBuffer();

        if (strString == null && "".equals(strString)) {
            return "";
        } else {
            for (int i = 0; i < strString.length(); i++) {
                if (strString.charAt(i) == '&') {
                    strResult.append("&amp;");
                } else {
                    strResult.append(strString.charAt(i));
                }
            }
        }
        return strResult.toString();
    }

    /**
     * < 를 &lt; 로 변환
     * @param strString
     * @return String
     */
    private static String convertToLT(String strString) {
        StringBuffer strResult = new StringBuffer();

        if (strString == null && "".equals(strString)) {
            return "";
        } else {
            for (int i = 0; i < strString.length(); i++) {
                if (strString.charAt(i) == '<') {
                    strResult.append("&lt;");
                } else {
                    strResult.append(strString.charAt(i));
                }
            }
        }
        return strResult.toString();
    }

    /**
     * >를 &gt;로 변환
     * @param strString
     * @return String
     */
    private static String convertToGT(String strString) {
        StringBuffer strResult = new StringBuffer();

        if (strString == null && "".equals(strString)) {
            return "";
        } else {
            for (int i = 0; i < strString.length(); i++) {
                if (strString.charAt(i) == '>') {
                    strResult.append("&gt;");
                } else {
                    strResult.append(strString.charAt(i));
                }
            }
        }
        return strResult.toString();
    }

    /**
     * " 를 &quot; 로 변환
     * @param strString
     * @return String
     */
    private static String convertToQUOT(String strString) {
        StringBuffer strResult = new StringBuffer();

        if (strString == null && "".equals(strString)) {
            return "";
        } else {
            for (int i = 0; i < strString.length(); i++) {
                if (strString.charAt(i) == '\"') {
                    strResult.append("&quot;");
                } else {
                    strResult.append(strString.charAt(i));
                }
            }
        }
        return strResult.toString();
    }

    /**
     * ' 를 &apos; 로 변환
     * @param strString
     * @return String
     */
    public static String convertToAPOS(String strString) {
        StringBuffer strResult = new StringBuffer();

        if (strString == null && "".equals(strString)) {
            return "";
        } else {
            for (int i = 0; i < strString.length(); i++) {
                if (strString.charAt(i) == '\'') {
                    strResult.append("&apos;");
                } else {
                    strResult.append(strString.charAt(i));
                }
            }
        }
        return strResult.toString();
    }

    /**
     * String을 XML로 변환하기 위해 특수문자를 XML 형식으로 변환
     * @param strString
     * @return String
     */
    public static String convertToXML(String strString) {
        String result = convertToAPOS(
                convertToQUOT(convertToGT(convertToLT(convertToAMP(strString)))));

        return result;
    }
    
	/**
	 * '\r'을 ""로  변환해주는 메소드
	 * @param oldString String
	 * @return String
	 */
	public static String convertToempty(String oldString) {
		StringBuffer newString = new StringBuffer();

		if (oldString == null && "".equals(oldString)) {
			return "";
		} else {
			for (int i = 0; i < oldString.length(); i++) {
				if (oldString.charAt(i) == '\r') {
					newString.append(" ");
				} else {
					newString.append(oldString.charAt(i));
				}
			}
		}
		return newString.toString();
	} 
	
	public static String convertToempty2(String oldString) {
		StringBuffer newString = new StringBuffer();

		if (oldString == null && "".equals(oldString)) {
			return "";
		} else {
			for (int i = 0; i < oldString.length(); i++) {
				if (oldString.charAt(i) == '\n') {
					newString.append("");
				} else {
					newString.append(oldString.charAt(i));
				}
			}
		}
		return newString.toString();
	} 

    /*
     *==============================================================================
     * 하이픈을 모두 없앤다.
     *==============================================================================
     */

    /**
     * float 타입의 변수값을 소수점 이하를 자르고 long 형으로 반환한다.
     * @param rsArg
     * @return long
     */
    public final static long deleteDecimalPoint(float rsArg) {
        DecimalFormat ldf = new DecimalFormat("000");

        return Long.parseLong(ldf.format(rsArg));
    }

    /**
     *  double 타입의 변수값을 소수점 이하를 자르고 long형으로 반환한다.
     * @param rsArg
     * @return long
     */
    public final static long deleteDecimalPoint(double rsArg) {
        DecimalFormat ldf = new DecimalFormat("000");

        return Long.parseLong(ldf.format(rsArg));
    }

    /**
     * String 숫자형 변수값을 소수점 이하를 잘라서 String으로 반환한다.
     * @param rsArg
     * @return String
     */
    public final static String deleteDecimalPoint(String rsArg) {
        DecimalFormat ldf = new DecimalFormat("000");

        return ldf.format(Double.parseDouble(rsArg));
    }

    /**
     *  하이픈을 제거한다.
     *  @param	rsTmp String
     *  @return	String
     */
    public static final String deleteHyp(String rsTmp) {
        if (rsTmp == null || rsTmp.equals("")) {
            return "";
        }

        if (rsTmp.indexOf("-") == -1) {
            return rsTmp;
        }
        String fsRetData = "";

        while (rsTmp.indexOf("-") != -1) {
            fsRetData = fsRetData + rsTmp.substring(0, rsTmp.indexOf("-"));
            rsTmp = rsTmp.substring(rsTmp.indexOf("-") + 1);
        }
        return fsRetData + rsTmp;
    }

    /**
     *  원하는 만큼 콤마를 찍는다.
     *  @param	rsData String	int	count	int	length1
     *  @param count
     *  @param length1
     *  @return	String
     */
    public static final String stringSubstring(String rsData, int count, int length1) {
        String fsTmp = "";

        for (int nIndex = 0; nIndex < count; nIndex++) {
            fsTmp = "," + rsData.substring(length1 - 3, length1) + fsTmp;
            length1 = length1 - 3;
        }
        return  rsData.substring(0, length1) + fsTmp;
    }

    // 통화코드에 따른 금액보여주기. KRW인 경우 소숫점이하를 보여주지 않게한다.
    public static final String getTrMoneyType(String rsData, String curC) {
        String dsData;

        if (rsData == null || rsData.equals("")) {
            dsData = nullCheck(rsData);
        } else {
            if (rsData.length() < 14) {
                java.math.BigDecimal dcData = new java.math.BigDecimal(rsData);

                dsData = df.format(dcData);
                if (!curC.equals("KRW")) {
                    int cnt = dsData.indexOf(".");

                    if (cnt == -1) {
                        dsData = dsData + ".00";
                    } else if (dsData.substring(cnt + 2).equals("")) {
                        dsData = dsData + "0";
                    }
                }
            } else {
                dsData = getMoneyTypes(rsData);
                if (!curC.equals("KRW")) {
                    int cnt = dsData.indexOf(".");

                    if (cnt == -1) {
                        dsData = dsData + ".00";
                    } else if (dsData.substring(cnt + 2).equals("")) {
                        dsData = dsData + "0";
                    }
                }
            }
        }
        return dsData;
    }

    /**
     * double 타입의 변수값을 지정된 소수점 위치의 이하값을 rounding하고 double 형으로 반환한다.
     * scale은 양의 정수이며 소수점 자리수를 의미한다.
     * float 형도 사용가능하다.
     * @param rsArg
     * @param scale
     * @return double
     * @exception ArithmeticException
     */
    public final static double roundHalfUp(double rsArg, int scale) throws ArithmeticException {
        BigDecimal returnBigDec = null;
        BigDecimal tmpBigDec = new BigDecimal(rsArg);

        returnBigDec = tmpBigDec.setScale(scale, BigDecimal.ROUND_HALF_UP);
        return returnBigDec.doubleValue();
    }
    
	/**
	 * boolean을 String으로 변환
	 * @param boolean b
	 * @return String
	 */
	public static String booleanToStr(boolean b) {
		String rtStr = null;
		
		if (b) rtStr = "Y";
		else rtStr = "N";
		
		return rtStr;	
	}
	
	/**
	 * String을 boolean으로 변환
	 * @param String str
	 * @return boolean
	 */
	public static boolean strToBoolean(String str) {
		boolean rtBol = false;
		
		if (str.equals("Y")) rtBol = true;
		else rtBol = false;
		
		return rtBol;	
	}
	
	public static String intTo6Str(int no){
		StringBuffer rtStr = null;
		
		if (no < 10){
			rtStr = new StringBuffer("00000").append(Integer.toString(no));	
		} else if (no < 100){
			rtStr = new StringBuffer("0000").append(Integer.toString(no));	
		} else if (no < 1000){
			rtStr = new StringBuffer("000").append(Integer.toString(no));	
		} else if (no < 10000){
			rtStr = new StringBuffer("00").append(Integer.toString(no));	
		} else if (no < 100000){
			rtStr = new StringBuffer("0").append(Integer.toString(no));	
		} else {
			rtStr = new StringBuffer(Integer.toString(no));	 
		}
		
		return rtStr.toString();
	}
	
	public static String intTo5Str(int no){
		StringBuffer rtStr = null;
	
		if (no < 10){
			rtStr = new StringBuffer("0000").append(Integer.toString(no));	
		} else if (no < 100){
			rtStr = new StringBuffer("000").append(Integer.toString(no));	
		} else if (no < 1000){
			rtStr = new StringBuffer("00").append(Integer.toString(no));	
		} else if (no < 10000){
			rtStr = new StringBuffer("0").append(Integer.toString(no));	
		} else {
			rtStr = new StringBuffer(Integer.toString(no));	 
		}
	
		return rtStr.toString();
	}	
	
	public static String intTo4Str(int no){
		StringBuffer rtStr = null;
	
		if (no < 10){
			rtStr = new StringBuffer("000").append(Integer.toString(no));	
		} else if (no < 100){
			rtStr = new StringBuffer("00").append(Integer.toString(no));	
		} else if (no < 1000){
			rtStr = new StringBuffer("0").append(Integer.toString(no));	
		} else {
			rtStr = new StringBuffer(Integer.toString(no));	 
		}
	
		return rtStr.toString();
	}	
	
	public static String intTo3Str(int no){
		StringBuffer rtStr = null;
		
		if (no < 10){
			rtStr = new StringBuffer("00").append(Integer.toString(no));	
		} else if (no < 100){
			rtStr = new StringBuffer("0").append(Integer.toString(no));	
		} else {
			rtStr = new StringBuffer(Integer.toString(no));	 
		}
		
		return rtStr.toString();
	}	
	
	public static String makeString(int tLen, String inNo)
	{
		int inNoLen = inNo.length();
		int loopCnt = tLen - inNoLen;
		
		StringBuffer newNo = new StringBuffer(inNo);
		for (int i=0; i < loopCnt; i++)
		{
			newNo = newNo.insert(0, "0");
		}
		
		return newNo.toString();
	}
}