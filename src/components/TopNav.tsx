import { AppBar, Box, Toolbar, Typography } from '@mui/material'

export default function TopNav() {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between', display: 'flex' }}>
          <Typography variant="h6" noWrap component="div">
            Business Management System
          </Typography>

          <Box>
            <Typography>Steven</Typography>
          </Box>
        </Toolbar>
      </AppBar>
  )
}