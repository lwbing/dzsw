package com.lwb.service;

import java.util.List;

import com.lwb.model.Seller;
import com.lwb.model.param.SellerParam;

public interface SellerService 
{
	int add(Seller model);
	
	int remove(int id);
	
	int update(Seller model);
	
	Seller get(int id);
	
	List<Seller> getList(SellerParam param);
	
	int count(SellerParam param);
}
