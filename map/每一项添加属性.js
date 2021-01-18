var arr = [
  {
    name: 'wqy',
    value: '王乾元',
  },
  {
    name: 'ygw',
    value: '严光旺',
  },
]

/*
* 期望增加key属性,最终变成：
* [ { name: 'wqy', value: '王乾元', key: 0 },
*  name: 'ygw', value: '严光旺', key: 1 } ]
* */

var newArr2 = arr.map((data, index) => { data.key = index; return data }) // 增加key属性
var newArr = arr.map((data, index) => { data.name = index; return data }) //修改name属性
console.log(newArr, newArr2);


aaaa = null
if (aaaa && aaaa.length) { //a && b, &&运算符条件a为假，b不会再执行
  console.log(12321321)
}
