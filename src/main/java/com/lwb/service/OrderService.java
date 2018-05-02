package com.lwb.service;

import java.util.List;
import java.util.Map;

import com.lwb.model.Order;
import com.lwb.model.param.OrderParam;

public interface OrderService 
{
	/**
	 * 验证用户输入的票据信息
	 * @param code
	 * @return 返回相应的订单信息
	 */
	Order validateCode(String code);
	
	/**
	 * 创建订单
	 * @return
	 */
	int add(Order model);
	/**
	 * 修改支付状态，把未支付状态该成已支付，同时设置电子码，电子码为使用标记
	 * @return
	 */
	int setPayStatus(String orderCode,int status);
	
	/**
	 * 订单列表
	 * @param param
	 * @return
	 */
	List<Order> getOrders(OrderParam param);
	
	/**
	 * 单条订单信息
	 * @param orderCode
	 * @return
	 */
	Order get(String orderCode);
	
	/**
	 * 删除订单
	 * @param orderCode
	 * @return
	 */
	int deleteById(String orderCode);
	
	/**
	 * 设置该订单是否已经验证过了或是已经使用了
	 */
	int setValidate(String orderCode,int validate);
}
