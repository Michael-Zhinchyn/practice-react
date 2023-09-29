import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  // const [userNameInput, setUserNameInput] = useState('');
  // const [userEmail, setUserEmail] = useState('');
  // const [userPassword, setUserPassword] = useState('');

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <div>
      <p>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          fullWidth
          size="small"
        />
      </p>
      <p>
        <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </p>
      <p>
        <Button fullWidth variant="contained" startIcon={<LoginIcon />}>
          log in
        </Button>
      </p>
    </div>
  );
};
