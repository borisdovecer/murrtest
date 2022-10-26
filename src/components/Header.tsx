import {Stack, Typography, Box} from '@mui/material'
import {Search, SettingsOutlined, HelpOutline, AccountCircle} from '@mui/icons-material';

const Header = () => {
    return (
        <Stack direction="row" alignItems="center" p={2} sx={{ p:0, color:'#fff', position:  "sticky", background: '#4d9a17', top: 0, justifyContent: "space-between" }}>
            <Box sx={{ mt:1, ml:1 }}><img src='/logo.webp' alt='logo'/></Box>
            <Typography variant='h6'>Xelity 10 TX IP67 M FE 4P</Typography>
            <Box>
                <Search sx={{ fontSize: '40px', px:'2px' }}/>
                <SettingsOutlined sx={{ fontSize: '40px', px:'2px' }} />
                <HelpOutline sx={{ fontSize: '40px', px:'2px' }} />
                <AccountCircle sx={{ fontSize: '40px', px:'2px' }} />
            </Box>
        </Stack>
    )
}

export default Header;