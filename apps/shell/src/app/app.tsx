
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Route, Routes, Navigate } from 'react-router-dom';
import React, { Suspense, useContext } from 'react';
import { AuthContext } from '@mfe/auth';
import styles from './app.module.scss';

const CustomizeNavbar = React.lazy(() => import('@mfe/navbar'))
const Login = React.lazy(() => import('@mfe/login'))
const Feed = React.lazy(() => import('@mfe/feed'))

export function App() {
  const auth = useContext(AuthContext);
 
  const tabs = auth.isLoggedIn ? [{label: 'Feed', path: '/'}] : [];
  const loggedOutRoutes = [
      <Route
      path="/"
      key={'login'}
      element={<Login/>}
    />
  ]
  
  const loggedInRoutes = [
      <Route
      key={'feed'}
      path="/"
      element={<Feed/>}
    />
  ]

  return (
    <>
    <CustomizeNavbar tabs={tabs} fixed={true}/>
    <section className={styles['page-area']}>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      {
        auth.isLoggedIn
          ? loggedInRoutes
          : loggedOutRoutes
      }
      <Route
            path="/*"
            element={<Navigate to="/" replace />} 
          ></Route>
      </Routes>
      </Suspense>
    </section>
    </>
  );

}


export default App;

