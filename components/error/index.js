import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Layout from '../../Layout/Layout'
import Image from 'next/image'
// styles
import useStyles from "./styles";
// logo
import logo from "./logo.svg";

export default function Error() {
  var classes = useStyles();

  return (
    <Layout>
    <Grid container className={classes.container}>
      <div className={classes.logotype}>
        <Image  className={classes.logotypeIcon} src={logo} alt="logo" ></Image>
        <Typography variant="h3" color="white" className={classes.logotypeText}>
          IGSCS
        </Typography>
      </div>
      <Paper classes={{ root: classes.paperRoot }}>
        <Typography
          variant="h1"
          color="primary"
          className={classnames(classes.textRow, classes.errorCode)}
        >
          404
        </Typography>
        <Typography variant="h5" color="primary" className={classes.textRow}>
          Oops. Looks like the page you are looking for no longer exists
        </Typography>
        <Typography
          variant="h6"
          color="text"
          colorBrightness="secondary"
          className={classnames(classes.textRow, classes.safetyText)}
        >
          But we are here to bring you back to safety
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          size="large"
          className={classes.backButton}
        >
          Back to Home
        </Button>
      </Paper>
    </Grid>
    </Layout>
  );
}
