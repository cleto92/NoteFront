"use client";

const baseURL = process.env.NEXT_PUBLIC_API_URL

export const GetAllNotes = async () => {
    try {
        const response = await fetch(`${baseURL}/allNotas`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(!response.ok) {
            throw new Error('Error getting notes');
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error getting notes', error);
        throw error;
    }
}


export const GetAllCategories = async () => {
    try {
        const response = await fetch(`${baseURL}/categories`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(!response.ok) {
            throw new Error('Error to obtaine the categories')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const Archived = async () => {
    try {
        const response = await fetch(`${baseURL}/Archived`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(!response.ok) {
            throw new Error('Error getting notes');
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error getting notes', error);
        throw error;
    }
}

