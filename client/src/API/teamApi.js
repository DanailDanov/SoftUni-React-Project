const baseUrl = 'http://localhost:3030/data/technique';


export const getAll = async () => {
    const response = await fetch (baseUrl);
    const result = await response.json();

    const data = Object.values(result);
 
    return data;
}

export const getOne = async (teamId) => {
    const response = await fetch(`${baseUrl}/${teamId}`)
    const result = await response.json();

    return result;
}

// export const createTeam = async () => {
    
// }