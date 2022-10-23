import {Box, LinearProgress, LinearProgressProps, Typography} from "@mui/material";

function Progress(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{p: "1rem"}}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Box sx={{width: '100%', mr: 2}}>
                    <LinearProgress variant="determinate" {...props} />
                </Box>
                <Box sx={{minWidth: 35}}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                        props.value,
                    )}%`}</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Progress