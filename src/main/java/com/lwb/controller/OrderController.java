package com.lwb.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.lwb.model.Order;
import com.lwb.model.param.OrderParam;
import com.lwb.service.OrderService;
import com.lwb.util.DateUtil;

@Controller
@RequestMapping("order/")
public class OrderController 
{
	@Autowired
	private OrderService orderService;
	
	/**
	 * 商家门票管理首页
	 * @return
	 */
	@RequestMapping(value="cindex")
	public String cindex()
	{
		return "corder/cindex";
	}
	
	@RequestMapping(value="selectCode",method=RequestMethod.POST)
	@ResponseBody
	public String select(HttpServletRequest request,Model model)
	{

		String qcode = request.getParameter("qcode");
		Order order = orderService.validateCode(qcode);
		if (order!=null) {
			List<JSONObject> list = new ArrayList<JSONObject>();
			list.add(tran(order));
			model.addAttribute("order",list);
		}
		return "corder/cindex";  
	}
	/**
	 * 商家门票管理首页
	 * @return
	 */
	@RequestMapping(value="corders")
	public String cindex(@RequestParam(defaultValue="1") int page,
			@RequestParam(defaultValue="20") int rows,HttpServletRequest request,Model model)
	{
		HttpSession session = request.getSession();
		if (session.getAttribute("crunt_coms") ==null) {
			return "corder/corders";
		}
		int custormId=(int)session.getAttribute("crunt_coms");
		System.out.println("session:"+custormId+"   page:"+page);
		OrderParam param = new OrderParam();
		param.setCustormId(custormId);
		param.start=(page-1)*rows;
		param.end=page * rows;
		param.setIsValidate(1);
		param.setStatus(1);
		List<JSONObject> objects = new ArrayList<JSONObject>();
		List<Order> list=orderService.getOrders(param);
		for(Order od : list)
		{
			objects.add(tran(od));
		}
		model.addAttribute("orders",list);
		return "corder/corders";
	} 
	
	/**
	 * 订单查询
	 * @return
	 */
	@RequestMapping(value="corders",method=RequestMethod.POST)
	public String cindex(HttpServletRequest request,Model model)
	{
		HttpSession session = request.getSession();
		if (session.getAttribute("crunt_coms") ==null) {
			return "corder/corders";
		}
		int custormId=(int)session.getAttribute("crunt_coms");
		String orderCode = request.getParameter("orderCode");
		Order order = orderService.get(orderCode);
		if (order!=null &&order.getCustormId()==custormId) {
			List<JSONObject> objects = new ArrayList<JSONObject>();
			objects.add(tran(order));
			model.addAttribute("orders",objects);
		}
		return "corder/corders";
	} 
	
	private JSONObject tran(Order model)
	{
		JSONObject object =new JSONObject();
		object.put("orderCode", model.getOrderCode());
		object.put("productId", model.getProductId());
		object.put("productName", model.getProductName());
		object.put("createTime", DateUtil.getStringDate(model.getCreateTime()));
		if (model.getStatus()==0) {
			object.put("status", "未支付");
		}else {
			object.put("status", "已支付");
		}
		if (model.getIsValidate()==0) {
			object.put("isValidate", "未验证");
		}else {
			object.put("isValidate", "已验证");
		}
		object.put("money", model.getMoney());
		object.put("mobileNumber",model.getMobileNumber());
		object.put("num", model.getNum());
		return object;
	}
	
	
	
	
}
