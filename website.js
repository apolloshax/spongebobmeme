function replace(str,index,chr)
{
	
		return str.substring(0,index) + chr + str.substring(index+1);
	
}

function f1(){
	
	var x = document.getElementById("1").value;
	


	for(i=0; i<x.length;i++)
	{
		if(i%2 == 0)
		{

			temp = x.substring(i, i+1);
			temp = temp.toUpperCase();
			x = replace(x,i,temp);
		
		}
		else
		{
			temp = x.substring(i, i+1);
			temp = temp.toLowerCase();
			x = replace(x,i,temp);
		}
	}



document.getElementById("output").innerHTML = "" + x;

}