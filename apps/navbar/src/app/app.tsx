
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import CustomizeNavbar from './customize-navbar/customize-navbar';



export function NavbarApp() {

  return (
    <BrowserRouter>
      <CustomizeNavbar tabs={ [{path:'', label: 'test'}]}></CustomizeNavbar>
    </BrowserRouter>);

}


export default NavbarApp;
