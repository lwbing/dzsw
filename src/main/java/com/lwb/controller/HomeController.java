package com.lwb.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController 
{


	@RequestMapping("index1")
	public String index() throws Exception 
	{		
		//System.out.println(res);
		return "index1";
	}
//
//	public String validate()
//	{
//		return "";
//	}
}
