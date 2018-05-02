package com.lwb.util;

public final class Url 
{
	/**
	 * 用户基本信息
	 * @param openId
	 * @param token
	 * @return
	 */
	public static String getUserInfoUrl(String openId,String token)
	{
		StringBuffer buffer =new StringBuffer("https://api.weixin.qq.com/cgi-bin/user/info?");
		buffer.append("access_token="+token);
		buffer.append("&openid="+openId);
		buffer.append("&lang=zh_CN");
		return buffer.toString();
	}
	/**
	 * code需要在调回的页面中接收
	 * https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx520c15f417810387&redirect_uri=https%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdapter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60&response_type=code&scope=snsapi_base&state=123#wechat_redirect
	 * @return
	 */
	public static String getOpenId(String appid,String redirect_uri)
	{
		StringBuffer buffer =new StringBuffer("https://open.weixin.qq.com/connect/oauth2/authorize?");
		buffer.append("appid="+appid);
		buffer.append("&redirect_uri="+redirect_uri);
		buffer.append("&response_type=code&scope=snsapi_base&state=123#wechat_redirect");
		return buffer.toString();
	}
	/**
	 * 获得{ "access_token":"ACCESS_TOKEN",
"expires_in":7200,
"refresh_token":"REFRESH_TOKEN",
"openid":"OPENID",
"scope":"SCOPE" }
	 */
	public static String getAccessToken(String appid,String secret,String code)
	{
		StringBuffer buffer =new StringBuffer("https://api.weixin.qq.com/sns/oauth2/access_token?");
		buffer.append("appid="+appid).append("&secret="+secret).append("&code="+code);
		buffer.append("&grant_type=authorization_code");
		return buffer.toString();
	}
}
