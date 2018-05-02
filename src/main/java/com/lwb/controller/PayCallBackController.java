package com.lwb.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.github.wxpay.sdk.WXPayUtil;
import com.lwb.model.Order;
import com.lwb.model.TradeRecord;
import com.lwb.service.OrderService;
import com.lwb.service.TradeRecordService;
import com.lwb.util.ConfigUtil;
import com.lwb.util.DateUtil;

@Controller
@RequestMapping(value = "api/pay/")
public class PayCallBackController 
{
	private static final Log logger = LogFactory.getLog(PayCallBackController.class);

	@Autowired
	private TradeRecordService tradeRecordService;
	
	@Autowired
	private OrderService orderService;
	
	//	@RequestMapping(value="/toPay",method = RequestMethod.POST)
	//	@ResponseBody
	//	public Object toPay(@RequestBody BillData data)
	//	{
	//		try 
	//		{
	//			LoginInfo loginInfo = loginContext.getInfo();
	//			long userId = loginInfo.getUserId();
	//			data.setUserId(userId);
	//			BillData getBill = billService.createBill(data);
	//			String result="";
	//			//支付宝支付
	//			if (data.getPayType() ==1) {
	//                PayInfo info  = new PayInfo(ConfigUtil.ALI_NOTIFY_URL);
	//                info.setTotal_amount(getBill.getBillAmount().doubleValue());
	//                info.setBody("zhs product");//订单描述
	//                info.setSubject(getBill.getBillCode());//订单主题
	//                info.setOut_trade_no(getBill.getBillCode());
	//                result=payService.alipayApp(info);
	//			}
	//			//微信支付
	//			else if (data.getPayType()==2) {
	//				PayInfo info = new PayInfo(ConfigUtil.WX_NOTIFY_URL);
	//				info.setAppId(ConfigUtil.WXAPPID);
	//				info.setMchID(ConfigUtil.WXMCHID);
	//				info.setWxKey(ConfigUtil.WXKEY);
	//				info.setTotal_amount(getBill.getBillAmount().doubleValue());
	//				info.setBody("zhs product");//订单描述
	//				info.setSubject(getBill.getBillCode());//订单主题
	//				info.setServerip(ConfigUtil.ServerIP);
	//				info.setOut_trade_no(getBill.getBillCode());
	//				result =payService.wxpayApp(info);
	//			}
	//			if (StringUtils.isNotEmpty(result)) {
	//				return new Result(1, result);
	//			}
	//			return new Result(0, "支付失败！");
	//		} catch (Exception ex) {
	//			ex.printStackTrace();
	//			return new Result(0, "程序有错！");
	//		}
	//	}

