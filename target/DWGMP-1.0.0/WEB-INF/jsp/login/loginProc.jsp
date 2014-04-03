<%-- --------------------------------------------------
  Page Name 	: loginProc.jsp 
  Description 	: 로그인 처리 
  Modification Information

    수정일       수정자             수정내용
  ----------   ----------      ---------------
  
  
  author 남경일
  since 2012.10.10
  version 1.0
--------------------------------------------------- --%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"   uri="http://java.sun.com/jsp/jstl/core" %> 
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
<title>UBI.CAHN Management Main</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

<%@ include file="/common/commonMain.jsp" %>

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
    var result  = "${RESULT}";
    
    if(result == "SUCCESS"){
    	parent.location.href = "<c:url value='/main.do'/>";
    }else{
        if(result == "NO_ID"){//아이디가 없는 경우
            alert("<spring:message code='sentence.user.id.msg'/>");
        }else if(result == "INVAL_PWD"){//패스워드가 틀린 경우
            alert("<spring:message code='sentence.input.pswd.msg'/>");
        }
    	parent.location.href = "<c:url value='/index.jsp'/>";
    } 
});
</script>
</head>

<body>
<div id="wrap"></div>
</body>
</html>