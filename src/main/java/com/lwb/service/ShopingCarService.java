package com.lwb.service;

import java.util.List;

import com.lwb.model.ShopingCar;
import com.lwb.model.param.ShoppCarParam;


public interface ShopingCarService 
{
	int add(ShopingCar model);
	
	int remove(int id);
	
	int setNum(int id,int num);
	
	int setOrderCode(ShopingCar model);
	
	ShopingCar get(int id);
	
	int buyNow(ShopingCar model);
	
	List<ShopingCar> getList(ShoppCarParam param);
	
	int count(ShoppCarParam param);
}
