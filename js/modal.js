/*open modal*/

function openModal() {
  const body = document.querySelector("body");
  const modal = document.getElementById("modal");
  const btn = document.getElementById("openModal");
  const closeBtn = document.getElementsByClassName("modal__close")[0];

  btn.addEventListener("click", function () {
    modal.style.display = "block";
    body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    body.style.overflow = "auto";
  });

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

openModal();
