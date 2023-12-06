import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/news';

export const allNews = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
}

export const createNews = async (newsData) => {
    const result = await request.post(baseUrl, newsData);

    return result;
}

export const getOne = async (newsId) => {
    const result = await request.get(`${baseUrl}/${newsId}`);

    return result;
};

export const editNews = async (newsId, newsData) => {
    const result = await request.put(`${baseUrl}/${newsId}`, newsData);

    return result;
};

export const remove = async (newsId) => {
    const result = await request.remove(`${baseUrl}/${newsId}`);

    return result;
};

export const getLastNews = async () => {
    const query = new URLSearchParams('offset=0&pageSize=3');
    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&${query}`);

    return result;
};