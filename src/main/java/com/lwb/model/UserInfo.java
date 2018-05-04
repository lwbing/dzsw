package com.lwb.model;

/**
 * 一个用户可以包含多个账户，
 * 各个账户之间是可以切换的
 * @author lwb
 *
 */
public class UserInfo 
{
	/**
	 * 存成openid
	 */
	private int userId;
	
	private String userName;
	
	private String passWord;
	/**
	 * 昵称
	 */
	private String nickName;
	/**
	 * 真实姓名（可选）
	 */
	private String realName;
	/**
	 * 头像
	 */
	private String headImg;
	/**
	 * 年月日
	 */
	private String birthday;
	/**
	 * 用户邮箱，主要用于用户修改手机号
	 */
	private String eamil;
	/**
	 * 手机号码
	 */
	private String mobileNumber;
	/**
	 * 部门ID，可选,没有为0 (是否是分销用户，0不是分销用户，是分销用户)
	 */
	private String deptId="0";
	/**
	 * 性别
	 */
	private String sex;
	/**
	 * 用户类型：平台用户是1，普通用户是0，商户用户是2,3是超级管理员
	 */
	private int userType;
	/**
	 * 微信openid
	 */
	private String openId;
	
	private int status;//1是正常，2是禁用
	
	private long createTime;
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassWord() {
		return passWord;
	}
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	public String getRealName() {
		return realName;
	}
	public void setRealName(String realName) {
		this.realName = realName;
	}
	public String getHeadImg() {
		return headImg;
	}
	public void setHeadImg(String headImg) {
		this.headImg = headImg;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public String getEamil() {
		return eamil;
	}
	public void setEamil(String eamil) {
		this.eamil = eamil;
	}
	public String getDeptId() {
		return deptId;
	}
	public void setDeptId(String deptId) {
		this.deptId = deptId;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public long getCreateTime() {
		return createTime;
	}
	public void setCreateTime(long createTime) {
		this.createTime = createTime;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public int getUserType() {
		return userType;
	}
	public void setUserType(int userType) {
		this.userType = userType;
	}
	public String getOpenId() {
		return openId;
	}
	public void setOpenId(String openId) {
		this.openId = openId;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	
}
