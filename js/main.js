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
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//tabs
const tabsItem = document.querySelectorAll('.tabs__item');
const tabsContent = document.querySelectorAll('.tabs__content-item')

function getTabs() {
  tabsItem.forEach((item) => {
    item.addEventListener('click', () => {

      tabsContent.forEach((item)=> {
        item.classList.add('hidden')
      })


      const content = document.querySelector('#' + item.dataset.tab)
      console.log(content)
      content.classList.remove('hidden')
    })
  })
}

getTabs()

/*open modal*/
const body = document.querySelector('body');
const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const closeBtn = document.getElementsByClassName("modal__close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  body.style.overflow = "hidden";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
  body.style.overflow = "auto";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}