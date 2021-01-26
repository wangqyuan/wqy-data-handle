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