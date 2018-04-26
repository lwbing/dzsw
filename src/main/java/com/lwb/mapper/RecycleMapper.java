package com.lwb.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.lwb.model.Recycle;

@Mapper
public interface RecycleMapper 
{

    int remove(Integer id);

    int add(Recycle record);

    Recycle get(Integer id);

    List<Recycle> getList(Map<String, Object> map);
    
    int count(Map<String, Object> map);
}