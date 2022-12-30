/*анимация чисел*/

const time = 1000;

function outNum(num, elem, step) {
  let one = document.querySelector("#" + elem);
  let n = 0;
  let t = Math.round(time / (num / step));

  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    one.innerHTML = n;
  }, t);
}

outNum(14, "out-1", 1);
outNum(2000, "out-2", 100);
outNum(20000, "out-3", 1000);
