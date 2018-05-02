package com.lwb.util;

import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.PropertiesConfiguration;
import org.apache.commons.configuration.reloading.FileChangedReloadingStrategy;

/**
 * 配置文件读取类
 * @author lwb
 *
 */
public final class ConfigUtil
{
    public static final String fileName = "conf.properties";
    private static PropertiesConfiguration config;

    static {
        try {
            config = new PropertiesConfiguration(fileName);
        } catch (ConfigurationException e) {
            e.printStackTrace();
        }
        config.setReloadingStrategy(new FileChangedReloadingStrategy());
    }
    /*------------短信服务配置---------------*/
    public static final String SEND_MESSAGE_URL=config.getString("SEND_MESSAGE_URL");
    //#注册签名
    public static final String REGISTER_SIGN="智慧式控股";
    //注册模板
    public static final String REGISTER_TEMPLATE_ID="SMS_67670314";
    //有效时长
    public static final int REGISTER_DURATION=5;
    public static final String APP_KEY="23847756";
    public static final String APP_SECRET="43b99aa2627b6d5059c74955e3d804a7";
    public static final String REDIES_PROJECT_NAME="gxcw:app";


    /*支付服务配置*/
    public static final String WXAPPID="wx8554f587cc51f2fe"; //微信共享车位的APPID
    public static final String WXMCHID = "1493980352";//共享车位 微信商户ID
    public static final String WXKEY = "f075020bf7f4ffdfd27eb6e960848956";
    public static final String WX_NOTIFY_URL=config.getString("WX_NOTIFY_URL");
    public static final String ServerIP= config.getString("wx_service_ip");//"182.242.225.214";

    
    /**
     * 微信公众号配置
     */
    public static final String wxToken = "";
    public static final String wxAESKEY="";
    public static final String appid="";
    public static final String sysOpenId="";
    
    public static final String redirectUrl=config.getString("redirectUrl");
}

