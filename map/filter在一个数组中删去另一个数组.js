// 方案一：  不好 ，循环两个
{
  let arr1 = ['1', '2', '3', '4']
  let arr2 = ['1', '2']

  // 期望arr1和arr2对比得到"3"
  let arr3 = arr1.filter(data => !arr2.includes(data))
  console.log('arr3', arr3);
}

// 方案二：好， 只有一个循环
{
  let arr1 = ['1', '2', '3', '4', '5', '6']
  let arr2 = ['1', '2']

  // 期望arr1去掉arr2，arr2是arr1的子集且一定是前面的元素
  let len = arr2.length
  let arr3 = arr1.splice(len)
  console.log('arr3', arr3);
}