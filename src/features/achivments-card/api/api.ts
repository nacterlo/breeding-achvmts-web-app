import { Achievement } from "../model/types";



export const getAchivment = async (id: number): Promise<Achievement> => {
    const response = await fetch(`https://iis-sa.mshp.gov.by/api/99-achievement/${id}`);

    if (!response.ok) {
        throw new Error('Ошибка получения данных');
    }

    return response.json();
}