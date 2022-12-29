$(".slider").slick({
  infinite: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: "<img src='../img/icons/arrow-right.svg' class='prev' alt='1'>",
  nextArrow: "<img src='../img/icons/arrow-right.svg' class='next' alt='2'>",
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//tabs
const tabsItem = document.querySelectorAll(".tabs__item");
const tabsContent = document.querySelectorAll(".tabs__content-item");

function getTabs() {
  tabsItem.forEach((item) => {
    item.addEventListener("click", () => {
      tabsContent.forEach((item) => {
        item.classList.add("hidden");
      });

      const content = document.querySelector("#" + item.dataset.tab);
      console.log(content);
      content.classList.remove("hidden");
    });
  });
}

getTabs();

/*open modal*/

function openModal() {
  const body = document.querySelector("body");
  const modal = document.getElementById("modal");
  const btn = document.getElementById("openModal");
  const closeBtn = document.getElementsByClassName("modal__close")[0];

  // btn.addEventListener("click", () => {
  //   modal.style.display = "block";
  //   body.style.overflow = "hidden";
  // });

  // closeBtn.addEventListener("click", () => {
  //   modal.style.display = "none";
  //   body.style.overflow = "auto";
  // });

  // window.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // };
}

openModal();

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

/*кнопка scrollToTop*/

function onScroll() {
  window.addEventListener("scroll", function () {
    let scroll = document.querySelector(".btn-top");
    scroll.classList.toggle("active", window.scrollY > 500);
  });
}

onScroll()

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


/*кнопка basket*/

function onScroll() {
  window.addEventListener("scroll", function () {
    let scroll = document.querySelector(".btn-basket");
    scroll.classList.toggle("active", window.scrollY > 1);
  });
}

onScroll()

