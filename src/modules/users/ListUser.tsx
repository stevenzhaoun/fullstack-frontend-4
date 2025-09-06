import { Box, Button, Typography } from "@mui/material";
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react'
import { listUsers } from "../../api/users.api";
import type { Role, User } from "../../types";
import { useNavigate } from "react-router";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'User ID', width: 90 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
        field: 'role', headerName: 'Role', flex: 1, valueGetter: (role: Role) => {
            return role.name
        }
    },
];

export default function ListUser() {
    const [users, setUsers] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {

            setIsLoading(true)
            const users = await listUsers()
            setUsers(users)
            setIsLoading(false)
        }
        fetchData()
    }, []) // dependency array / deps array, pass empty array to simulate initial loading


    const handleClickAddUser = () => {
        navigate('/users/add')
    }

    if (isLoading) {
        return <CircularProgress />
    }

    return <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h4">Users</Typography>
            <Button variant="outlined" onClick={handleClickAddUser}>Add User</Button>
        </Box>
        <DataGrid
            rows={users}
            columns={columns}
            disableRowSelectionOnClick
            onRowClick={(row) => {
                navigate(`/users/${row.id}`)
            }}
        />
    </Box>
}