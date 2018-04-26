package com.lwb.service;

import java.util.List;

import com.lwb.model.Product;
import com.lwb.model.param.ProductParam;

public interface ProductService
{
	
	/**
	 * 添加产品
	 * @param model
	 * @return
	 */
	int add(Product model);
	
	/**
	 * 设置产品商家
	 */
	int setCustorm(int productId,int custorm);
	
	/**
	 * 删除产品
	 * @param id
	 * @return
	 */
	int delete(int id);
	
	/**
	 * 设置产品状态产品
	 */
	int setStatus(int id,int status);
	/**
	 * 产品列表
	 * @return
	 */
	List<Product> getProducts(ProductParam param);
	
	/**
	 * 单条详细
	 * @param priductId
	 * @return
	 */
	Product get(int priductId);
	/**
	 * 统计
	 * @param param
	 * @return
	 */
	int count(ProductParam param);
}
