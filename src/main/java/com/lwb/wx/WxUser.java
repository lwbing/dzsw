package com.lwb.wx;

import org.apache.commons.lang.StringUtils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.lwb.model.UserInfo;
import com.lwb.util.HttpUtil;
import com.lwb.util.Url;

public class WxUser 
{
	public UserInfo getInfo(String openId,String token)
	{
		String cxt =HttpUtil.getData(Url.getUserInfoUrl(openId, token));
		if (StringUtils.isNotEmpty(cxt)) {
			JSONObject object = JSON.parseObject(cxt);
			UserInfo info = new UserInfo();
			info.setCreateTime(System.currentTimeMillis());
			info.setOpenId(object.getString("openid"));
			info.setNickName(object.getString("nickname"));
			info.setSex(object.getString("sex"));
			info.setHeadImg(object.getString("headimgurl"));
			info.setUserType(0);
		}
		return null;
	}
	
	
}
