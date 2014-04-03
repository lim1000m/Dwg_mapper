/**************************************************
    1. 파      일      명   : DiyViewer.js
    2. 업무 시스템 명    		: 뷰어에 사용되는 함수를 정의한다.
    3. 작      성      자   : 길기용(2006/08/09)
    4. 수      정      자   : 
****************************************************/

/**************************************************
  내    용 : 뷰어-화면 제어 기능
  파라미터 : 없음
  리 턴 값 : 없음
  참고사항 :  (1) ZoomIn 
						  (2) ZoomOut
						  (3) ZoomExtent
						  (4) ZoomWindow
						  (5) Pan
						  (6) HotSpot
						  (7) Print
						  (8) Layer Dlg
						  (9) Symbol Dlg
						  (10) Block Dlgw
						  (11) HotSpot Dlg
						  (12) Text Dlg
****************************************************/
var bZoomIn		= 0;
var bZoomOut	= 0;
var bZoomExts	= 0;
var bZoomWindow = 0;


var bPan		= 0;
var bHSpot		= 0;

var bPrint		= 0;
var bLayerCtl	= 0;

var bOpenSymbol = 0;
var bOpenBlock	= 0;

var bOpenHotspot	= 0;
var bOpenText		= 0;
var bOpenHyperlink	= 0;
var bPickTextData	= 0;
var bTextEdit		= 0;


function ZI()		{ bZoomIn			= MyDwg.ZoomIn();} //줌인
function ZO()		{ bZoomOut			= MyDwg.ZoomOut();}//줌아웃
function ZE()		{ bZoomExts			= MyDwg.ZoomExts(); }//전체화면
function ZW()		{ bZoomWindow		= MyDwg.ZoomWindow(); }//선택영역확대
function PAN()		{ bPan				= MyDwg.Pan();}//이동
function HSpot()	{ bHSpot			= MyDwg.HighlightHotSpotByPick();}
function LAY()		{ bLayerCtl			= MyDwg.LayerCtrl(); }		// CAD Only
function SYM()		{ bOpenSymbol		= MyDwg.OpenSymbol();}		// CAD Only
function BLK()		{ bOpenBlock		= MyDwg.OpenBlockHL();}	// CAD Only
function LEGEND()	{ bOpenHotspot		= MyDwg.OpenHotspot();	}	
function TXT()		{ bOpenText			= MyDwg.OpenTextHL();}		// CAD Only
function SelHyper() { bOpenHyperlink	= MyDwg.OpenHyperlink();}
function PTXT()		{ bPickTextData		= MyDwg.PickTextData();}	// CAD Only
function TXTEDIT()	{ bTextEdit			= MyDwg.TextEdit(); }		// CAD Only
function FONT()		{ bFont				= MyDwg.OpenFont(); }		// CAD Only

function GETLAYER(){ MyDwg.DiySetSelectDwgEntity(); } //속성정보연계
function GETSYMBOL(){ MyDwg.DiySimbolSelect(); }

function PRT(userId, drwngNo){//도면 출력
	MyDwg.DiyPrintOut2(userId, drwngNo);
}

function DIST()  { bPlot    = MyDwg.DiyDist();}					// 거리측정 
function SELCPY()  { bPlot    = MyDwg.DiyClipboard();} 	// 선택영역복사
function BGCHG()		{ bPlot				= MyDwg.DiyChangeBGColor();}	//배경전환


/**************************************************
내    용 : 뷰어-초기설정
파라미터 : 없음
리 턴 값 : 없음
참고사항 : 
****************************************************/
//var sFtpIp = '192.168.1.136';
//var sFtpIp = '175.113.80.84';
//var sFtpPort = '221';
var sFtpIp = '10.100.88.67';
var sFtpPort = '21';
var sFtpId = 'administrator';
var sFtpPw = '01net!';

function FtpInit(){
	MyDwg.DiyInitSvrInfo(sFtpIp, sFtpId, sFtpPw, sFtpPort, '1');
	MyDwg.DiySetCryption(0);
}

