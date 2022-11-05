
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Authorization } from './apis/authorization';
import LoginForm from './login-form/login-form';


export function LoginApp() {
  const authHandler = Authorization.getInstance();
  return (
    <>
      <LoginForm loginHandler={authHandler}/>
    </>);

}


export default LoginApp;
