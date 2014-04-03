<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<%@ include file="/common/common.jsp" %>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Top Menu</title>
<!-- 공통 script : common.js -->
<script type="text/javascript" src="<c:url value='/js/common.js'/>"></script>
<script type="text/javascript" src="<c:url value='/js/jqAnimate/JMap.js'/>"></script>

<!-- jquery library : jquery-1.4.2.js  -->
<script type="text/javascript" src="<c:url value='/js/lib/jquery-1.7.2.min.js'/>"></script>

<script>

/*****************************************
 * 함 수 명 : 
 * 매개변수 : 
 * 함수설명 : 페이지 로딩시 호출되며 페이지 초기화, 기초 데이터 세팅, 이벤트 바인딩 처리
 *****************************************/
 var g_currentBt = "1";
 var g_currentSubMenu = 1;
 var userId = "${resultMap.userId}";
jQuery(document).ready(function(){
	// ~~님 '로그아웃' message 출력
    jQuery(".name").html("${sessionScope.USER_NM}" + " <spring:message code='words.esq'/>&nbsp;&nbsp;");
	// 로그아웃
    jQuery("#imgLogout").click(function(){ uf_logout(); });
	// Click 처리
    uf_changeButton(g_currentBt);
    // Click 된 서브 메뉴 Show
    uf_showSubMenu("1");
    // 메뉴버튼 클릭 이벤트 바인딩
    uf_MenuButtonClickEventBind();
    // 버튼 마우스 오버 이벤트 바인딩
    uf_MenuMouseOverEventBind();
    // 선택된 대상에 오렌지 class 적용[첫번째]
    //jQuery("#menu" + g_currentBt + g_currentSubMenu).addClass("orange");
    jQuery("#gnb_depth02_" + g_currentBt + " > ol > li > a").first().addClass("active");

    // 메뉴항목 클릭 이벤트 바인딩
    uf_SubMenuClickEventBind();//메뉴 항목 버튼 클릭 이벤트 바인딩
});

function uf_logout() {
	top.location.href = '<c:url value="/" />';
}

/*****************************************
 * 함 수 명 : 대메뉴 클릭 이벤트 바인딩
 * 매개변수 :
 * 함수설명 : 메뉴버튼 클릭 이벤트 바인딩(대메뉴)
*****************************************/
function uf_MenuButtonClickEventBind(){
    jQuery("#gnb > ol > li > a").each(function(){
        jQuery(this).bind("click", function(e){
            curTagId = jQuery(this).attr("id");
            g_currentBt = curTagId; // 대분류 선택영역 벗어나는경우 되돌아가는데에 사용됨
            g_currentSubMenu = curTagId + "1";
            // 도움말 클릭시
            if(curTagId == "5"){
            	
            }else{
                uf_changeButton(curTagId);
                uf_clearSubMenu();
                uf_showSubMenu(curTagId);
                jQuery("#gnb_depth02_" + curTagId + " > ol > li > a").first().addClass("active");
                parent.uf_changeLeft(g_currentBt, curTagId+"1");
            }
        });
    });
}

/*****************************************
 * 함 수 명 : 서브메뉴 클릭 이벤트 바인딩
 * 매개변수 :
 * 함수설명 : 메뉴항목 클릭 이벤트 바인딩
 *****************************************/
function uf_SubMenuClickEventBind(){
	 parent.uf_changeLeft("1", "11");
    jQuery(".gnb_depth02 a").each(function(){
        jQuery(this).bind("click", function(e){
            curTagId = jQuery(this).attr("id");
            menuId      = curTagId.substring(0,1);
            subMenuId   = curTagId;
            g_currentBt = menuId;
            g_currentSubMenu = subMenuId;
           
            uf_clearSubMenu();
            uf_changeButton(g_currentBt);
            //uf_changeSubMenu(subMenuId);
            uf_showSubMenu(g_currentBt);	
            parent.uf_changeLeft(g_currentBt, g_currentSubMenu);
        });
    });
}

/*****************************************
 * 함 수 명 :
 * 매개변수 :
 * 함수설명 : 버튼 마우스 오버 이벤트 바인딩
 *****************************************/
