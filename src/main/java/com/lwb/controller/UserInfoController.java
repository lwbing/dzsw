package com.lwb.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSONObject;
import com.lwb.model.Order;
import com.lwb.model.UserInfo;
import com.lwb.model.param.UserParam;
import com.lwb.model.request.Login;
import com.lwb.service.UserInfoService;
import com.lwb.util.MD5Hash;
import com.lwb.util.RedisUtil;
import com.lwb.util.ReturnMap;
import com.lwb.util.SessionUtil;

@Controller
@RequestMapping("userinfo/")
public class UserInfoController 
{
	@Autowired
	private UserInfoService userInfoService;

	@Autowired
	private HttpServletRequest request;

	/**
	 * 普通用户登录
	 * @param request
	 * @param httpSession
	 * @return
	 */
	@RequestMapping(value = "signIn")
	public String signIn() 
	{
		//httpSession.setAttribute("crunt_coms",10);
		return "userinfo/signIn";
	}

	/**
	 * 普通用户提交登陆信息
	 * @param model
	 * @return
	 */
	@RequestMapping(value="signIn",method = RequestMethod.POST)
	public String nomalLogin(Login model,Model data)
	{
		String msg ="";
		if (StringUtils.isEmpty(model.getUserPwd()) || StringUtils.isEmpty(model.getUserName())) {
			msg="用户名或密码不能为空";
		}
		UserInfo info = userInfoService.signIn(model);
		if (info == null) {
			msg="用户名或密码错误";
			data.addAttribute("msg", msg);
			return "userinfo/signIn";
		}else {
			//系统管理员
			JSONObject object = new JSONObject();
			object.put("userId", info.getUserId());
			object.put("headImg", info.getHeadImg());
			object.put("nickName", info.getNickName());
			object.put("userType", info.getUserType());
			if (info.getUserType() ==1) {
				SessionUtil.setAdmin(request, object.toJSONString());
				return "redirect:/admin/main";
			}
			//商户管理
			else if (info.getUserType() == 2) {
				SessionUtil.setSellerId(request, object.toJSONString());
				return "redirect:/seller/index";
			}else {
				//普通用户个人中心
				SessionUtil.setUserId(request, object.toJSONString());
				return "redirect:/userinfo/userCenter";
			}
		}
	}

	/**
	 * 用户信息注册
	 * @return
	 */
	@RequestMapping(value="regist",method=RequestMethod.POST)
	@ResponseBody
	public Object regist(@RequestBody UserInfo model)
	{
		if (StringUtils.isEmpty(model.getMobileNumber()) || 
				StringUtils.isEmpty(model.getPassWord())) {
			return ReturnMap.result(0, "数据不能为空");
		}
		String code = request.getParameter("code");

		String vCode = RedisUtil.get(model.getMobileNumber());
		if (!code.equals(vCode)) {
			return ReturnMap.result(0, "验证码错误！");
		}
		UserParam param = new UserParam();
		param.setMobileNumber(model.getMobileNumber());
		List<UserInfo> users = userInfoService.getList(param);
		if (users.size()>0) {
			return ReturnMap.result(0, "该手机号已被注册！");
		}
		model.setUserType(1);
		model.setCreateTime(System.currentTimeMillis());
		model.setPassWord(MD5Hash.hash(model.getPassWord()));
		int result = userInfoService.addUser(model);
		if (result>0) {
			return ReturnMap.result(1, "注册成功！");
		}
		return "userinfo/regist";
	}
	/**
	 * 成为商户
	 */
	@RequestMapping(value="becomeSeller",method=RequestMethod.POST)
	@ResponseBody
	public Object becomeSeller(@RequestBody UserInfo model)
	{
		if (StringUtils.isEmpty(model.getMobileNumber()) || 
				StringUtils.isEmpty(model.getPassWord())) {
			return ReturnMap.result(0, "数据不能为空");
		}
		String code = request.getParameter("code");
		String vCode = RedisUtil.get(model.getMobileNumber());
		if (!code.equals(vCode)) {
			return ReturnMap.result(0, "验证码错误！");
		}
		UserParam param = new UserParam();
		param.setMobileNumber(model.getMobileNumber());
		List<UserInfo> users = userInfoService.getList(param);
		if (users.size()>0) {
			return ReturnMap.result(0, "该手机号已被注册！");
		}
		model.setUserType(2);
		model.setCreateTime(System.currentTimeMillis());
		model.setPassWord(MD5Hash.hash(model.getPassWord()));
		int result = userInfoService.addUser(model);
		if (result>0) {
			return ReturnMap.result(1, "注册成功！");
		}
		return "userinfo/regist";
	}

}
