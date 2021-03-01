import gallery from "./gallery.js";

const refs = {
  bodyRef: document.querySelector("body"),
  galleryRef: document.querySelector(".js-gallery"),
  divLightBoxRef: document.querySelector(".js-lightbox"),
  divOverlayRef: document.querySelector(".lightbox__overlay"),
  lightBoxImage: document.querySelector(".lightbox__image"),
  btnCloseRef: document.querySelector('button[data-action="close-lightbox"]'),
};

gallery.map((elem) => {
  refs.galleryRef.innerHTML += `<li class = 'gallery__item' <a class="gallery__link" href ="${elem.preview}" ><img class="gallery__image" src= "${elem.preview}" data-source="${elem.original}" alt = "${elem.description}"></img></a> </li>`;
});

refs.galleryRef.addEventListener("click", openModal);
refs.btnCloseRef.addEventListener("click", closeModal);
refs.divOverlayRef.addEventListener("click", onOverlayHandler);

function openModal(event) {
  window.addEventListener("keydown", onPressEscape);
  let imgLink = event.target.dataset.source;
  refs.divLightBoxRef.classList.add("is-open");
  refs.lightBoxImage.src = imgLink;
}

function closeModal(event) {
  window.removeEventListener("click", onPressEscape);

  refs.divLightBoxRef.classList.remove("is-open");
  refs.lightBoxImage.src = "";
}

function onOverlayHandler(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function onPressEscape(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}





