// 方法一   遍历+if判断
var arr1 = [
  {
    key: 1,
    value: [
      {
        key: 1,
        value: 1,
      },
    ],
  },
  {
    key: 2,
    value: [
      {
        key: 2,
        value: 2,
      },
    ],
  },
  {
    key: 3,
    value: [
      {
        key: 3,
        value: 3,
      }
    ],
  }
]

var arr2 = [
  {
    key: 'hh',
    value: '哈哈',
  }
]

arr1.map(data => {
  if (data.key !== 1) {
    data.value.push(...arr2)
  }
  return data
})

console.log('arr1', arr1);


// 方法二   ...
arr4 = [
  {
    key: 1,
    value: [
      {
        key: 1,
        value: 1,
      },
    ],
  },
  {
    key: 2,
    value: [
      {
        key: 2,
        value: 2,
      },
      ...arr2
    ],
  },
  {
    key: 1,
    value: [
      {
        key: 3,
        value: 3,
      },
      ...arr2
    ],
  }
]

console.log('arr4', arr4);