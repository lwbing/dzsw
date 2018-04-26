package com.lwb.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lwb.mapper.UserInfoMapper;
import com.lwb.model.UserInfo;
import com.lwb.model.param.UserParam;
import com.lwb.model.request.Login;
import com.lwb.service.UserInfoService;

@Service("userInfoService")
public class UserServiceImpl implements UserInfoService
{
	@Autowired
	private UserInfoMapper userMapper;
	
	@Override
	public UserInfo signIn(Login model)
	{
		if (StringUtils.isEmpty(model.getUserName()) || model.getUserName().length()<6) {
			throw new IllegalArgumentException("输入的用户名或长度不够！");
		}
		if (StringUtils.isEmpty(model.getUserPwd())) {
			throw new IllegalArgumentException("输入的用户密码不能为空！");
		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userName", model.getUserName());
		map.put("userPwd", model.getUserPwd());
		UserInfo info = userMapper.login(map);
		if (info !=null) {
			return info;
		}
		return null;
	}

	@Override
	public int addUser(UserInfo info) {
		int result = userMapper.add(info);
		return result;
	}

	@Override
	public UserInfo get(String userId) {
		return userMapper.get(userId);
	}

	@Override
	public int setImg(String userId, String path) {
		if (StringUtils.isEmpty(path) || path.length()<10) {
			throw new IllegalArgumentException("输入的img 路径错误！");
		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("headImg", path);
		map.put("userId", userId);
		return userMapper.setImg(map);
	}

	@Override
	public int setNic(String userId, String nic) {
		if (StringUtils.isEmpty(nic)) {
			throw new IllegalArgumentException("输入的img 路径错误！");
		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("nickName", nic);
		map.put("userId", userId);
		return userMapper.setNic(map);
	}

	@Override
	public int setBasic(UserInfo info) {
		return userMapper.setBasic(info);
	}

	@Override
	public List<UserInfo> getList(UserParam param) {
		return userMapper.getList(param);
	}

}
