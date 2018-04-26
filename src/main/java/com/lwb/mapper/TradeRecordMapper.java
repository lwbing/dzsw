package com.lwb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.lwb.model.TradeRecord;
import com.lwb.model.param.TradeRecordParam;

@Mapper
public interface TradeRecordMapper 
{
	int add(TradeRecord model);
	
	List<TradeRecord> getList(TradeRecordParam param);
	
	TradeRecord get(String id);
	
	int deleteById(String id);
	
	int count(TradeRecordParam param);
}
