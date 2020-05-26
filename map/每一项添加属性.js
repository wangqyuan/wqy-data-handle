var arr = [
  {
    name:'wqy',
    value:'王乾元',
  },
  {
    name:'ygw',
    value:'严光旺',
  },
]

/*
* 期望增加key属性,最终变成：
* [ { name: 'wqy', value: '王乾元', key: 0 },
*  name: 'ygw', value: '严光旺', key: 1 } ]
* */

var newArr = arr.map((data,index)=>{data.key=index; return data})
console.log(newArr);

