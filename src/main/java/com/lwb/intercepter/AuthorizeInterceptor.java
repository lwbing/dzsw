package com.lwb.intercepter;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.lwb.util.ConfigUtil;
import com.lwb.util.HttpUtil;
import com.lwb.util.Url;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.lang.reflect.Method;


@Component
public class AuthorizeInterceptor implements HandlerInterceptor{



	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		response.setCharacterEncoding("utf-8");
		if (handler instanceof HandlerMethod) {
			HandlerMethod handlerMethod = (HandlerMethod) handler;
			Method method = handlerMethod.getMethod();
			AllowAnonymous allowAnonymous = method.getAnnotation(AllowAnonymous.class);
			if (allowAnonymous != null) {
				return true;//true的意思是可以继续执行，false是执行中断。
			}
			else 
			{
				HttpSession httpSession = request.getSession();
				if (httpSession.getAttribute("openid")==null) 
				{
					String code=request.getParameter("code");
					if (StringUtils.isNotEmpty(code)) {
						String result = HttpUtil.getData(Url.getAccessToken(ConfigUtil.appid, ConfigUtil.wxAESKEY, code));
						JSONObject object = JSON.parseObject(result);
						HttpSession session =request.getSession();
						session.setAttribute("openid", object.getString("openid"));
						return true;
					}
					return false;
				}
				return true;
			}
		}
		return false;
	}

	@Override
	public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler, ModelAndView modelAndView) throws Exception {

	}

	@Override
	public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler, Exception ex) throws Exception {

	}
}

