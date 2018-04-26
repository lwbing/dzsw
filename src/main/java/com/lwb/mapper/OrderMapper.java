package com.lwb.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.lwb.model.Order;
import com.lwb.model.param.OrderParam;

@Mapper
public interface OrderMapper 
{
	Order get(String orderCode);
	
	int add(Order model);
	
	int setStatus(Map<String, Object> map);
	
	/**
	 * 根据qcode查询该订单
	 * @param qcode
	 * @return
	 */
	Order getByQcode(String qcode);
	
	/**
	 * @param param
	 * @return
	 */
	List<Order> getList(OrderParam param);
	
	/**
	 * 修改验证状态
	 */
	int setValidate(Map<String, Object> map);//String orderCode,int status
	
	/**
	 * 删除
	 */
	int deleteById(String orderCode);
}
