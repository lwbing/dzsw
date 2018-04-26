package com.lwb.model;

public class Order 
{
	private String orderCode;
	
	private String productName;
	
	private int productId;
	//数量、人数
	private int num;
	//用户ID
	private int userId;
	//订单状态，0是未支付，1是已支付
	private int status;
	
	private double money;
	//电子码
	private String qCode;
	//电子码是否已经使用;0是未使用，1 是已使用
	private int isValidate;
	
	//购买人手机号
	private String mobileNumber;
	
	/**
	 * 商家ID
	 */
	private int custormId;
	
	//创建时间
	private long createTime;
		
	
	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	private String remark;
	
	public String getOrderCode() {
		return orderCode;
	}

	public void setOrderCode(String orderCode) {
		this.orderCode = orderCode;
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

	public double getMoney() {
		return money;
	}

	public void setMoney(double money) {
		this.money = money;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getqCode() {
		return qCode;
	}

	public void setqCode(String qCode) {
		this.qCode = qCode;
	}

	public int getIsValidate() {
		return isValidate;
	}

	public void setIsValidate(int isValidate) {
		this.isValidate = isValidate;
	}

	public int getCustormId() {
		return custormId;
	}

	public void setCustormId(int custormId) {
		this.custormId = custormId;
	}
	
}
