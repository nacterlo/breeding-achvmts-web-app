

export type AchivmentsSmall = {
    id: number,
    name: string,
    status: { id: number, name: string },
    breed: { ID: number, name: string },
    date: string,
    createdAt: string
}

export type ResponseAchivmentsList = {
    data: AchivmentsSmall[]
    page: number
    limit: number
    totalCount: number
    totalPage: number
}
