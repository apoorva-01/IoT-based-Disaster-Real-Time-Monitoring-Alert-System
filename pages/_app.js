import '../styles/globals.css'
import React, { useEffect } from 'react';
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@material-ui/styles";
import { LayoutProvider } from "../utils/LayoutContext";
import Themes from "../themes";
import Head from 'next/head';
import { DataStoreProvider } from '../utils/DataStore';


export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          rel="stylesheet"async 
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"async 
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css"
          rel="stylesheet"async 
        />


<link
      href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"async 
      rel="stylesheet"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css"async 
      rel="stylesheet"
    />
    <style></style>
    <script type="text/javascript" async src=""></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"async 
    ></script>
    <script
      type="text/javascript"
      src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"async 
    ></script>
       
      </Head>
      <DataStoreProvider>
        <LayoutProvider>
          <ThemeProvider theme={Themes.default}>
            <SnackbarProvider
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Component {...pageProps} />
            </SnackbarProvider>
          </ThemeProvider>
        </LayoutProvider>
      </DataStoreProvider>
    </>
  )
}

