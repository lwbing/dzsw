package com.lwb.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.lwb.model.ShopingCar;
import com.lwb.model.param.ShoppCarParam;
import com.lwb.service.ShopingCarService;
import com.lwb.util.DateUtil;
import com.lwb.util.ReturnMap;
import com.lwb.util.SessionUtil;

@Controller
@RequestMapping(value = "api/shoppingcart/")
public class ShoppingCartController 
{
	@Autowired
	private ShopingCarService carService;
	
	@Autowired
	private HttpServletRequest request;

	/**
	 * 添加购物车
	 * @param data
	 * @return
	 */
	@RequestMapping(value="/add",method = RequestMethod.POST)
	@ResponseBody
	public Object add(@RequestBody ShopingCar data)
	{
		if (data.getProductId()<=0) {
			return ReturnMap.result(0, "请选择产品！");
		}
		if (data.getNum()<=0) {
			return ReturnMap.result(0, "数量不能为零！");
		}
		JSONObject userId = SessionUtil.getUserId(request);
		data.setUserId(userId.getIntValue("userId"));
		int result = carService.add(data);
		if (result>0) {
			return ReturnMap.result(1, "添加成功！");
		}else {
			return ReturnMap.result(0, "添加失败！");
		}
	}

	/**
	 * 设置产品数量
	 * @param data
	 * @return
	 */
	@RequestMapping(value="/setNum",method = RequestMethod.POST)
	@ResponseBody
	public Object setNum(@RequestBody ShopingCar data)
	{
		if (data.getId()<=0) {
			return ReturnMap.result(0, "请选择产品！");
		}
		if (data.getNum()<=0) {
			return ReturnMap.result(0, "数量不能为零！");
		}
		int result = carService.setNum(data.getId(), data.getNum());
		if (result>0) {
			return ReturnMap.result(1, "ok");
		}else {
			return ReturnMap.result(0, "添加失败！");
		}
	}

	/**
	 * 删除购物车
	 * @param data
	 * @return
	 */
	@RequestMapping(value="/remove/{id}",method = RequestMethod.POST)
	@ResponseBody
	public Object remove(@PathVariable("id") int id)
	{
		ShopingCar model = carService.get(id);
		JSONObject object = SessionUtil.getUserId(request);
		int userId = object.getIntValue("userId");
		if (model.getUserId() == userId) {
			int result = carService.remove(id);
			if (result>0) {
				return ReturnMap.result(1, "ok");
			}else {
				return ReturnMap.result(0, "删除失败！");
			}
		}
		return ReturnMap.result(0, "删除失败！");
	}
	/**
	 * 购物车列表
	 */
	@RequestMapping(value="/list",method = RequestMethod.POST)
	@ResponseBody
	public Object list(@PathVariable("id") int id)
	{
		ShoppCarParam param = new ShoppCarParam();
		JSONObject sobject = SessionUtil.getUserId(request);
		int userId = sobject.getIntValue("userId");
		param.setUserId(userId);
		param.setStatus(0);
		List<ShopingCar> list = carService.getList(param);
		List<JSONObject> objects = new ArrayList<JSONObject>();
		for(ShopingCar item : list)
		{
			JSONObject object = new JSONObject();
			object.put("id",item.getId());
			object.put("productName",item.getProductName());
			object.put("productId",item.getProductId());
			object.put("productImg",item.getProductImg());
			object.put("num",item.getNum());
			object.put("price",item.getPrice());
			object.put("createTime",DateUtil.getStringDate(item.getCreateTime()));
			objects.add(object);
		}
		return ReturnMap.result(1, "ok",objects);
	}
}
