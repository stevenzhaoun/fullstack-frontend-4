import type { User } from '../types'
import client from './client'

export const listUsers = async (): Promise<User[]> => {
    const response = await client.get('/users')
    return response.data
}

export const getUser = async (userId: string): Promise<User> => {
    const response = await client.get(`/users/${userId}`)
    return response.data
}

export const createUser = async (name: string, email: string, password: string, roleId: number): Promise<User> => {
    const payload = {
        name: name,
        email: email,
        password: password,
        roleId: roleId
    }

    const response = await client.post('/users', payload)
    return response.data
}

export const updateUser = async (userId: string, name: string, email: string, roleId: number): Promise<User> => {
    const payload = {
        name: name,
        email: email,
        roleId: roleId
    }

    const response = await client.put(`/users/${userId}`, payload)
    return response.data
}

export const login = async(email: string, password: string) => {
    const payload = {
        email: email,
        password: password
    }

    const response = await client.post('/login', payload)
    return response.data as {
        token: string,
        userId: number,
        roleId: number,
        name: string,
        email: string,
    }
}