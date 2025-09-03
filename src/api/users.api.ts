import type { User } from '../types'
import client from './client'

export const listUsers = async (): Promise<User[]> => {
    const response = await client.get('/users')
    return response.data
}