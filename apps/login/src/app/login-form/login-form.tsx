import styles from './login-form.module.scss';
import { FormGroup, TextField, Button, FormControl } from '@mui/material';
import { MutableRefObject, useRef } from 'react';
import { isValidEmail } from '../utilities/email-utilities';
import { isValidPassword } from '../utilities/password-utilities';
import { IUser } from '@mfe/auth/types';
import { useState } from 'react';


/* eslint-disable-next-line */
export interface LoginFormProps {
  loginHandler: {login(email: string, password: string): Promise<IUser>}
}



export function LoginForm(props: LoginFormProps) {
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [submitted, setSubmitted] = useState(false);

  
  const validateCredentials = () => {
    if(!emailRef.current || !passwordRef.current){
      return false;
    }
    if(!isValidEmail(emailRef.current.value)){
      emailRef.current.focus();
      return false;
    }else if(!isValidPassword(passwordRef.current.value)){
      passwordRef.current.focus();
      return false;
    }
    return true;
  }

  const submit = async () => {
    if(validateCredentials()){
      setSubmitted(true);
      try{
        await props.loginHandler.login(emailRef.current.value, passwordRef.current.value);
      }catch(e){
        if(e instanceof DOMException){
          return;
        }
        console.log(e)
      }
      finally{
        setSubmitted(false);
      }
    }
  }


  return (
    
    <FormGroup className={styles['container']}>
      <FormControl>
        <TextField 
          name='email' 
          type='email'
          label="E-mail"
          inputRef={emailRef}
        />
        </FormControl>
        <FormControl>
      <TextField name='password' 
        type='password'
        label="Password"
        inputRef={passwordRef}
      />
      </FormControl>
      <Button variant="contained" onClick={submit}>
        {!submitted ? 'Login' : 'Inprogress...'}
        </Button>
    </FormGroup>
  );
};


export default LoginForm;
