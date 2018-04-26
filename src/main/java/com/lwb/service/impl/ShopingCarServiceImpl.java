package com.lwb.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lwb.mapper.ProductMapper;
import com.lwb.mapper.ShopingCarMapper;
import com.lwb.model.Product;
import com.lwb.model.ShopingCar;
import com.lwb.model.param.ShoppCarParam;
import com.lwb.service.ShopingCarService;

@Service("shopingCarService")
public class ShopingCarServiceImpl implements ShopingCarService
{
	@Autowired
	private ProductMapper productMapper;
	
	private ShopingCarMapper carMapper;

	@Override
	public int add(ShopingCar model) 
	{
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("productId", model.getProductId());
		map.put("userId", model.getUserId());
		map.put("status",0);
		List<ShopingCar> list = carMapper.getList(map);
		if (list.size() ==0) {
			Product product = productMapper.get(model.getId());
			if (product !=null) {
				model.setPrice((float)product.getNprice());
				model.setProductName(product.getProductName());
				String imgs = product.getImages();
				if (StringUtils.isNotEmpty(imgs)) {
					model.setProductImg(imgs.split(";")[0]);
				}
				return carMapper.add(model);
			}
		}else {
			ShopingCar item = list.get(0);
			int cnt = item.getNum() + model.getNum();
			Map<String, Object> setMap = new HashMap<String, Object>();
			setMap.put("id", item.getId());
			setMap.put("num", cnt);
			return carMapper.setNum(setMap);
		}
		return 0;
	}

	@Override
	public int remove(int id) 
	{
		return 0;
	}

	@Override
	public int setNum(int id, int num) {
		Map<String, Object> setMap = new HashMap<String, Object>();
		setMap.put("id", id);
		setMap.put("num", num);
		return carMapper.setNum(setMap);
	}

	@Override
	public int setOrderCode(ShopingCar model) {
		return 0;
	}

	@Override
	public int buyNow(ShopingCar model) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<ShopingCar> getList(ShoppCarParam param) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int count(ShoppCarParam param) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public ShopingCar get(int id) {
		return carMapper.get(id);
	}

}
