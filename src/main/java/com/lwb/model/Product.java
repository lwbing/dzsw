package com.lwb.model;

public class Product 
{
	private int id;
	
	private String productName;
	
	private int catgelory=0;
	
	private int shopId;
	
	private int productType;//酒店/KTV/景区门票/电影票/餐馆各自对应不同的页面
	//原件
	private double yprice;
	//现价
	private double nprice;
	//图片
	private String images;
	//卖出数量
	private int sellerNum;
	//产品须知
	private String notice;
	//哪个客户的产品,也是userID
	private int custormId;
	
	private String spec;//规格
	//描述
	private String descrpt;
	
	private int areaCode;
	
	private long endTime;
	
	private long createTime;
	
	private String data;//json数据：endTime
	
	private int isBuy;//是否是需要立即购买的产品，还是可以加入购物车的产品，如果是同一个商家的，需要弄成一个订单
	/**
	 * 1是未审核，2是审核通过，3是下架,4是推荐
	 */
	private int status;

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

	public int getCatgelory() {
		return catgelory;
	}

	public void setCatgelory(int catgelory) {
		this.catgelory = catgelory;
	}

	public double getYprice() {
		return yprice;
	}

	public void setYprice(double yprice) {
		this.yprice = yprice;
	}

	public double getNprice() {
		return nprice;
	}

	public void setNprice(double nprice) {
		this.nprice = nprice;
	}

	public String getImages() {
		return images;
	}

	public void setImages(String images) {
		this.images = images;
	}

	public int getSellerNum() {
		return sellerNum;
	}

	public void setSellerNum(int sellerNum) {
		this.sellerNum = sellerNum;
	}

	public String getNotice() {
		return notice;
	}

	public void setNotice(String notice) {
		this.notice = notice;
	}

	public int getCustormId() {
		return custormId;
	}

	public void setCustormId(int custormId) {
		this.custormId = custormId;
	}

	public String getDescrpt() {
		return descrpt;
	}

	public void setDescrpt(String descrpt) {
		this.descrpt = descrpt;
	}

	public long getCreateTime() {
		return createTime;
	}

	public void setCreateTime(long createTime) {
		this.createTime = createTime;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getIsBuy() {
		return isBuy;
	}

	public void setIsBuy(int isBuy) {
		this.isBuy = isBuy;
	}

	public String getSpec() {
		return spec;
	}

	public void setSpec(String spec) {
		this.spec = spec;
	}

	public int getProductType() {
		return productType;
	}

	public void setProductType(int productType) {
		this.productType = productType;
	}

	public int getShopId() {
		return shopId;
	}

	public void setShopId(int shopId) {
		this.shopId = shopId;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
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
