package com.lwb.model.param;

public enum ProductEmum
{
	NO_CHECK("未审核", 1),CHECKED("审核通过",2),DRAW_OUT("下架",3),Recommend("产品推荐",4),LastSale("限时抢购",5); 
	private String name;
	private int value;
	private ProductEmum(String name,int value)
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
