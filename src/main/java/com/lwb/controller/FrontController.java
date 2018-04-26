package com.lwb.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
/**
 * 前段页面
 * @author lwb
 *
 */
@Controller

public class FrontController 
{
	//@RequestMapping(value = "front/")
	@RequestMapping(value = "front/index")
	public String index() 
	{
	    return "front/index";
	}
	
	/**
	 * 旅游景区
	 * @return
	 */
	@RequestMapping(value = "lving")
	public String lv() 
	{
	    return "front/lving";
	}
	
	/**
	 * 美食
	 */
	@RequestMapping(value = "food")
	public String food() 
	{
	    return "front/food";
	}
	
	/**
	 * 酒店
	 * @return
	 */
	@RequestMapping(value = "hotel")
	public String hotel() 
	{
	    return "front/hotel";
	}
	
	/**
	 * ktv
	 */
	@RequestMapping(value = "ktv")
	public String ktv() 
	{
	    return "front/ktv";
	}
}
