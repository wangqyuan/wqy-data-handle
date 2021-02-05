var i = 0;
function fn () {
  i++;
  if (i < 10) {
    console.log(i)
    return fn();  // 有return结果才是期望的
  } else {
    return i;
  }
}

var result = fn();
console.log(result);


var a = null
// if (a.a) {
//   console.log('null.a不会报错'); // 会报错
// } else {
//   console.log('null.a会报错');
// }
console.log(1243)
b = {}
if (b) {
  if (b.a.length) {
    console.log('null.a不会报错');  // 会报错
  } else {
    console.log('null.a会报错');
  }
}
