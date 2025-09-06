import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useUser } from "../hooks/useUser";


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useUser()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('email', email)
        console.log('password', password)
        await login(email, password)
    }
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Box component="form" width={400} gap={5} flexDirection='column' display='flex' onSubmit={handleSubmit}>
                <Typography variant="h3" textAlign='center'>Welcome</Typography>
                <TextField required label="Email" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField required label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" color="primary" type="submit" fullWidth>Login</Button>
            </Box>
        </Box>
    )
}