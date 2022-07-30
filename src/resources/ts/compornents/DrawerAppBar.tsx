import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { createTheme, FormControl, Link, MenuItem, ThemeProvider } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from "../theme/theme";

const useStyles = makeStyles((theme) => ({
    offset: {
        ...theme.mixins.toolbar,
        flexGrow: 1,
    },
}));
interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
    { name: '従業員登録', link: '/signUp' },
    { name: '勤怠管理', link: '/attendanceManegementDay' },
];
export const DrawerAppBar = React.memo((props: Props) => {
    const classes = useStyles();
    const [authority, setAuthority] = useState<string>('一般');
    const handleChange = (event: SelectChangeEvent) => {
        setAuthority(event.target.value);
        console.log(event.target.value);
    };

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <FormControl>
                    <Select value={authority} label="authority" onChange={handleChange}>
                        <MenuItem value={'一般'}>一般</MenuItem>
                        <MenuItem value={'管理者'}>管理者</MenuItem>
                    </Select>
                </FormControl>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem button component={Link} href={item.link} key={index} sx={{textAlign: "center"}}>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <FormControl>
                                <Select value={authority} label="authority" onChange={handleChange}>
                                    <MenuItem value={'一般'}>一般</MenuItem>
                                    <MenuItem value={'管理者'}>管理者</MenuItem>
                                </Select>
                            </FormControl>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item, index) => (
                                <Button key={index} href={item.link} sx={{ color: '#fff' }} >
                                    {item.name}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
            <div className={classes.offset} />
        </ThemeProvider>
    );
});
