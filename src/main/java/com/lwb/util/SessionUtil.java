package com.lwb.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

public final class SessionUtil
{
	public static String user_key = "";
	public static String seller_key = "";
	public static String admin_key = "";
	public static JSONObject getUserId(final HttpServletRequest request)
	{
		HttpSession session = request.getSession();
		String id = session.getAttribute(user_key).toString();
		if (StringUtils.isNotEmpty(id)) {
			return JSON.parseObject(id);
		}
		throw new IllegalArgumentException("you are not login");
	}
	
	public static void setUserId(final HttpServletRequest request,Object object)
	{
		HttpSession session = request.getSession();
		session.setAttribute(user_key,object);
	}
	
	public static JSONObject getSellerId(final HttpServletRequest request)
	{
		HttpSession session = request.getSession();
		String id = session.getAttribute(seller_key).toString();
		if (StringUtils.isNotEmpty(id)) {
			return JSON.parseObject(id);
		}
		throw new IllegalArgumentException("you are not login");
	}
	
	public static void setSellerId(final HttpServletRequest request,Object object)
	{
		HttpSession session = request.getSession();
		session.setAttribute(seller_key,object);
	}
	
	public static JSONObject getAdmin(final HttpServletRequest request)
	{
		HttpSession session = request.getSession();
		String id = session.getAttribute(admin_key).toString();
		if (StringUtils.isNotEmpty(id)) {
			return JSON.parseObject(id);
		}
		throw new IllegalArgumentException("you are not login");
	}
	
	public static void setAdmin(final HttpServletRequest request,Object object)
	{
		HttpSession session = request.getSession();
		session.setAttribute(admin_key,object);
	}
}
