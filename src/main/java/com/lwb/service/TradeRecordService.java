package com.lwb.service;

import java.util.List;

import com.lwb.model.TradeRecord;
import com.lwb.model.param.TradeRecordParam;

public interface TradeRecordService 
{
	/**
	 * 支付宝回调成功创建一条交易记录
	 * @param code
	 * @return 返回
	 */
	int add(TradeRecord model);
	/**
	 * 交易列表
	 * @return
	 */
	List<TradeRecord> getList(TradeRecordParam param);
	/**
	 * 单条交易信息
	 * @param orderCode
	 * @return
	 */
	TradeRecord get(String orderCode);
	/**
	 * 删除数据
	 */
	int deleteById(String cordId);
	
	int count(TradeRecordParam param);
}
