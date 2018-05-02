package mybatisweb;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

public class SwitchTest 
{
	public static void main(String[] args) 
	{
		//sw();
//		forTest();
//		
//		System.out.println(Math.round(11.5));
//		System.out.println(Math.round(-11.5));
		int count = thread();
		System.out.println(count);
	}
	
	public static void sw()
	{
		byte  bt = 0;
		switch (bt) {
		case 0:
			System.out.println(0);
			break;
		case 1:
			System.out.println(1);
		default:
			break;
		}
		
		
		/*---------------string---------------*/
		char word = 'k';
		switch (word) {
		case 'f':
			System.out.println("g");
			break;
		case 'j':
			System.out.println("k");
			break;
		default:
			break;
		}
	}
	
	public static int thread()
	{
		int id=15;
		ExecutorService  threads= Executors.newSingleThreadExecutor();
		threads.submit(new Callable<String>() 
		{

			@Override
			public String call() throws Exception {
				System.out.println("id:"+ id);
				Thread.sleep(10000);
				System.out.println("------子线程也执行完毕--------");
				return Integer.toString(id);
			}
		});
		System.out.println("主线程已经执行完毕！");
		threads.shutdown();
		return 10;
	}
	
	public static void forTest()
	{
		ok:
		for(int i = 10;i<100;i++)
		{
			for(int j= 0;j<5;j++)
			{
				break ok;
			}
			System.out.println("neng bu neng da ying:"+i);
		}
		
	}
}


