import {getOverviewData} from "../../api/fakeApi";
import {useEffect, useState} from "react";
import {IOverview} from "../../interfaces";
import {Box, Stack} from "@mui/material";
import {OverviewCard} from "../index";

const Overview = () => {
    const [data, setData] = useState<IOverview>();

    useEffect(() => {
        setData(getOverviewData);
    }, [])

    return (
         <Stack direction="row" justifyContent="center" alignItems="flex-start" spacing={2}>
             <Box sx={{width:'30%', pt: 2}}>
                 <img src='/switch.png' alt='image' loading="lazy"/>
             </Box>
             {data &&
                 <Box sx={{width:'40%', pt: 2, borderRadius: '8px'}}>
                     <OverviewCard data={data.info} title='Device Information' />
                     <OverviewCard data={data.connection} title='Connection' />
                 </Box>
             }
         </Stack>
    )
}

export default Overview;