	@RequestMapping(value = "wxnotify", method = RequestMethod.POST)
	public void wxnotify(ServletRequest request, ServletResponse response) throws Exception
	{
		String returnContext = "";
		try {
			request.setCharacterEncoding("UTF-8");
			response.setCharacterEncoding("UTF-8");
			response.setContentType("text/html;charset=UTF-8");
			InputStream in = request.getInputStream();
			ByteArrayOutputStream out = new ByteArrayOutputStream();
			byte[] buffer = new byte[1024];
			int len = 0;
			while ((len = in.read(buffer)) != -1) {
				out.write(buffer, 0, len);
			}
			out.close();
			in.close();
			String content = new String(out.toByteArray(), "utf-8");
			logger.info("weixin send data is ："+content);
			Map<String,String> postData = WXPayUtil.xmlToMap(content);
			boolean signVer = WXPayUtil.isSignatureValid(content, ConfigUtil.WXKEY);
			Map<String,String> returnXml = new HashMap<String,String>();
			if (!signVer){
				returnXml.put("return_code","FAIL");
				returnXml.put("return_msg","FAIL");
				returnContext = WXPayUtil.mapToXml(returnXml);
				response.getWriter().write(returnContext);
			}else {
				String code = postData.get("return_code");
				if (code.equals("SUCCESS")){
					String out_trade_no = postData.get("out_trade_no");//系统的订单号
					String transaction_id = postData.get("transaction_id");//系统与商城的交易流水号
					//需要同时把购物车中的产品设置为已支付，订单支付状态
					Order order =orderService.get(out_trade_no);
					TradeRecord record =new TradeRecord();
					record.setRecordId(DateUtil.timeKey());
					record.setOrderCode(out_trade_no);
					record.setCreateTime(System.currentTimeMillis());
					record.setReturnInfo(content);
					record.setUserId(order.getUserId());
					record.setTradeType(1);//1是收入，2是支出
					record.setTrancenId(transaction_id);
					int mey = Integer.parseInt(postData.get("total_fee").toString());
					record.setCash(mey/100);
					int result =tradeRecordService.add(record);
					if (result>0){
						returnXml.put("return_code","SUCCESS");
						returnXml.put("return_msg","OK");
						returnContext = WXPayUtil.mapToXml(returnXml);
					}else {
						returnXml.put("return_code","FAIL");
						returnXml.put("return_msg","FAIL");
						returnContext = WXPayUtil.mapToXml(returnXml);
					}
				}
				response.getWriter().write(returnContext);
			}
		}catch (Exception ex){
			Map<String,String> returnXml = new HashMap<String,String>();
			returnXml.put("return_code","FAIL");
			returnXml.put("return_msg","FAIL");
			returnContext = WXPayUtil.mapToXml(returnXml);
			response.getWriter().write(returnContext);
		}
	}

	//    @AllowAnonymous
	//    @RequestMapping(value = "alipaynotify", method = RequestMethod.POST)
	//    public void alipaynotify(ServletRequest request, ServletResponse response) throws Exception
	//    {
	//        logger.info("start alipay ...");
	//        Map<String,String> params = new HashMap<String,String>();
	//        Map<String,String[]> requestParams = request.getParameterMap();
	//        for (Iterator<String> iter = requestParams.keySet().iterator(); iter.hasNext();) {
	//            String name = (String) iter.next();
	//            String[] values = (String[]) requestParams.get(name);
	//            String valueStr = "";
	//            for (int i = 0; i < values.length; i++) {
	//                valueStr = (i == values.length - 1) ? valueStr + values[i]
	//                        : valueStr + values[i] + ",";
	//            }
	//            valueStr = new String(valueStr.getBytes("ISO-8859-1"), "utf-8");
	//            params.put(name, valueStr);
	//        }
	//        logger.info("params:"+ JSON.toJSONString(params));
	//        boolean signVerified = payService.alipayValid(params);
	//        logger.info("params-signVer-result:"+ signVerified);
	//        String out_trade_no = new String(request.getParameter("out_trade_no").getBytes("ISO-8859-1"),"UTF-8");
	//        if(signVerified) {//验证成功
	//        	 logger.info("signVerified Success");
	//             String total_amount = new String(request.getParameter("total_amount").getBytes("ISO-8859-1"),"UTF-8");
	//             String trade_no = new String(request.getParameter("trade_no").getBytes("ISO-8859-1"),"UTF-8");
	//             String trade_status = new String(request.getParameter("trade_status").getBytes("ISO-8859-1"),"UTF-8");
	//             if(trade_status.equals("TRADE_FINISHED")){
	//                 //
	//             }else if (trade_status.equals("TRADE_SUCCESS")){
	//            	 BillData billData=billService.get(out_trade_no);
	//                 boolean result = billService.updateStatusByCode(out_trade_no,PayStatusEnum.Pay.getValue(),trade_no,billData.getUserId(),null);
	//                 if(result){
	//                     logger.info("orderStatusSuccess");
	//                     response.getWriter().write("success");
	//                 }else {
	//                     logger.info("orderStatusFail");
	//                     response.getWriter().write("fail");
	//                 }
	//             }
	//        }else {
	//            logger.info("signVerifiedFail");
	//            response.getWriter().write("fail");
	//        }
	//    }

}
