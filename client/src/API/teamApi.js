const baseUrl = 'http://localhost:3030/data/technique';


export const getAll = async () => {
    const response = await fetch (baseUrl);
    const result = await response.json();

    const data = Object.values(result);
 
    return data;
}

// export const createTeam = async () => {
    
// }