package com.lwb.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSONObject;
import com.lwb.model.Order;
import com.lwb.model.UserInfo;
import com.lwb.model.request.Login;
import com.lwb.service.UserInfoService;
import com.lwb.util.ReturnMap;

@Controller
@RequestMapping("userinfo/")
public class UserInfoController 
{
	@Autowired
	private UserInfoService userInfoService;
	
	
	@RequestMapping(value = "signIn")
	public String signIn(HttpServletRequest request,HttpSession httpSession) 
	{
	    httpSession.setAttribute("crunt_coms",10);
	    return "userinfo/signIn";
	}
	
	@RequestMapping(value="signIn",method = RequestMethod.POST)
	public String nomalLogin(Login model)
	{
		UserInfo info = userInfoService.signIn(model);
		if (info.getUserType() ==0) {
			
		}
		return "";
	}
	/**
	 * 商家门票管理首页
	 * @return
	 */
	@RequestMapping(value="cindex")
	public String cindex()
	{
		return "userinfo/cindex";
	}
	
	@RequestMapping(value="selectCode",method=RequestMethod.POST)
	@ResponseBody
	public ModelAndView select(HttpServletRequest request,ModelAndView model)
	{
		model.setViewName("/userinfo/cindex");		
		JSONObject object = new JSONObject();
		object.put("orderCode", "201803211704501244657");
		object.put("productId", 10);
		object.put("productName", "花之城旅游景区门票");
		object.put("createTime", tranDate(System.currentTimeMillis()));
		object.put("status", "已支付");
		object.put("isValidate", "未验证");
		object.put("money", 50.0);
		object.put("mobileNumber","13619625274");
		object.put("num", 2);
		List<JSONObject> list = new ArrayList<JSONObject>();
		list.add(object);
		model.addObject("order",list);
		return model;  
	}
	
	
	private String tranDate(long date)
	{
		Date dt = new Date(date);
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		return format.format(dt);
		//数据操作
	}
}
