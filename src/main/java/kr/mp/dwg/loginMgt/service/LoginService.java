package kr.mp.dwg.loginMgt.service;

import java.util.Map;

import kr.mp.dwg.domain.UserVO;

public interface LoginService {
	
	public UserVO getUserInfo(Map<String, String> paramMap);
	
}
