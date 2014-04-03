package kr.mp.dwg.loginMgt.service;

import java.util.Map;

import kr.mp.dwg.domain.UserVO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;


@Mapper("loginMapper")
public interface LoginMapper {
	public UserVO getUserInfo(Map<String, String> paramMap);
}
