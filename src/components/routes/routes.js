import { SignUpForm } from 'components/LoginSignUp/signup';
import AuthForm from 'pages/LoginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={SignUpForm} />
        <Route path="/login" component={AuthForm} />
        <Route path="/contacts" component />
      </Switch>
    </Router>
  );
};
