package com.lwb.mapper;

import java.util.List;
import java.util.Map;

import com.lwb.model.ShareInfo;

public interface ShareInfoMapper 
{
	int add(ShareInfo model);
	
	int remove(int id);
	
	int update(ShareInfo model);
	
	ShareInfo get(int id);
	
	List<ShareInfo> getList(Map<String, Object> map);
	
	int count(Map<String, Object> map);
}
