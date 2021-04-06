var a = [
  {
    a: 1,
    b: 2
  }
]

var b = [
  {
    a: 222,
    b: 2
  },
  {
    a: 3233,
    b: 3
  },
]

a.map(data => {
  let obj = b.find(opt => opt.b === a.b)
  console.log('obj', obj);

  data.a = obj.a
  return data
})

console.log('a', a);
