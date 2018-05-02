package com.lwb.service;

import java.util.List;

import com.lwb.model.Distributor;

public interface DistributorService 
{
	int add(Distributor model);
	
	int remove(int id);
	
	int update(Distributor model);
	
	Distributor get(int id);
	
	List<Distributor> getList();
	
	int count();
}
