import {useState} from 'react';
import {List, ListItemButton, ListItemText, Collapse} from '@mui/material';
import {Link, useLocation} from "react-router-dom";
import {categories} from '../utils/constants'
import {IActiveCategory, ICategory} from "../interfaces";

const SidebarMUI = () => {
    const [openAll, setOpenAll] = useState<IActiveCategory>({
        settings: false,
        diagnostics: false,
        networks: false,
        ports: false,
        software: false,
        users: false
    })
    const location = useLocation()

    return (
        <List sx={{ width: '20%', maxWidth: 360, bgcolor: '#004c13', color: '#fff' }} component="nav">
            {categories.map((category:ICategory, index:number) => {
                if (!category.dropdown) {
                   return (
                       <Link key={index} to={category.link!} style={{textDecoration:'none'}}>
                           <ListItemButton sx={{mx:1, bgcolor: location.pathname === category.link ? '#188653' : '', '&:hover': {backgroundColor: '#178653'}}}>
                               <ListItemText sx={{ color: '#fff'}} primary={category.name} />
                           </ListItemButton>
                       </Link>
                   ) } else {
                    return (
                        <div key={index}>
                           <ListItemButton sx={{mx:1, bgcolor: openAll[category.category] ? '#188653' : '', '&:hover': {backgroundColor: '#178653'}}}
                                           onClick={() => setOpenAll(prev => ({...prev, [category.category]: !prev[category.category] }))}
                           >
                               <ListItemText primary={category.name} />
                           </ListItemButton>
                           <Collapse in={openAll[category.category]} timeout="auto" unmountOnExit>
                               <List component="div" disablePadding>
                                   {category.dropdown.map((c:{name:string, link:string}, index:number) => (
                                       <Link key={index} to={c.link} style={{textDecoration:'none', color: '#fff'}}>
                                           <ListItemButton sx={{ pl: 3, mx:1, bgcolor: location.pathname === c.link ? '#188653' : '', '&:hover': {backgroundColor: '#178653'} }}>
                                               <ListItemText primary={c.name} />
                                           </ListItemButton>
                                       </Link>
                                   ))}
                               </List>
                           </Collapse>
                       </div>
                    )
                }
            })}
        </List>
    );
}

export default SidebarMUI;
