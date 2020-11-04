let arr1 = ['1', '2', '3']
let arr2 = ['1', '2']

// 期望arr1和arr2对比得到"3"
let arr3 = arr1.find(data => !arr2.includes(data))
console.log('arr3', arr3);