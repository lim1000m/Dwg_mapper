<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%

    out.println("<link rel='stylesheet' type='text/css' href='" + "/DWGMP/css/basic/kr" + "/default.css' />");
    out.println("<script type=\"text/javascript\" src=\"/DWGMP/js/common.js\" ></script>");
    out.println("<script type=\"text/javascript\" src=\"/DWGMP/js/common_cam.js\" ></script>");
    
    
%>
<script>
/***********************************************************************
 * 내	용 	: 메인 팝업 창 오픈
 * 파라미터 	: 1. url - 파일 위치 정보
       	  	  2. ls_width  - 창 넓이 값
              3. ls_heigth - 창 높이 값
              4. flag - 자신창의 이름
 * 리 턴 값 	: 
 * 참고사항 	:
***********************************************************************/
function cf_openWindow(url, ls_width, ls_height , windowName) {
	var li_top = (window.screen.height - ls_height) / 2;
 	var li_left = (window.screen.width - ls_width) / 2;

    var position = 'width=' + ls_width + ',height=' + ls_height + ',top=' + li_top + ',left=' + li_left;
    var winset = 'resizable=no,menubar=no,scrollbars=no,status=yes,titlebar=no,toolbar=no,' + position;
    
    var newwin = window.open('about:blank', windowName, winset);
    
    if(newwin == null){
    	alert("");
    }else{
    	newwin = window.open(url, windowName, winset);
    }
    return newwin;
}
</script>