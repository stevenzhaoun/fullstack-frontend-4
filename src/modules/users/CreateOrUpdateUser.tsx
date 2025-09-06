import { Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, Snackbar, TextField, Typography, type SelectChangeEvent, type SnackbarOrigin } from "@mui/material";
import { useEffect, useState } from "react";
import { listRoles } from "../../api/roles.api";
import { createUser, getUser, updateUser } from "../../api/users.api";
import { useNavigate, useParams } from "react-router";
import { useDataLoad } from "../../hooks/useDataLoad";

interface State extends SnackbarOrigin {
    open: boolean;
}

export default function CreateOrUpdateUser() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        role_id: undefined
    } as {
        name: string;
        email: string;
        password?: string;
        role_id: number | undefined;
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    const [snakbarState, setSnakbarState] = useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { data: roles, isLoading: isLoadingRoles } = useDataLoad(listRoles)
    const { data: userData, isLoading: isLoadingUser } = useDataLoad( async() => await getUser(userId as string))

    const params = useParams()
    const userId = params.userId

    const isCreateView = userId === 'add'

    const { vertical, horizontal, open } = snakbarState;

    useEffect(() => {
        if(userData) {
            setUser({
                name: userData.name,
                email: userData.email,
                role_id: userData.role_id
            })
        }
    }, [userData])

    const handleRoleChange = (event: SelectChangeEvent<any>) => {
        setUser({
            ...user,
            role_id: event.target.value as number
        })
    }

    const handleSnackbarClose = () => {
        setSnakbarState({ ...snakbarState, open: false })
    };

    const handleSnackbarOpen = () => {
        setSnakbarState({ ...snakbarState, open: true })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)
        if(isCreateView) {
            await createUser(user.name, user.email, user.password as string, user.role_id as number)

        } else {
            await updateUser(userId as string, user.name, user.email, user.role_id as number)
        }

        setIsSubmitting(false)
        handleSnackbarOpen()
        navigate('/users')
    }

    const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [field]: event.target.value
        })

    }

    if (isLoadingRoles || isLoadingUser || !roles) {
        return <CircularProgress />
    }

    return <div>
        <Typography mb={2} variant="h4">{isCreateView ? 'Create User' : 'User details'}</Typography>
        <Box component="form" gap={3} display="flex" flexDirection="column" width={500} onSubmit={handleSubmit}>
            <TextField type="text" name="name" label="Name" required value={user.name} onChange={handleInputChange('name')} />
            <TextField type="email" name="name" label="Email" required value={user.email} onChange={handleInputChange('email')} />
            {isCreateView && <TextField type="password" name="password" label="Password" required value={user.password} onChange={handleInputChange('password')} />}

            <FormControl fullWidth>
                <InputLabel id="role-select-label">Role</InputLabel>
                <Select
                    labelId="role-select-label"
                    id="role-select"
                    value={user.role_id || roles[0].id}
                    label="Role"
                    onChange={handleRoleChange}
                >
                    {roles.map((role) => (
                        <MenuItem key={role.id} value={role.id}>{role.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button loading={isSubmitting} variant="contained" color="primary" type="submit">{isCreateView ? 'Create' : 'Update'}</Button>
        </Box>

        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleSnackbarClose}
            message={isCreateView ? 'User created successfully' : 'User updated successfully'}
            key={vertical + horizontal}
        />
    </div>
}