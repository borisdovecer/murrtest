import {Link} from "react-router-dom";
import {Box, Breadcrumbs, Button, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";

const Settings = () => {
    const [firstIP, setFirstIP] = useState('');
    const [secondIP, setSecondIP] = useState('');
    const [thirdIP, setThirdIP] = useState('');

    return (
        <Box p={1}>
            <Breadcrumbs sx={{px:1}}  aria-label="breadcrumb">
                <Link color="inherit" to="/">
                    Diagnostics
                </Link>
                <Typography color="text.primary">Settings</Typography>
            </Breadcrumbs>
            <Box pl={1} my={2} width='50%'>
                <Typography variant='h5' fontStyle='italic' pb={1.5}>Syslog Server - Destination Address</Typography>
                <Stack py={1} direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Typography variant='inherit' width='50%' p={1}>1st Destination IP Address</Typography>
                    <TextField id="outlined-basic" sx={{width: '80%'}} placeholder='0.0.0.0' value={firstIP} onChange={(e) => setFirstIP(e.target.value)} variant="outlined" size="small" />
                </Stack>
                <Stack py={1} direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Typography variant='inherit' width='50%' p={1}>2nd Destination IP Address</Typography>
                    <TextField id="outlined-basic" sx={{width: '80%'}} placeholder='0.0.0.0' value={secondIP} onChange={(e) => setSecondIP(e.target.value)} variant="outlined" size="small" />
                </Stack>
                <Stack py={1} direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Typography variant='inherit' width='50%' p={1}>3rd Destination IP Address</Typography>
                    <TextField id="outlined-basic" sx={{width: '80%'}} placeholder='0.0.0.0' value={thirdIP} onChange={(e) => setThirdIP(e.target.value)} variant="outlined" size="small" />
                </Stack>
            </Box>
            <Stack width='50%' alignItems='flex-end'>
                <Button variant="contained" size="small" sx={{backgroundColor: '#4d9a17', '&:hover': {backgroundColor: '#178653'}}}>
                    Apply
                </Button>
            </Stack>
        </Box>
    )
}

export default Settings;