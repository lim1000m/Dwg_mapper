<%-- --------------------------------------------------
  Page Name 	: objectInfoMgt.jsp 
  Description 	: 객체 정보 관리 메인 화면
  Modification Information
  
         수정일                수정자                           수정내용
  ----------   ----------      ---------------
  
  
  author 박용택
  since 2013.12.23
  version 1.0
--------------------------------------------------- --%>
<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib prefix="c"   uri="http://java.sun.com/jsp/jstl/core" %> 
<%@ taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %> 
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<title><spring:message code='tit.obj.info.mgt'/></title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<%@ include file="/common/common.jsp" %>
<!-- jQuery UI custom theme -->
<link rel="stylesheet" type="text/css" media="screen" href="<c:url value='/css/custom-theme/jquery-ui-1.8.20.custom.css'/>"/>
<!-- Grid CSS -->
<link rel="stylesheet" type="text/css" media="screen" href="<c:url value='/css/jqGrid/ui.jqgrid.css'/>"/>

<!-- jQuery Library -->
<script src="<c:url value='/js/lib/jquery-1.7.2.min.js'/>"></script>
<!-- jQuery Grid Local -->
<script src="<c:url value='/js/jqGrid/i18n/grid.locale-${lang}.js'/>"></script>
<!-- jQuery Grid Library -->
<script src="<c:url value='/js/jqGrid/jquery.jqGrid.min.js'/>"></script>

<script>
var objId = "";
var searchParam = parent.parent.searchParam;
/**************************************
 * 내    용	: Body 오픈
 * 파라미터	:  
 * 리 턴 값	: 
 * 참고사항	: 디자인과 로직부분의 분리
***************************************/
jQuery(document).ready(function() {
	// 지역코드관리 Grid
	$("#ifmObjInfoMng").attr("src", "<c:url value='/dwg/objectmgt/objectGridForm.do'/>");
	// 검색버튼 onclick 이벤트 설정 
	$("#imgSearch").click(function(){ uf_search(); } );
	
	// 등록버튼 onclick 이벤트 설정
	$("#imgReg").click(function() {
		location.replace("<c:url value='/dwg/objectmgt/objectEditForm.do'/>?viewMode=C");
	});

	// 수정버튼 onclick 이벤트 설정
	$("#imgMod").click(function() {
		if( objId != "")
	 		location.replace("<c:url value='/dwg/objectmgt/objectEditForm.do'/>?viewMode=U&objId=" + objId);
	 	else
	 		alert("<spring:message code='msg.notSel'/>");
	});

	// 삭제버튼 onclick 이벤트 설정
	$("#imgDel").click(function() {
		if( objId != "") {
			if( window.confirm("<spring:message code='sentence.want.del'/>")){
				uf_check();
	 		}
	 	}else{
	 		alert("<spring:message code='msg.notSel'/>");
	 	}
	});
	
	
} );

/******************************************
내    용	: 연관 데이터 존재여부 체크
파라미터	: 
리 턴 값	: 
참고사항	: 
*******************************************/
function uf_check() {
	jQuery.ajax({
		url : "<c:url value='/dwg/objectmgt/objValidChkeck.do'/>",
		type : "POST",
		
		// 파라미터 정의
		data :{
			"gubun" : "2",					// 실행구분( 지역코드연관데이터체크 : 11)
			"objId"  : objId,		// 지역코드
		},
		
		dataType : "xml",
		asyc : "true",
		contentType : "application/x-www-form-urlencoded",
		
		// 요청 성공일 경우
		success :function(responseXML, textStatus) {
			var rtnMsg = responseXML.getElementsByTagName("message")[0].firstChild.data;
			var row_data = rtnMsg.split("#");
			rtnVal = row_data[1];
			if(rtnVal == "Y") {
				alert("<spring:message code='sentence.relv.data.notdel.msg'/>");
				return;
				
			}else {
				$("#frm").attr("action", "<c:url value='/dwg/objectmgt/objectDelete.do'/>?serNo=" + objId+"&lang=${lang}");
	 			$("#frm").attr("target", "ifmHidden");
	 			$("#frm").submit(); 
	 			alert("<spring:message code='msg.alert.success.delete'/>");
			}
		}
	});
}
/******************************************
 * 내    용	: 검색버튼 클릭시 처리내용
 * 파라미터	: 없음
 * 리 턴 값	: 없음
 * 참고사항	: 없음
*******************************************/
function uf_search() {
	 
	var objTyp = $("#objTyp").val();
	var objNm = $("#objNm").val();
	ifmObjInfoMng.uf_reloadGrid(objTyp, objNm);
}

