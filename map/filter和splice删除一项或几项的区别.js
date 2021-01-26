const list = [
  { // 服务1
    name: '服务1',
    performanceList: [{ i: 0, name: '准确率', value: '' }], // 性能指标
  },
  { // 服务2
    name: '服务2',
    performanceList: [{ i: 0, name: '准确率1', value: '' }, { i: 1, name: '准确率2', value: '' }, { i: 2, name: '准确率3', value: '' }], // 性能指标
  }
]

// 目的：删除'服务2'的performanceList的第二项
// 期望最终结果如下：
/* const list = [
  { // 服务1
    name: '服务1',
    performanceList: [{ i: 0, name: '准确率', value: '' }], // 性能指标
  },
  { // 服务2
    name: '服务2',
    performanceList: [{ i: 0, name: '准确率1', value: '' }, { i: 2, name: '准确率3', value: '' }], // 性能指标
  }
] */

handleCutPerf = (key, i) => {
  let performanceList = list[key].performanceList

  // 数组删除某一项
  // 方法一（正确）: splice直接修改原数组，地址未变，浅拷贝,会直接更改list的值，list达到期望值
  /*  let index = performanceList.findIndex(data => data.i === i)
   performanceList.splice(index, 1)
  */

  // 方法二（错误）: 过滤filter再赋值，是返回一个新数组，即赋值给performanceList是一个新数组，地址改变，新的地址，深拷贝,list为达到期望值
  // performanceList = performanceList.filter(data => data.i !== i)

  // 修正方法二（正确）： 要改的是list，因此直接赋值给list的那一项的performanceList属性,达到期望
  list[key].performanceList = performanceList.filter(data => data.i !== i)

  console.log('list[1]', list[1]);
}


handleCutPerf(1, 1)//删除'服务2'的performanceList的第二项