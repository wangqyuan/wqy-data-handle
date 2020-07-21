var a=''
if(!a){
  console.log('a为‘');
}

var b=undefined
if(!b){
  console.log('b为undefined');
}

var c=null
if(!c){
  console.log('c为null');
}

if(!c&&!b&&!a){
  console.log('a=‘’,b=undefined,c=null不存在都可以用非符号（！）来判断');
}

var arr=[]
if(!arr){
  console.log('arr=[]可以用非符号（！）来判断');
} else{
  console.log('arr=[]不能用非符号（！）来判断');
}
if(!arr.length){
  console.log('arr=[]只能用length来判断');
}

var obj={}
if(!obj){
  console.log('obj={}可以用非符号（！）来判断');
} else{
  console.log('obj={}不能用非符号（！）来判断');
}
if(JSON.stringify(obj)==='{}'){
  console.log("obj={}可以用JSON.stringify(obj)==='{}'来判断");
}

if(!!obj){
  console.log("obj如果是{}则弹出此消息");
  console.log("obj={}可以用!!为true来判断空");
}