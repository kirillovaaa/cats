let popupBg = document.querySelector("#popup-image"); // Фон попапа
let popup = document.querySelector(".popup"); // Попап
let popupImage = document.querySelector(".popup__image"); // большая картинка
let closePopupButton = document.querySelector(".popup__close-button"); // Кнопка крестика
let cards = document.querySelectorAll(".cards__item");

function closePopup() {
  popupBg.classList.remove("popup__bg_open"); // функция закрытия
}

function openPopup() {
  popupBg.classList.add("popup__bg_open"); // функция открытия

  closePopupButton.addEventListener("click", function () {
    closePopup();
  }); // закрытие на крестик

  popupBg.addEventListener("click", (e) => {
    if (e.target === popupBg) {
      closePopup();
    }
  });
} // закрытие на фон

cards.forEach((card) => {
  const imageSrc = card.querySelector(".cards__image").src;
  card.addEventListener("click", function (evt) {
    evt.preventDefault();
    openPopup();
    popupImage.src = imageSrc; // при нажатии на картинку передается адрес той картинки, на которую нажимаешь
  });
});
