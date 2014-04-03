<%-- --------------------------------------------------
  Page Name 	: objectInfoMgt_G.jsp 
  Description 	: 객체 Grid
  Modification Information
  
         수정일                수정자                           수정내용
  ----------   ----------      ---------------
  
  
  author 박용택
  since 2013.12.23
  version 1.0
--------------------------------------------------- --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<html>
<head>
<%@ include file="/common/common.jsp" %>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title><spring:message code='tit.obj.info.mgt'/></title>

<!-- jQuery css -->
<link rel="stylesheet" type="text/css" href="<c:url value='/css/custom-theme/jquery-ui-1.8.20.custom.css"  media="screen'/>"/>
<link rel="stylesheet" type="text/css" href="<c:url value='/css/jqGrid/ui.jqgrid.css" media="screen'/>"/> 

<!-- 공통 js -->
<script type="text/javascript" src="<c:url value='/js/common.js'/>"></script>

<!-- jQuery Lib -->
<script type="text/javascript" src="<c:url value='/js/lib/jquery/jquery-1.9.1.min.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/lib/jqueryUi/jquery-ui-1.10.3.custom.js'/>"></script>

<!-- jqGrid -->
<script type="text/javascript" src="<c:url value='/js/jqGrid/i18n/grid.locale-${lang}.js'/>" ></script>  
<script type="text/javascript" src="<c:url value='/js/lib/jqGrid/jquery.jqGrid.min.js'/>"></script>


<script type="text/javascript">

/**************************************
 * 내    용	: 페이지 오픈 시 처리 내용
 * 파라미터	:  
 * 리 턴 값	: 
 * 참고사항	: 
***************************************/
$(document).ready(function() {
	
	// Grid 영역 Start!!
	$("#mainGrid").jqGrid({
		url : "<c:url value='/dwg/objectmgt/objectGridList.do' />",									/* 그리드의 데이터를 가져올 경로 */
		datatype : "xml",																						/* 가져온 데이터의 형식 (XML/JSON/ROW)*/
		mtype : "POST",																						/* ajax 호출 방식(GET/POST) */
		autowidth : true,
		height : 310,															
		width : 972,																								/* 그리드의 높이 */
		colNames : [<c:out value='${gridHeaderName}' escapeXml='false' />],	/* 컬럼 이름 */
		colModel : [<c:out value='${gridHeader}' escapeXml='false' />],				/* 컬럼 구조(index에 설정된 이름이 정렬시 정렬 기준열 이름으로 넘어감) */
		rownumbers :  true,																					// 행번호 표시여부
		rownumWidth :  30,																					// 행번호 열의 너비
		//scrollOffset : 0,																						// 0으로 선언할 경우 Grid 스크롤바 표시 않함
		shrinkToFit : false,																					/* RowWidth 고정 */
		pager : jQuery("#divPager"),																		/* 페이저 설정  */
		rowNum : 20,																							/* 페이지당 레코드수 초기값 */
		rowList : [20, 50],																				/* 페이지당 레코드수 선택 가능한 값 */
		viewrecords : true,																					/* 페이저에 총 레코드수를 표시할 것인지 설정 */
		loadtext : "<spring:message code='words.loading'/>",															/* 데이터 로딩중에 표시될 메시지 */
		sortname : "obj_id",																					/* 처음 정렬될 컬럼 */
		sortorder : "asc",																						/* 정렬방법 (asc/desc) */
		imgpath: "<c:url value='/images/jqGrid' />",												/* 그리드에서 사용되는 이미지 경로 */
		loadui : "enable",																						// 로딩될때 메세지 표시여부
		
		onSelectRow : function(rowid) {				
			
			// 선택한 ROW의 데이터 세팅.
			parent.objId = rowid;
		}, 	
		
		// 그리드 더블 클릭 시 이벤트
		ondblClickRow : function(rowid) {
			
		},
		
		// 파라미터
		postData : {
			dataName : "<c:out value='${dataName}' />",
			dataKind 	: "<c:out value='${dataKind}' />"
		},
		
		loadComplete : function() {												/* 데이터 로딩이 끝난후 호출할 함수*/
			parent.document.all.spnTotal.innerHTML = jQuery("#mainGrid").getGridParam("records");
		}
	});
	
});

/*** 창크기에 맞춰 그리드를 리사이즈 ***/
$(window).bind('resize', function() {
    jQuery('#tabGrid').setGridWidth($('#gridContainer').width(), true);
}).trigger('resize');

function uf_reloadGrid(objTyp, objNm){
	// 파라미터 값에 한글이 포함된 경우 Get 방식으로 전송
	params["objTyp"] = objTyp;
	params["objNm"] = objNm;
	jQuery("#mainGrid").setGridParam({postData: params,page:1}).trigger('reloadGrid');
}

</script>
</head>
<body>
	<div id="gridContainer">
	<table id="mainGrid" class="grid"></table>
	<div id="divPager" class="grid" style="text-align: center"></div>
	</div>
</body>
</html>