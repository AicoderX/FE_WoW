
function debounce(fn, wait) {
  var params = [].slice.call(fn, 1);
  var timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  }
}

let fn = debounce((a)=>{
  console.log(a);
}, 400);

fn(333);