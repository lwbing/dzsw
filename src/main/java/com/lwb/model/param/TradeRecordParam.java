package com.lwb.model.param;

public class TradeRecordParam 
{
	private int start;
	
	private int end;
	
	private int userId;
	//商户ID
	private int custormId;
	
	private long startTime;
	
	private long endTime;

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getEnd() {
		return end;
	}

	public void setEnd(int end) {
		this.end = end;
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

	public void setCustormId(int custormId) 
	{
		this.custormId = custormId;
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
}
