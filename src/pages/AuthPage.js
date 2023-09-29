import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import LockIcon from '@mui/icons-material/Lock';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { StyledFormWrapper } from './LoginPage.styled';
import { SignUpForm } from 'components/LoginSignUp/signup';
import { LoginForm } from 'components/LoginSignUp/login';
import { type } from '@testing-library/user-event/dist/type';

const AuthPage = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(type === 'login');

  const handleChange = event => {
    const isChecked = event.target.checked;
    setChecked(isChecked);

    if (isChecked) {
      navigate('/login');
    } else {
      navigate('/register');
    }
  };

  return (
    <StyledFormWrapper>
      <Paper elevation={3} style={{ padding: '10px' }}>
        {checked ? (
          <Chip
            icon={<FaceIcon />}
            label="Log in"
            color="primary"
            variant="outlined"
          />
        ) : (
          <Chip
            icon={<LockIcon />}
            label="Sign up"
            color="primary"
            variant="outlined"
          />
        )}

        <br></br>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />

        {checked ? <LoginForm /> : <SignUpForm />}
      </Paper>
    </StyledFormWrapper>
  );
};

export default AuthPage;
