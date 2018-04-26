package com.lwb.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.alibaba.fastjson.JSONObject;

//import jxl.Sheet;
//import jxl.Workbook;

public class ExcelUtil
{
	private static final String EXCEL_XLS = "xls";
	private static final String EXCEL_XLSX = "xlsx";

	
	
	public static void main(String[] args) throws Exception
	{
//		String path = "E:\\Dpan\\DATA.xls";
//		
//		String paths = "D:/aa/bb/ddx.xml";
//		File file = new File(paths);
//		if (!file.exists()) {
//			file.mkdirs();
//			file.createNewFile();
//		}
//		
//		//readFile(path);
//		//loadScoreInfo(path);
//		String os = System.getProperty("os.name");  
//		System.out.println(os);
//		int hash = 0;
//		char[] value;
//		
//		int h = hash;
//        if (h == 0 && value.length > 0) {
//            char val[] = value;
//
//            for (int i = 0; i < value.length; i++) {
//                h = 31 * h + val[i];
//            }
//            hash = h;
//        }
	}

//	public static List<JSONObject> readFile(String path)
//	{
//		try {
//			// 创建输入流，读取Excel
//			InputStream is = new FileInputStream(new File(path));
//			// jxl提供的Workbook类
//			Workbook wb = Workbook.getWorkbook(is);
//			// Excel的页签数量
//			int sheet_size = wb.getNumberOfSheets();
//			for (int index = 0; index < sheet_size; index++) {
//				List<JSONObject> outerList=new ArrayList<JSONObject>();
//				// 每个页签创建一个Sheet对象
//				Sheet sheet = wb.getSheet(index);
//				// sheet.getRows()返回该页的总行数
//				for (int i = 0; i < sheet.getRows(); i++) {
//					JSONObject object = new JSONObject();
//					// sheet.getColumns()返回该页的总列数
//					StringBuffer buffer = new StringBuffer();
//					for (int j = 0; j < sheet.getColumns(); j++) {
//						String cellinfo = sheet.getCell(j, i).getContents();
//
//						if(cellinfo.isEmpty()){
//							continue;
//						}
//						buffer.append(cellinfo+"    ");
//					}
//					System.out.println(object.toJSONString());
//					outerList.add(object);
//				}
//				return outerList;
//			}
//		} catch (Exception ex) {
//			ex.printStackTrace();
//		} 
//		return null;
//	}

	public static List<JSONObject> loadScoreInfo(String xlsPath) throws Exception
	{
		List<JSONObject> temp = new ArrayList<JSONObject>();
		FileInputStream fileIn = new FileInputStream(xlsPath);
		//根据指定的文件输入流导入Excel从而产生Workbook对象
		Workbook wb = null;
        try {
        	wb = new XSSFWorkbook(xlsPath);
        } catch (Exception ex) {
        	wb = new HSSFWorkbook(fileIn);
        }
		//获取Excel文档中的第一个表单
		Sheet sht = wb.getSheetAt(0);
		int num = sht.getPhysicalNumberOfRows();
		//对Sheet中的每一行进行迭代
		for(int i=1;i<num;i++){
			Row r = sht.getRow(i);
			//创建实体类
			JSONObject info=new JSONObject();
			//取出当前行第1个单元格数据，并封装在info实体stuName属性上
//			info.setStuName(r.getCell(0).getStringCellValue());
//			info.setClassName(r.getCell(1).getStringCellValue());
//			info.setRscore(r.getCell(2).getNumericCellValue());
//			info.setLscore(r.getCell(3).getNumericCellValue());
			r.getCell(0).getRichStringCellValue();
			info.put("stuName", r.getCell(0).getStringCellValue());
			r.getCell(1).setCellType(Cell.CELL_TYPE_STRING);
			info.put("className", r.getCell(1).getStringCellValue());
			temp.add(info);
			System.out.println(info.toJSONString());
		}
		fileIn.close();    
		return temp;    
	}
}
