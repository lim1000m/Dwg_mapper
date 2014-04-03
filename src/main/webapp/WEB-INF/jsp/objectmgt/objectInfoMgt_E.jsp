<%-- --------------------------------------------------
  Page Name 	: objectInfoMgt_E.jsp 
  Description 	: 객체 정보 등록/수정
  Modification Information
  
         수정일                수정자                           수정내용
  ----------   ----------      ---------------
  
  
  author 박용택
  since 2013.12.23
  version 1.0
--------------------------------------------------- --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<%@ taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<%@ include file="/common/common.jsp" %>
<title><spring:message code='tit.obj.info.mgt'/></title>
<!-- jQuery UI custom theme -->
<link rel="stylesheet" type="text/css" media="screen" href="<c:url value='/css/custom-theme/jquery-ui-1.8.20.custom.css'/>" />
<!-- Grid CSS -->
<link rel="stylesheet" type="text/css" media="screen" href="<c:url value='/css/jqGrid/ui.jqgrid.css'/>" />
<!-- jQuery Library -->
<script type="text/javascript" src="<c:url value='/js/lib/jquery-1.7.2.min.js'/> "></script>

<!-- 공통 script : common.js -->
<script type="text/javascript" src="<c:url value='/js/common.js'/> "></script>
<script type="text/javascript" src="<c:url value='/js/stringUtil.js'/> "></script>

<!-- 문자열 체크 공통 script : stringUtil.js -->
<script src="<c:url value='/js/stringUtil.js'/>" type="text/javascript"></script>

<!-- jquery library : jquery-1.3.2.js  -->
<script type="text/javascript" src="<c:url value='/js/jqLib/jquery-1.3.2.js'/>"></script>

<script>
	/**************************************
	 * 내    용	: Body 오픈
	 * 파라미터	: 
	 * 리 턴 값	: 
	 * 참고사항	: 디자인과 로직부분의 분리
	 ***************************************/
	jQuery(document).ready(function() {

		// 등록버튼 onclick 이벤트 설정
		$("#imgReg").click(function() {
			uf_save("C");
		});
		$("#imgMod").click(function() {
			uf_save("U");
		});

		// 취소버튼 onclick 이벤트 설정
		$("#imgCancle").click(function() {
			location.replace("<c:url value='/dwg/objectmgt/main.do'/>?lang=${lang}");
		});
	});

	/******************************************
	 * 내    용	: 지역정보 필수 입력항목 체크
	 * 파라미터	: 
	 * 리 턴 값	: 
	 * 참고사항	: 
	 *******************************************/
	function uf_save(viewMode) {
		 
		if (viewMode == "C") {
			objTyp      = jQuery("#objTyp").val();
		    objNm      = jQuery("#objNm").val();
		    objX    = jQuery("#xCoordinates").val();
		    objY    = jQuery("#yCoordinates").val();
		   
		    if(objTyp == "") {
		        jQuery("#objTyp").focus();
		        alert("<spring:message code='sentence.obj.typ.sel'/>");
		    }  else if(objNm == "") {
		        jQuery("#objNm").focus();
		        alert("<spring:message code='sentence.obj.nm.input'/>");
		    }  else if(objX == "") {	
		        jQuery("#xCoordinates").focus();
		        alert("<spring:message code='sentence.obj.x.input'/>");
		    } else if(objY== "") {
		    	jQuery("#yCoordinates").focus();
		    	alert("<spring:message code='sentence.obj.y.input'/>");
		    }  else {
				uf_check(viewMode);
			}
		} else if (viewMode == "U") { 
			objTyp      = jQuery("#objTyp").val();
		    objNm      = jQuery("#objNm").val();
		    objX    = jQuery("#xCoordinates").val();
		    objY    = jQuery("#yCoordinates").val();
		    
		    if(objTyp == "") {
		        jQuery("#objTyp").focus();
		        alert("<spring:message code='sentence.obj.typ.sel'/>");
		    }  else if(objNm == "") {
		        jQuery("#objNm").focus();
		        alert("<spring:message code='sentence.obj.nm.input'/>");
		    }  else if(objX == "") {	
		        jQuery("#xCoordinates").focus();
		        alert("<spring:message code='sentence.obj.x.input'/>");
		    } else if(objY== "") {
		    	jQuery("#yCoordinates").focus();
		    	alert("<spring:message code='sentence.obj.y.input'/>");
		    }  else {
				uf_check(viewMode);
			}

		} else {
			return;
		}
	}
	
	/**********************************************************
	 * 내    용	: 지역코드 또는 지역코드명 중복 체크
	 * 파라미터	: 
	 * 리 턴 값		: 
	 * 참고사항	: 
	 ***********************************************************/
	function uf_check(viewMode) {
		jQuery.ajax({
			url : "<c:url value='/dwg/objectmgt/objValidChkeck.do'/>",
			type : "POST",

			data : {
				"gubun" : "1", 
				"objId" : "", 
				"objNm" : jQuery("#objNm").val(), 
				"objOldNm" : jQuery("#objOldNm").val()
			},

			dataType : "xml",
			asyc : "true",
			contentType : "application/x-www-form-urlencoded",

			// 요청 성공일 경우
			success : function(responseXML, textStatus) {
				var rtnMsg = responseXML
						.getElementsByTagName("message")[0].firstChild.data;
				var row_data = rtnMsg.split("#");
				nmChkRst = row_data[0]; // 지역 명 중복체크 결과 
				if (viewMode == "C") {
					if (nmChkRst == "Y") {
						jQuery("#objNm").focus();
						alert("<spring:message code='sentence.obj.nm.dup.msg'/>");
						return;

					} else {
						$("#frm").attr("action","<c:url value='/dwg/objectmgt/objectEditSubmitProc.do'/>?viewMode=C&lang=${lang}");
						$("#frm").attr("target", "iframeHid");
						jQuery("#frm").submit();
						alert("<spring:message code='msg.alert.success.create'/>");
					}
				}

				else {
					if (nmChkRst == "Y") {
						jQuery("#objNm").focus();
						alert("<spring:message code='sentence.obj.nm.dup.msg'/>");
						return;
					} else {
						$("#frm").attr("action","<c:url value='/dwg/objectmgt/objectEditSubmitProc.do'/>?viewMode=U&lang=${lang}");
						$("#frm").attr("target", "iframeHid");
						jQuery("#frm").submit();
						alert("<spring:message code='msg.alert.success.update'/>");
					}
				}
			}
		});
	}
