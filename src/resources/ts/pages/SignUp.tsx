import * as React from 'react';
import { FC, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../theme/theme";
import {
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DrawerAppBar } from '../compornents/DrawerAppBar';

const Copyright = (props: any) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};


interface State {
    name: string;
    hourlyWage: number;
    departmentId: string;
    email: string;
    password: string;
    showPassword: boolean;
}
export const SignUp: FC = () => {
    // csrf
    const csrf_token: string = (
        document.head.querySelector('meta[name="csrf-token"]') as HTMLMetaElement
    ).content;
    const [csrf, setCsrf] = useState<string>(csrf_token);
    DrawerAppBar;
    // form
    const [values, setValues] = React.useState<State>({
        name: "",
        hourlyWage: 1000,
        departmentId: '1',
        email: "",
        password: '',
        showPassword: false,
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
        // console.log(values);
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <ThemeProvider theme={theme}>
            <DrawerAppBar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form action="/signUp" method="post" id="hoge">
                        <input type="hidden" name="_token" value={csrf} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <InputLabel htmlFor="standard-adornment-name">名前</InputLabel>
                                <Input
                                    fullWidth
                                    id="standard-adornment-name"
                                    type="text"
                                    name="name"
                                    onChange={handleChange('name')}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <InputLabel htmlFor="standard-adornment-email">E-mail</InputLabel>
                                <Input
                                    fullWidth
                                    id="standard-adornment-email"
                                    type="text"
                                    name="email"
                                    onChange={handleChange('email')}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <InputLabel htmlFor="standard-adornment-password">
                                    パスワード
                                </InputLabel>
                                <Input
                                    fullWidth
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <InputLabel htmlFor="standard-adornment-hourly-wage">
                                    時給
                                </InputLabel>
                                <Input
                                    fullWidth
                                    id="standard-adornment-hourly-wage"
                                    type="number"
                                    name="hourlyWage"
                                    value={values.hourlyWage}
                                    endAdornment={
                                        <InputAdornment position="end">円</InputAdornment>
                                    }
                                    onChange={handleChange('hourlyWage')}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <InputLabel htmlFor="standard-adornment-departmentId">役職</InputLabel>
                                <TextField
                                    fullWidth
                                    id="standard-adornment-departmentId"
                                    select
                                    value={values.departmentId}
                                    onChange={handleChange('departmentId')}
                                    variant="standard"
                                >
                                    <MenuItem value={'1'}>一般</MenuItem>
                                    <MenuItem value={'2'}>管理者</MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>
                    </form>
                    <Button
                        type="submit"
                        form="hoge"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
};
