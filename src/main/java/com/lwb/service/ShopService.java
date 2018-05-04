package com.lwb.service;

import java.util.List;

import com.lwb.model.Shop;
import com.lwb.model.param.ShopParam;

public interface ShopService 
{
	int add(Shop model);
	
	int update(Shop model);
	
	int remove(int id);
	
	Shop get(int id);
	
	List<Shop> getList(ShopParam param);
	
	int count(ShopParam param);
}
