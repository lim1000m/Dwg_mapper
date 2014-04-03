// Grid 조회 관련 공통 Js
var params = {};
    params["method"]    = "gridXml";

/***********************************************************************
  내    용	: 기본윈도우 오픈
  파라미터	: 1. url - 파일 위치 정보
          2. ls_width  - 창 넓이 값
          3. ls_heigth - 창 높이 값
          4. flag - 자신창의 이름
  리 턴 값	: 없음
  참고사항	:
***********************************************************************/
function gf_openWindow(url, ls_width, ls_height , windowName) {
	var li_top = (window.screen.height - ls_height) / 2;
 	var li_left = (window.screen.width - ls_width) / 2;

    var position = 'width=' + ls_width + ',height=' + ls_height + ',top=' + li_top + ',left=' + li_left;
    var winset = 'resizable=no,menubar=no,scrollbars=no,titlebar=no,toolbar=no,directories=no,' + position;
    
    window.open(url, windowName, winset);
    //open(url,'_blank', position );
    
}

/************************************************
 내      용	: flash 삽입
 파라미터	: src 		- 플래쉬파일의 저장경로
          width 	- 넓이
          height 	- 높이
          tr		-
 리 턴 값	: 없음
 참고사항	: 
*************************************************/
function gf_flash(src, width, height, tr){
    object = '';
    object += '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="param" width="'+width+'" height="'+height+'">';
    object += '<param name="movie" value="'+src+'">';
    if(tr=='1'){
         object += '<param name="wmode" Value="Transparent">';
    }
    object += '<embed src="'+src+'" quality="high" ';    
    if(tr=='1'){
        object += ' wmode="transparent" ';
    }
    object += ' bgcolor="#ffffff" menu="false" width="'+width+'" height="'+height+'" swliveconnect="true" id="param" name="param" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>';
    object += '</object>';
    document.write(object);
}

/************************************************
  내      용	: 현재시간을 페이지에 표시한다.
  파라미터	: 없음
  리 턴 값	: 없음
  참고사항	: DIV 객체를 선언하여 처리해야함.
*************************************************/
function gf_timeTicker() { 
	var ap, hours, minutes, seconds; 
	
	var today = new Date(); 
	var intHours = today.getHours(); 
	var intMinutes = today.getMinutes(); 
	var intSeconds = today.getSeconds(); 
	var intYear = today.getYear(); 
	var intMonth = today.getMonth() + 1; 
	var intDate = today.getDate(); 

 	if (intHours == 0) { 
		hours = intHours; 
		ap = "AM"; 
	} else if (intHours < 12) { 
		hours = intHours;
		ap = "AM"; 
	} else if (intHours == 12) { 
		hours = "12"; 
		ap = "PM"; 
	} else { 
		intHours = intHours - 12;
		hours = intHours; 
		ap = "PM"; 
	} 
	
	hours = gf_timeTickerStrChange(hours);
	minutes = gf_timeTickerStrChange(intMinutes); 
	seconds = gf_timeTickerStrChange(intSeconds); 

 	year = intYear; 
	month = gf_timeTickerStrChange(intMonth); 
	date = gf_timeTickerStrChange(intDate); 
	
	
	document.getElementById("div_time_ticker").innerText = year + " / " + month + " / " + date +  "   " + hours + ":" + minutes + ":" + seconds + " (" + ap + ")"; 
	
	window.setTimeout("gf_timeTicker();", 1000); 
} 

/**************************************************
  내      용	: 파라미터가 10보다 작으면 앞자리에 '0'을 붙인 후 리턴
  파라미터	: param
  리 턴 값	: 
  참고사항	: 
***************************************************/
function gf_timeTickerStrChange(param){
	if(param < 10)	return "0" + param;
	else	return param;
}

/**************************************************
내      용	: 파라미터가 100보다 작으면 앞자리에 '00'을 붙인 후 리턴
파라미터	: param
리 턴 값	: 
참고사항	: 밀리세컨드 계산시 사용
***************************************************/
function gf_timeTickerStrChange2(param){
	if(param < 100) {
		if(param < 10) {
			return "00" + param;
		}
		else {
			return "0" + parma;
		}
	}
	else 
		return param;
}

