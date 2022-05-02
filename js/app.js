const $menu = document.querySelector(".nav"),
  $icon = document.getElementById("icon"),
  $cards = document.querySelector(".recommendation__cards");
let posicion = 0;

document.addEventListener("click", (e) => {
  if (e.target === $icon) {
    $menu.classList.toggle("is__active");
  }
  if (e.target === right) {
    if (posicion === 66.66) return;
    posicion += 33.33;
    console.log(posicion);
    $cards.style.transform = `translateX(-${posicion}%)`;
  }
  if (e.target === left) {
    if (posicion === 0) return;
    posicion -= 33.33;
    console.log(posicion);
    $cards.style.transform = `translateX(-${posicion}%)`;
  }
});
