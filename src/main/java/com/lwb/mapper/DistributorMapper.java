package com.lwb.mapper;

import java.util.List;
import java.util.Map;

import com.lwb.model.Distributor;

public interface DistributorMapper 
{
	int add(Distributor model);
	
	int remove(int id);
	
	int update(Distributor model);
	
	Distributor get(int id);
	
	List<Distributor> getList(Map<String,Object> map);
	
	int count(Map<String,Object> map);
}
