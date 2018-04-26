package com.lwb.model;

/**
 * 分销者表
 * @author lwb
 *
 */
public class Distributor
{
	private int id;
	
	private int level;//层级，0是顶级分销商,1是1级分销商，2是二级分销商
	
	private int userId;
	
	private int rate;//分成比例x100（按利润分成），利润 = 按销售价格-商品原价
	
	private long createTime;
	
	private String data;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getRate() {
		return rate;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

	public long getCreateTime() {
		return createTime;
	}

	public void setCreateTime(long createTime) {
		this.createTime = createTime;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}
	
}
