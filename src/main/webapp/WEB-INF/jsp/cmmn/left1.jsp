<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
<%@ include file="/common/common.jsp" %>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<title>Left1</title>

<!-- 공통 script : common.js -->
<script type="text/javascript" src="<c:url value='/js/common.js'/>"></script>
<!-- menu 초기화 javascript -->
<script type="text/javascript" src="<c:url value='/js/jqAnimate/JMap.js' />" ></script>
<script type="text/javascript" src="<c:url value='/js/menuScript.js'/>" ></script>

<!-- jquery library : jquery-1.4.2.js  -->
<script type="text/javascript" src="<c:url value='/js/jqLib/jquery-1.4.2.js'/>"></script>

<script>
var menuIdLst = [1,3,4,5,6];		//메뉴 번호
var subMenuIdLst = [11,31,41,42,43,51,61]; //서브메뉴 번호
var finalMenuIdLst = [111, 311, 411,421,431,511,611];

/*****************************************
 * 함 수 명 : 
 * 매개변수 : 
 * 함수설명 : 페이지 로딩시 호출되며 페이지 초기화, 기초 데이터 세팅, 이벤트 바인딩 처리
 *****************************************/
jQuery(document).ready(function(){
	bindEventMenuLv2(); //2차 메뉴 이벤트 바인딩
	bindEventMenuLv3(); //3차 메뉴 이벤트 바인딩
	bindEventMenuLv4(); //3차 메뉴 이벤트 바인딩
	changeMenu('<c:out value="${paramMap.subMenuID}"/>');
	gf_initMenuMap(1);
	 if('<c:out value="${paramMap.subMenuID}"/>'){
		 changeContext('<c:out value="${paramMap.subMenuID}"/>11');
		 }
		
});

/*****************************************
 * 함 수 명 : 
 * 매개변수 : 
 * 함수설명 : 메뉴 초기화
 *****************************************/
function changeMenu(menuID){
	    expandMenu(menuID);     // 2차 메뉴 펼치기
	    expandSubMenu(menuID + "1");  // 3차 메뉴 펼치기
}

/*****************************************
 * 함 수 명 : 
 * 매개변수 : 
 * 함수설명 : 클릭 이벤트 바인딩(2차 메뉴)
 *****************************************/
 function bindEventMenuLv2() {
	    jQuery(".depth01 > li > a").each(function() {
	        jQuery(this).bind("click", function() {
	            curId = jQuery(this).attr("id");// 한자리
	            expandMenu(curId);              // 2차 메뉴 펼치기
	            expandSubMenu(curId + "1");           // 3차 메뉴 펼치기
	            changeContext(curId + "11");    // 4차 메뉴 펼치기
	        });
	    });
	}
/*****************************************
 * 함 수 명 : 
 * 매개변수 : 
 * 함수설명 : 클릭 이벤트 바인딩(3차 메뉴)
 *****************************************/
 function bindEventMenuLv3() {
	    jQuery(".depth02 > li > a").each(function() {
	        jQuery(this).bind("click", function() {
	            curId = jQuery(this).attr("id");// 두자리
	            expandSubMenu(curId);           // 3차 메뉴 펼치기
	            changeContext(curId + "1");     // 4차 메뉴 펼치기
	        });
	    });
	}
 /*****************************************
  * 함 수 명 :
  * 매개변수 :
  * 함수설명 : 클릭 이벤트 바인딩(4차 메뉴)
  *****************************************/
 function bindEventMenuLv4() {
     jQuery(".depth03 > li > a").each(function() {
         jQuery(this).bind("click", function() {
             curId = jQuery(this).attr("id");
             // 4차메뉴 초기화
             foldAllSubMenuList();
             jQuery("#" + curId).addClass("active");
             changeContext(curId);
         });
     });
 }
 /*****************************************
  * 함 수 명 : 
  * 매개변수 : 
  * 함수설명 : 클릭된 메뉴에 따라 페이지 이동
  *****************************************/
 function changeContext(menuID){
 	
 	url = gf_getContentsUrl(menuID);
 	
	if(url == null){
		alert("<spring:message code='sentence.mnu.url.asgn.msg'/>" + menuID);
    }
	else{
		parent.uf_changeContents(url);
	}
 	
 }
 /*****************************************
  * 함 수 명 : 
  * 매개변수 : 
  * 함수설명 : 메뉴 펼치기(2차 메뉴)
  *****************************************/
 function expandMenu(menuID){
 	 foldAllMenu();
      jQuery("#" + menuID).next().css("display", "block");
      jQuery("#" + menuID).addClass("active");
 }
 function foldAllMenu(){
		jQuery(".depth01 > li > a").each(function() {
	        jQuery(this).removeClass();
	    });
	    jQuery(".depth02").each(function() {
	        jQuery(this).css("display", "none");
	        jQuery(this).children().removeClass();
	    });
 }
 /*****************************************
  * 함 수 명 : 
  * 매개변수 : 
  * 함수설명 : 메뉴 펼치기(3차 메뉴)
  *****************************************/
 function expandSubMenu(subMenuID){
 	foldAllSubMenu();
     jQuery("#snb0101_" + subMenuID).css("display", "block");
     jQuery("#" + subMenuID).addClass("active");
     jQuery("#snb0101_" + subMenuID + " > li > a").first().addClass("active");
     
  // 4차 메뉴 초기화
     foldAllSubMenuList();
     // 4차 메뉴 펼치기
     jQuery("#snb0101_" + subMenuID).css("display", "block");
     jQuery("#snb0101_" + subMenuID + " > li > a").first().addClass("active");
 }
 /* 4차 메뉴 초기화 */
 function foldAllSubMenuList() {
     jQuery(".depth03 > li > a").each(function() {
         jQuery(this).removeClass();
     });
 }
function foldAllSubMenu(){
	jQuery(".depth03").each(function() {
        jQuery(this).css("display", "none");
        jQuery(this).children().removeClass();
    });
    
    jQuery(".depth02 > li > a").each(function() {
        jQuery(this).removeClass();
    });
}



</script>
</head>
<body>
<div id="wrap">
        <!-- Cont_lft : snb, Aside : Start -->
        <div id="cont_lft">
            <div id="snb">
                <div class="snb_top"><spring:message code='tit.mapp.info.mgt'/></div>                           <!-- 맵핑 정보 관리 -->
                <ol class="depth01">
                    <li>
                        <a id="11" href="#" title=""><spring:message code='tit.obj.info.mgt'/></a>                   <!-- 객체 정보 관리 -->
                    </li>
                </ol>
            </div>
            <div id="aside"></div>
        </div>
        <!-- Cont_lft : snb, Aside : End -->
    </div>
</body>
</html>