import AuthPage from 'pages/AuthPage';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './EmptyPage/emptyPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<AuthPage type="register" />} />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