/************************************************
  내      용	: 현재시간을 페이지에 표시한다.
  파라미터	: 없음
  리 턴 값	: 없음
  참고사항	: 
*************************************************/
function gf_getRealtime() { 
	var ap, hours, minutes, seconds, milliseconds; 
	
	var today = new Date(); 
	var intHours = today.getHours(); 
	var intMinutes = today.getMinutes(); 
	var intSeconds = today.getSeconds();
	var intMilliSeconds = today.getMilliseconds();
	var intYear = today.getYear(); 
	var intMonth = today.getMonth() + 1; 
	var intDate = today.getDate(); 

	hours = gf_timeTickerStrChange(intHours);
	minutes = gf_timeTickerStrChange(intMinutes); 
	seconds = gf_timeTickerStrChange(intSeconds); 
	milliseconds = gf_timeTickerStrChange2(intMilliSeconds);

 	year = intYear; 
	month = gf_timeTickerStrChange(intMonth); 
	date = gf_timeTickerStrChange(intDate); 
	
	return year + "/" + month + "/" + date +  " " + hours + ":" + minutes + ":" + seconds + ":" + milliseconds;  
} 
/**************************************************
  내      용	: SelectBox에 Option 생성
  파라미터	: obj	: selectbox 객체
  		  index	: 추가될 index 위치
  		  text	: 화면에 보여질 텍스트
  		  value	: Option의 value
  리 턴 값	: 
  참고사항	: 
***************************************************/
function gf_setSelectOption(obj, index, text, value){
	obj.options[index] = new Option(text, value);
}

/**************************************************
  내      용	: SelectBox에 Option 생성
  파라미터	: obj	: selectbox 객체
  		  param	: 비교값
  리 턴 값	: 
  참고사항	: 같은값이 있으면 false
***************************************************/
function gf_getOptionsCheck(obj, param){
	for(var i=0; i < obj.length; i++)
		if(obj.options[i].value == param)
			return false;
	
	return true;
}

/**************************************************
  내      용	: SelectBox에 Option 선택된 상태로 만들기
  파라미터	: obj	: selectbox 객체
  리 턴 값	: 
  참고사항	: 
***************************************************/
function gf_setOptionsSelected(obj){
	for(var i=0; i < obj.length; i++)
		obj.options[i].selected = true;
}

/**************************************************************
  내    용	: 문자 입력를 받아 "/", ":" , " " 삭제 후 리턴 처리.
  파라미터	: varStr [ 날짜형식문자(예:2006/01/01 11:11:11) ]
  리 턴 값	: varReturnStr [ 날짜형식문자 (예:20060101111111) ]
  참고사항	:
***************************************************************/
function gf_strToCharDel( varStr ) {
    var varLength = varStr.length ;

    varReturnStr = "" ;

    for ( var inx = 0 ; inx < varLength ; inx++ ) {
        if ( varStr.substring( inx, inx+1 ) != "/")
            if( varStr.substring( inx, inx+1 ) != " ")
                if( varStr.substring( inx, inx+1 ) != ":")
                    varReturnStr = varReturnStr + varStr.substring( inx, inx+1 ) ;
    }

    return varReturnStr;
}

/***********************************************************************
  내    용 	: 그리드에 메시지 출력
  파라미터 : 1. gridID - 그리드 아이디
          2. msg - 출력할 메시지
  리 턴 값 	: 없음
  참고사항 : 그리드아이디emptyMsg의 아이디를 다른 태그에 부여하지 말 것!
***********************************************************************/
function gf_showGridMsg(gridID, msg){
 	jqGridID = "#" + gridID ;
 	jQuery(jqGridID + "emptyMsg").remove();
 	
 	if(jQuery(jqGridID).getGridParam("records") == 0){
  		jQuery(jqGridID).parent().append("<div id='" + gridID + "emptyMsg' style=\"font-size:'8pt';text-align:center;padding:'10px';height:'auto'\">" + msg + "<div>");
 	}
}

