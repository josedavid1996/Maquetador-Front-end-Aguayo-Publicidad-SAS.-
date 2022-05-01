const $menu = document.querySelector(".nav"),
  $icon = document.getElementById("icon");

document.addEventListener("click", (e) => {
  if (e.target === $icon) {
    $menu.classList.toggle("is__active");
  }
});
