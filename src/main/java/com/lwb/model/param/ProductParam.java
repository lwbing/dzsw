package com.lwb.model.param;

import java.io.Serializable;

public class ProductParam extends Page implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	private int userId;
	
	private int status;
	
	private int catgelory;
	
	private int areaCode;
	
	private long endTime;

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getCatgelory() {
		return catgelory;
	}

	public void setCatgelory(int catgelory) {
		this.catgelory = catgelory;
	}

	public int getAreaCode() {
		return areaCode;
	}

	public void setAreaCode(int areaCode) {
		this.areaCode = areaCode;
	}

	public long getEndTime() {
		return endTime;
	}

	public void setEndTime(long endTime) {
		this.endTime = endTime;
	}
}
