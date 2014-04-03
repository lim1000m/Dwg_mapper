<%-- --------------------------------------------------
  Page Name 	: index.jsp 
  Description 	:  로그인 화면 
  Modification Information

    수정일       수정자             수정내용
  ----------   ----------      ---------------
  
  
  author 윤성진
  since 2014.02.06
  version 1.0
--------------------------------------------------- --%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"   uri="http://java.sun.com/jsp/jstl/core" %> 
<%@ page import="kr.mp.dwg.cmmn.util.InitDwgSys" %>
<%
 	String lang = InitDwgSys.getLang();
	request.setAttribute("lang", lang );
%>

<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko" style="overflow:hidden;width:100%;height:100%;">
<head>
<title>UBI-CAHN Management Main</title>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />


<!-- jQuery Library -->
<script src="<c:url value='/js/lib/jquery/jquery-1.9.1.min.js'/>" ></script>

<script type="text/javascript">
/*************************************
 * 내	용 		: Body Open
 * 파라미터 	:
 * 리 턴 값 	: 
 * 참고사항 	:
**************************************/
jQuery(document).ready(function(){
    jQuery("#ifrm").attr("src", "<c:url value='/dwg/login/main.do'/>?lang="+"<%=lang%>");
});


</script>
</head>

<body style="width:100%;height:100%;margin:0;padding:0;background:#ffffff;">
<div style="width:100%;height:100%;">

<iframe id="ifrm" src="" style="width:100%;height:100%" frameborder="0" framespacing="0" marginwidth="0" marginheight="0" scrolling="no" name="ifrm" title="메인 로그인 화면 프레임">
  [귀하의 브라우저(사용도구)는 프레임을 지원하지 않거나,
    현재 프레임이 디스플레이되도록 구성되어 있지 않습니다.
    그러나, 방문을 계속 하실 수 있습니다.
    <A href="/dwg/login/main.do">관계 문서.</A>]
    [Your user agent does not support frames or is currently configured not to display frames. However, you may visit 
    <A href="/dwg/login/main.do">the related document.</A>]
</iframe>

<iframe id="iframeHid" name="iframeHid" style="visibility:hidden;height:0px;width:0px;"></iframe>

</div>
</body>
</html>