function mappInfo(objId){
	var url="<c:url value='/dwg/mappDwg/main.do'/>?objId="+ objId+"&language=kr";
	location.replace(url);	
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
            HOME &#62; <spring:message code='tit.mapp.info.mgt'/>  &#62; <spring:message code='tit.obj.info.mgt'/>
        </div>
        <!-- Navigator : End -->

        <!-- Title : Start -->
        <div id="tit_sect">
            <h2><spring:message code='tit.obj.info.mgt'/></h2>
        </div>
        <!-- Title : End -->

        <!-- Contents : Start -->
        <div id="contents">
            <!-- Search Box : Start -->
            <div class="src_box_sect"><div class="inner"><div class="inner2"><div class="inner3">
            	<form id="frm" name="frm" method="post" target="ifmHidden"></form>
                <!-- Hidden Value Section : End -->
                <fieldset>
                   <legend class="skip"><spring:message code='words.serc.cond'/></legend>
                    <table summary="">
                    <caption class="skip"><spring:message code='words.serc.cond.input.form'/></caption>
                    <tbody>
                        <tr>
                            <th scope="row"><spring:message code='words.serc.cond'/></th>
                            <td>
                               <label for="objTyp"><spring:message code='words.obj.typ'/></label>
                               <select id="objTyp" name="objTyp" style="width:80">
								   <option value="">&#45;&#45;<spring:message code='words.totl'/>&#45;&#45;</option>
								   <option value="01"><spring:message code='words.building'/></option>
								    <option value="02"><spring:message code='words.road'/></option>
								    <option value="03"><spring:message code='words.land'/></option>
							   </select>
                               <label for="objNm"><spring:message code='words.obj.nm'/></label>
                               <input type="text" id="objNm" name = "objNm" style="width:200" maxlength="3"/>
								&nbsp;&nbsp;
                                <span id="imgSearch" class="button darkgray bold"><a href="#" title=""><spring:message code='words.srch'/></a></span>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </fieldset>
                
            </div></div></div></div>
            <!-- Search Box : End -->

            <!-- Section Information : Start -->
            <div class="fl sect_info">
               &#91;<spring:message code='words.totl.srch.cnt'/>&#58; <span id="spnTotal" name="spnTotal" style="width:20; text-align: right;"></span><spring:message code='words.cnt'/>&#93;
            </div>
            <!-- Section Information : End -->

            <div class="grd_sect" style="height:397px;">
                <iframe id="ifmObjInfoMng" name=ifmDstrCdMng src="" frameborder="0" framespacing="0" marginwidth="0" marginheight="0" scrolling="no" title=""  style="width:100%;height:100%;"></iframe>
            </div>
            <!-- Grid Section : End -->
            
            <!-- Button Section : Start -->
            <div class="btn_sect_bottom">
                <span class="button lightgray bold" id="imgReg"><a href="#" title=""><spring:message code='btn.create'/></a></span>
                <span class="button lightgray bold" id="imgMod"><a href="#" title=""><spring:message code='btn.update'/></a></span>
                <span class="button lightgray bold" id="imgDel"><a href="#" title=""><spring:message code='btn.delete'/></a></span>
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

</div>
<iframe id="ifmHidden" name="ifmHidden"  style="visibility:hidden" ></iframe>
</body>
</html>
