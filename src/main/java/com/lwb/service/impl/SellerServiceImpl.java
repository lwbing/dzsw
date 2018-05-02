package com.lwb.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lwb.mapper.SellerMapper;
import com.lwb.model.Seller;
import com.lwb.model.param.SellerParam;
import com.lwb.service.SellerService;

@Service("sellerService")
public class SellerServiceImpl implements SellerService
{
	@Autowired
	private SellerMapper sellerMapper;
	
	
	@Override
	public int add(Seller model) {
		return sellerMapper.add(model);
	}

	@Override
	public int remove(int id) {
		return sellerMapper.remove(id);
	}

	@Override
	public int update(Seller model) {
		return sellerMapper.update(model);
	}

	@Override
	public Seller get(int id) {
		return sellerMapper.get(id);
	}

	@Override
	public List<Seller> getList(SellerParam param) {
		Map<String, Object> map = new HashMap<String, Object>();
		if (StringUtils.isNotEmpty(param.getTel())) {
			map.put("tel", param.getTel());
		}
		if (param.getStatus() !=null) {
			map.put("status", param.getStatus());
		}
		if (param.getEnable() !=null) {
			map.put("enable", param.getEnable());
		}
		if (StringUtils.isNotEmpty(param.getLoginName())) {
			map.put("loginName", param.getLoginName());
		}
		return sellerMapper.getList(map);
	}

	@Override
	public int count(SellerParam param) {
		Map<String, Object> map = new HashMap<String, Object>();
		if (StringUtils.isNotEmpty(param.getTel())) {
			map.put("tel", param.getTel());
		}
		if (param.getStatus() !=null) {
			map.put("status", param.getStatus());
		}
		if (param.getEnable() !=null) {
			map.put("enable", param.getEnable());
		}
		if (StringUtils.isNotEmpty(param.getLoginName())) {
			map.put("loginName", param.getLoginName());
		}
		return sellerMapper.count(map);
	}

}
