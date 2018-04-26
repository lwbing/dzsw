package com.lwb.model.param;

import java.io.Serializable;
/**
 * 查询参数
 * @author lwb
 *
 */
public class OrderParam extends Page implements Serializable
{
	private static final long serialVersionUID = 1L;

	private int userId;
	
	private int status;
	
	private long startTime;
	
	private long endTime;
	
	/**
	 * 商户ID
	 */
	private int custormId;
	
	private String code;
	
	private int isValidate;

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

	public long getStartTime() {
		return startTime;
	}

	public void setStartTime(long startTime) {
		this.startTime = startTime;
	}

	public long getEndTime() {
		return endTime;
	}

	public void setEndTime(long endTime) {
		this.endTime = endTime;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
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
