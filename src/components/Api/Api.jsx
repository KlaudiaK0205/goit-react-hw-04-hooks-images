import axios from 'axios';

const API_KEY = '29685198-fe9ee9771b968d1316d9cb6e1';

export const fetchImages = async (query, page) => {
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&safesearch=true`);

    return response.data.hits.map(image => {
        return {
            id: image.id,
            webformatURL: image.webformatURL,
            largeImageURL: image.largeImageURL,
            tags: image.tags
        };
    });
};