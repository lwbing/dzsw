package com.lwb.service;

public interface PayService 
{
	/**
	 * 支付
	 * @return
	 */
	Object pay();
	
	/**
	 * 退款
	 */
	Object refund();
}
