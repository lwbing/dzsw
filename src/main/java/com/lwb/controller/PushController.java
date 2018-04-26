package com.lwb.controller;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.PrintWriter;
import java.security.MessageDigest;
import java.util.Arrays;
import java.util.Map;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.github.wxpay.sdk.WXPayUtil;
import com.lwb.intercepter.AllowAnonymous;
import com.lwb.model.UserInfo;
import com.lwb.service.UserInfoService;
import com.lwb.util.ConfigUtil;
import com.lwb.util.HttpUtil;
import com.lwb.util.Url;
import com.lwb.wx.WxUser;

@Controller
@RequestMapping("push/")
public class PushController 
{
	@Autowired
	private UserInfoService userInfoService;
	
	@AllowAnonymous
	@RequestMapping(value = "validate", method = RequestMethod.POST)
	public void msg(ServletRequest request, ServletResponse response) throws Exception
	{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		InputStream in = request.getInputStream();
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		byte[] buffer = new byte[1024];
		int len = 0;
		while ((len = in.read(buffer)) != -1) {
			out.write(buffer, 0, len);
		}
		out.close();
		in.close();
		String content = new String(out.toByteArray(), "utf-8");
		Map<String,String> postData = WXPayUtil.xmlToMap(content);	
		String eventType = postData.get("Event");
		switch (eventType) 
		{
			case "subscribe":
				WxUser user = new WxUser();
				UserInfo info =user.getInfo(postData.get(""), ConfigUtil.wxToken);
				if (info!=null) {
					userInfoService.addUser(info);
				}
				break;
			case "unsubscribe":
				break;
			default:
				break;
		}

	}

	/**
	 * 微信服务发送验证的信息
	 * @param 
	 *      signature	微信加密签名，signature结合了开发者填写的token参数和请求中的timestamp参数、nonce参数。
			timestamp	时间戳
			nonce	随机数
			echostr	随机字符串
	 * @param 
	 */
	@AllowAnonymous
	@RequestMapping(value = "validate", method = RequestMethod.GET)
	public void validate(HttpServletRequest request, HttpServletResponse response) throws Exception
	{
		String signature=request.getParameter("signature");
		String timestamp=request.getParameter("timestamp");
		String nonce = request.getParameter("nonce");
		String echostr = request.getParameter("echostr");
		PrintWriter out = response.getWriter();  

		String TOKEN =ConfigUtil.wxToken;
		String array[] = {TOKEN, timestamp, nonce};
		Arrays.sort(array);
		String tempStr = new StringBuilder().append(array[0] + array[1] + array[2]).toString();
		tempStr = getSHA1(tempStr);
		if(tempStr.equalsIgnoreCase(signature)){
			out.print(echostr);
		}
	}
	
	@AllowAnonymous
	@RequestMapping(value = "getOpenId", method = RequestMethod.GET)
	public void getOpenId(HttpServletRequest request, HttpServletResponse response)
	{
		String code = request.getParameter("code");
		String result = HttpUtil.getData(Url.getAccessToken(ConfigUtil.appid, ConfigUtil.wxAESKEY, code));
		JSONObject object = JSON.parseObject(result);
		HttpSession session =request.getSession();
		session.setAttribute("openid", object.getString("openid"));
	}

	public String getSHA1(String tempStr) //, String encrypt
	{
		try {		
			MessageDigest md = MessageDigest.getInstance("SHA-1");
			md.update(tempStr.getBytes());
			byte[] digest = md.digest();
			StringBuffer hexstr = new StringBuffer();
			String shaHex = "";
			for (int i = 0; i < digest.length; i++) {
				shaHex = Integer.toHexString(digest[i] & 0xFF);
				if (shaHex.length() < 2) {
					hexstr.append(0);
				}
				hexstr.append(shaHex);
			}
			return hexstr.toString();
		} catch (Exception ex) {
			ex.printStackTrace();
			return null;
		}
	}
}
