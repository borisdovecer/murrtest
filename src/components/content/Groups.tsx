import {Link} from "react-router-dom";
import {
    Box,
    Breadcrumbs,
    Button, IconButton,
    Stack,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {getGroups, getUsers, getUserStatuses} from "../../api/fakeApi";
import {groupTableHeader, userTableHeader} from "../../utils/tableHeaders";
import {IGroups, IStatuses, IUsers} from "../../interfaces";
import {Add, ExpandLess, ExpandMore, MoreHoriz, Search} from "@mui/icons-material";
import _ from "lodash";

const Groups = () => {
    const [groups, setGroups] = useState<IGroups[]>([]);
    const [statuses, setStatuses] = useState<IStatuses[]>([]);
    const [search, setSearch] = useState<string>('');
    const [sortActive, setSortActive] = useState<{name:string, order:'asc'|'desc'}>({name:'', order:'asc'});

    const sort = (name:string, order:'asc' | 'desc') => {
        setGroups(_.orderBy(groups, name, order));
        setSortActive({name, order});
    }

    const find = () => {
        const state:IGroups[] = [];
        const allGroups = getGroups();
        _.map(allGroups, (group:IGroups) => {
            if (_.includes(_.toLower(group.name), _.toLower(search))) {
                state.push(group);
            }
        })
        setGroups(state)
    }

    useEffect(() => {
        setGroups(getGroups());
        setStatuses(getUserStatuses())
    }, [])

    return (
        <Box p={1}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/">
                    User Management
                </Link>
                <Typography color="text.primary">Groups ({groups.length})</Typography>
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
                <Link to='/group/add' style={{textDecoration: 'none'}}>
                    <Button variant="contained" sx={{backgroundColor: '#4d9a17', '&:hover': {backgroundColor: '#178653'}}}>
                        <Add fontSize='small'/>
                        Add Group
                    </Button>
                </Link>
            </Stack>
            <Box p={1}>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{fontStyle: 'italic'}} >
                                {groupTableHeader.map((group, index) => (
                                    <TableCell key={index} sx={{borderBottom: 3, borderColor:'rgba(50,50,50,0.51)'}}>
                                        <Stack flexDirection='row' justifyContent='space-between' >
                                            {group.name}
                                            <Box mx={1}>
                                                <ExpandLess sx={{
                                                    color: sortActive.name === group.category && sortActive.order === 'asc' ? '#4d9a17' : '#000',
                                                    position: 'absolute',
                                                    fontSize: '20px',
                                                    mt: -0.5
                                                }}
                                                            onClick={() => sort(group.category, 'asc')} />
                                                <ExpandMore sx={{
                                                    color: sortActive.name === group.category && sortActive.order === 'desc' ? '#4d9a17' : '#000',
                                                    position: 'absolute',
                                                    fontSize: '20px',
                                                    mt: 1
                                                }}
                                                            onClick={() => sort(group.category, 'desc')}
                                                />
                                            </Box>
                                        </Stack>
                                    </TableCell>
                                ))}
                                <TableCell sx={{borderBottom: 3, borderColor:'rgba(50,50,50,0.51)'}}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {groups.map((group:IGroups, index: number) => (
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row" sx={{bgcolor: sortActive.name === 'name' ? 'rgba(220,220,220,0.36)' : ''}}>
                                        {group.name}
                                    </TableCell>
                                    <TableCell sx={{listStyle: 'disc', bgcolor: sortActive.name === 'description' ? 'rgba(220,220,220,0.36)' : ''}}>
                                        <Box sx={{'&:last-child p, &:last-child ul': { my: 0}}} dangerouslySetInnerHTML={{ __html: group.description }} />
                                    </TableCell>
                                    {statuses.map((status:IStatuses, index:number) => {
                                        if (status.id === group.status) {
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
                                    <TableCell sx={{bgcolor: sortActive.name === 'permissions' ? 'rgba(220,220,220,0.36)' : ''}}>
                                        {group.permissions}
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

    );
}

export default Groups;