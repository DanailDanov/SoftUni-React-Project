import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/footballTeams';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
}

export const getOne = async (teamId) => {
    const response = await fetch(`${baseUrl}/${teamId}`)
    const result = await response.json();

    return result;
}

export const create = async (teamData) => {
    const result = await request.post(baseUrl, teamData);

    return result;
}