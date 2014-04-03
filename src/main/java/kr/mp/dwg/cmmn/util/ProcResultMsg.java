package kr.mp.dwg.cmmn.util;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.http.HttpServletResponse;

/**
 * Class Name 	: ProcResultMsg.java
 * Description 	: 등록, 수정, 삭제 시 화면 출력
 * Modification Information
 *
 *       수정일                         수정자             		    수정내용
 *    -----------      -----------     	---------------------
 *     
 * 
 * @author 차근수
 * @since 2010.09.08
 * @version 1.0
 */
public class ProcResultMsg {
	private HttpServletResponse response;
	private String redirectURL;
	private String redirectType;
	
	/**
	 * 
	 * @param response		- HttpServletResponse 객체
	 * @param redirectURL	- Redirect 할 URL
	 */
	public ProcResultMsg(HttpServletResponse response, String redirectURL){
		this.response = response;
		this.redirectURL = redirectURL;
	}
	
	public ProcResultMsg(HttpServletResponse response, String redirectURL, String redirectType){
		this.response = response;
		this.redirectURL = redirectURL;
		this.redirectType = redirectType;
	}
	/**
	 * 화면에 메시지 출력 및 URL Redirect
	 * @param msgNum	- 자바스크립트 출력할 메시지 번호
	 */
	public void reload(){
		
		PrintWriter out;
		try {
			response.setCharacterEncoding("UTF-8");
			out = response.getWriter();
			out.println(" <!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">");
			out.println(" <html><head> 												");
			out.println(" <meta http-equiv='Content-Type' content='text/html; charset=utf-8'> ");
			out.println(" </head><body> ");
			out.println(" <script language='javascript' type='text/javascript'> 	");
			out.println(" 	parent.location."+redirectType+"('" + redirectURL + "'); 		");
			out.println(" </script> 												");			
			out.println(" </body></html> 											");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	/**
	 * 화면에 메시지 출력 및 URL Redirect
	 * @param msgNum	- 자바스크립트 출력할 메시지 번호
	 */
	public void popupReload(){
		
		PrintWriter out;
		try {
			response.setCharacterEncoding("UTF-8");
			out = response.getWriter();
			out.println(" <!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">");
			out.println(" <html><head> 												");
			out.println(" <meta http-equiv='Content-Type' content='text/html; charset=utf-8'> ");
			out.println(" </head><body> ");
			out.println(" <script language='javascript' type='text/javascript'> 	");
			out.println(" 	opener.location."+redirectType+"('" + redirectURL + "'); 		");
			out.println(" </script> 												");			
			out.println(" </body></html> 											");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
