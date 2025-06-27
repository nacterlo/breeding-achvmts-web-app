import { ResponseAchivmentsList } from "../model/types";



export async function getAchivmentsList(page: number, limit: number): Promise<ResponseAchivmentsList> {
    const response = await fetch(`https://iis-sa.mshp.gov.by/api/99-achievement/list?page=${page}&limit=${limit}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error('Ошибка получения данных');
    }

    return response.json();
}