/***********************************************************************
  내    용 	: 빈 공백으로 생성된 그리드의 TD 태그에 title 속성 제거
  파라미터 : 
  리 턴 값 	:
  참고사항 : 
***********************************************************************/
function gf_tdTitleDel(){
	jQuery("td").each(function(){
		if( jQuery(this).attr("title") == " ")
			jQuery(this).removeAttr("title");
	});
}

/***********************************************************************
  내    용 	: 빈 공백으로 생성된 그리드를 선택했을경우 TR 태그에 selected CSS 제거
  파라미터 : rowid : 선택한 TR ID
  리 턴 값 	:
  참고사항 : 
***********************************************************************/
function gf_trSelectedCssDel(rowid){
	if(jQuery("#" + rowid + " > td")[0].innerText == " ")
		jQuery("#" + rowid).removeClass("selected");
}


/**************************************
  내    용	: 수신목록 제거(전체)
  파라미터	: obj : 수신목록selectbox
  리 턴 값	: 
  참고사항	: 전송매체 변경시 수신목록을 제거한다
***************************************/
function gf_rcvLstAllDel(obj){
	while(obj.childNodes.length > 0) {
 		obj.removeChild(obj.childNodes[0]);
	}
}

/**************************************
  내    용	: 수신목록 제거(개별)
  파라미터	: obj : 수신목록selectbox
  리 턴 값	: 
  참고사항	: 수신목록 option 더블클릭시 삭제 
***************************************/
function gf_rcvLstDbClickDel(obj) {
	for(var i = 0; i < obj.length; i++) {
 		if (obj.options[i].selected == true) {
 			obj.remove(i);
 		}
	}
}

/**************************************
  내    용	: 숫자인치 체크
  파라미터	: input : 파라미터
  리 턴 값	: 
  참고사항	: 
***************************************/
function gf_isNumCheck(input) {
    var chars = "0123456789";
    return gf_containsCharsOnly(input, chars);
}

/******************************************
  내    용	: 입력값과 비교할 문자들 입력받아 체크한다.
  파라미터	: input : 파라미터
  		  chars : 체크항목
  리 턴 값	: 
  참고사항	: 
*******************************************/
function gf_containsCharsOnly(input,chars) {
    for (var inx = 0; inx < input.length; inx++) {
       if (chars.indexOf(input.charAt(inx)) == -1)
           return false;
    }
    return true;
}


/**********************************************
  내    용	: 평시정보관리 화면 오픈
  파라미터	: scr_pst : 화면위치
  리 턴 값	: 
  참고사항	:
**********************************************/
function gf_mntrScrMgmtOpen(scr_pst){

	var params = "?scr_pst=" + scr_pst + "&openFlag=MNTR";
	
	gf_openWindow("/jsp/conf/mntrScrSet/mntrScrMgmt.jsp" + params, "1040", "450", 'mntStctLstWindow');

}

/**********************************************
  내    용	: 화면 리로딩
  파라미터	: fileNm : 파임명
  		  svc_info_nm : 화면명
  		  scr_pst : 화면위치
  		  wideDvn : 와이드구분
  리 턴 값	: 
  참고사항	:
**********************************************/
function gf_mntrScrReload(fileNm, svc_info_nm, scr_pst){
	if( wideDvn == "WIDE")
		document.location.href = "/jsp/mntrInfo/" + fileNm + "?scr_pst=" + scr_pst + "&svc_info_nm=" + svc_info_nm;
	else
		document.location.href = "/jspNW/mntrInfo/" + fileNm + "?scr_pst=" + scr_pst + "&svc_info_nm=" + svc_info_nm;
}

/**************************************************
  내      용	: Object value 가 널이거나 공백일경우 true 리턴
  파라미터	: obj : Document element
  리 턴 값	: 
  참고사항	: 
***************************************************/
function gf_nullchk(obj){
	if( obj.value == null || obj.value == "" )
		return true;
	else
		return false;
}

