package com.lwb.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lwb.mapper.ProductMapper;
import com.lwb.model.Product;
import com.lwb.model.param.ProductParam;
import com.lwb.service.ProductService;

@Service("productService")
public class ProductServiceImpl implements ProductService
{
	@Autowired
	private ProductMapper productMapper;
	
	@Override
	public int add(Product model) {
		return productMapper.add(model);
	}

	@Override
	public int setCustorm(int productId, int custorm) 
	{
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userId", custorm);
		map.put("id", productId);
		return productMapper.setCustorm(map);
	}

	@Override
	public int delete(int id) {
		return productMapper.deleteById(id);
	}

	@Override
	public int setStatus(int id, int status) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("status", status);
		map.put("id", id);
		return productMapper.setStatus(map);
	}

	@Override
	public List<Product> getProducts(ProductParam param) 
	{
		return productMapper.getList(param);
	}

	@Override
	public Product get(int priductId) {
		return productMapper.get(priductId);
	}

	@Override
	public int count(ProductParam param) 
	{
		return productMapper.count(param);
	}

}
