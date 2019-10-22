var buyButtons = document.querySelectorAll(".product__button-buy");
var bookmarkButtons = document.querySelectorAll(".product__button-bookmarks");
var cartPopup = document.querySelector(".popup-cart");
var cartClose = cartPopup.querySelector(".popup-cart .button-close");
var buttonContinue = cartPopup.querySelector(".button-continue");

var bookmarksLink = document.querySelector(".bookmarks__link");
var bookmarksCount = document.querySelector(".bookmarks__count");
var cartLink = document.querySelector(".cart__link");
var cartCount = document.querySelector(".cart__count");

for (i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.add("popup-show");
    cartLink.classList.add("has-items");
    cartCount.innerText = Number(cartCount.innerText) + 1;
  });
}

for (i = 0; i < bookmarkButtons.length; i++) {
  bookmarkButtons[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    bookmarksLink.classList.add("has-items");
    bookmarksCount.innerText = Number(bookmarksCount.innerText) + 1;
  });
}

cartClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopup.classList.remove("popup-show");
});

buttonContinue.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cartPopup.classList.contains("popup-show")) {
      cartPopup.classList.remove("popup-show");
    }
  }
});
