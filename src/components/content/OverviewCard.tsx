import {Card, CardActionArea, CardContent, Stack, Typography} from "@mui/material";

interface IProps {
    data: {
        name:string,
        text:string
    }[],
    title: string
}

const OverviewCard = (props:IProps) => {
    return (
        <Card sx={{borderRadius: '8px', mb:4}}>
            <CardActionArea sx={{p:0, border: 1, borderRadius: '8px'}}>
                <CardContent sx={{borderBottom: 1, p:1, bgcolor: '#f7f7f7', color: 'green', borderTopLeftRadius: '8px', borderTopRightRadius: '8px'}}>
                    <Typography variant="h6" component="div">
                        {props.title}
                    </Typography>
                </CardContent>
                <CardContent>
                    {props.data.map((item:{name:string, text:string}, index:number) => (
                        <Stack
                            key={index}
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                        >
                            <Typography width='40%' py={1} variant="body1" color="text.secondary">
                                {item.name}
                            </Typography>
                            <Typography width='60%' py={1} variant="body1" color="text.primary">
                                {item.text}
                            </Typography>
                        </Stack>
                    ))}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default OverviewCard;