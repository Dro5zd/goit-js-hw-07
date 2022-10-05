import {galleryItems} from './gallery-items.js';
// Change code below this line

const getEl = el => document.querySelector(el);

const galleryContainer = getEl('.gallery');

const galleryMarkup = galleryItems.map(({original, description, preview}) => {
  return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                  <img class="gallery__image" src="${preview}" data-source='${original}' alt="${description}">
              </a>
          </div>`;
}).join('');

galleryContainer.innerHTML = galleryMarkup;

function openHandler(event) {
  event.preventDefault();
  if (event.target !== event.currentTarget) {
    console.log(event.target.alt);
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" alt="${event.target.alt}">`, {
      closable: true
    });

    instance.show();
    galleryContainer.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        instance.close();
      }
    });
  }
}

galleryContainer.addEventListener('click', openHandler);
