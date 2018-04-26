package com.lwb.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.lwb.model.UserInfo;
import com.lwb.model.param.UserParam;

@Mapper
public interface UserInfoMapper 
{
	
	UserInfo get(String userId);
	
	int remove(int id);
	
	int add(UserInfo model);
	
	UserInfo login(Map<String, Object> map);//String userName,String pwd
	
	List<UserInfo> getList(UserParam param);
	/**
	 * 设置昵称
	 * @return
	 */
	int setNic(Map<String, Object> map);
	/**
	 * 设置图片
	 * @param userId
	 * @param imgPath
	 * @return
	 */
	int setImg(Map<String, Object> map);//int userId,String imgPath
	
	int setBasic(UserInfo model);
	
	
	int setEamil(Map<String, Object> map);//int userId,String email
	
	int setMobileNumber(Map<String, Object> map);//int userId,String mobileNumber
}
