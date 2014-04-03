<%-- --------------------------------------------------
  Page Name 	: dwgRegister.jsp 
  Description 	: 도면 등록 메인
  Modification Information
  
         수정일                수정자                           수정내용
  ----------   ----------      ---------------
  
  
  author 박용택
  since 2013.12.23
  version 1.0
--------------------------------------------------- --%>
<%@taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib prefix="c"   uri="http://java.sun.com/jsp/jstl/core" %> 
<%@ taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %> 
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<title><spring:message code='tit.dwg.info.mgt'/></title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<%@ include file="/common/commonPopup.jsp" %>
<!-- jQuery UI custom theme -->
<link rel="stylesheet" type="text/css" media="screen" href="<c:url value='/css/custom-theme/jquery-ui-1.8.20.custom.css'/>" />
<!-- Grid CSS -->
<link rel="stylesheet" type="text/css" media="screen" href="<c:url value='/css/jqGrid/ui.jqgrid.css'/>" />
<!-- Tree CSS -->
<link rel="stylesheet" type="text/css" media="screen" href="<c:url value='/css/jqTreeView.css'/>"/>

<!-- jQuery Library -->
<script src="<c:url value='/js/lib/jquery-1.7.2.min.js'/>"></script>
<!-- jQuery Grid Local -->
<script src="<c:url value='/js/jqGrid/i18n/grid.locale-${lang}.js'/>"></script>
<!-- jQuery Grid Library -->
<script src="<c:url value='/js/jqGrid/jquery.jqGrid.min.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/stringUtil.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/jqTree/jqTreeCookie.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/jqTree/jqTreeView.js'/>"></script>

<script>
var gridData = [];
/**************************************
 * 내    용	: Body 오픈
 * 파라미터	:  
 * 리 턴 값	: 
 * 참고사항	: 디자인과 로직부분의 분리
***************************************/
jQuery(document).ready(function() {
	// 창닫기
    jQuery("#imgWndCls").click(function(){ window.close(); });
	// SMS(기관 담당자) 트리
	jQuery("#divTree")[0].innerHTML = "${dwgCrgLst}".replaceAll("^",'"');
	
	jQuery("#divTree").treeview();
	
	// 지역코드관리 Grid
	$("#ifmDwgListMng").attr("src", "<c:url value='/dwg/gwdRegister/mappDwgGridFrom.do'/>?objId=${objId}");
	// 검색버튼 onclick 이벤트 설정 
	$("#imgSearch").click(function(){ uf_search(); } );
	
	// 등록버튼 onclick 이벤트 설정
	$("#imgReg").click(function() {
		uf_submit();
	});

	
	$("span").click(function(e){
		if(jQuery(this).attr("id")!='imgSearch' && jQuery(this).attr("id")!='imgWndCls' && jQuery(this).attr("id")!='imgReg'){
			uf_appendRow(jQuery(this).attr("id"),jQuery(this).attr("name"));
		}
		e.stopPropagation();
	});
	
	
} );

/******************************************
 * 내    용	: 검색버튼 클릭시 처리내용
 * 파라미터	: 없음
 * 리 턴 값	: 없음
 * 참고사항	: 없음
*******************************************/
function uf_appendRow(groupLvl,groupSerno) {
	ifmDwgListMng.reloadGrid(groupLvl, groupSerno);
}

function uf_search() {
	var dwgKnd = $("#dwgKnd").val();
	var dwgNm = $("#dwgNm").val();
	ifmDwgListMng.uf_reloadGrid(dwgKnd, dwgNm);
}

function mappInfo(objId){
	location.replace("<c:url value='/dwg/mappDwg/main.do'/>?objId=" + objId);	
}

