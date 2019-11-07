var abc='aMtc';
abc=abc.toLowerCase();

//do(var yzm=prompt())
/*while(true   ){
	var yzm=prompt('输入验证码');
	yzm=yzm.toLowerCase();
	if(abc==yzm) break;
}
*/

/*
var str1='toLowerCase';
for(i=0,n=0;i<str1.length;i++){
	if(str1[i]=='o'){
		n++;
	}
}*/
//alert(n); 

/*var sfz=prompt('请输入身份证号码');

var sex='';
if(sfz.length==18){

	sfz[16]%2==0 ? sex='女' : sex='男';
	alert(sfz.slice(6,10)+'年'+sfz.slice(10,12)+'月'+sfz.slice(12,14)+'日'+sex)
}else{
	alert('请输入正确身份证');	
}

*/


//var str=prompt('请输入');
/*var i=email.length;
var j=email.indexOf('@');
alert('用户名 : '+ email.slice(0,j)+' ; '+'邮箱地址 ： '+email.slice(j+1));

*/

//alert(str[0].toUpperCase()+str.slice(1).toLowerCase());








/*
function callAnotherFunc(fnFunction, vArgument) { 
fnFunction(vArgument); 
} 
var doAdd = new Function("iNum", "alert(iNum + 10)"); 
callAnotherFunc(doAdd, 10); //输出 "20" 

*/




var test = new Function('num','two','three','alert(num+two)');
test(0,1);












































