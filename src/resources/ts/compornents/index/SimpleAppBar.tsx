import * as React from 'react';
import { FC } from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../theme/theme';
export const SimpleAppBar: FC = () => {
    const [authority, setAuthority] = useState<string>('一般');
    const handleChange = (event: SelectChangeEvent) => {
        setAuthority(event.target.value);
        // console.log(event.target.value);
        if (authority == '管理者') {
            // リダイレクト
        }
    };
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <FormControl>
                                <Select value={authority} label="authority" onChange={handleChange}>
                                    <MenuItem value={'一般'}>一般</MenuItem>
                                    <MenuItem value={'管理者'}>管理者</MenuItem>
                                </Select>
                            </FormControl>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};
