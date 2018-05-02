package com.lwb.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

import com.alibaba.fastjson.JSONObject;

public final class HttpUtil 
{
	public static String postData(String url,JSONObject object) throws Exception
    {
        try {
            HttpPost httpPost = new HttpPost("http://www.zswwlj.com/api/push/pushData");
            CloseableHttpClient client = HttpClients.createDefault();
            StringEntity entity = new StringEntity(object.toString(), "utf-8");//解决中文乱码问题
            entity.setContentEncoding("UTF-8");
            entity.setContentType("application/json");
            httpPost.setEntity(entity);
            HttpResponse resp = client.execute(httpPost);
            if (resp.getStatusLine().getStatusCode() == 200) {
                InputStream stream = resp.getEntity().getContent();
                String[] strings = readLines(stream);
                StringBuffer buffer = new StringBuffer();
                for (String str : strings){
                    buffer.append(str);
                }
                return buffer.toString();
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return null;
    }
	
	public static String getData(String url)
    {
        try {
            HttpGet httpPost = new HttpGet(url);
            CloseableHttpClient client = HttpClients.createDefault();
            HttpResponse resp = client.execute(httpPost);
            if (resp.getStatusLine().getStatusCode() == 200) {
                InputStream stream = resp.getEntity().getContent();
                String[] strings = readLines(stream);
                StringBuffer buffer = new StringBuffer();
                for (String str : strings){
                    buffer.append(str);
                }
                return buffer.toString();
            }
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return null;
    }
	
	public static String[] readLines(InputStream is) throws IOException {
        List<String> lines = new ArrayList<String>();
        BufferedReader reader = new BufferedReader(new InputStreamReader(is));
        try {
            String line;
            while ((line = reader.readLine()) != null)
                lines.add(line);
            return lines.toArray(new String[0]);
        } finally {
            reader.close();
        }
    }
}