/**************************************************
  내      용	: 입력글자수 체크하여 해당 바이트수만 남기고 지우기
  파라미터	: inputStr : 문자열
  리 턴 값	: 
  참고사항	: 
***************************************************/
function gf_getByteLength(inputStr) {
    var byteLength = 0;
    
    for (var inx = 0; inx < inputStr.length; inx++) {
        var oneChar = escape(inputStr.charAt(inx));
        
        if ( oneChar.length == 1 ) {
            byteLength ++;
            
        }else if (oneChar.indexOf("%u") != -1) {
            byteLength += 2;
            
        }else if (oneChar.indexOf("%") != -1) {
            byteLength += oneChar.length/3;
        }
    }
    
    return byteLength;
}

/***********************************************************************
  내      용	: 상황발생, 고장발생 통계화면에서 날짜값이 입력되었을 경우 화면에 알려주는 함수
  파라미터	: 
  리 턴 값	: 
  참고사항	: 통계화면에서는 반드시 전역변수 scrChk = "stsInfo" 를 선언해줘야함 
***********************************************************************/
var scrChk = "";
function gf_dateSetAlarm(obj){
	if( scrChk != "")
		uf_setPeriod(obj);
}

/*************************************
 * 내	용 	: NULL 값 체크
 * 파라미터 	: 1. inputStr : 입력값
 * 리 턴 값 	: true, false 
 * 참고사항 	:
**************************************/
function gf_nullChk( inputStr ){
	if( inputStr == '' ) return true;
	else return false;
}

//////////////////////////////////////////////////////////////////////////////
//                           사용자 입력폼 체크 함수 시작                                                  //
//////////////////////////////////////////////////////////////////////////////
/****************************************************************************
  내    용	: 입력값이 특정 문자(chars)만으로 되어있는지 체크
                    특정 문자만 허용하려 할 때 사용
  파라미터	: str :입력값
  리 턴 값	:
  참고사항	: 
 ***************************************************************************/
function gf_hasContainsCharsChk(str, chars) {
    for (var inx = 0; inx < str.length; inx++) {
       if (chars.indexOf(str.charAt(inx)) == -1)
           return false;
    }
    return true;
}

/**************************************************
  내      용	: 날짜 형식 체크
  파라미터	: str : 체크데이터
  리 턴 값	: 
  참고사항	: true : 올바른 형식
***************************************************/
function gf_dateFormatValid(str){
	if(!gf_isNumDashSlash(str)){	//문자열에 숫자와 / - 만 있는지 확인
		return false;
	}
	var splited = str.split("/");
	if(splited.length == 1){
		splited = str.split("-");
	}
	if(splited.length <= 1){
		return false;
	}else if(splited.length != 3){
		return false;
	}
	strYear = new String(splited[0]);
	strMonth = new String(splited[1]);
	strDay = new String(splited[2]);
	
	if(strYear.length != 4 || strMonth.length != 2 || strDay.length != 2){
		return false;
	}else if(Number(strMonth) < 1 || Number(strMonth) > 12){
		return false;
	}else if(Number(strDay) < 1 || Number(strDay) > 31){
		return false;
	}
	
	return true;
}


// 입력값이 숫자, -, . 으로 되어있는지 체크
function gf_isNumDashSlash(str) {
    var chars = "0123456789-/";
    return cf_hasContainsCharsChk(str,chars);
}

/****************************************************************
 * 내	용 	: 그리드에 메시지 출력
 * 파라미터 	: 1. gridID - 그리드 아이디
 * 			  2. msg - 출력할 메시지
 * 리 턴 값 	: 
 * 참고사항 	: 그리드아이디emptyMsg의 아이디를 다른 태그에 부여금지
*****************************************************************/
function cf_showGridMsg(gridID, msg){
	jqGridID = "#" + gridID ;
	jQuery(jqGridID + "emptyMsg").remove();
	
	if(jQuery(jqGridID).getGridParam("records") == 0){
		jQuery(jqGridID).parent().append("<div id='" + gridID + "emptyMsg' style=\"font-size:'8pt';text-align:center;padding:'10px';height:'auto'\">" + msg + "<div>");
	}
}

