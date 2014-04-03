package kr.mp.dwg.main;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import kr.mp.dwg.cmmn.util.InitDwgSys;
import kr.mp.dwg.cmmn.util.StringUtil;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

/**
 * 
 * @className MainViewController
 * @author 박용택
 * @since 2013. 12. 23.
 * @version 1.0
 * @comment 
 *    MapperMgtController
 * @Modification Information  
 * 
 *       수정일        수정자                    수정내용
 *     ----------   ---------   -------------------------------
 *  
 * 
 * 
 *  Copyright (C) by ESE All right reserved.
 */
public class MainViewController extends MultiActionController {

	public ModelAndView mainView(HttpServletRequest request, HttpServletResponse response){
		
		String lang = InitDwgSys.lang;
		HttpSession session = request.getSession(true);
		session.setAttribute("lang", lang);
		ModelAndView mav = new ModelAndView("main/frame");	
		mav.addObject("lang"        , lang.toLowerCase());  // language
		
		String defaultLang = (String)session.getAttribute("defaultLang");
		String defaultContry = (String)session.getAttribute("defaultContry");
		String defaultValiant = (String)session.getAttribute("defaultValiant");

		if(defaultLang != null && !defaultLang.equals("")){
			Locale locale = new Locale(defaultLang, defaultContry, defaultValiant);
			request.getLocale();
			Locale.setDefault(locale);
		}

		return mav;
	}
	public ModelAndView top(HttpServletRequest request, HttpServletResponse response){
		
		return new ModelAndView("cmmn/top");
	}
	public ModelAndView left(HttpServletRequest request, HttpServletResponse response) {
		String menuID = request.getParameter("menuId");
		String subMenuID = "";
		try{
			subMenuID = StringUtil.nullChk((String)(request.getParameter("subID")));
		}catch(Exception e){
		}
		if(subMenuID == "" || subMenuID == null){
			subMenuID = "1";
		}

		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("subMenuID", subMenuID);

		String nemuPath = "cmmn/left1";

		switch (Integer.parseInt(menuID)){
		case 1:{
			nemuPath = "cmmn/left1";	
			break;
			}
		}
		return new ModelAndView(nemuPath, "paramMap", paramMap);
	}
}
