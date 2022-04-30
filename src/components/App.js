import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Users from '../pages/Users';
import User from '../pages/User';
import NotFound from '../pages/NotFound';
import routes from '../routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.USERS} element={<Users />} />
        <Route path={routes.USER_PAGE} element={<User />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path={routes.HOMEPAGE}
          element={<Navigate replace to={routes.USERS} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
