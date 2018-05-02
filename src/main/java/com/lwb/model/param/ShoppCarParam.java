package com.lwb.model.param;

import java.io.Serializable;

public class ShoppCarParam extends Page implements Serializable
{
	private static final long serialVersionUID = 1L;

	private int productId;
	
	private int userId;
	
	private int custormId;
	
	private int status;

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getCustormId() {
		return custormId;
	}

	public void setCustormId(int custormId) {
		this.custormId = custormId;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}	
}
