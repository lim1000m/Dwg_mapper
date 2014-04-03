<%-- --------------------------------------------------
  Page Name 	: dwgRegister_G.jsp 
  Description 	: 도면 정보 등록 Grid
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
<title><spring:message code='tit.dwg.info.mgt'/></title>

<!-- jQuery UI custom theme -->
<link rel="stylesheet" type="text/css" media="screen" href="<c:url value='/css/custom-theme/jquery-ui-1.8.20.custom.css'/>" />
<!-- Grid CSS -->
<link rel="stylesheet" type="text/css" media="screen" href="<c:url value='/css/jqGrid/ui.jqgrid.css'/>"/>
<!-- jQuery Library -->
<!-- 공통 js -->
<script type="text/javascript" src="<c:url value='/js/common.js' />"></script>

<!-- jQuery Lib -->
<script type="text/javascript" src="<c:url value='/js/lib/jquery-1.7.2.min.js' />" ></script>
<script src="<c:url value='/js/lib/jqGrid/i18n/grid.locale-en.js'/>" ></script>
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
	var $grid = $("#mainGrid"), idsOfSelectedRows = [],
    updateIdsOfSelectedRows = function (id, isSelected) {
        var index = $.inArray(id, idsOfSelectedRows);
        if (!isSelected && index >= 0) {
            idsOfSelectedRows.splice(index, 1); // remove id from the list
        } else if (index < 0) {
            idsOfSelectedRows.push(id);
        }
    };
	// Grid 영역 Start!!
	$("#mainGrid").jqGrid({
		url : "<c:url value='/dwg/gwdRegister/mappDwgGridList.do?mpDwgSerno=${objId}' />",									/* 그리드의 데이터를 가져올 경로 */
		datatype : "xml",																						/* 가져온 데이터의 형식 (XML/JSON/ROW)*/
		mtype : "POST",																						/* ajax 호출 방식(GET/POST) */
		autowidth : true,
		height : 368,															
		width : 50,		
		colNames : [${gridHeaderName}],
	    colModel : [${gridHeader}],	
		/* 그리드의 높이 */
		//colNames : [<c:out value='${gridHeaderName}' escapeXml='false' />],	/* 컬럼 이름 */
		//colModel : [<c:out value='${gridHeader}' escapeXml='false' />],				/* 컬럼 구조(index에 설정된 이름이 정렬시 정렬 기준열 이름으로 넘어감) */
		rownumbers :  true,																					// 행번호 표시여부
		rownumWidth :  30,																					// 행번호 열의 너비
		caption : "<spring:message code='words.dwg.list'/>",
		//scrollOffset : 0,																						/* RowWidth 고정 */
		pager : jQuery("#divPager"),																		/* 페이저 설정  */
		rowNum : 20,																								/* 페이지당 레코드수 초기값 */
		rowList : [50,20],																				/* 페이지당 레코드수 선택 가능한 값 */
		viewrecords : true,																					/* 페이저에 총 레코드수를 표시할 것인지 설정 */
		loadtext : "<spring:message code='words.loading'/>",													/* 데이터 로딩중에 표시될 메시지 */
		sortname : "obj_id",																					/* 처음 정렬될 컬럼 */
		sortorder : "asc",																						/* 정렬방법 (asc/desc) */
		imgpath: "<c:url value='/images/jqGrid' />",												/* 그리드에서 사용되는 이미지 경로 */
		loadui : "disable",																						// 로딩될때 메세지 표시여부
		multiselect :true,
		onSelectRow : updateIdsOfSelectedRows,	
		// 그리드 더블 클릭 시 이벤트
		ondblClickRow : function(rowid) {

		},
		onSelectAll: function (aRowids, isSelected) {
	        var i, count, id;
	        for (i = 0, count = aRowids.length; i < count; i++) {
	            id = aRowids[i];
	            updateIdsOfSelectedRows(id, isSelected);
	        }
	    },

		// 파라미터
		postData : {
			dataName : "<c:out value='${dataName}' />",
			dataKind 	: "<c:out value='${dataKind}' />"
		},
		
		loadComplete : function() {												/* 데이터 로딩이 끝난후 호출할 함수*/
			var $this = $(this), i, count;
	        for (i = 0, count = idsOfSelectedRows.length; i < count; i++) {
	            $this.jqGrid('setSelection', idsOfSelectedRows[i], false);
	        }
	        parent.gridData=idsOfSelectedRows;
			//parent.document.all.spnTotal.innerHTML = jQuery("#mainGrid").getGridParam("records");
		}
	});
	
});

/**
 * 현재 그리드의 값들을 <input type="hidden" name="key" value="value" /> 와 같은 html 태그 타입으로 반환한다.
 */
function uf_getGridQueryHtml (idsOfSelectedRows) {
	var keys=[];
	var idx = 0;
	var queryHtml = '';

	var ids = idsOfSelectedRows; 
    //var row = $("#mainGrid").getRowData(ids[0]);     // Get First row to get the labels
	
	for(inx = 0; inx < ids.length; inx++) {    
		
		queryHtml = queryHtml + '<input type="hidden" id="objId" name="objId" value="${objId}" />' + '\n';
		queryHtml = queryHtml + '<input type="hidden" id="drwngSerno" name="drwngSerno" value="' + ids[inx] + '" />' + '\n';
		
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
function reloadGrid(groupLvl,groupSerno){
	params["groupLvl"] = groupLvl;
	params["groupSerno"] = groupSerno;
	params["dwgKnd"] = "";
	params["dwgNm"] = "";
	jQuery("#mainGrid").setGridParam({postData: params,page:1}).trigger('reloadGrid');
	// 그리드 정보 리로드
	 
}
function uf_reloadGrid(dwgKnd, dwgNm){
	// 파라미터 값에 한글이 포함된 경우 Get 방식으로 전송
	params["dwgKnd"] = dwgKnd;
	params["dwgNm"] = dwgNm;
	params["groupLvl"] = "";
	params["groupSerno"] = "";
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