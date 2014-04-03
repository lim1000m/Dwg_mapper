<%-- --------------------------------------------------
  Page Name 	: mappDwgMgt_G.jsp 
  Description 	: 매핑 도면 관리 Grid
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
<title><spring:message code='tit.mapp.info.mgt'/></title>

<!-- jQuery UI custom theme -->
<link rel="stylesheet" type="text/css" media="screen" href="<c:url value='/css/custom-theme/jquery-ui-1.8.20.custom.css'/> "/>
<!-- Grid CSS -->
<link rel="stylesheet" type="text/css" media="screen" href="<c:url value='/css/jqGrid/ui.jqgrid.css'/>" />
<!-- jQuery Library -->
<!-- 공통 js -->
<script type="text/javascript" src="<c:url value='/js/common.js' />"></script>

<!-- jQuery Lib -->
<script type="text/javascript" src="<c:url value='/js/lib/jquery-1.7.2.min.js'/> "></script>
<script src="<c:url value='/js/jqGrid/i18n/grid.locale-${lang}.js'/>" ></script>
<!-- jQuery Grid Library -->
<script type="text/javascript" src="<c:url value='/js/jqGrid/jquery.jqGrid.min.js'/>"></script>

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
		url : "<c:url value='/dwg/mappDwgMgt/mappDwgGridList.do?objId=${objId}' />",									/* 그리드의 데이터를 가져올 경로 */
		datatype : "xml",																						/* 가져온 데이터의 형식 (XML/JSON/ROW)*/
		mtype : "POST",																						/* ajax 호출 방식(GET/POST) */
		autowidth : true,
		height : 150,															
		width : 972,																								/* 그리드의 높이 */
		colNames : [<c:out value='${gridHeaderName}' escapeXml='false' />],	/* 컬럼 이름 */
		colModel : [<c:out value='${gridHeader}' escapeXml='false' />],				/* 컬럼 구조(index에 설정된 이름이 정렬시 정렬 기준열 이름으로 넘어감) */
		caption : "<spring:message code='words.dwg.list'/>",
		rownumbers :  true,																					// 행번호 표시여부
		rownumWidth :  30,																					// 행번호 열의 너비
		//scrollOffset : 0,																							/* RowWidth 고정 */
		pager : jQuery("#divPager"),																		/* 페이저 설정  */
		rowNum : 10,																							/* 페이지당 레코드수 초기값 */
		rowList : [10, 50],																				/* 페이지당 레코드수 선택 가능한 값 */
		viewrecords : true,																					/* 페이저에 총 레코드수를 표시할 것인지 설정 */
		loadtext : "<spring:message code='words.loading'/>",														/* 데이터 로딩중에 표시될 메시지 */
		sortname : "obj_id",																					/* 처음 정렬될 컬럼 */
		sortorder : "asc",																						/* 정렬방법 (asc/desc) */
		imgpath: "<c:url value='/images/jqGrid' />",												/* 그리드에서 사용되는 이미지 경로 */
		loadui : "enable",																						// 로딩될때 메세지 표시여부
		
		onSelectRow : function(rowid) {				
			
			// 선택한 ROW의 데이터 세팅.
			parent.mpDwgSerno = rowid;
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
function uf_appendRow (groupCd,groupNm,groupKind,groupOrd,groupSerno,groupLvl,dvsnCd,prntGroupSerno,groupCnt) {
	var now = new Date();
	
    var year= now.getFullYear();
    var mon = (now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1);
    var day = now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
	var today = year+mon+day+hour+minute+second;
	var objId = '${objId}';
	alert(objId);
		var data= {
				objId:'${objId}',
				mpDwgSerno :groupSerno,
				mpDwgNm :groupNm,
				mpGroupCd :groupCd,
				objInst : today
				};
		$("#mainGrid").jqGrid('addRowData', groupCd, data, 'last', groupCd);
	
	
}

/**
 * 현재 그리드의 값들을 <input type="hidden" name="key" value="value" /> 와 같은 html 태그 타입으로 반환한다.
 */
function uf_getGridQueryHtml () {
	var keys=[];
	var idx = 0;
	var queryHtml = '';
	
	var ids = jQuery("#mainGrid").jqGrid('getDataIDs'); 

    var row = $("#mainGrid").getRowData(ids[0]);     // Get First row to get the labels
	
	for (var k in row) {
		keys[idx++] = k + '';    // capture col names
	}
	for(inx = 0; inx < ids.length; inx++) {       
		
		row = $("#mainGrid").getRowData(ids[inx]); // get each row
		for(jnx = 0; jnx < keys.length; jnx++) {
			queryHtml = queryHtml + '<input type="hidden" name="' + keys[jnx] + '" value="' + row[keys[jnx]] + '" />' + '\n';
		}
	}
	return queryHtml;
}

/*** 창크기에 맞춰 그리드를 리사이즈 ***/
$(window).bind('resize', function() {
    jQuery('#tabGrid').setGridWidth($('#gridContainer').width(), true);
}).trigger('resize');

/**************************************
 * 내    용	: 그리드 정보 리로드
 * 파라미터	:  
 * 리 턴 값	: 
 * 참고사항	: 
***************************************/
function reloadGrid(dwgKnd,dwgNm){
	params["dwgKnd"] = dwgKnd;
	params["dwgNm"] = dwgNm;
	// 그리드 정보 리로드
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