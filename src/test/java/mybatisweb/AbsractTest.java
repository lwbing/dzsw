package mybatisweb;
/**
 * 接口可以继承接口，抽象类也可以继承接口，
 * @author lwb
 *
 */
public class AbsractTest 
{

}
interface RR extends YY
{
	
}

interface YY
{
	int a();
}

abstract class TT extends PP implements YY
{
	public abstract String getName();
}

abstract class PP
{
	public abstract int p();
}
