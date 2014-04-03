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
<!-- RSA 암호화 라이브러리 (순서가 매우 중요~!!!) -->
<script language="JavaScript" type="text/javascript" src="<c:url value='/js/rsa/jsbn.js'/>"></script>
<script language="JavaScript" type="text/javascript" src="<c:url value='/js/rsa/prng4.js'/>"></script>
<script language="JavaScript" type="text/javascript" src="<c:url value='/js/rsa/rng.js'/>"></script>
<script language="JavaScript" type="text/javascript" src="<c:url value='/js/rsa/rsa.js'/>"></script>
<script language="JavaScript" type="text/javascript" src="<c:url value='/js/rsa/base64.js'/>"></script>
<!-- RSA 암호화 라이브러리 끝-->

<!-- jQuery Library -->
<script src="<c:url value='/js/lib/jquery/jquery-1.9.1.min.js'/>" ></script>

<script type="text/javascript" language="javascript">
jQuery(document).ready(function(){
    //RSA 공개키 세팅
    jQuery("#rsaPublicKeyModulus").val("${publicKeyModulus}");
    jQuery("#rsaPublicKeyExponent").val("${publicKeyExponent}");
    
    jQuery("#loginBtn").click(function(){
        uf_encryptMsg();
    });
    
    
    // Input Box에서의 엔터키 체크
    jQuery(":input").keydown(function(e){
        // 엔터 키코드 13
       if(e.keyCode == 13){
           
           if(jQuery("#loginId").val() == "" || jQuery("#loginId").val() == null){
               alert("<spring:message code='sentence.user.id.msg'/>");
               jQuery("#loginId").focus();
               jQuery("#loginId").select();
               
               return;
           }
           
           if(jQuery("#loginPwd").val() == "" || jQuery("#loginPwd").val() == null){
               alert("<spring:message code='sentence.pwd.input.msg'/>");
               //jQuery("#loginPwd").val("","");
               jQuery("#loginPwd").focus();            
               return;
           }
           
           uf_encryptMsg(); // 메시지 암호화 후 전송
        }
    });
    
    jQuery("#loginId").focus();
});

function uf_encryptMsg(){
    userId = jQuery("#loginId").val();
    userPwd = jQuery("#loginPwd").val();
    
    try {
        var rsa = new RSAKey();
        rsa.setPublic("${publicKeyModulus}", "${publicKeyExponent}");

        var encryptUsrId    = rsa.encrypt(userId);
        var encryptUsrPwd   = rsa.encrypt(userPwd);
        
        // 사용자ID와 비밀번호를 RSA로 암호화한다.
        jQuery("#encryptUsrId").val(encryptUsrId);
        jQuery("#encryptUsrPwd").val(encryptUsrPwd);
        
        jQuery("#frm").attr("method", "post");
        jQuery("#frm").attr("action", "<c:url value='/loginProc.do'/>");
        jQuery("#frm").attr("target", "iframeHid");
        jQuery("#frm").submit();

    } catch(err) {
        alert(err);
    }
}
</script>
</head>
<body>
<div id="wrap">
    <div id="container">
        <!-- Logo : Start -->
        <div class="logo_sect"><%-- <c:url value='/images/common/ico_nav.gif' /> --%>
            <h1><img src="<c:url value='/images/common/logo_ubican.png' />" alt="UBI&#46;CAHN" class="logo" /></h1>
            <img src="<c:url value='/'/><%=imgPath%>${lang}/txt_sysinfo.png" alt="Control System" class="logo_sub" />
        </div>
        <!-- Logo : End  -->

        <!-- Login Form : Start -->
        <div class="login_sect">
            <form id="frm" target=iframeHid method="post" action="/MUI/login.do">
                <input type="hidden" id="encryptUsrId"  name="encryptUsrId"     value=""            />
                <input type="hidden" id="encryptUsrPwd" name="encryptUsrPwd"    value=""            />
                <input type="hidden" id="method"        name="method"           value="loginProc"   />
                <input type="hidden" id="lang"          name="lang"             value="${lang}"     />
                <fieldset>
                    <legend class="skip">Login</legend>
                    <dl>
                        <dt class="uid">
                            <label for="uid"><img src="<c:url value='/images/common/txt_id.png' />" alt="ID" /></label>
                        </dt>
                        <dd class="uid">
                            <input type="text" id="loginId" name="loginId"          value="" />
                        </dd>
                        <dt class="upass">
                            <label for="upass"><img src="<c:url value='/images/common/txt_pass.png' /> " alt="PASS" /></label>
                        </dt>
                        <dd class="upass">
                            <input type="password" id="loginPwd" name="loginPwd"    value="" />
                        </dd>
                    </dl>
                    <p>
                        <a href="" title=""><img src="<c:url value='/images/common/btn_login.png' />" id="loginBtn" alt="Login" /></a>
                    </p>
                </fieldset>
            </form>
        </div>
        <!-- Login Form : End -->
        
        <!-- Footer : End -->
        <div class="copy">
            Copyright&#169; 2014 <em class="comp_nm">KT</em> All rights reserved.
        </div>
        <!-- Footer : End -->
    </div>
</div>
</body>
</html>