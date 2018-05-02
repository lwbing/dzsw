package com.lwb.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.lwb.mapper.TradeRecordMapper;
import com.lwb.model.TradeRecord;
import com.lwb.model.param.TradeRecordParam;
import com.lwb.service.OrderService;
import com.lwb.service.TradeRecordService;

@Service("tradeRecordService")
public class TradeRecordServiceImpl implements TradeRecordService
{
	@Autowired
	private TradeRecordMapper tradeRecordMapper;
	
	@Autowired
	private OrderService orderService;

	/**
	 * 支付成功后，修改订单支付状态，同时添加提条记录
	 */
	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public int add(TradeRecord model) 
	{
		try {
			int rs =orderService.setPayStatus(model.getOrderCode(), 1);
			if (rs>0) {
				tradeRecordMapper.add(model);
				return 1;
			}else {
				return 0;
			}
			
		} catch (Exception ex) {
			ex.printStackTrace();
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
			return 0;
		}
	}

	@Override
	public List<TradeRecord> getList(TradeRecordParam param) 
	{
		return tradeRecordMapper.getList(param);
	}

	@Override
	public TradeRecord get(String orderCode) 
	{
		return tradeRecordMapper.get(orderCode);
	}

	@Override
	public int deleteById(String cordId) {
		return tradeRecordMapper.deleteById(cordId);
	}

	@Override
	public int count(TradeRecordParam param) {
		return tradeRecordMapper.count(param);
	}
}