/**************************************************************
 * 내    용: 문자 입력를 받아 "-","/", ":" , " " 삭제 후 리턴 처리.
 * 파라미터: varStr [ 날짜형식문자(예:2006/01/01 11:11:11) ]
 * 리 턴 값: varReturnStr [ 날짜형식문자 (예:20060101111111) ]
 * 참고사항:
***************************************************************/
function cf_strToCharDel( varStr ) {
  var varLength = varStr.length ;

  varReturnStr = "" ;

  for ( var inx = 0 ; inx < varLength ; inx++ ) {
	  if ( varStr.substring( inx, inx+1 ) != "-")
		  if ( varStr.substring( inx, inx+1 ) != "/")
			  if( varStr.substring( inx, inx+1 ) != " ")
				  if( varStr.substring( inx, inx+1 ) != ":")
					  varReturnStr = varReturnStr + varStr.substring( inx, inx+1 ) ;
  }

  return varReturnStr;
}

/****************************************************************
 * 내	용 	: 입력글자수 체크
 * 파라미터 	: 1. obj : 입력폼객체
 * 			  2. byt : 입력을 제한할 바이트
 * 리 턴 값 	: 
 * 참고사항 	: 
*****************************************************************/
function cf_msgLenChk(obj, byt){
	var str, msg;
 	var len = 0;
 	var temp;
 	var count = 0;
	msg = obj.value;

 	str = new String(msg);
 	len = str.length;

 	for (k=0 ; k<len ; k++){
 		temp = str.charAt(k);
  	  
 		if (escape(temp).length > 4) {
 			count += 2;
     	}
 		else if (temp == '\r' && str.charAt(k+1) == '\n') { 	// \r\n일 경우
 			count += 2;
 		}
 		else if (temp != '\n') {
 			count++;
 		}
 	}

	if(count > byt) {
		obj.focus();
		return false;
	}

		return true; 
}
/****************************************************************
 * 내	용 	: 입력값이 숫자로 되어있는지 체크
 * 파라미터 	: 1. str : 입력문자열
 * 리 턴 값 	: 
 * 참고사항 	: 
*****************************************************************/
function cf_isNumber(str) {
    var chars = "0123456789";
    return cf_hasContainsCharsChk(str, chars);
}
/****************************************************************************
내    용	: 입력값이 특정 문자(chars)만으로 되어있는지 체크
                  특정 문자만 허용하려 할 때 사용
파라미터	: str :입력값
리 턴 값	:
참고사항	: 
***************************************************************************/
function cf_hasContainsCharsChk(str, chars) {
	for (var inx = 0; inx < str.length; inx++) {
		if (chars.indexOf(str.charAt(inx)) == -1)
			return false;
	}
	
	return true;
}
/****************************************************************
 * 내	용 	: 입력값이 알파벳대문자 체크
 * 파라미터 	: 1. str : 입력문자열
 * 리 턴 값 	: 
 * 참고사항 	: 
*****************************************************************/
function cf_isAlphabetUpper(str) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    return cf_hasContainsCharsChk(str, chars);
}

/****************************************************************
 * 내 용  : 입력값이 알파벳인지 체크
 * 파라미터  : 1. str : 입력문자열
 * 리 턴 값  : 
 * 참고사항  : 
*****************************************************************/
function cf_isAlphabet(str) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
    return cf_hasContainsCharsChk(str, chars);
}


/**************************************************
내 용 : 새로 고침 방지 & 엔터 체크
파라미터 : 1. obj : 체크 데이터 , 2. byt : 최대 길이값 		
리 턴 값 :
참고사항 : true : 올바른 형식
***************************************************/
function cf_keycheck(){
	if (event.keyCode == 13){		
		uf_search();
	return false;
	}
}

