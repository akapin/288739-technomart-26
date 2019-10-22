// Переменные промо слайдера
var toolsSlide1 = document.querySelector(".tools-slide--1");
var toolsSlide2 = document.querySelector(".tools-slide--2");
var drillsRadio = document.getElementById("tools-drills-radio");
var perforatorsRadio = document.getElementById("tools-perforators-radio");
var sliderPrevButton = document.querySelector(".tools-slider__button-previous");
var sliderNextButton = document.querySelector(".tools-slider__button-next");

// Переменные сервис слайдера
var shipmentSliderItem = document.querySelector(
  ".services-slider__shipment-bullet"
);
var warrantySliderItem = document.querySelector(
  ".services-slider__warranty-bullet"
);
var creditSliderItem = document.querySelector(
  ".services-slider__credit-bullet"
);
var shipmentSliderRadio = document.getElementById("service-shipment-radio");
var warrantySliderRadio = document.getElementById("service-warranty-radio");
var creditSliderRadio = document.getElementById("service-credit-radio");
var shipmentSlide = document.querySelector(".services-slide--1");
var warrantySlide = document.querySelector(".services-slide--2");
var creditSlide = document.querySelector(".services-slide--3");

// Переменные попапа обратной связи
var writeUsButton = document.querySelector(".company-contacts__button");
var writeUsPopup = document.querySelector(".popup-write-us");
var writeUsClose = writeUsPopup.querySelector(".popup-write-us .button-close");
var writeUsForm = writeUsPopup.querySelector("form");
var username = writeUsForm.querySelector("[name=username]");
var email = writeUsForm.querySelector("[name=email]");
var message = writeUsForm.querySelector("[name=message]");
var isStorageSupport = true;
var storageUsername = "";
var storageEmail = "";
var storageMessage = "";

// Переменные попапа с картой
var mapLink = document.querySelector(".company-contacts__map-link");
var mapPopup = document.querySelector(".popup-map");
var mapClose = mapPopup.querySelector(".popup-map .button-close");

// Обработчики формы обратной связи
try {
  storageUsername = localStorage.getItem("username");
  storageEmail = localStorage.getItem("email");
  storageMessage = localStorage.getItem("message");
} catch (err) {
  isStorageSupport = false;
}

writeUsButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("popup-show");

  username.value = storageUsername;
  email.value = storageEmail;
  message.value = storageMessage;

  if (!storageUsername) {
    username.focus();
  } else if (!storageEmail) {
    email.focus();
  } else {
    message.focus();
  }
});

writeUsClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("popup-show");
  writeUsPopup.classList.remove("popup-error");
});

writeUsForm.addEventListener("submit", function(evt) {
  if (!username.value || !email.value || !message.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("popup-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("message", message.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUsPopup.classList.contains("popup-show")) {
      writeUsPopup.classList.remove("popup-show");
      writeUsPopup.classList.remove("popup-error");
    }
  }
});

// Обработчики формы с картой
mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("popup-show")) {
      mapPopup.classList.remove("popup-show");
    }
  }
});

// Промо Слайдер
sliderPrevButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (drillsRadio.checked) {
    perforatorsRadio.checked = true;
    toolsSlide1.classList.remove("tools-slide--active");
    toolsSlide2.classList.add("tools-slide--active");
  } else {
    drillsRadio.checked = true;
    toolsSlide2.classList.remove("tools-slide--active");
    toolsSlide1.classList.add("tools-slide--active");
  }
});

sliderNextButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (drillsRadio.checked) {
    perforatorsRadio.checked = true;
    toolsSlide1.classList.remove("tools-slide--active");
    toolsSlide2.classList.add("tools-slide--active");
  } else {
    drillsRadio.checked = true;
    toolsSlide2.classList.remove("tools-slide--active");
    toolsSlide1.classList.add("tools-slide--active");
  }
});

perforatorsRadio.addEventListener("change", function(evt) {
  evt.preventDefault();
  if (perforatorsRadio.checked) {
    toolsSlide1.classList.remove("tools-slide--active");
    toolsSlide2.classList.add("tools-slide--active");
  } else {
    toolsSlide2.classList.remove("tools-slide--active");
    toolsSlide1.classList.add("tools-slide--active");
  }
});

drillsRadio.addEventListener("change", function(evt) {
  evt.preventDefault();
  if (drillsRadio.checked) {
    toolsSlide2.classList.remove("tools-slide--active");
    toolsSlide1.classList.add("tools-slide--active");
  } else {
    toolsSlide1.classList.remove("tools-slide--active");
    toolsSlide2.classList.add("tools-slide--active");
  }
});

// Сервис слайдер
shipmentSliderItem.addEventListener("click", function(evt) {
  evt.preventDefault();
  shipmentSliderItem.classList.add("services-slider__bullet--active");
  warrantySliderItem.classList.remove("services-slider__bullet--active");
  creditSliderItem.classList.remove("services-slider__bullet--active");
  shipmentSliderRadio.checked = true;
  shipmentSlide.classList.add("services-slide--active");
  warrantySlide.classList.remove("services-slide--active");
  creditSlide.classList.remove("services-slide--active");
});

warrantySliderItem.addEventListener("click", function(evt) {
  evt.preventDefault();
  shipmentSliderItem.classList.remove("services-slider__bullet--active");
  warrantySliderItem.classList.add("services-slider__bullet--active");
  creditSliderItem.classList.remove("services-slider__bullet--active");
  warrantySliderRadio.checked = true;
  shipmentSlide.classList.remove("services-slide--active");
  warrantySlide.classList.add("services-slide--active");
  creditSlide.classList.remove("services-slide--active");
});

creditSliderItem.addEventListener("click", function(evt) {
  evt.preventDefault();
  shipmentSliderItem.classList.remove("services-slider__bullet--active");
  warrantySliderItem.classList.remove("services-slider__bullet--active");
  creditSliderItem.classList.add("services-slider__bullet--active");
  creditSliderRadio.checked = true;
  shipmentSlide.classList.remove("services-slide--active");
  warrantySlide.classList.remove("services-slide--active");
  creditSlide.classList.add("services-slide--active");
});
