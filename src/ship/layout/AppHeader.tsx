import * as React from 'react';
import {FC} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const AppHeader: FC<TAppHeader> = ({headerTitle}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {headerTitle}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

type TAppHeader = {
    headerTitle: string
}

export default AppHeader