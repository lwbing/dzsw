package com.lwb.model;

public class ShopingCar 
{
	private int id;
	
	private String productName;
	
	private int productId;
	
	private int num;
	
	private String productImg;
	
	private float price;
	
	private int userId;
	
	private int status;//0是在购物车中，1是未完成的支付，2是已完成的支付
	/**
	 * 超过一段时间，没有支付的产品都被清空
	 */
	private long createTime;
	
	private String remark;
	
	private int custormId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public String getProductImg() {
		return productImg;
	}

	public void setProductImg(String productImg) {
		this.productImg = productImg;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

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

	public long getCreateTime() {
		return createTime;
	}

	public void setCreateTime(long createTime) {
		this.createTime = createTime;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public int getCustormId() {
		return custormId;
	}

	public void setCustormId(int custormId) {
		this.custormId = custormId;
	}
	
}