/**************************************************
내 용 : 이미지 파일 형식 체크
파라미터 : number : 체크데이터
리 턴 값 :
참고사항 : true : 올바른 형식
***************************************************/
function cf_imgFileValid(file){
	//문자열구조 체크 
	/* '/^' ~ '$/' 초기화  시작을 알리는 문구
	 * (1|2)? null or 1 또는 2로 시작하는가? 
	 * \d? 다음문자가 숫자냐? 
	 * \d[.](1|2)? 다음에 점이오고 1도는 2로 시작하느냐? 
	 * {3} 위 패턴이 3개 존재
	 * test() 해당 패턴이 존재하는지 보고 true or false 리턴 
	 * d{2,3} 숫자형식의 2자리또는 3자리 
	 */
//var expUrl = /^(http\:\/\/)?((\w+)[.])+(asia|biz|cc|cn|com|de|eu|in|info|jobs|jp|kr|mobi|mx|name|net|nz|org|travel|tv|tw|uk|us)(\/(\w*))*$/i;
	
   var expUrl = /^((\w+)[.])+(jpg|png|bmp|gif)(\/(\w*))*$/;
   return expUrl.test(file);
}
/**************************************************
내 용 : IP 형식 체크
파라미터 : ip : 체크데이터
리 턴 값 :
참고사항 : true : 올바른 형식
***************************************************/
function cf_ipValid(ip){
	var dotLen = ip.split(".");			//'.'으로 구분하여 ip를 쪼갬 
	
	if(dotLen.length != 4)		//ip가 4개로 구분되지 않은 경우 
		return false;
	
	//숫자 유효성 체크
	for(i = 0; i < dotLen.length; i++){
		if( dotLen[i] < 0 || dotLen[i] > 255 )
		return false;
	}	
	
	//문자열구조 체크 
	/* '/^' ~ '/' 초기화  시작을 알리는 문구
	 * (1|2)? null or 1 또는 2로 시작하는가? 
	 * \d? 다음문자가 숫자냐? 
	 * \d[.](1|2)? 다음에 점이오고 1도는 2로 시작하느냐? 
	 * {3} 위 패턴이 3개 존재
	 * test() 해당 패턴이 존재하는지 보고 true or false 리턴 
	 */
	var expUrl = /^(1|2)?\d?\d([.](1|2)?\d?\d){3}$/;  //패턴
    return expUrl.test(ip);

}

/****************************************************************
 * 내	용 	: 문자열 내에 있는 모든 공백제거
 * 파라미터 	: 1. str : 입력문자열
 * 리 턴 값 	: 
 * 참고사항 	: 
*****************************************************************/
function trim(str){
	//정규 표현식을 사용하여 화이트스페이스를 빈문자로 전환
	str = str.replace(/^s*/,'').replace(/s*$/, '');
	return str; //변환한 스트링을 리턴.
} 
/****************************************************************
 * 내	용 	: 입력값이 숫자 체크(음수포함)
 * 파라미터 	: 1. str : 입력문자열
 * 리 턴 값 	: 
 * 참고사항 	: 
*****************************************************************/
function cf_isNumberIncludeNegative(str) {
    var chars = "1234567890.";
    idx=0;
    if(str.charAt(0) == '-'){idx++;}
	    for(idx; idx<str.length; idx++){
	        if (chars.indexOf(str.charAt(idx)) == -1)
	            return false;
	    }
    return true;
}

/****************************************************************
 * 내	용 	: 입력값이 숫자와 Dot(.) 체크
 * 파라미터 	: 1. str : 입력문자열
 * 리 턴 값 	: 
 * 참고사항 	: 
*****************************************************************/
function cf_isNumberDot(str) {
    var chars = "1234567890.";
    return cf_hasContainsCharsChk(str, chars);
}

