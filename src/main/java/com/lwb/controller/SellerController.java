package com.lwb.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.lwb.model.Seller;
import com.lwb.model.param.SellerParam;
import com.lwb.service.SellerService;
import com.lwb.util.MD5Hash;
import com.lwb.util.RedisUtil;
import com.lwb.util.ReturnMap;
import com.lwb.util.SessionUtil;

@Controller
@RequestMapping("seller/")
public class SellerController 
{
	@Autowired
	private SellerService sellerService;
	
	@RequestMapping("list")
	@ResponseBody
	public Object list()
	{
		List<JSONObject> objects = new ArrayList<JSONObject>();
		JSONObject object = new JSONObject();
		object.put("id", 1);
		object.put("headImg", "https://t11.baidu.com/it/u=148419313,601442674&fm=173&app=12&f=JPG?w=540&h=350&s=BDB56391C04239491021590D0300F0E0");
		object.put("loginName", "hadoop");
		object.put("tel", "13619625274");
		object.put("email","555444@qq.com");
		object.put("status", 1);
		object.put("enable",0 );
		object.put("createTime", "2018-04-17 10:25");
		objects.add(object);
		return ReturnMap.result(1, "sussess", object, 1);
	}
	
	@RequestMapping("add")
	@ResponseBody
	public Object add(@RequestBody Seller model)
	{
		int result = sellerService.add(model);
		if (result>0) {
			return ReturnMap.result(1, "sussess");
		}
		return ReturnMap.result(0, "fail");
	}
	
	
	/**
	 * 商家注册页面
	 */
	@RequestMapping("regist")
	public String regist()
	{
		return "seller/regist";
	}
	
	/**
	 * 创建店铺
	 * @return
	 */
	@RequestMapping("createShop")
	public String createShop()
	{
		return "seller/createShop";
	}
	
	/**
	 * 我的店铺
	 */
	@RequestMapping("myShop")
	public String myShop()
	{
		return "seller/myShop";
	}
	
	
	/**
	 * 注册接口
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "regist",method = RequestMethod.POST)
	@ResponseBody
	public Object regist(@RequestBody Seller model,HttpServletRequest request)
	{
		if (StringUtils.isEmpty(model.getPwd()) || 
			StringUtils.isEmpty(model.getTel())) 
		{
			return ReturnMap.result(0, "信息不能为空！");
		}
		String qpwd = request.getParameter("qpwd").trim();
		String code = request.getParameter("code").trim();
		if (!model.getPwd().equals(qpwd)) {
			return ReturnMap.result(0, "两次输入密码不正确！");
		}
		
		if (StringUtils.isEmpty(model.getTel()) || model.getTel().trim().length()!=11) 
		{
			return ReturnMap.result(0, "手机号码错误");
		}

		String vcode = RedisUtil.get(model.getTel());
		if (!vcode.equals(code)) {
			return ReturnMap.result(0, "验证码错误！");
		}
		SellerParam param = new SellerParam();
		param.setTel(model.getTel());
		List<Seller> list = sellerService.getList(param);
		if (list.size()>0) {
			return ReturnMap.result(0, "手机号已经被注册！");
		}else {
			model.setCreateTime(System.currentTimeMillis());
			model.setStatus(1);
			model.setLoginName(model.getTel());
			model.setPwd(MD5Hash.hash(qpwd));
			model.setEnable(1);
			int result = sellerService.add(model);
			if (result>0) {
				return ReturnMap.result(1, "ok");
			}
		}
		return ReturnMap.result(0, "fail");
	}
	
	@RequestMapping(value = "login")
	public String logins(HttpServletRequest request)
	{
//		HttpSession session = request.getSession();
//		String rm = RandomStringUtils.randomAlphanumeric(4);
//		RedisUtil.setex(session.getId(), 80, rm);
		return "seller/login";
	}
	
	@RequestMapping(value = "login",method = RequestMethod.POST)
	@ResponseBody
	public Object login(HttpServletRequest request)
	{
		
		String tel = request.getParameter("userName").trim();
		String pwd = request.getParameter("pwd").trim();
		String code = request.getParameter("code").trim();
		if (StringUtils.isEmpty(tel) ||equals(StringUtils.isEmpty(pwd)) || StringUtils.isEmpty(code)) {
			return ReturnMap.result(0, "数据不能为空！");
		}
		HttpSession session = request.getSession();
		String vcode = RedisUtil.get(session.getId());
		if (!code.equals(vcode)) {
			return ReturnMap.result(0, "验证码错误！");
		}
		SellerParam param = new SellerParam();
		param.setTel(tel);
		List<Seller> list = sellerService.getList(param);
		if (list.size() != 1) {
			return ReturnMap.result(0, "用户名或密码错误！");
		}else {
			Seller model = list.get(0);
			if (model.getPwd().equals(MD5Hash.hash(pwd))) {
				session.setAttribute(SessionUtil.seller_key, model.getId());
				return ReturnMap.result(1, "ok");
			}
		}
		return ReturnMap.result(0, "fail");
	}
	
	/**
	 * 用户管理首页
	 */
	@RequestMapping(value = "manager")
	public String manager(HttpServletRequest request)
	{
		return "seller/manager";
	}
}
