import TopNav from './TopNav'
import SideBar from './SideBar'
import { Box, Toolbar } from '@mui/material'
import { Outlet } from 'react-router'

export default function Layout() {
    return (
        <>
            <TopNav />
            <Box sx={{ display: 'flex' }}>
                <SideBar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Box><Outlet /></Box>
                </Box>

            </Box>
        </>
    )
}