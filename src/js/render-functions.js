import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

export function validation(images) {
    if (!images.total) {
        iziToast.error({
            title: '',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
        });
    }
}

export function renderImages(images, imagesList) {
    const markup = images.hits
        .map((image) => {
            return ` 
    <a href="${image.largeImageURL}" class="image-card">
        <img src="${image.webformatURL}" alt="${image.tags}"/>
            <div class="caption">
                <ul class="caption-list"><li class="caption-text">Views <span>${image.views}</span></li>
                    <li class="caption-text">Likes <span>${image.likes}</span></li>
                    <li class="caption-text">Comments <span>${image.comments}</span></li>
                    <li class="caption-text">Downloads <span>${image.downloads}</span></li>
                </ul>
            </div>
    </a>`;
        }).join("");
    imagesList.innerHTML = markup;
    const lightbox = new SimpleLightbox('.gallery a', options);
    lightbox.on('show.simplelightbox');
    lightbox.refresh();
}

const options = {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
};