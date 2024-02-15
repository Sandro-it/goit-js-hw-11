
export function fetchImages(keyWord) {
    return fetch(`https://pixabay.com/api/?key=42389697-3421d6cd291bd0189edc17b09&q=${keyWord}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}
