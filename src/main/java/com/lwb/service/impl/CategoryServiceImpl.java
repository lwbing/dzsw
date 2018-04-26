package com.lwb.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.lwb.model.Category;
import com.lwb.service.CategoryService;

@Service("categoryService")
public class CategoryServiceImpl implements CategoryService
{

	@Override
	public int add(Category model) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int setIcon(String path, int id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int delete(int id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Category get(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Category> getList(int topic) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int count(int topic) {
		// TODO Auto-generated method stub
		return 0;
	}

}
