package com.lwb.service;

import java.util.List;

import com.lwb.model.Category;

public interface CategoryService 
{
	int add(Category model);
	
	int setIcon(String path,int id);
	
	int delete(int id);
	
	Category get(int id);
	
	List<Category> getList(int topic);
	
	int count(int topic);
}
