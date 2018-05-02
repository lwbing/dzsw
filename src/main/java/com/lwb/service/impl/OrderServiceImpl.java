package com.lwb.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lwb.mapper.OrderMapper;
import com.lwb.model.Order;
import com.lwb.model.param.OrderParam;
import com.lwb.service.OrderService;

@Service("orderService")
public class OrderServiceImpl implements OrderService
{
	@Autowired
	private OrderMapper orderMapper;

	@Override
	public Order validateCode(String code) {
		return orderMapper.getByQcode(code);
	}

	@Override
	public int add(Order model) {
		return orderMapper.add(model);
	}

	@Override
	public int setPayStatus(String orderCode,int status) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", status);
		map.put("orderCode", orderCode);
		return orderMapper.setStatus(map);
	}

	@Override
	public List<Order> getOrders(OrderParam param) {
		return orderMapper.getList(param);
	}

	@Override
	public Order get(String orderCode) {
		return orderMapper.get(orderCode);
	}

	@Override
	public int deleteById(String orderCode) {
		return orderMapper.deleteById(orderCode);
	}

	@Override
	public int setValidate(String orderCode, int validate) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("isValidate", validate);
		map.put("orderCode", orderCode);
		return orderMapper.setValidate(map);
	}
	
}
