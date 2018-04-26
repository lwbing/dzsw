package com.lwb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.lwb.model.Category;

@Mapper
public interface CategoryMapper 
{
	int add(Category model);
	
	int setIcon(String path,int id);
	
	int delete(int id);
	
	Category get(int id);
	
	List<Category> getList(int topic);
	
	int count(int topic);
}
