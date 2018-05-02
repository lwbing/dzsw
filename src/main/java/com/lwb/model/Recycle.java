package com.lwb.model;

public class Recycle 
{
	private int id;
	
	private int userId;
	
	private String cxt;
	
	private long createTime;
	
	private int flag;//1是添加，2是删除，3是修改

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getCxt() {
		return cxt;
	}

	public void setCxt(String cxt) {
		this.cxt = cxt;
	}

	public long getCreateTime() {
		return createTime;
	}

	public void setCreateTime(long createTime) {
		this.createTime = createTime;
	}

	public int getFlag() {
		return flag;
	}

	public void setFlag(int flag) {
		this.flag = flag;
	}
	
}