function uf_submit(){
	//각 필드 초기화 
	var gridQueryHtml = ifmDwgListMng.uf_getGridQueryHtml(gridData);
	$('#div_hidden_gridQuery').html (gridQueryHtml);
	
	$("#frm").attr("action", "<c:url value='/dwg/gwdRegister/dwgAdd.do'/>");
	$("#frm").submit();
	//opener.uf_search("","");
	alert("<spring:message code='msg.alert.success.create'/>");
	window.close();
}
</script>
</head>
<body >
<div id="wrap_pop">
        <!-- Navigator : Start -->
        <div id="header_pop">
           <div class="tit_pop"><spring:message code='words.dwg.mgt.register'/></div>
        	<div class="tit_close"><span class="button lightgray bold" id="imgWndCls"><a href="#" title=""><spring:message code='btn.wnd.cls'/></a></span></div>
        </div>
        
        <!-- Contents : Start -->
        <div id="container_pop">
            <!-- Search Box : Start -->
            <div class="src_box_sect"><div class="inner"><div class="inner2"><div class="inner3">
                <form id="frm" name="frm" method="post">
                <div id="div_hidden_gridQuery"  ></div>
                <input type="hidden" id="objIdOne" name="objIdOne" value="${objId}" />
                </form>
                <!-- Hidden Value Section : End -->
                <fieldset>
                   <legend class="skip"><spring:message code='words.serc.cond'/></legend>
                    <table summary="">
                    <caption class="skip"><spring:message code='words.serc.cond.input.form'/></caption>
                    <tbody>
                        <tr>
                            <th scope="row"><spring:message code='words.serc.cond'/></th>
                            <td>
                           	   <label for="dwgKnd"><spring:message code='words.dwg.knd'/></label>
                               <select id="dwgKnd" name="objTyp" style="width:80">
								  	<option value=''>&#45;&#45;<spring:message code='words.totl'/>&#45;&#45;</option>
										<c:forEach var="dwgKndVO" items="${dwgKndList}" >
											<option value="${dwgKndVO.cmCd}" >${dwgKndVO.cmNm}</option>
										</c:forEach>
							   </select>
                               <label for="dwgNm"><spring:message code='words.dwg.nm'/></label>
                               <input type="text" id="dwgNm" name = "dwgNm" style="width:200" maxlength="3"/>
								&nbsp;&nbsp;
                                <span id="imgSearch" class="button darkgray bold"><a href="#" title=""><spring:message code='words.srch'/></a></span>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </fieldset>
            </div></div></div></div>
            <!-- Search Box : End -->
			<div class="div_area">
			<!-- Section Information : Start -->
                <div class="fl" style="width:195px;">
                    <!-- Form : Type-bg : 논리식 : Start -->
                    <div class="shadow mb20"><div class="box">
                    <fieldset class="inform bg">
                        <legend><span><spring:message code='words.dwg.chart'/></span></legend>
                        <div class="insect2" style="height:397px;">
                            <div id="divTreeMain" class="tree_sect" style="height:394px; overflow: auto">
                               <ul style="list-style: none; margin: 5;">
                                  <li>
                                      <div id="divTree"></div>
                                  </li>
                               </ul>
                           </div>
                        </div>
                    </fieldset>
                    </div></div>
                    <!-- Form : Type-bg : 논리식 : End -->
                </div>

                <div class="fr" style="width:540px;">
                    <!-- Form : Type-bg : 논리식 입력기 : Start -->
                    <div class="shadow"><div class="box">
                    <fieldset class="inform bg">
			            <div class="grd_sect" style="height:442px;">
			                <iframe id="ifmDwgListMng" name=ifmDwgListMng src="" frameborder="0" framespacing="0" marginwidth="0" marginheight="0" scrolling="no" title=""  height:100%;"></iframe>
			            </div>
			            <!-- Grid Section : End -->
                    </fieldset>
                    </div></div>
                    <!-- Form : Type-bg : 논리식 입력기 : End -->
                </div>

            </div>
            
            
            <!-- Button Section : Start -->
            <div class="btn_sect_bottom">
                <span class="button lightgray bold" id="imgReg"><a href="#" title=""><spring:message code='btn.create'/></a></span>
            </div>
            <!-- Button Section : End -->
        </div>
        <!-- Contents : End -->

        <!-- Footer : Start -->
        <div id="bottom">
            Copyright&#169; 2014 <span class="comp_nm">KT</span> All rights reserved.
        </div>
        <!-- Footer : End -->

    </div>
    <!-- Con_rgt : Navigator, Title, Contents : End -->
</body>
</html>
