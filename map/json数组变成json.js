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
* 期望变成json,最终变成：
* {
*   'wqy':'王乾元',
*   'ygw':'严光旺'
* }
* */

let obj = {}
arr.map(item => {
  obj[item.name] = item.value
})
arr = obj
console.log(arr);



var b={
  'wqy':'王乾元',
  'ygw':'严光旺'
}

/*
* 期望变成json,最终变成：
* [{
    name:'wqy',
    value:'王乾元',
  },
  {
    name:'ygw',
    value:'严光旺',
  },
]
* */
let a=[]
Object.entries(b).map(data=>{
  a.push({
    key:data[0],
    value:data[1],
  })
})
console.log(a);
