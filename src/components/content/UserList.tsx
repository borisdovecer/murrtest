import _ from "lodash";
import {Link} from 'react-router-dom';
import {
    Breadcrumbs,
    Button,
    TextField,
    Typography,
    Box,
    TableContainer,
    Table,
    TableHead,
    TableRow, TableCell, TableBody, Stack, IconButton, styled
} from "@mui/material";
import {getUsers, getUserStatuses} from '../../api/fakeApi';
import {useEffect, useState} from "react";
import {userTableHeader} from '../../utils/tableHeaders';
import {IUsers, IStatuses} from "../../interfaces";
import {ExpandLess, ExpandMore, Search, Add, MoreHoriz} from '@mui/icons-material/';

const UserList = () => {
    const [users, setUsers] = useState<IUsers[]>([]);
    const [statuses, setStatuses] = useState<IStatuses[]>([]);
    const [search, setSearch] = useState<string>('');
    const [sortActive, setSortActive] = useState<{name:string, order:'asc'|'desc'}>({name:'', order:'asc'});

    const sort = (name:string, order:'asc' | 'desc') => {
        setUsers(_.orderBy(users, name, order));
        setSortActive({name, order});
    }

    const find = () => {
        const state:IUsers[] = [];
        const allUsers = getUsers();
        _.map(allUsers, (user:IUsers) => {
            if (_.includes(_.toLower(user.username), _.toLower(search)) || _.includes(_.toLower(user.fullName), _.toLower(search))) {
                state.push(user);
            }
        })
        setUsers(state)
    }

    useEffect(() => {
        setUsers(getUsers());
        setStatuses(getUserStatuses())
    }, [])

    return (
        <Box p={1}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/">
                    User Management
                </Link>
                <Typography color="text.primary">Users ({users.length})</Typography>
            </Breadcrumbs>
            <Stack p={1} flexDirection='row' justifyContent='space-between'>
                <Stack flexDirection='row'>
                    <TextField
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search..."
                        variant="outlined"
                        size="small"
                        sx={{'& fieldset': {borderTopRightRadius:0, borderBottomRightRadius:0}}}
                        onKeyDown={(e:any) => {
                            if (e.key === 'Enter') {
                                    setSearch(e.target.value);
                                    find();
                                }
                            }}
                        />
                    <Button onClick={find}
                            variant="contained"
                            size="small"
                            sx={{borderTopLeftRadius:0, borderBottomLeftRadius:0, backgroundColor: '#4d9a17', '&:hover': {backgroundColor: '#178653'}}}
                    >
                        <Search />
                        Search
                    </Button>
                </Stack>
                <Link to='/users/add' style={{textDecoration: 'none'}}>
                    <Button variant="contained" sx={{backgroundColor: '#4d9a17', '&:hover': {backgroundColor: '#178653'}}}>
                        <Add fontSize='small' />
                        Add User
                    </Button>
                </Link>
            </Stack>
            <Box p={1}>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{fontStyle: 'italic'}} >
                                {userTableHeader.map((user, index) => (
                                    <TableCell key={index} sx={{borderBottom: 3, borderColor:'rgba(50,50,50,0.51)'}}>
                                        <Stack flexDirection='row' justifyContent='space-between' >
                                            {user.name}
                                            <Box mx={1}>
                                                <ExpandLess sx={{
                                                    color: sortActive.name === user.category && sortActive.order === 'asc' ? '#4d9a17' : '#000',
                                                    position: 'absolute',
                                                    fontSize: '20px',
                                                    mt: -0.5
                                                }}
                                                            onClick={() => sort(user.category, 'asc')} />
                                                <ExpandMore sx={{
                                                    color: sortActive.name === user.category && sortActive.order === 'desc' ? '#4d9a17' : '#000',
                                                    position: 'absolute',
                                                    fontSize: '20px',
                                                    mt: 1
                                                }}
                                                            onClick={() => sort(user.category, 'desc')}
                                                />
                                            </Box>
                                        </Stack>
                                    </TableCell>
                                ))}
                                <TableCell sx={{borderBottom: 3, borderColor:'rgba(50,50,50,0.51)'}}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user:IUsers, index: number) => (
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{bgcolor: sortActive.name === 'username' ? 'rgba(220,220,220,0.36)' : ''}}>
                                        {user.username}
                                    </TableCell>
                                    <TableCell sx={{bgcolor: sortActive.name === 'fullName' ? 'rgba(220,220,220,0.36)' : ''}}>
                                        {user.fullName}
                                    </TableCell>
                                    <TableCell sx={{bgcolor: sortActive.name === 'email' ? 'rgba(220,220,220,0.36)' : ''}}>{user.email}</TableCell>
                                    {statuses.map((status:IStatuses, index:number) => {
                                        if (status.id === user.status) {
                                            return (
                                                <TableCell sx={{bgcolor: sortActive.name === 'status' ? 'rgba(220,220,220,0.36)' : ''}} key={index}>
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
                                    <TableCell sx={{bgcolor: sortActive.name === 'role' ? 'rgba(220,220,220,0.36)' : ''}}>
                                        {user.role}
                                    </TableCell>
                                    <TableCell sx={{bgcolor: sortActive.name === 'lastLogin' ? 'rgba(220,220,220,0.36)' : ''}}>
                                        {user.lastLogin}
                                    </TableCell>
                                    <TableCell sx={{bgcolor: sortActive.name === 'permissions' ? 'rgba(220,220,220,0.36)' : ''}}>
                                        {user.permissions}
                                    </TableCell>
                                    <TableCell >
                                        <IconButton sx={{color:'#4d9a17'}} aria-label="delete" size="small">
                                            <MoreHoriz fontSize="inherit" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}

export default UserList;