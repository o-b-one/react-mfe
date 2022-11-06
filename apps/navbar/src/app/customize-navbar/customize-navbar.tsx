import { AppBar, Avatar, Box, Button, Container, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import styles from './customize-navbar.module.scss';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {AuthContext} from '@mfe/auth';

export interface ITab {label: string; path: string;}

/* eslint-disable-next-line */
export interface CustomizeNavbarProps {
  tabs: Array<ITab>;
  logoUrl?: string;
  fixed?: boolean;
}



export function CustomizeNavbar(props: CustomizeNavbarProps) {
  
  const auth = useContext(AuthContext);

  return (
      <AppBar position={props.fixed ? 'fixed' : 'static'}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {props.logoUrl && <img src={props.logoUrl} alt='logo' />}
          <Typography textAlign="center">Quotes</Typography>
          {
          auth.isLoggedIn && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt={auth.user?.name} src={auth.user?.avatar} />
              </IconButton>
            </Tooltip>
          </Box>
          }
          <Box sx={{flexGrow: 1,display: 'flex', justifyContent: 'flex-end'}}>
          {props.tabs.map((tab) => (
                <Button key={tab.label}>
                  <Link to={tab.path} className={styles['link']}>
                    <Typography textAlign="center">{tab.label}</Typography>
                  </Link>
                </Button>
              ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


export default CustomizeNavbar;
