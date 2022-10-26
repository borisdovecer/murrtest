import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { getLogs, getLogStatuses } from "../../api/fakeApi";
import {ILogs, ILogStatus} from "../../interfaces";
import {
    Box,
    Button,
    FormControl,
    Menu,
    MenuItem,
    Select,
    SelectChangeEvent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Breadcrumbs,
    Stack
} from "@mui/material";

const Logs = () => {
    const [message, setMessage] = useState('');
    const [identification, setIdentification] = useState('');
    const [status, setStatus] = useState('');

    const [data, setData] = useState<ILogs[]>(getLogs);
    const [statuses, setStatuses] = useState<ILogStatus[]>(getLogStatuses);

    useEffect(() => {
        setData(getLogs());
        setStatuses(getLogStatuses())
    }, [])

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    return (
        <Box p={1}>
            <Breadcrumbs sx={{px:1}}  aria-label="breadcrumb">
                <Link color="inherit" to="/">
                    Diagnostics
                </Link>
                <Typography color="text.primary">Logs</Typography>
            </Breadcrumbs>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={2}
                px={1}
                my={3}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Typography variant='subtitle1'>Messages:</Typography>
                    <Box sx={{ minWidth: 120, backgroundColor: '#fff', height: 16, ml: 4 }}>
                        <FormControl fullWidth>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                className='h-7 bg-white'
                                value={message}
                                onChange={(e:SelectChangeEvent) => setMessage(e.target.value as string)}
                            >
                                <MenuItem value={10}>10 entries</MenuItem>
                                <MenuItem value={20}>20 entries</MenuItem>
                                <MenuItem value={30}>30 entries</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Stack>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Typography variant='subtitle1'>Identification: </Typography>
                    <Box sx={{ minWidth: 120, backgroundColor: '#fff', height: 16, ml: 4 }}>
                        <FormControl fullWidth>
                            <Select
                                labelId="demo-simple-select"
                                id="demo-simple"
                                className='h-7 bg-white'
                                value={identification}
                                onChange={(e:SelectChangeEvent) => setIdentification(e.target.value)}
                            >
                                <MenuItem value={1}>Port 1</MenuItem>
                                <MenuItem value={2}>Port 2</MenuItem>
                                <MenuItem value={7}>Port 7</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Typography variant='subtitle1'>Status: </Typography>
                    <Box sx={{ minWidth: 120, backgroundColor: '#fff', height: 16, ml: 4 }}>
                        <FormControl fullWidth>
                            <Select
                                labelId="demo-simple-select"
                                id="demo-simple"
                                className='h-7 bg-white'
                                value={status}
                                onChange={(e:SelectChangeEvent) => setStatus(e.target.value)}
                            >
                                <MenuItem value={1}>Failure</MenuItem>
                                <MenuItem value={2}>Out of specification</MenuItem>
                                <MenuItem value={7}>Maintenance</MenuItem>
                                <MenuItem value={7}>Check Function</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Button variant="contained" size="small" sx={{backgroundColor: 'gray', '&:hover': {backgroundColor: '#4d9a17'}}}>
                        Reset
                    </Button>
                    <Button variant="contained" size="small" sx={{backgroundColor: '#4d9a17', '&:hover': {backgroundColor: 'gray'}}}>
                        Filter
                    </Button>
                </Stack>
                <Box>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={(e) => setAnchorEl(e.currentTarget)}
                        sx={{ backgroundColor: '#4d9a17', color: "#fff", '&:hover': {backgroundColor: 'gray'} }}
                    >
                        Download
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => setAnchorEl(null)}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => setAnchorEl(null)}>PDF</MenuItem>
                        <MenuItem onClick={() => setAnchorEl(null)}>HTML</MenuItem>
                        <MenuItem onClick={() => setAnchorEl(null)}>XML</MenuItem>
                    </Menu>
                </Box>
            </Stack>
            <Box p={1}>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{borderBottom: 3, borderColor:'rgba(50,50,50,0.51)'}}>
                            <TableCell>Identification</TableCell>
                            <TableCell sx={{fontStyle: 'italic'}}>Status</TableCell>
                            <TableCell sx={{fontStyle: 'italic'}}>Time</TableCell>
                            <TableCell sx={{fontStyle: 'italic'}}>Message</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row:ILogs) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                {statuses.map((status:ILogStatus, index:number) => {
                                    if (status.id === row.status) {
                                        return (
                                            <TableCell key={index}>
                                                <Typography sx={{
                                                    color: '#fff',
                                                    fontStyle: 'italic',
                                                    backgroundColor: status.color,
                                                    borderRadius: '16px',
                                                    p:1
                                                }} variant='caption'>{status.text}</Typography>
                                            </TableCell>
                                        )
                                    }
                                })}
                                <TableCell>{row.time}</TableCell>
                                <TableCell>{row.message}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

export default Logs;