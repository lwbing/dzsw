package com.lwb.util;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisCluster;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

public class RedisUtil
{
	private static final String redisUrl="localhost";

    //Redis的端口号
    private static int PORT = 6379;

    //访问密码
    private static String AUTH = "";

    //可用连接实例的最大数目，默认值为8；
    //如果赋值为-1，则表示不限制；如果pool已经分配了maxActive个jedis实例，则此时pool的状态为exhausted(耗尽)。
    private static int MAX_ACTIVE = 1024;

    //控制一个pool最多有多少个状态为idle(空闲的)的jedis实例，默认值也是8。
    private static int MAX_IDLE = 20;

    //等待可用连接的最大时间，单位毫秒，默认值为-1，表示永不超时。如果超过等待时间，则直接抛出JedisConnectionException；
    private static int MAX_WAIT = 10000;

    private static int TIMEOUT = 10000;

    //在borrow一个jedis实例时，是否提前进行validate操作；如果为true，则得到的jedis实例均是可用的；
    private static boolean TEST_ON_BORROW = true;

    private static JedisPool jedisPool = null;

    /**
     * 初始化Redis连接池
     */
    static 
    {
        try {
            JedisPoolConfig config = new JedisPoolConfig();
            config.setMaxTotal(MAX_ACTIVE);
            config.setMaxIdle(MAX_IDLE);
            config.setMaxWaitMillis(MAX_WAIT);
            config.setTestOnBorrow(TEST_ON_BORROW);
            jedisPool = new JedisPool(config, redisUrl, PORT, TIMEOUT);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
	
	public static String set(String key,String val)
	{
		Jedis jedis = jedisPool.getResource();
		String result =jedis.set(key, val);
		return result;
	}
	public static String setex(String key, int seconds, String value)
	{
		Jedis jedis = jedisPool.getResource();
		String result =jedis.setex(key, seconds, value);
		return result;
	}
	
	public static String get(String key)
	{
		Jedis jedis = jedisPool.getResource();
		String result =jedis.get(key);
		return result;
	}
	
	public static Boolean exists(String key) 
	{
		Jedis jedis = jedisPool.getResource();
        try {
            return jedis.exists(key);
        }
        catch (Exception ex){
            return false;
        }
    }
}
