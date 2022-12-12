import { galleryItems } from './gallery-items.js';
// Change code below this line

let originalGallery;

const gallery=document.querySelector('.gallery');
const arrayOfDiv=createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend',arrayOfDiv);

function createGalleryMarkup(array){
return array.map(({preview,original,description})=>
`
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');

}


gallery.addEventListener('click',openOriginalGallery);

function openOriginalGallery(evt){
evt.preventDefault();

if (!evt.target.classList.contains('gallery__image') ){
     return
}

originalGallery = basicLightbox.create(`
	<img
    class="gallery__image"
    src="${evt.target.dataset.source}"
     alt="${evt.target.description}"
  />
`)

originalGallery.show();
document.addEventListener("keydown", closeOriginalGalleryEscape);
}

function closeOriginalGalleryEscape(evt) {
if (evt.code === "Escape") {
  originalGallery.close();
  documents.removeEventListener("keydown", closeOriginalGalleryEscape);
}
}


// let counter=0;

// document.addEventListener('scroll', onScroll)

// function onScroll(evt){
//     console.log(evt);
//     counter +=1;
//     console.log(counter);
// }




