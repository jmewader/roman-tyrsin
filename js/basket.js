/*кнопка basket*/

function onScroll() {
  window.addEventListener("scroll", function () {
    let scroll = document.querySelector(".btn-basket");
    scroll.classList.toggle("active", window.scrollY > 1);
  });
}

onScroll();