</script>
</head>
<body>
<div id="wrap">
    <!-- Con_rgt : Navigator, Title, Contents : Start -->
    <div id="cont_rgt">
        <!-- Navigator : Start -->
        <div id="nav">
            <img src="<c:url value='/images/common/ico_nav.gif'/>" alt="" />
            <c:choose>
			    <c:when test="${viewMode eq 'C' or (empty  objVO.objId)}">
			  		 HOME &#62; <spring:message code='tit.obj.info.mgt'/> &#62; <spring:message code='tit.obj.info.mgt.reg'/> 
			  	</c:when>
			    <c:when test="${viewMode eq 'U'}">
			  		 HOME &#62; <spring:message code='tit.obj.info.mgt'/> &#62; <spring:message code='tit.obj.info.mgt.upd'/>
			  	</c:when>
			</c:choose>				
           
        </div>
        <!-- Navigator : End -->

        <!-- Title : Start -->
        <div id="tit_sect">
            <h2>
            <c:choose>
				<c:when test="${viewMode eq 'C' or (empty objVO.objId)}">
					<spring:message code='tit.obj.info.mgt.reg'/>
				</c:when>
				<c:when test="${viewMode eq 'U'}">
					<spring:message code='tit.obj.info.mgt.upd'/>
				</c:when>
			</c:choose>
            </h2>
        </div>
        <!-- Title : End -->

        <!-- Contents : Start -->
        <div id="contents">
            <!-- Form Sample : 항목 배경색 -->
            <div class="shadow"><div class="box">
            <form id="frm" name="frm" method="post" target="ifmHidden">
            <input type="hidden" id="objId" name="objId" size="20" maxlength="20" style="background-color:#efefef;width: 120px" value="${objVO.objId}" readonly />
            <input type="hidden" id="objOldNm" name="objOldNm"  value="${objVO.objNm}" readonly />
            <!-- 등록,수정 구분 --> 
            <fieldset class="inform bg">
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
                        <th scope="row" ><label for="znCd" ><spring:message code='words.obj.typ'/></label></th>
                        <td>			
							<c:choose>
							    <c:when test="${empty objVO.objId}">
						  			<select id="objTyp" name="objTyp" style="width:80">
									    <option value=''>&#45;&#45;<spring:message code='words.sel'/>&#45;&#45;</option>
									    <option value="01"><spring:message code='words.building'/></option>
									    <option value="02"><spring:message code='words.road'/></option>
									    <option value="03"><spring:message code='words.land'/></option>
								   </select>
								</c:when>
							    <c:when test="${viewMode eq 'U'}">
							    	<select id="objTyp" name="objTyp" style="width: 90px">
										<option value=''><spring:message code='words.sel'/></option>
										<c:choose>
											<c:when test="${objVO.objTyp == '01'}">
												<option value="01" selected="selected"><spring:message code='words.building'/></option>
											    <option value="02"><spring:message code='words.road'/></option>
											    <option value="03"><spring:message code='words.land'/></option>
											</c:when>
											<c:when test="${objVO.objTyp == '02'}">
												<option value="01"><spring:message code='words.building'/></option>
											    <option value="02" selected="selected"><spring:message code='words.road'/></option>
											    <option value="03"><spring:message code='words.land'/></option>
											</c:when>
											<c:otherwise>
												<option value="01"><spring:message code='words.building'/></option>
											    <option value="02"><spring:message code='words.road'/></option>
											    <option value="03" selected="selected"><spring:message code='words.land'/></option>
											</c:otherwise>
										</c:choose>
									</select>
							    </c:when>
							</c:choose>																							
						 </td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="znNm"><spring:message code='words.obj.nm'/></label></th>
                        <td>
                        	<c:choose>
							    <c:when test="${empty objVO.objId}">
							  			<input type="text" id="objNm" name="objNm" size="20" maxlength="50"/>
								</c:when>
							    <c:when test="${viewMode eq 'U'}">
							  		<input type="text" id="objNm" name="objNm" size="20" maxlength="50" style="width: 120px" value="${objVO.objNm}"  />
							    </c:when>
							</c:choose>	
						 </td>
                    </tr>
                    <tr class="last">
                        <th scope="row"><label for="znDesc"><spring:message code='words.x.Coordinates'/></label></th>
                        <td>
                        	<c:choose>
							    <c:when test="${empty objVO.objId}">
						  			<input type="text" id="xCoordinates" name="xCoordinates" size="20" maxlength="50" style="ime-mode:disabled;" onkeypress="if((event.keyCode> 47) && (event.keyCode < 58) || (event.keyCode == 46)){return true;}else{return false;}"  />
								</c:when>
							    <c:when test="${viewMode eq 'U'}">
							  		<input type="text" id="xCoordinates" name="xCoordinates" size="20" maxlength="50" style="ime-mode:disabled;" onkeypress="if((event.keyCode> 47) && (event.keyCode < 58) || (event.keyCode == 46)){return true;}else{return false;}" value="${objVO.objX}"  />
							    </c:when>
							</c:choose>	
						</td>
                    </tr>
				    <tr>
                        <th scope="row"><label for="txtCreDtm"><spring:message code='words.y.Coordinates'/></label></th>
                        <td>
                            <c:choose>
							    <c:when test="${empty objVO.objId}">
						  			<input type="text" id="yCoordinates" name="yCoordinates" size="20" maxlength="50" style="ime-mode:disabled;" onkeypress="if((event.keyCode> 47) && (event.keyCode < 58) || (event.keyCode == 46)){return true;}else{return false;}"  />
								</c:when>
							    <c:when test="${viewMode eq 'U'}">
							  		<input type="text" id="yCoordinates" name="yCoordinates" size="20" maxlength="50" style="ime-mode:disabled;" onkeypress="if((event.keyCode> 47) && (event.keyCode < 58) || (event.keyCode == 46)){return true;}else{return false;}" value="${objVO.objY}"  />
							    </c:when>
							</c:choose>	
                        </td>
                    </tr>
                    <tr class="last">
                        <th scope="row" ><label for="txtCreMn"><spring:message code='words.use.yn'/></label></th>
                        <td>
                            <c:choose>
							    <c:when test="${empty objVO.objId}">
						  			<select id="useYn" name="useYn" style="width:80">
									   <option value="Y">Y</option>
									   <option value="N">N</option>
								   </select>
								</c:when>
							    <c:when test="${viewMode eq 'U'}">
							  		<select id="useYn" name="useYn" style="width:80">
							  			<c:choose>
											<c:when test="${objVO.useYn == 'Y'}">
												<option value="${objVO.useYn}" selected="selected">${objVO.useYn}</option>
											    <option value="02"><spring:message code='words.road'/></option>
											</c:when>
											<c:otherwise>
												<option value="01"><spring:message code='words.building'/></option>
											    <option value="02"><spring:message code='words.road'/></option>
											    <option value="03" selected="selected"><spring:message code='words.land'/></option>
											</c:otherwise>
										</c:choose>
									  <option value="${objVO.useYn}" >${objVO.useYn}</option>
								   </select>
								  		 
							    </c:when>
							</c:choose>	
                        </td>
                    </tr>
               </tbody>
                </table>
                    <!-- Button Section : End -->
                </div>
            </fieldset>
            </form>
            </div></div>
            <!-- Form Sample -->
               <!-- Button Section : Start -->
                    <div class="btn_sect_bottom">
                    	<c:choose>
						    <c:when test="${empty objVO.objId}">
						  		<span class="button lightgray bold" id="imgReg" ><a href="#" title=""><spring:message code='btn.create'/></a></span>
						    </c:when>
						    <c:when test="${viewMode eq 'U'}">
						  		<span class="button lightgray bold" id="imgMod"><a href="#" title=""><spring:message code='btn.update'/></a></span> 
						    </c:when>
						    
						</c:choose>
							<span class="button lightgray bold" id="imgCancle"  ><a href="#" title=""><spring:message code='btn.cancle'/></a></span>
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
<iframe id="iframeHid" name="iframeHid" width="0" height="0" frameborder="0" scrolling="no"></iframe>
</html>

