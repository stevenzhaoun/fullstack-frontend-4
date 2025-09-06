import type { Role } from '../types'
import client from './client'

export const listRoles = async (): Promise<Role[]> => {
    const response = await client.get('/roles')
    return response.data
}