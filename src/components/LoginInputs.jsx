import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { TextField, Stack, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

export default function LoginInputs() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const Select = React.forwardRef(function CustomSelect(props, ref) {
        const slots = {
            root: StyledButton,
            listbox: AnimatedListbox,
            popup: Popup,
            ...props.slots,
        };
        return <BaseSelect {...props} ref={ref} slots={slots} />;
    });

  return (
    <>
    <Stack direction={'column'} spacing={5} marginLeft={11.5} marginTop={5}>
        {/* EMAIL-INPUT */}
        <TextField
            id="outlined-basic"
            label="Gmail"
            variant="outlined"
            InputProps={{
                endAdornment: <EmailIcon />,
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '6px',
                },
                fontFamily: 'Roboto',
                width: '350px',
                height: '20px',
                '& .MuiOutlinedInput-input': {
                    padding: '12px 14px',
                },
            }}
        />
        {/* PASSWD - INPUT */}
        <FormControl sx={{ m: 1, width: '350px' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
                sx={{
                    borderRadius: '6px',
                    '& .MuiOutlinedInput-input': {
                        padding: '12px 14px',
                    },
                }}
            />
        </FormControl>
        </Stack>
        <button style={{ marginTop: '32px', fontWeight: 500, fontSize: '16.5px' }} className='btn1'> 
        <span className = 'login-btn'>
                   <Link to="/availps">Login </Link>
                </span>
        </button>
        <h6 className='subtext' style={{ fontFamily: 'Poppins' }}>
            Don't have an account ?
                <span className='register-text'>
                   <Link to="/">Register</Link>
                </span>
        </h6>
        </>
  )
}
