package com.lwb.mapper;

import java.util.List;
import java.util.Map;

import com.lwb.model.Shop;

public interface ShopMapper 
{
	int add(Shop model);
	
	int remove(int id);
	
	int update(Shop model);
	
	Shop get(int id);
	
	List<Shop> getList(Map<String, Object> map);
	
	int count(Map<String, Object> map);
}
