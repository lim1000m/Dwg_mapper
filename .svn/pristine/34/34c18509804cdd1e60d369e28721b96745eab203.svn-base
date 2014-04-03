package kr.mp.dwg.loginMgt.web;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.PrivateKey;
import java.security.spec.RSAPublicKeySpec;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import kr.mp.dwg.cmmn.util.CryptUtil;
import kr.mp.dwg.cmmn.util.InitDwgSys;
import kr.mp.dwg.domain.UserVO;
import kr.mp.dwg.loginMgt.service.LoginService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;



/**
 * 
 * @className LoginController
 * @author 윤성진
 * @since 2014. 2. 6.
 * @version 1.0
 * @comment 
 *    LoginViewController
 * @Modification Information  
 * 
 *       수정일        수정자                    수정내용
 *     ----------   ---------   -------------------------------
 *  
 * 
 * 
 *  Copyright (C) by ESE All right reserved.
 */

@Controller
public class LoginController extends MultiActionController{
	
	@Resource(name  = "loginService")
    private LoginService loginService;
	
	@RequestMapping("/dwg/login/main.do")
	public ModelAndView mainView(HttpServletRequest request, HttpServletResponse response){
			
		String lang = InitDwgSys.lang;
		HttpSession session = request.getSession(true);
		session.setAttribute("lang", lang);
		session.setAttribute("CSS_PATH", InitDwgSys.getCSS_PATH());
		session.setAttribute("IMG_PATH", InitDwgSys.getIMG_PATH());
		ModelAndView mav = new ModelAndView("login/login");
		mav.addObject("lang"        , lang.toLowerCase());  // language
		String defaultLang = request.getLocale().getLanguage();
		String defaultContry = request.getLocale().getCountry();
		String defaultValiant = request.getLocale().getVariant();
		session.setAttribute("defaultLang", defaultLang);
		session.setAttribute("defaultContry", defaultContry);
		session.setAttribute("defaultValiant", defaultValiant);


		Locale locale = new Locale(lang, lang, lang);
		request.getLocale();
		Locale.setDefault(locale);
		//로그인 아이디 패스워드 암호화를 위한 키쌍 생성
        CryptUtil cryptUtil = new CryptUtil();
        KeyPair keyPair = null;
        try {
            keyPair = cryptUtil.getRsaKeyPair(512);
        } catch (Exception e) {
            this.getApplicationContext();
        }
        //세션에 개인키 저장
        session.setAttribute("__RSA_PRIVATE_KEY__", keyPair.getPrivate());
        try {
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");                                     
            RSAPublicKeySpec publicSpec = (RSAPublicKeySpec) keyFactory.getKeySpec(keyPair.getPublic(), RSAPublicKeySpec.class);

            String publicKeyModulus = publicSpec.getModulus().toString(16);
            String publicKeyExponent = publicSpec.getPublicExponent().toString(16);

            //login.jsp에 공개키와 Exponent 설정
            mav.addObject("publicKeyModulus", publicKeyModulus);
            mav.addObject("publicKeyExponent", publicKeyExponent);

        }catch(Exception e){
        	session.invalidate();
        }
		
		return mav;
	}
		
	@RequestMapping("/loginProc.do")
	public ModelAndView loginProc(HttpServletRequest request, HttpServletResponse response){
		ModelAndView mav = new ModelAndView("login/loginProc");

        String encryptedId = request.getParameter("encryptUsrId");
        String encryptedPwd = request.getParameter("encryptUsrPwd");
        HttpSession session = request.getSession();

        PrivateKey privateKey = (PrivateKey)session.getAttribute("__RSA_PRIVATE_KEY__");
        //개인키 재사용 금지
        session.removeAttribute("__RSA_PRIVATE_KEY__");
        if (privateKey == null) {
            throw new RuntimeException("암호화 비밀키 정보를 찾을 수 없습니다.");
        }
        String userId       = "";       // 사용자 아이디
        String password     = "";       // 비밀번호
        String result       = "NO_ID";  // 로그인 진행 결과
        
        try {
            CryptUtil cryptUtil = new CryptUtil();
            Map<String, String> paramMap = new HashMap<String,String>();
            userId = cryptUtil.RsaDecrypt(privateKey, encryptedId);
            password = cryptUtil.RsaDecrypt(privateKey, encryptedPwd);
            
            paramMap.put("userId", userId);
            paramMap.put("countryCd", InitDwgSys.getCountryCd());
            paramMap.put("langCd", InitDwgSys.getLangCd());
            
	        String lang = (String)session.getAttribute("lang");
	        mav.addObject("lang", lang);
	
	        mav.addObject("USERID"    , userId);
	        mav.addObject("USERPWD"   , password);

	        UserVO userVO = loginService.getUserInfo(paramMap);
	
	        if(userVO != null && userId.equals(userVO.getUserId())){
	            if(password.equals(userVO.getUserPswd())){
                    result = "SUCCESS";
	                /* ==============================================================
	                 * 세션정보 설정 : 사용자 아이디, 사용자 명, 룰 아이디
	                 ==============================================================*/
	                session.setAttribute("USER_ID"         , userVO.getUserId());                  // 사용자 아이디
	                session.setAttribute("USER_NM"         , userVO.getUserNm());                  // 사용자 명
	                session.setAttribute("SUPR_MNGR_YN"    , userVO.getSuprMngrYn());              // 슈퍼관리자 여부
	                session.setAttribute("ROLE_ID"         , userVO.getRoleId());                  // 롤 아이디
	                session.setAttribute("USER_TEL_NO"     , userVO.getHphoneNo());                // 사용자 전화번호
	                session.setAttribute("langCd"          , InitDwgSys.getLangCd());    // 언어코드
	                session.setAttribute("countryCd"       , InitDwgSys.getCountryCd()); // 지역코드
	            }else{
	                result = "INVAL_PWD";
	            }
	        }
        } catch (Exception ex) {
        	session.invalidate();
        }
        
        mav.addObject("RESULT", result);

        return mav;
	}
	
	
	
	
}
