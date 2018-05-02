package com.lwb.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.lwb.model.Category;
import com.lwb.model.CategoryEnum;
import com.lwb.model.Product;
import com.lwb.model.param.ProductEmum;
import com.lwb.model.param.ProductParam;
import com.lwb.service.CategoryService;
import com.lwb.service.ProductService;
import com.lwb.util.DateUtil;
import com.lwb.util.ReturnMap;
import com.lwb.util.StringComm;

@Controller
public class ProductController 
{
	@Autowired
	private ProductService productService;
	
	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping("/product/index")
	public String index()
	{
		return "/product/index";
	}
	
	/**
	 * 首页购买数据
	 * @return
	 */
	@RequestMapping("/product/getProduct")
	@ResponseBody
	public Object getList()
	{
		List<Category> cats = categoryService.getList(CategoryEnum.productCat.getValue());
		ProductParam param = new ProductParam();
		param.setStatus(ProductEmum.CHECKED.getValue());
		List<Product> pts = productService.getProducts(param);
		List<JSONObject> cj = new ArrayList<JSONObject>();
		for(Category item : cats)
		{
			JSONObject cat = new JSONObject();
			cat.put("id",item.getId() );
			cat.put("icon", item.getIcon());
			cat.put("title", item.getTitle());
			cj.add(cat);
		}
		List<JSONObject> pj = new ArrayList<JSONObject>();
		for(Product model : pts){
			JSONObject pt = new JSONObject();
			pt.put("id",model.getId());
			pt.put("pname",model.getProductName());
			pt.put("price",model.getNprice());
			pt.put("img",StringComm.getFirst(model.getImages(), ";"));
			pt.put("remark",model.getDescrpt());
			pj.add(pt);
		}
		/**
		 * 推荐 首页bannner
		 */
		ProductParam rparam = new ProductParam();
		param.setStatus(ProductEmum.Recommend.getValue());
		List<Product> rlist = productService.getProducts(rparam);
		List<JSONObject> rjson = new ArrayList<JSONObject>();
		for(Product model : rlist){
			JSONObject pt = new JSONObject();
			pt.put("id",model.getId());
			pt.put("pname",model.getProductName());
			pt.put("price",model.getNprice());
			pt.put("img",StringComm.getFirst(model.getImages(), ";"));
			pt.put("remark",model.getDescrpt());
			rjson.add(pt);
		}
		
		ProductParam last = new ProductParam();
		param.end=3;
		param.setStatus(ProductEmum.LastSale.getValue());
		List<Product> lps = productService.getProducts(last);
		List<JSONObject> ljson = new ArrayList<JSONObject>();
		for(Product model : lps){
			JSONObject pt = new JSONObject();
			pt.put("id",model.getId());
			pt.put("pname",model.getProductName());
			pt.put("price",model.getNprice());
			pt.put("img",StringComm.getFirst(model.getImages(), ";"));
			pt.put("remark",model.getDescrpt());
			pt.put("endTime",DateUtil.getStringDate(model.getEndTime()));
			ljson.add(pt);
		}
		/**
		 * 限时抢购
		 */
		JSONObject object = new JSONObject();
		object.put("cat", cats);
		object.put("ps", pj);
		object.put("rc", rjson);
		object.put("lastSale", ljson);
		return ReturnMap.result(1, "ok", object);
	}
	
	@RequestMapping("/product/get/{id}")
	@ResponseBody
	public Object get(@PathVariable("id") int id)
	{
		Product model = productService.get(id);
		if (model==null || model.getStatus() !=1) {
			return ReturnMap.result(0, "暂无数据");
		}
		JSONObject pt = new JSONObject();
		pt.put("id",model.getId());
		pt.put("pname",model.getProductName());
		pt.put("price",model.getNprice());
		pt.put("img",model.getImages().split(";"));
		pt.put("remark",model.getDescrpt());
		pt.put("num",model.getSellerNum());
		pt.put("notice",model.getNotice());
		pt.put("descrpt",model.getDescrpt());
		return ReturnMap.result(1, "ok", pt);
	}
}
