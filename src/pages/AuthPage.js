import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import LockIcon from '@mui/icons-material/Lock';
import Switch from '@mui/material/Switch';
import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react';
import { StyledFormWrapper } from './LoginPage.styled';
import { SignUpForm } from 'components/LoginSignUp/signup';
import { LoginForm } from 'components/LoginSignUp/login';

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginForm = location.pathname.includes('/login');
  const [checked, setChecked] = useState(isLoginForm);

  const handleChange = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);

    // Змінюємо маршрут на основі нового стану чекбокса
    if (newCheckedState) {
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
