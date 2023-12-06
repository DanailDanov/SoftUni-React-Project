import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/footballTeams';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
}

export const getOne = async (teamId) => {
    const result = await request.get(`${baseUrl}/${teamId}`);

    return result;
};

export const createTeam = async (teamData) => {
    const result = await request.post(baseUrl, teamData);

    return result;
};

export const edit = async (teamId, teamData) => {
    const result = await request.put(`${baseUrl}/${teamId}`, teamData);

    return result;
};

export const remove = async (teamId) => {
    const result = await request.remove(`${baseUrl}/${teamId}`);

    return result;
};