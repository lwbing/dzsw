package com.lwb.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.lwb.model.ShopingCar;

@Mapper
public interface ShopingCarMapper 
{
	int add(ShopingCar model);
	
	int remove(int id);
	
	int setNum(Map<String, Object> map);//int id,int num
	
	int setOrderCode(ShopingCar model);
	
	int buyNow(ShopingCar model);
	
	List<ShopingCar> getList(Map<String, Object> map);//ShoppCarParam param
	
	int count(Map<String, Object> map);
	
	int setStatus(Map<String, Object> map);
	
	ShopingCar get(int id);
}
