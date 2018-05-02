package com.lwb.controller;

import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lwb.model.request.SendMsg;
import com.lwb.util.RedisUtil;
import com.lwb.util.ReturnMap;
import com.lwb.util.SmsUtil;

@Controller
public class CommController 
{
	@RequestMapping(value="/msg/send",method = RequestMethod.POST)
	@ResponseBody
	public Object send(@RequestBody SendMsg msg)
	{
		if (StringUtils.isEmpty(msg.getMobile()) || msg.getMobile().trim().length()!=11) 
		{
			return ReturnMap.result(0, "手机号码错误");
		}
		if (!StringUtils.isNumeric(msg.getMobile())) {
			return ReturnMap.result(0, "手机号错误");
		}
		String code = RandomStringUtils.randomNumeric(6);
		if (SmsUtil.sendSms(msg.getMobile(), code)) {
			RedisUtil.setex(msg.getMobile(), 100, code);
			return ReturnMap.result(1, "发送成功！");
		}
		return ReturnMap.result(0, "发送失败");
	}
	
	@RequestMapping(value="/msg/validate",method = RequestMethod.POST)
	@ResponseBody
	public Object validate(@RequestBody SendMsg msg)
	{
		if (StringUtils.isEmpty(msg.getMobile()) || msg.getMobile().trim().length()!=11) 
		{
			return ReturnMap.result(0, "手机号码错误");
		}
		if (!StringUtils.isEmpty(msg.getCode())) {
			return ReturnMap.result(0, "验证码错误");
		}
		String code = RedisUtil.get(msg.getMobile());
		if (msg.getCode().equals(code)) {
			return ReturnMap.result(1, "ok");
		}
		return ReturnMap.result(0, "发送失败");
	}
}
