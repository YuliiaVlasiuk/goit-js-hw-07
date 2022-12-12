import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery=document.querySelector('.gallery');
const arrayOfPictures=createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend',arrayOfPictures);

function createGalleryMarkup(array){
return array.map(({preview,original,description})=>
`
<div class="gallery__item">

<a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`).join('');

}

let lightbox = new SimpleLightbox('.gallery a', );
