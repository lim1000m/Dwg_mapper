<%-- --------------------------------------------------
  Page Name 	: mappDwgMgt.jsp 
  Description 	: 매핑 도면 관리 메인 화면
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
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title><spring:message code='tit.mapp.info.mgt'/></title>
<%@ include file="/common/common.jsp" %>
<!-- jQuery UI custom theme -->
<link rel="stylesheet" type="text/css" media="screen" href="<c:url value='/css/custom-theme/jquery-ui-1.8.20.custom.css'/>" />
<!-- Grid CSS -->
<link rel="stylesheet" type="text/css" media="screen" href="<c:url value='/css/jqGrid/ui.jqgrid.css'/>" />

<!-- 문자열 체크 공통 script : stringUtil.js -->
<script src="<c:url value='/js/stringUtil.js'/>" type="text/javascript"></script>
<!-- jQuery Library -->
<script src="<c:url value='/js/lib/jquery-1.7.2.min.js'/>"></script>
<!-- jQuery Grid Local -->
<script src="<c:url value='/js/jqGrid/i18n/grid.locale-${lang}.js'/>"></script>
<!-- jQuery Grid Library -->
<script src="<c:url value='/js/jqGrid/jquery.jqGrid.min.js'/>"></script>

<script language="javascript" type="text/javascript">
var mpDwgSerno = "";         // 그리드에서 선택한 도면 번호
var svcThmCdVal = "";		// 그리드에서 선택한 서비스테마코드
var svcUnitCdVal = "";		// 그리드에서 선택한 단위서비스코드 
var evetGbcdVal = "";       // 그리드에서 선택한 이벤트구분코드 
var evtCdVal = "";			// 그리드에서 선택한 이벤트코드 
var evtGrdCdVal = "";		// 그리드에서 선택한 이벤트등급코드 


/**************************************
내    용	: Body 오픈
파라미터	: 
리 턴 값	: 
참고사항	: 디자인과 로직부분의 분리
***************************************/
jQuery(document).ready(function(){
	// 검색버튼 onclick 이벤트 설정 
	$("#imgSearch").click(function(){ uf_search(); } );
	// 상위 버튼 onclick 이벤트 설정
	$("#imgUp").click(function() {
		location.replace( "<c:url value='/dwg/objectmgt/main.do'/>?lang=${lang}");
	});
	// 등록버튼 onclick 이벤트 설정
	jQuery("#add").click(function() {
		cf_openWindow("<c:url value='/dwg/gwdRegister/main.do'/>?objId=${objVo.objId}", "800", "700");
	});
	
	// 삭제버튼 onclick 이벤트 설정
	jQuery("#imgDel").click(function() {
		if( mpDwgSerno != "" ) {
			if( window.confirm("<spring:message code='sentence.want.del'/>")) {
				$("#frm").attr("action", "<c:url value='/dwg/dwgDelete.do'/>?mpDwgSerno=" + mpDwgSerno+"&objIdNum=${objVo.objId}");
	 			$("#frm").attr("target", "ifmHidden");
	 			$("#frm").submit();
	 			alert("<spring:message code='msg.alert.success.delete'/>");
	 		}
	 	}else{
	 		alert("<spring:message code='msg.notSel'/>");
	 	}
	});
	// 이벤트 항목 관리 Grid
	jQuery("#ifmMappDwgMng").attr("src", "<c:url value='/dwg/mappDwgMgt/mappDwgGridForm.do'/>?objId=${objVo.objId}");
	
});

/*
 * 검색 Reload
 */
function uf_search() {
	var dwgKnd = $("#dwgKnd").val();
	var dwgNm = $("#dwgNm").val();
	ifmMappDwgMng.reloadGrid(dwgKnd,dwgNm);
}

function dwgView(url, width, height){
	gf_open_local(url,"",width,height);
}
function gf_open_local(url, name, width, height) {
	li_top = (window.screen.height - height) / 2;
	li_left = (window.screen.width - width) / 2;
	window.open(url, name, "width=" + width + ", height=" + height + ", top=" + li_top + ", left=" + li_left + ", status=yes");
}
</script>
</head>

