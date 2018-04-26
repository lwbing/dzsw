package com.lwb.model;

public enum CategoryEnum 
{
	productCat("首页产品大类", 1); //ktv,旅游，酒店，门票


	private String name;
	private int value;
	private CategoryEnum(String name,int value)
	{
		this.name =name;
		this.value = value;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getValue() {
		return value;
	}
	public void setValue(int value) {
		this.value = value;
	}
}