function uf_MenuMouseOverEventBind(){
    // 메뉴 선택바에서 벗어나는 경우 현재 클릭이 되어있는 곳으로 전환
    jQuery("#gnb").bind("mouseleave", function(e){
        uf_clearSubMenu();
        uf_changeButton(g_currentBt);
        uf_showSubMenu(g_currentBt);
        //uf_changeSubMenu("menu"+g_currentBt+g_currentSubMenu);
        jQuery("#" + g_currentSubMenu).addClass("active");
    });
    
    jQuery("#gnb > ol > li > a").each(function(){
        jQuery(this).bind("mouseover", function(e){
            curTagId = jQuery(this).attr("id");
            uf_changeButton(curTagId);
            uf_clearSubMenu();
            //uf_changeSubMenu(curTagId);
            uf_showSubMenu(curTagId);
            
            jQuery("#gnb_depth02_" + curTagId + " > ol > li > a").first().addClass("active");
        });
    });
}

/*****************************************
 * 함 수 명 :
 * 매개변수 :
 * 함수설명 : 메뉴 버튼 눌린 부분 표시부
 *****************************************/
function uf_changeButton(btID){
    uf_clearButtonSelection();
    jQuery("#" + btID).addClass("active");
}

/*****************************************
 * 함 수 명 :
 * 매개변수 :
 * 함수설명 : 메뉴 버튼 눌린 부분 초기화
 *****************************************/
function uf_clearButtonSelection(){
    jQuery("ol > li > a").each(function(){
        jQuery(this).removeClass();
    });
 }

/*****************************************
 * 함 수 명 :
 * 매개변수 :
 * 함수설명 : 메뉴 버튼에 따라 서브 메뉴 출력
 *****************************************/
function uf_changeSubMenu(menuID){
     // 서브메뉴 선택 처리
    jQuery("#" + menuID).addClass("orange");
}

/*****************************************
 * 함 수 명 :
 * 매개변수 :
 * 함수설명 : 서브 메뉴 클리어
 *****************************************/
function uf_clearSubMenu(){
     jQuery(".gnb_depth02").each(function(){ // Sub Menu List each
        jQuery(this).css("display", "none");
        jQuery(this).children().find("a").removeClass("active");
    });
}

/*****************************************
 * 함 수 명 :
 * 매개변수 :
 * 함수설명 : 서브 메뉴 Show
 *****************************************/
function uf_showSubMenu(layerId){
    jQuery("#gnb_depth02_" + layerId).css("display", "block");
}

</script>
</head>
<body>
<div id="wrap">
    <!-- Header : Logo, Mem_sect, GNB : Start -->
    <div id="header"><div id="header_in">

        <div id="header_lft">
            <!-- Logo : Start -->
            <div class="logo"><a href="#" title=""><h1><img src="<c:url value='/images/common/logo_ubican.png' />" alt="UBI&#46;CAN" /></h1></a></div>
            <!-- Logo : End  -->
        </div>
        <div id="header_rgt">

            <!-- Mem_sect : Start -->
            <div id="mem_sect">
                <div class="mem_sect_box">
                    <span class="name"></span>
                    <span class="button h22 lightgray bold"><a href="#" title="" id="imgLogout"><spring:message code='words.logout'/></a></span>
                </div>
            </div>
            <!-- Mem_sect : End  -->

            <!-- GNB : Start -->
            <div id="gnb">
                <ol>
                    <li>
                        <a id="1" href="#" title=""><span><spring:message code='tit.mapp.info.mgt'/></span></a> 
                        <div id="gnb_depth02_1" class="gnb_depth02">
                        <ol>
                            <li>
                                <a id="11" href="#" title=""><spring:message code='tit.obj.info.mgt'/></a>
                            </li>
                        </ol>
                        </div>
                    </li>
                </ol>
            </div>
            <!-- GNB : End  -->

        </div>

    </div></div>
    <!-- Header : Logo, Mem_sect, GNB : End -->
</div>
<form id="frm" name="frm" method="post" target="ifmHidden">
<!-- Hidden Value Section : Start -->
<input type="hidden" id="method" name="method"   value=""   />
<input type="hidden" id="mode"   name="mode"     value=""   />
<input type="hidden" id="lang"   name="lang"     value=""   />
<!-- Hidden Value Section : End -->
</form>
<iframe id="ifmHidden" name="ifmHidden" style="visibility:hidden"></iframe>
</body>
</html>