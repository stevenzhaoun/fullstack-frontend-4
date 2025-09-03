import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import { Link } from 'react-router'

const links = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Users', path: '/users' },
    { label: 'Roles', path: '/roles' },
    { label: 'Products', path: '/products' },
    { label: 'Orders', path: '/orders' },
]

export default function SideBar() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {links.map((link) => (
                        <Link to={link.path} key={link.label}>
                            <ListItem  disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={link.label} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}