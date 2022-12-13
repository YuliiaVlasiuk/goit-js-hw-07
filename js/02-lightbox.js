import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery=document.querySelector('.gallery');
const arrayOfPictures=createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend',arrayOfPictures);

function createGalleryMarkup(array){
return array.map(({preview,original,description})=>
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('');

}
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});