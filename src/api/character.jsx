import api from "./api"

export const getCharacters = async () => {
    const response = await api.get('/breeds')

    if (response.status !== 200) {
        return []
    }

    return response.data
}