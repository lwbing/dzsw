package com.lwb.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.lwb.model.Seller;

@Mapper
public interface SellerMapper 
{
	int add(Seller model);
	
	int remove(int id);
	
	int update(Seller model);
	
	Seller get(int id);
	
	List<Seller> getList(Map<String, Object> map);
	
	int count(Map<String, Object> map);
}
