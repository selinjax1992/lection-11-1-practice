import { searchPhotosByQuery } from './unsplash-api.js';
import { createGalleryCard } from './render-function.js';
import iziToast from 'izitoast';

const refs = {
  form: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
};

const onFormSubmit = event => {
  event.preventDefault();
  const query = event.target.elements.user_query.value.trim();
  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }
  refs.gallery.innerHTML = '';
  refs.loader.classList.remove('is-hidden');
  searchPhotosByQuery(query)
    .then(data => {
      const galleryCardsTemplate = data.results
        .map(img => createGalleryCard(img))
        .join('');
      refs.gallery.innerHTML = galleryCardsTemplate;
      console.log(galleryCardsTemplate);
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      refs.loader.classList.add('is-hidden');
    });
};
refs.form.addEventListener('submit', onFormSubmit);