<body >
<div id="wrap">
    <!-- Con_rgt : Navigator, Title, Contents : Start -->
    <div id="cont_rgt">
        <!-- Navigator : Start -->
        <div id="nav">
            <img src="<c:url value='/images/common/ico_nav.gif' />" alt="" />
            HOME &#62; <spring:message code='tit.mapp.info.mgt'/>  &#62; <spring:message code='tit.obj.info.mgt'/> &#62; <spring:message code='tit.dwg.info.mgt'/>
        </div>
        <!-- Navigator : End -->

        <!-- Title : Start -->
        <div id="tit_sect">
            <h2><spring:message code='tit.dwg.info.mgt'/></h2>
        </div>
        <!-- Title : End -->

        <!-- Contents : Start -->
        <div id="contents">
        
            <!-- Form Sample : 항목 배경색 -->
            <div class="shadow"><div class="box">
            <fieldset class="inform bg">
            	<form id="frm" name="frm" method="post" target="ifmHidden"></form>
             <legend><span><spring:message code='words.obj.info'/></span></legend>
                <div class="insect">
                <table summary="">
                
                <caption class="skip"></caption>
                <colgroup>
                    <col style=""></col>
                    <col style=""></col>
                    <col style=""></col>
                    <col style=""></col>
                </colgroup>
                
                <tbody>
                    <tr>
                        <th scope="row" ><label for="selDstrCd" ><spring:message code='words.obj.id'/></label></th>
                        <td>				
                        	<input type="text" id="objId" name="objId" size="20" maxlength="3" value="${objVo.objId}" readonly />															
						</td>
						<th scope="row" ><label for="selSvcThm" ><spring:message code='words.x.Coordinates'/></label></th>
                        <td>																
                        	<input type="text" id="znCd" name="znCd" size="20" maxlength="3" value="${objVo.objX}"  readonly/>								
						 </td>
                    </tr>
                    <tr>
                        <th scope="row" ><label for="selSvcUnit" ><spring:message code='words.obj.nm'/></label></th>
                        <td>					
                        	<input type="text" id="znCd" name="znCd" size="20" maxlength="3" value="${objVo.objNm}"  readonly/>																				
						</td>
						<th scope="row" ><label for="selEvtCd" ><spring:message code='words.y.Coordinates'/></label></th>
                        <td>			
                        	<input type="text" id="znCd" name="znCd" size="20" maxlength="3" value="${objVo.objY}" readonly />																							
						</td>
                    </tr>
                    <tr>
						<th scope="row" ><label for="selCpxEvtYn" ><spring:message code='words.use.yn'/></label></th>
                        <td>				
                        	<input type="text" id="znCd" name="znCd" size="20" maxlength="3" value="${objVo.useYn}"  readonly/>																					
						 </td>
                    </tr>
               </tbody>
                </table>
                    <!-- Button Section : End -->
                </div>
            </fieldset>
            </div></div>
            
            <!-- 상황이벤트 리스트 조회 및 검색 -->
            <div class="src_box_sect"><div class="inner"><div class="inner2"><div class="inner3">
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
            <!-- Form Sample -->
            <div class="fl sect_info">
                &#91;<spring:message code='words.totl.srch.cnt'/>&#58; <span id="spnTotal" name="spnTotal" style="width:20; text-align: right;"></span><spring:message code='words.cnt'/>&#93;
            </div>
            <div class="btn_sect_top">
             	<span class="button lightgray bold" id="add"><a href="#" title=""><spring:message code='btn.add'/></a></span>
             	<span class="button lightgray bold" id="imgDel"><a href="#" title=""><spring:message code='btn.delete'/></a></span>
            </div>
            <div class="grd_sect" style="height:250px;">
              <iframe id="ifmMappDwgMng" name="ifmMappDwgMng" src="" frameborder="0" framespacing="0" marginwidth="0" marginheight="0" scrolling="no" title=""  width ="100%"></iframe>
            </div>
               <!-- Button Section : Start -->
                    <div class="btn_sect_bottom">
				  		<span class="button lightgray bold" id="imgUp"  ><a href="#" title=""><spring:message code='btn.hrnk.list'/></a></span>
                    </div>
        </div>
        <!-- Contents : End -->

        <!-- Footer : Start -->
        <div id="bottom">
            Copyright&#169; 2014 <span class="comp_nm">KT</span> All rights reserved.
        </div>
        <!-- Footer : End -->

    </div>
    <!-- Con_rgt : Navigator, Title, Contents : End -->
</div>
</body>
<iframe id="ifmHidden" name="ifmHidden" width="0" height="0" frameborder="0" scrolling="no"></iframe>
</html>

