import { Achievement } from "../model/types";



export const getAchivment = async (id: number): Promise<Achievement> => {
    const response = await fetch(`https://iis-sa.mshp.gov.by/api/99-achievement/${id}`);

    if (!response.ok) {
        throw new Error('Failed to fetch achievements list');
    }

    const data = await response.json();
    return data || data; // в зависимости от структуры ответа
}