/****************************************************************
 * 내	용 	: 입력값이 숫자와 Dot(.) 체크
 * 파라미터 	: 1. str : 입력문자열
 * 리 턴 값 	: 
 * 참고사항 	: 
*****************************************************************/
function cf_isNumberDoc(str) {
    var chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return cf_hasContainsCharsChk(str, chars);
}
/****************************************************************
 * 내	용 	: 문자열내 숫자빼고 모두 지우기
 * 파라미터 	: 1. str : 입력문자열
 * 리 턴 값 	: 
 * 참고사항 	: 
*****************************************************************/
function gf_remainNumOnly(str){
	cpyStr = "";
	var chars = "/:;-";
	for(idx=0; idx<str.length; idx++){
		if (chars.indexOf(str.charAt(idx)) == -1){
			cpyStr += str.charAt(idx);
		}
	}
	return cpyStr;
}

/****************************************************************
 * 내	용 	: 문자열내 숫자빼고 모두 지우기
 * 파라미터 	: 1. str : 입력문자열
 * 리 턴 값 	: 
 * 참고사항 	: 
*****************************************************************/
function cf_remainNumOnly(str){
	cpyStr = "";
	var chars = "/:;-";
	for(idx=0; idx<str.length; idx++){
		if (chars.indexOf(str.charAt(idx)) == -1){
			cpyStr += str.charAt(idx);
		}
	}
	return cpyStr;
}
/**************************************************
내      용	: IP 형식 체크
파라미터	: ip : 체크데이터
리 턴 값	: 
참고사항	: true : 올바른 형식
***************************************************/
function gf_IPValid(ip){
   var dotLen = ip.split(".");
   
   if(dotLen.length != 4)
   	return false;
   	
   for(i = 0; i < dotLen.length; i++){
   	if( dotLen[i] < 0 || dotLen[i] > 255 )
   		return false; 
   }
   
   return true;
}

/**************************************************
내      용	: 이메일 형식 체크
파라미터	: obj : 입력폼객체
리 턴 값	: 
참고사항	: true : 올바른 형식
***************************************************/
function gf_emailValid(obj) {
  var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
  
  if (obj.value.search(format) != -1) 
      return true; 	
  
  return false;
}

/****************************************************************
 * 내	용 	: 입력값이 숫자와 Dot(.) 체크
 * 파라미터 	: 1. str : 입력문자열
 * 리 턴 값 	: 
 * 참고사항 	: 
*****************************************************************/
function gf_isNumberDot(str) {
    var chars = "1234567890.";
    return gf_hasContainsCharsChk(str, chars);
}

/**************************************************
내      용	: 입력값이 숫자로 되어있는지 체크
파라미터	: ip : 체크데이터
리 턴 값	: 
참고사항	: true : 올바른 형식
***************************************************/
function gf_isNumber(str) {
    var chars = "0123456789";
    return gf_hasContainsCharsChk(str, chars);
}

/****************************************************************
 * 내	용 	: 입력값이 알파벳, /, _ 인지 체크
 * 파라미터 	: 1. str : 입력문자열
 * 리 턴 값 	: 
 * 참고사항 	: 
*****************************************************************/
function gf_isAlphabetSlashUnderBar(str) {
    var chars = "./_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return gf_hasContainsCharsChk(str, chars);
}

/****************************************************************
 * 내	용 	: 입력값이 알파벳, _ 인지 체크
 * 파라미터 	: 1. str : 입력문자열
 * 리 턴 값 	: 
 * 참고사항 	: 
*****************************************************************/
function gf_isAlphabetUnderBar(str) {
    var chars = "_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return gf_hasContainsCharsChk(str, chars);
}

/****************************************************************
 * 내	용 	: 입력값이 알파벳인지 체크
 * 파라미터 	: 1. str : 입력문자열
 * 리 턴 값 	: 
 * 참고사항 	: 
*****************************************************************/
function gf_isAlphabet(str) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return gf_hasContainsCharsChk(str, chars);
}
/****************************************************************
 * 내	용 	: 입력값이 숫자와 영어로 되어있는지 체크
 * 파라미터 	: 1. str : 입력문자열
 * 리 턴 값 	: 
 * 참고사항 	: 
*****************************************************************/
function cf_isNumberAlphabet(str) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return cf_hasContainsCharsChk(str, chars);
}

