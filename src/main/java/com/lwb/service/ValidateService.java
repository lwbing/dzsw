package com.lwb.service;

public interface ValidateService 
{
	/**
	 * 验证用户输入的票据信息
	 * @param code
	 * @return 返回相应的订单信息
	 */
	Object validateCode(String code);
	
}