function DCInit(){
	send.MyComm.DiyInitSvrInfo(sFtpIp, sFtpId, sFtpPw, sFtpPort, '1');
	send.MyComm.DiySetCryption(0);
}

 /*************************************************************
 내    용: 이전/다음 도면 이동 버튼 Enable/Disable
 리 턴 값: 
 참고사항: 
 **************************************************************/
 function checkDocHistory(){
 	var historyList = readCookie("viewerCooke").split("@#$");
 	
 	if(position < historyList.length - 1){	// 다음도면 이동 가능
 		$('#nextDwgDsb').css('display','none');
 		$('#nextDwg').css('display','');
 	}else{
 		$('#nextDwgDsb').css('display','');
 		$('#nextDwg').css('display','none');// 다음도면 이동 불가능
 	}

 	if(position > 0){										// 이전
 		$('#preDwgDsb').css('display','none');
 		$('#preDwg').css('display','');// 다음도면 이동 불가능도면 이동 가능
 	}else{															// 이전도면 이동 불가능
 		$('#preDwgDsb').css('display','');
 		$('#preDwg').css('display','none');// 다음도면 이동 불가능도면 이동 가능
 	}

 }

 /*************************************************************
 내    용: 사용자가 조회한 이전도면으로 이동
 리 턴 값: 
 참고사항: 
 **************************************************************/
 function getPreDwg() {

 	var historyList = readCookie("viewerCooke").split("@#$");
 	
 	if(position > 0){

 		var docInfo = historyList[position-1].split("*&^") ;
 		position = position - 1;
 		filePath = docInfo[0];
 		fileNm = docInfo[1];
 		uf_openDoc();
 	}else{
 		return;
 	}
 }

 /*************************************************************
 내    용: 사용자가 조회한 다음도면으로 이동
 리 턴 값: 
 참고사항: 
 **************************************************************/
 function getNextDwg() {
 	var historyList = readCookie("viewerCooke").split("@#$");
 	
 	if(position < historyList.length){
 		var docInfo = historyList[position+1].split("*&^") ;
 		position = position + 1;
 		filePath = docInfo[0];
 		fileNm = docInfo[1];
 		uf_openDoc();
 	}else{
 		return;
 	}
 }


 /**************************************************** 
 내    용: 사용자가 열람한 도면 정보 저장
 파라미터:	1. key 			- 쿠키에 대한 key 값
 				2. value 		- 쿠키에 대한 value
 				3. expire		- 쿠키 만료일
 리 턴 값: 없음 
 참고사항: expiredays를 -1로 지정 시 현재 브라우저 종료 시점에 쿠키값 삭제
 *****************************************************/
 function setCookie(key, value, expiredays){
 	
 	if(!expiredays){
 		var todayDate = new Date();
 		todayDate.setDate(todayDate.getDate() + expiredays);
 	 	document.cookie = key + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
 	}else{
 		document.cookie = key + "=" + escape( value ) + "; path=/;";
 	}
 }

 /**************************************************** 
 내    용: 쿠키 읽어오기
 파라미터: 1. key  - Cookie key 값으로 해당 값 조회
 리 턴 값: 없음 
 참고사항: 없음
 *****************************************************/
 function readCookie(key){
 	var cookie = document.cookie;
 	var first = cookie.indexOf(key+"=");
 	//쿠키가 존재하는 경우
 	if(first >=0){
 		var str = cookie.substring(first, cookie.length);
 		var last = str.indexOf(",");
 		
 		if(last < 0) last = str.length;
 		
 		//쿠키값을 가져온다
 		str = str.substring(0,last).split("=");
 		str = str[1].split(";")
 		return unescape(str[0]);
 	}else{
 		return "";
 	}
 }



 /**************************************
  * 내    용	: 상/하위 도면 가져오기
  * 파라미터	:  
  * 리 턴 값	: 
  * 참고사항	: 
 ***************************************/
 function getUpDownDwg(flag) {
 	 var dwgFileId = "";
 	 var dwgVerId = "";
 	 if(flag == 'up')
 		udDwgCnt--;
 	 else
 		udDwgCnt++;

 	dwgFileId = opener.$("#mainGrid").jqGrid("getCell", udDwgCnt, "fileId");
 	dwgVerId = opener.$("#mainGrid").jqGrid("getCell", udDwgCnt, "verId");
 	jQuery.ajax({
 		url : "<c:url value='/viewer/getUpDownDwgFileInfo.do'/>",
 		type : "POST",
 		data :{
 			"fileId"			: dwgFileId,
 			"verId"			: dwgVerId
 		},
 		dataType : "text",
 		async : false,
 		contentType : "application/x-www-form-urlencoded",
 		success :function(data) {
 			var fileInfo = data.split("@@");
 			if(fileInfo[2] == 'Y'){
 				fileNm = fileInfo[0];
 				filePath = fileInfo[1];
 				fileId = dwgFileId; 
 				verId = dwgVerId;
 				
 				uf_openDoc('U');
 				$('#savefilePathNm').html(fileNm);
 				getAttrAll();	
 			} else {
 				 if(flag == 'up') udDwgCnt++;
 				 else udDwgCnt--;
 				alert("도면이 존재하지 않습니다.");
 			}
 		}
 	});	
  }

