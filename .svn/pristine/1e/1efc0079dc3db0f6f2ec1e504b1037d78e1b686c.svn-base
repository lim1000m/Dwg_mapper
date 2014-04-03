package kr.mp.dwg.cmmn.util;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

public class InitServlet extends HttpServlet {
	private static final long serialVersionUID = 8164353195690736440L;
	
	private static String gridRealPath = "";
	
	public void init(ServletConfig config) throws ServletException{
		super.init(config);
		String dwgConfigFile = getInitParameter("dwgConfigFile");
		String gridPath =this.getClass().getResource("").getPath();
		InputStream is = null;
		try {
			gridRealPath = gridPath+"data-config.xml";
			is = new FileInputStream(dwgConfigFile);
			Properties prop = new Properties();
			prop.load(is);
			InitDwgSys g = new InitDwgSys(prop);
			g.setConfigFileName(dwgConfigFile);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public String getGridRealPath(){
		return gridRealPath;
	}
}