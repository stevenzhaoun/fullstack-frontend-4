import { AppBar, Box, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { useState } from 'react';
import { useUser } from '../hooks/useUser';

export default function TopNav() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { logout, userData } = useUser();
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogout = () => {
        setAnchorEl(null);
        logout();
    };

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar sx={{ justifyContent: 'space-between', display: 'flex' }}>
                <Typography variant="h6" noWrap component="div">
                    Business Management System
                </Typography>

                <Box>
                    <Typography id="profile-button"
                        onClick={handleClick}>{userData?.name}</Typography>
                    <Menu
                        id="profile-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => setAnchorEl(null)}
                    >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    )
}