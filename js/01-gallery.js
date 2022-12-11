import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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
// console.log(evt.target);

// console.log(evt.target.src);
// console.log(evt.target.dataset.source);

const instance = basicLightbox.create(`
	<img
    class="gallery__image"
    src="${evt.target.dataset.source}"
     alt="${evt.target.description}"
  />
`)
instance.show();

}

// let counter=0;

// document.addEventListener('scroll', onScroll)

// function onScroll(evt){
//     console.log(evt);
//     counter +=1;
//     console.log(counter);
// }




