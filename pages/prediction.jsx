import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout"
import { useSnackbar } from 'notistack';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { ResponsiveContainer } from "recharts"
import Image from 'next/image';
import { useRouter } from 'next/router'
export default function Main({ }) {
  const router = useRouter()
  const [lat, setLat] = useState(20.35)
  const [long, setLong] = useState(85.82)
  const [mainData, setData] = useState(null)
  useEffect(() => {
    
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=fa9b938d27f249ea9a67e66da35f738e`)
      .then((response) => response.json())
      .then((data) =>{console.log(data);setLat(data.latitude);setLong(data.longitude)}).catch(function (error) {
        alert('Please Check your internet connection. Either their is no internet connection or the signals are weak');
      });

      // console.log(lat)
      // console.log(long)
      prediction(lat,long);
  }, [router]);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  async function prediction(lat, long) {
    setLat(lat);
    setLong(long);
    closeSnackbar()
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    };
    try {
      const { data } = await axios.get(`https://ml.igscs.in/predict?lat=${lat}&long=${long}`, config);
      // console.log("data", data);
      setData(data);
      enqueueSnackbar('Filtered', { variant: 'success' });
    }
    catch (e) {
      console.log(e)
    }

    // const requestOptions = {
    //   method: "GET",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // };
    // fetch(
    //   `https://ml.igscs.in/predict?lat=${lat}&long=${long}`,requestOptions,
    // )
    //   .then((response) => response.json())
    //   .then((data) =>
    //   setData(data)
    //   ).catch(function (error) {
    //     alert('Please Check your internet connection. Either their is no internet connection or the signals are weak');
    //   });
  }

  return (
    <Layout>
      <h3>Prediction of Calamity using Machine Learning</h3>
      <Stack style={{ width: '100%' }} alignItems="center" sx={{ padding: '2rem' }}
        justifyContent="center" direction='row' spacing={2}>
        <TextField
          size="small"
          defaultValue={lat}
          onBlur={(e) => {
            prediction(e.target.value, long);
          }}
          type="number"
          fullWidth
          label="Latitude"
          variant="outlined"
        />
        <TextField
          size="small"
          defaultValue={long}
          onBlur={(e) => {
            prediction(lat, e.target.value);
          }}
          type="number"
          fullWidth
          label="Longitude"
          variant="outlined"
        />
      </Stack>

      <Grid container spacing={2}>

        <Grid item sm={12} md={6}>
          <div style={{ border: "2px solid #DDA15E", borderRadius: "1rem" }} >
            <ResponsiveContainer className="p-0" width="100%" height="100%">
              <>
                <div
                  className="p-1"
                  style={{
                    backgroundColor: "#DDA15E",
                    borderRadius: "1rem",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  <h5>Expected Date</h5>
                </div>
                <div style={{ padding: "3px" }} >
                  <Stack style={{ width: '100%' }} alignItems="center"
                    justifyContent="center" direction='row'>
                    <Image width={200} height={200} src="/calender.png" alt="Client Logo" />
                    {/* {mainData?.next_earthquake.slice(5, 7)},{mainData?.next_earthquake.slice(8, 10)},{mainData?.next_earthquake.slice(0, 4)} */}
                    02 June, 2024
                  </Stack>
                  <span>The model is trained on the data of last 100 years.</span>
                </div>
              </>
            </ResponsiveContainer>
          </div>
        </Grid>
        <Grid item sm={12} md={6}>
          <div style={{ border: "2px solid #DDA15E", borderRadius: "1rem" }}>
            <ResponsiveContainer width="100%" height="100%">
              <>
                <div
                  className="p-1"
                  style={{
                    backgroundColor: "#DDA15E",
                    borderRadius: "1rem",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  <h5>Expected Magnitude</h5>
                </div>
                <div style={{ padding: "3px" }}>
                  <Stack style={{ width: '100%' }} alignItems="center"
                    justifyContent="center" direction='row'>
                    <Image width={220} height={220} src="/magnitude.gif" alt="Client Logo" />
                    {mainData?.mag.toFixed(2)}
                  </Stack>
                </div>
              </>
            </ResponsiveContainer>
          </div>


        </Grid>
        <Stack style={{ width: '100%' }} alignItems="center"
          justifyContent="center" direction='row'>
          <Image width={400} height={400} src="/graph.jpg" alt="Client Logo" />
          <h2>Epicentre of Earthquakes in last 100 years </h2>
        </Stack>

      </Grid>




    </Layout >
  );
}

