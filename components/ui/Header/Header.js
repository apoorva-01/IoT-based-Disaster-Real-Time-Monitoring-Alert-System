import React, { useState, useContext } from "react";
import Link from 'next/link'
import Image from 'next/image'
import {
  AppBar,
  Grid,
  Box,
  Toolbar,
  IconButton,
  Menu,
} from "@material-ui/core";
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import classNames from "classnames";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
// styles
import useStyles from "./styles";

// components
import { Badge, Typography, Button } from "../Wrappers";
import { DataStore } from '../../../utils/DataStore';
// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../../utils/LayoutContext";


export default function Header(props) {
  const { state, dispatch } = useContext(DataStore);
  const { userInfo } = state;
  var classes = useStyles();
  const router = useRouter();
  // global
  var layoutState = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local

  var [profileMenu, setProfileMenu] = useState(null);

  const logoutClickHandler = () => {
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    router.push('/login');
  };
  return (
    <AppBar style={{ background: '#208850' }} position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButtonSandwich,
            classes.headerMenuButtonCollapse,
          )}
        >
          {layoutState.isSidebarOpened ? (
            <ArrowBackIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          )}
        </IconButton>
        <Grid justifyContent='center' alignItems='center' container>
          <Grid item xs={2}>
            <Link href='/'><a>
              <Image width={80} height={60} src="/logo.png" alt="IGSCS Logo" />
            </a></Link>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }}>
              <Typography
                variant="h4"
                align="center"
                className='appbar-title'
                style={{ color: '#fff' }}
              >
                DISASTER SECURITY & AID MONITORING SYSTEM
              </Typography>
            </Box>
          </Grid>
          <Grid sx={{ p: 0 }} item xs={2}>

            <Box sx={{ padding: 0, margin: 0 }}>
              <IconButton
                aria-haspopup="true"
                color="inherit"
                className={classes.headerMenuButton}
                aria-controls="profile-menu"
                onClick={e => setProfileMenu(e.currentTarget)}
              >
              <h3>RAKSH</h3><PersonIcon sx={{fontSize:"2rem"}}/>
              </IconButton>
            </Box>
          

          </Grid>
        </Grid>


        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="p" weight="medium">
              {userInfo ? (
                <>Name: &nbsp;&nbsp;  {userInfo.name}</>
              ) : (<></>)}
            </Typography>
            <Typography variant="p" weight="medium">
              {userInfo ? (
                <>Role: &nbsp;&nbsp;  {userInfo.isAdmin ? (<>Admin</>) : (<>User</>)}</>
              ) : (<></>)}
            </Typography>

          </div>
          <div className={classes.profileMenuUser}>
            <Link href='/profile'><a>
              <Typography>
                Profile
              </Typography>
            </a></Link>
          </div>
          <div className={classes.profileMenuUser}>
            <Typography
              className={classes.profileMenuLink}
              color="primary"
              onClick={() => logoutClickHandler()}
            >
              Sign Out
            </Typography>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
