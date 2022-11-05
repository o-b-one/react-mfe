
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Route, Routes, Link, Navigate } from 'react-router-dom';
import React, { Suspense, useContext, useEffect, useReducer, useState } from 'react';
import { AuthContext, IAuthState } from './context/auth-context';
import { IUser } from './dto/user.interface';
import { Authorization } from '../../../login/src/app/apis/authorization';

const LoginApp = React.lazy(() => import('@mfe/login'));
const FeedApp = React.lazy(() => import('@mfe/feed'));

export function App() {
  const authService = Authorization.getInstance() as any;
  const [user, setUser] = useState(null as IUser | null);

  authService.onLogin(setUser);
  const isLoggedIn = !!user;
  useEffect(() => {
    authService.isAuthorized()
    .then((isAuth: boolean) => isAuth ? authService.getUser() : null)
    .then(setUser);
  }, [])
  const auth = useContext(AuthContext);
  

  const loggedOutRoutes = () => ([
    <Route
    path="/"
    key={'login'}
    element={<LoginApp/>}
  />
  ])
  
  const loggedInRoutes = () => ([
    <Route
    key={'feed'}
    path="/"
    element={<FeedApp/>}
  />
  ])

  return (
    <>
    {/* <AuthContext.Provider> */}
    <div role="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page-2">Page 2</Link></li>
      </ul>
    </div>
    <Suspense
      fallback={<div>Loading...</div>}>
    <Routes>
    {
      isLoggedIn 
        ? loggedInRoutes()
        : loggedOutRoutes()
    }
     <Route
          path="/*"
          element={<Navigate to="/" replace />} 
        ></Route>
    </Routes>
    </Suspense>
    {/* <AuthContext.Provider/> */}
    </>
    );

}


export default App;
