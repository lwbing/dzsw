package com.lwb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ManagerController 
{
	@RequestMapping("index")
	public String index()
	{
		return "index";
	}
}
