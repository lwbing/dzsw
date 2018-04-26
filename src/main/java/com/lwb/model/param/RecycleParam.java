package com.lwb.model.param;

public class RecycleParam extends Page
{
	
	private int userId;
	
	private int flag;//1是添加，2是删除，3是修改

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getFlag() {
		return flag;
	}

	public void setFlag(int flag) {
		this.flag = flag;
	}	
}
