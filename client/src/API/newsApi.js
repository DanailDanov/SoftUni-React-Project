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