<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String cssPath = (String)session.getAttribute("CSS_PATH");
	String imgPath = (String)session.getAttribute("IMG_PATH");
	String wrkFlowPath = (String)session.getAttribute("WRK_FLOW_PATH");
    out.println("<link rel='stylesheet' type='text/css' href='" + "/DWGMP/css/basic/kr" + "/pop.css' />");
    out.println("<script type='text/javascript' src='/js/common.js' ></script>");
 %>