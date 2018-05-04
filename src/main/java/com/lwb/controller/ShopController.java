package com.lwb.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.lwb.model.Shop;
import com.lwb.model.param.ShopParam;
import com.lwb.service.ShopService;
import com.lwb.util.ReturnMap;
import com.lwb.util.SessionUtil;

@Controller
public class ShopController 
{

	@Autowired
	private HttpServletRequest request;
	
	@Autowired
	private ShopService shopService;
	
	@RequestMapping("/shop/list")
	@ResponseBody
	public Object getList(int page,int rows)
	{
		if (page<=0) {
			page = 1;
		}
		ShopParam param = new ShopParam();
		param.start = (page - 1) * rows;
		param.end = page * rows;
		List<Shop> list = shopService.getList(param);
		int count = shopService.count(param);
		return "";
	}
	
	@RequestMapping(value="/shop/add",method=RequestMethod.POST)
	@ResponseBody
	public Object add(@RequestBody Shop model)
	{
		if (StringUtils.isEmpty(model.getShopName())) {
			return ReturnMap.result(0, "店铺名称不能为空");
		}
		JSONObject object = SessionUtil.getSellerId(request);
		if (object.containsKey("userId")) 
		{
			model.setSellerId(object.getInteger("userId"));
			int result = shopService.add(model);
			if (result>0) {
				return ReturnMap.result(1, "success");
			}
		}
		return ReturnMap.result(0, "删除失败！");
	}
	
	/**
	 * 商家开起店铺还是关闭店铺
	 * @param model
	 * @return
	 */
	@RequestMapping(value="/shop/setEnable",method=RequestMethod.POST)
	@ResponseBody
	public Object setEnable(@RequestBody Shop model)
	{
		if (StringUtils.isEmpty(model.getShopName())) {
			return ReturnMap.result(0, "店铺名称不能为空");
		}
		JSONObject object = SessionUtil.getSellerId(request);
		if (object.containsKey("userId")) 
		{
			Shop rs  = shopService.get(model.getId());
			int userId = object.getInteger("userId");
			if (userId == rs.getSellerId()) {
				model.setSellerId(userId);
				int result = shopService.add(model);
				if (result>0) {
					return ReturnMap.result(1, "success");
				}
			}
		}
		return ReturnMap.result(0, "删除失败！");
	}
	
	@RequestMapping(value="/shop/remove/{id}")
	@ResponseBody
	public Object remove(@PathVariable("od") int id)
	{
		JSONObject object = SessionUtil.getAdmin(request);
		if (object.containsKey("userId")) 
		{
			int result = shopService.remove(id);
			if (result>0) {
				return ReturnMap.result(1, "success");
			}
		}
		return ReturnMap.result(0, "删除失败！");
	}
	
	@RequestMapping(value="/shop/setLogo")
	@ResponseBody
	public Object setLogo(@RequestBody Shop model)
	{
		if (model.getId() <=0 || StringUtils.isEmpty(model.getLogo())) {
			return ReturnMap.result(0, "logo不能为空!");
		}
		JSONObject object = SessionUtil.getSellerId(request);
		if (object.containsKey("userId")) 
		{
			int result = shopService.update(model);
			if (result>0) {
				return ReturnMap.result(1, "success");
			}
		}
		return ReturnMap.result(0, "设置失败！");
	}
}
