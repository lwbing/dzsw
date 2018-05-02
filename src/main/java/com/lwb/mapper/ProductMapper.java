package com.lwb.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.lwb.model.Product;
import com.lwb.model.param.ProductParam;

@Mapper
public interface ProductMapper 
{
	Product get(int id);
	
	int add(Product model);
	
	List<Product> getList(ProductParam param);
	
	int setCustorm(Map<String, Object> map);//int productId,int custorm
	
	int deleteById(int id);
	
	int setStatus(Map<String, Object> map);//int id,int status
	
	int update(Product model);
	
	int count(ProductParam param);
}
