package com.lwb.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;

public final class SessionUtil
{
	public static String user_key = "";
	public static String seller_key = "";
	public static int getUserId(final HttpServletRequest request)
	{
		HttpSession session = request.getSession();
		String id = session.getAttribute(user_key).toString();
		if (StringUtils.isNotEmpty(id)) {
			System.out.println(id);
			return Integer.parseInt(id);
		}
		throw new IllegalArgumentException("you are not login");
	}
	
	public static int getSellerId(final HttpServletRequest request)
	{
		HttpSession session = request.getSession();
		String id = session.getAttribute(seller_key).toString();
		if (StringUtils.isNotEmpty(id)) {
			System.out.println(id);
			return Integer.parseInt(id);
		}
		throw new IllegalArgumentException("you are not login");
	}
}
