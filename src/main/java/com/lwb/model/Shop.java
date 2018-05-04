package com.lwb.model;
/**
 * 店铺
 * @author lwb
 *
 */
public class Shop 
{
	private int id;
	
	private String shopName;
	
	private String logo;
	
	private int sellerId;//商家id
	
	private String sellerName;//商家名称
	
	private Integer level;//店铺等级
	
	private Integer shopType;//店铺分类：生鲜植物，美食/精品服装/旅游景区
	
	private Integer enable;//是否启用：1 是启用   2是关闭，3是待审核
	
	private long createTime;//创建日期
	
	private long endTime;//到期日期
	
	private int sorts;//排序 ，越低越靠前
	
	private String data;//其他json数据

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public int getSellerId() {
		return sellerId;
	}

	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}
	
	public Integer getLevel() {
		return level;
	}

	public void setLevel(Integer level) {
		this.level = level;
	}

	public Integer getShopType() {
		return shopType;
	}

	public void setShopType(Integer shopType) {
		this.shopType = shopType;
	}

	public Integer getEnable() {
		return enable;
	}

	public void setEnable(Integer enable) {
		this.enable = enable;
	}

	public long getCreateTime() {
		return createTime;
	}

	public void setCreateTime(long createTime) {
		this.createTime = createTime;
	}

	public long getEndTime() {
		return endTime;
	}

	public void setEndTime(long endTime) {
		this.endTime = endTime;
	}

	public int getSorts() {
		return sorts;
	}

	public void setSorts(int sorts) {
		this.sorts = sorts;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}
}
