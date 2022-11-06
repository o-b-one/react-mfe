
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useContext } from 'react';
import styles from './app.module.scss';
import LoginForm from './login-form/login-form';
import { AuthContext } from '@mfe/auth';

export function LoginApp() {
  const authHandler = useContext(AuthContext);
  
  return (
    <>
      <LoginForm loginHandler={authHandler}/>
    </>);

}


export default LoginApp;
