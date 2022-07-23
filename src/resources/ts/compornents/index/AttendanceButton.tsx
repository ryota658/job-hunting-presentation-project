import * as React from 'react';
import { FC, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, DialogContent, IconButton, Input, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../theme/theme';
type info = {
    text: string;
    num: number;
};

interface State {
    userId: string;
    password: string;
    showPassword: boolean;
}

export const AttendanceButton = (props: info) => {
    // Dialog
    const [open, setOpen] = useState<boolean>(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // csrf対策
    const csrf_token: string = (
        document.head.querySelector('meta[name="csrf-token"]') as HTMLMetaElement
    ).content;
    // console.log(csrf_token);
    const [csrf, setCsrf] = useState<string>(csrf_token);

    // form
    const [values, setValues] = React.useState<State>({
        userId: '',
        password: '',
        showPassword: false,
    });
    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(values);
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
            <li>
                <Button
                    variant={props.num === 0 ? 'outlined' : 'contained'}
                    onClick={handleClickOpen}
                    color="primary"
                    size="large"
                >
                    {props.text}
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{'Login'}</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                            <form action="/" method="post" id="hoge">
                                <input type="hidden" name="_token" value={csrf} />
                                <input type="hidden" name="situation" value={props.num} />
                                <Grid item xs={12}>
                                    <InputLabel htmlFor="standard-adornment-id">ID</InputLabel>
                                    <Input
                                        fullWidth
                                        id="standard-adornment-id"
                                        type="text"
                                        name="userId"
                                        onChange={handleChange('userId')}
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ mt: 1 }}>
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
                            </form>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} type="button" variant="outlined">
                            Cansel
                        </Button>
                        <Button type="submit" form="hoge" variant="contained">
                            Send
                        </Button>
                    </DialogActions>
                </Dialog>
            </li>
        </ThemeProvider>
    );
};