/**************************************************
 * 내   용    : SelectBox에 Option 생성
 * 파라미터 : obj   : selectbox 객체
              index : 추가될 index 위치
              text  : 화면에 보여질 텍스트
              value : Option의 value
 * 리 턴 값    : 
 * 참고사항 : 
***************************************************/
function cf_setSelectOption(obj, index, text, value){
    obj.options[index] = new Option(text, value);
}

/**************************************************
 * 내    용   : SelectBox에 Option 생성
 * 파라미터 : obj   : selectbox 객체
              param : 비교값
 * 리 턴 값    : 
 * 참고사항 : 같은값이 있으면 false
***************************************************/
function cf_getOptionsCheck(obj, param){
    for(var i=0; i < obj.length; i++)
        if(obj.options[i].value == param)
            return false;
    
    return true;
}

/*************************************************
 * 내    용 : 메인화면 객체 구하기
 * 파라미터  : 없음
 * 리 턴 값 : 오브젝트
 * 참고사항  :
**************************************************/
function cf_getMain() {
    var vObject = window;
   
    // 메인화면 객체 구하기
    if($.browser.msie) while("object" == typeof(vObject.opener)) vObject = vObject.opener;
    
    return vObject;
}

/*************************************************
 * 내    용   : 화면 권한 체크
 * 파라미터    : 화면아이디, 에러 메시지
 * 리 턴 값    : 화면권한 여부
 * 참고사항    :
**************************************************/
function cf_getActh(scrId, msg) {
    var vObject = cf_getMain(); // Window or Opener
    var rtn = false;
    
    vObject = vObject.top.aAuthList;
    
    for(var i=0;i<vObject.length;i++){
        if(vObject[i] == scrId){
            rtn = true;
            break;
        }
    }
    if(!rtn){
        alert(msg);
    }
    return rtn;
}

/*************************************************
 * 내    용   : SelectBox 설정
 * 파라미터     : rtnMsg : 조회값
 * 리 턴 값    :
 * 참고사항     :
**************************************************/
function cf_setSelectBoxClear(obj,msg){
    options = "<option value=0>&#45;&#45;&#45;" +msg+"&#45;&#45;&#45;</option>\n";
   // 그룹코드 변경시 일반코드 selectbox 세팅
    jQuery("#"+obj).html(options);
}

/**************************************
 * 내    용  : 글자 자리수 체크
 * 파라미터  : obj, msg 
 * 리 턴 값  : 
 * 참고사항  : obj-OnKeyUp 이벤트에 this로 던져줌, msg-화면에 뿌려줄 메시지
***************************************/
function cf_maxlength(obj,msg){
    var maxLength = parseInt(obj.getAttribute("maxlength"));
    if(obj.value.length > maxLength) {
        alert(msg);
        obj.value = obj.value.substring(0, maxLength);
    }
}
/****************************************************************
 * 내 용  	: Null 체크
 * 파라미터  	: 1. str : 입력문자열
 * 리 턴 값  : 
 * 참고사항  	: 
*****************************************************************/
function cf_isNull(str){
	if(str == "") return true;
	else if(str == null) return true;
	else false;
	
}

/****************************************************************
 * 내	용 	: 입력글자수 설정한 입력바이트만 가능하도록 체크
 * 파라미터 	: 1. obj : 입력폼객체
 * 			  2. byt : 입력을 제한할 바이트
 * 리 턴 값 	: 
 * 참고사항 	: 
*****************************************************************/
function cf_msgLenOnlyChk(obj, byt){
	var str, msg;
 	var len = 0;
 	var temp;
 	var count = 0;
	msg = obj.value;

 	str = new String(msg);
 	len = str.length;

 	for (k=0 ; k<len ; k++){
 		temp = str.charAt(k);
  	  
 		if (escape(temp).length > 4) {
 			count += 2;
     	}
 		else if (temp == '\r' && str.charAt(k+1) == '\n') { 	// \r\n일 경우
 			count += 2;
 		}
 		else if (temp != '\n') {
 			count++;
 		}
 	}

	if(count > byt || count < byt) {
		return false;
	}else {
		return true;
	}
}