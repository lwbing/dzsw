package com.lwb.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.lwb.model.UserInfo;
import com.lwb.model.param.UserParam;
import com.lwb.model.request.Login;

@Service
public interface UserInfoService 
{
	/**
	 * 用户登录
	 * @return
	 */
	UserInfo signIn(Login model);
	/**
	 * 创建一个用户
	 * @return
	 */
	int addUser(UserInfo info);
	/**
	 * 用户信息
	 * @param userId
	 * @return
	 */
	UserInfo get(String userId);
	
	/**
	 * 设置头像
	 */
	int setImg(String userId,String path);
	
	/**
	 * 设置昵称
	 */
	int setNic(String userId,String nic);
	
	/**
	 * 修改基本信息
	 */
	int setBasic(UserInfo info);
	
	/**
	 * 用户列表（包括普通用户和企业用户）
	 * @return
	 */
	List<UserInfo> getList(UserParam param);
}