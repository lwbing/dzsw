package com.lwb.util;

import org.apache.commons.lang.StringUtils;

public final class StringComm 
{
	public static String getFirst(String source,String splite)
	{
		if (StringUtils.isNotEmpty(source)) {
			String[]  array = source.split(splite);
			if (array.length>=1) {
				return array[0];
			}
		}
		return null;
	}
}
