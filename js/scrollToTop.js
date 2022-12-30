/*кнопка scrollToTop*/

function onScroll() {
    window.addEventListener("scroll", function () {
      let scroll = document.querySelector(".btn-top");
      scroll.classList.toggle("active", window.scrollY > 500);
    });
  }
  
  onScroll();
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }