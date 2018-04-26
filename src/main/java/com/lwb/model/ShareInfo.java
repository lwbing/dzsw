package com.lwb.model;

/**
 * 分享信息表
 * @author lwb
 *
 */
public class ShareInfo 
{
	/**
	 * 分享id
	 */
	private int id;
	
	private String url;//分享的链接
	/**
	 * 分享者，那个人分享的
	 */
	private int disId;
	/**
	 * 分享的产品ID，相同的产品同一个人只能分享一次，如果该分享已经存在，取分享地址，没有则添加一条数据
	 */
	private int productId;
	
	private long createTime;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public int getDisId() {
		return disId;
	}

	public void setDisId(int disId) {
		this.disId = disId;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public long getCreateTime() {
		return createTime;
	}

	public void setCreateTime(long createTime) {
		this.createTime = createTime;
	}
}
