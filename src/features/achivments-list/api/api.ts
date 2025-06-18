import { ResponseAchivmentsList } from "../model/types";




export const getAchivmentsList = async (page: number, limit: number): Promise<ResponseAchivmentsList> => {
    const response = await fetch(`https://iis-sa.mshp.gov.by/api/99-achievement/list?page=${page}&limit=${limit}`);

    if (!response.ok) {
        throw new Error('Failed to fetch achievements list');
    }

    const data = await response.json();
    return data || data; // в зависимости от структуры ответа
}