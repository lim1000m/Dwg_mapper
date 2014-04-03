package kr.mp.dwg.loginMgt.service.impl;

import java.util.Map;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import egovframework.rte.fdl.cmmn.AbstractServiceImpl;
import kr.mp.dwg.cmmn.util.StringUtil;
import kr.mp.dwg.domain.UserVO;
import kr.mp.dwg.loginMgt.service.LoginMapper;
import kr.mp.dwg.loginMgt.service.LoginService;

@Service("loginService")
public class LoginServiceImpl extends AbstractServiceImpl implements LoginService {
	
	/** LoginMapper */
    @Resource(name="loginMapper")
    private LoginMapper loginMapper;
	
	public UserVO getUserInfo(Map<String, String> paramMap) {

		UserVO userVO = loginMapper.getUserInfo(paramMap);
		
		if(userVO != null){
			userVO.setOffcNo(StringUtil.setTelNumberFormat(userVO.getOffcNo()));		
			userVO.setHphoneNo(StringUtil.setTelNumberFormat(userVO.getHphoneNo()));
		}
		return userVO;
	}
	
}
