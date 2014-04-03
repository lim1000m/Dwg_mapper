<%-- -----------------------------------------------------------
  Page Name 	: tree.html 
  Description 	: 메인 좌측 트리메뉴
  Modification Information
  
         수정일                수정자                           수정내용
  ----------   ----------      ---------------
  
  
  author 차근수
  since 2010.10.08
  version 1.0
------------------------------------------------------------ --%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

<!-- jQuery Library -->
<script src="<c:url value='/js/lib/jquery-1.7.2.min.js'/>" ></script>
<!-- jQuery Grid Local -->
<script src="<c:url value='/js/jqGrid/i18n/grid.locale-kr.js'/>" ></script>
<!-- jQuery Grid Library -->
<script src="<c:url value='/js/jqGrid/jquery.jqGrid.min.js'/>" ></script>
<!-- jMap library -->
<script type="text/javascript" src="<c:url value='/js/jsMap.js'/>" ></script>
<script type="text/javascript" src="<c:url value='/js/jqAnimate/JMap.js'/>"></script>

<script type="text/javascript" language="javascript">
/*****************************************
 * 함 수 명 : 
 * 매개변수 : 
 * 함수설명 : 페이지 로딩시 호출되며 페이지 초기화, 기초 데이터 세팅, 이벤트 바인딩 처리
 *****************************************/
jQuery(document).ready(function(){
	
});
var page = "";
var subPage = "";
var searchParam = null;
var viewName = 'frame';

function uf_init(){
	page = "1";
	subPage = "1";
	searchParam = new JMap();
}
var g_curLeftMenuId = 1;
//var userNm = "${paramMap.userNm}";
//var userId = "${paramMap.userId}";
/*PAGE INFO*/
var firstGridPageNum = "1";
var secondGridPageNum = "1";
var thirdGridPageNum = "1";

/*SEARCH INFO*/
 var argu1 = "";
 var argu2 = "";
 var argu3 = "";
 var argu4 = "";
 var argu5 = ""; 
 var argu6 = "";
 
/*ACCOUNT INFO*/
//var nam = '${resultMap.nam}';
//var userId = '${resultMap.userId}';
/*******************************************************
 * 내	용 	: 키이벤트 처리용자 명 출력
 * 파라미터 	: 
 * 참고사항 	: 
********************************************************/
function uf_checkKey(){
	if(event.keyCode == "8")
	 {
	   event.returnValue = false;
	   event.keyCode = 0;
	 }
}

/*******************************************************
 * 내	용 	:  로그인 성공시 top 사용자 명 출력
 * 파라미터 	: 
 * 참고사항 	: 
********************************************************/
function uf_showUserNm(){	
	frameTop.document.all.spnUsrNm.innerHTML = nam;
	frameTop.userId = userId;
}


/*****************************************
 * 함 수 명 : 
 * 매개변수 : 
 * 함수설명 : 페이지 로딩시 호출되며 페이지 초기화, 기초 데이터 세팅, 이벤트 바인딩 처리
 *****************************************/
function uf_changeLeft(menuNum, sub){
	var leftPath = "";
	if(g_curLeftMenuId == menuNum){
		//left.changeMenu(sub);
		//left.changeContext(sub+'11');
		jQuery("#left").attr("src", "<c:url value='/main.do'/>?method=left&menuId="+ menuNum + "&subID=" + sub+"&lang=${lang}");
	}else{
		g_curLeftMenuId = menuNum;
		jQuery("#left").attr("src", "<c:url value='/main.do'/>?method=left&menuId="+ menuNum + "&subID=" + sub+"&lang=${lang}");
	}
}

/*****************************************
 * 함 수 명 : uf_changeContents
 * 매개변수 : contentsPath : 새로운 내용이 들어있는 페이지 링크
 * 함수설명 : contents 영역을 받은 경로의 페이지로 변경
 *****************************************/
 function uf_changeContents(contentsPath){
	 jQuery("#content").attr("src", contentsPath+"?lang=${lang}");
}
</script>
</head>

<frameset rows="135,*" frameborder="0" framespacing="0">	
	<frame src="<c:url value='/main.do'/>?method=top&menuId=1&lang=${lang}" name="top" id="top" marginwidth="0" marginheight="0" noresize="noresize" scrolling="no" name="top" id="top"  />
	
    <frameset cols="215,*" frameborder="0" framespacing="0">
		<frame src="<c:url value='/main.do'/>?method=left&menuId=1&lang=${lang}" marginwidth="0" marginheight="0" scrolling="no" name="left" id="left"  noresize="noresize"/>
		<frame src=""  marginwidth="0" marginheight="0" scrolling="auto" name="content" id="content"  />
	</frameset>
</frameset>
</html>