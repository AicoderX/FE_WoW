
var timer = setTimeout(function(){
  alert(123);
}, 300);


var timer;

function debounce(fn) {
  clearTimeout(timer);
  var timer = setTimeout(function(){
    fn.apply(this, [].slice.applay(arguments, 1));
  }, 300);
}

btn.onclick = function() {
  debounce(click, 1, 4);
}

function click(a, b) {
  console.log(a, b);
}




var isMove = true;
box.onmousemove = function() {
  if(isMove) {
    moveBox2();
    isMove = false;
    setTimeout(function() {
      isMove = true;
    }, 30)
  }
  // moveBox2();
}

function moveBox2() {
  console.log(1233);
}

function a() {
  console.log(1);
  b();
  console.log(4);
}

function b() {
  c();
}

function c() {
  d();
}

function d() {
  console.log(3);
}
