package com.lwb.model;

public class TradeRecord 
{
	private String recordId;
	
	private String orderCode;
	
	private long createTime;
	
	private int userId;
	
	private String trancenId;//支付宝、微信的交易记录好，用于退款
	
	private String returnInfo;//回调的
	
	private double cash;//交易金额
	//交易类型，是收入，还是支出
	private int tradeType;
	
	public String getRecordId() {
		return recordId;
	}
	public void setRecordId(String recordId) {
		this.recordId = recordId;
	}
	public String getOrderCode() {
		return orderCode;
	}
	public void setOrderCode(String orderCode) {
		this.orderCode = orderCode;
	}
	public long getCreateTime() {
		return createTime;
	}
	public void setCreateTime(long createTime) {
		this.createTime = createTime;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getTrancenId() {
		return trancenId;
	}
	public void setTrancenId(String trancenId) {
		this.trancenId = trancenId;
	}
	public String getReturnInfo() {
		return returnInfo;
	}
	public void setReturnInfo(String returnInfo) {
		this.returnInfo = returnInfo;
	}
	public double getCash() {
		return cash;
	}
	public void setCash(double cash) {
		this.cash = cash;
	}
	public int getTradeType() {
		return tradeType;
	}
	public void setTradeType(int tradeType) {
		this.tradeType = tradeType;
	}
}
