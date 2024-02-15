import { fetchImages } from "./js/pixabay-api.js";
import { validation, renderImages } from "./js/render-functions.js";

const form = document.querySelector('form');
const imagesList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    imagesList.innerHTML = '';
    const keyWord = event.target.elements.search.value;
    loader.classList.remove('is-hidden')
    fetchImages(keyWord)
        .then((images) => {
            validation(images);
            renderImages(images, imagesList);            
            loader.classList.add('is-hidden');
        })
        .catch((error) => console.log(error));
    
    event.target.reset();
})