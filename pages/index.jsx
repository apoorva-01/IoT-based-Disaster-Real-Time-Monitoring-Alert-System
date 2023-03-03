import React, { useState, useEffect} from "react";
import axios from 'axios';
import moment from 'moment';
import TempGauge from "../components/ui/LiveData/TempGauge";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from 'next/image'
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import Layout from "../Layout/Layout"
import EarthquakeEntries from '../models/EarthquakeEntries';
import db from '../utils/db';
import DatePickerComponent from "../components/DatePickerComponent/DatePickerComponent";
import { useRouter } from 'next/router'
import Button from "@mui/material/Button";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useSnackbar } from 'notistack';
import { ResponsiveContainer } from "recharts"
import { Line } from "react-chartjs-2";
import { toast, ToastContainer } from 'react-nextjs-toast'

export default function TempHumLiveData({ entries }) {

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (!("Notification" in window)) {
      console.log("Browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
    chartDataFilter();
  },[router]);

  setTimeout(function () {
    if (window !== undefined) {
      // browser code
      window.location.reload(1);
    }
  }, 300000);

  function showNotification() {
    console.log("alert");
    const audioTune = new Audio('/danger_sms.mp3');

    var options = {
      body: 'The value of sensor has rised beyond the alarming level. This might result in the calamity. Be alert and take preventions.',
      icon: '/danger.png',
      dir: 'ltr',
    };

    audioTune.play();
    toast.notify('Calamity Alert', { options } );
    
  }

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const currentDate = new Date()
  currentDate.setHours(0, 0, 0);
  const [startDate, SetStartDate] = useState(moment(currentDate, "YYYY-MM-DDTHH:mm:ss").format("YYYY-MM-DD"));
  const [endDate, SetEndDate] = useState(moment(currentDate, "YYYY-MM-DDTHH:mm:ss").add(1, 'days').format("YYYY-MM-DD"));
  const [fetchedData, SetFetchedData] = useState({ "accelerationXData": [], "accelerationYData": [], "accelerationZData": [], "rotationXData": [], "rotationYData": [], "rotationZData": [], "tempData": [] });

  async function chartDataFilter() {
    closeSnackbar()
    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_Chart_API_Python_Link}`, {
        start_date: startDate,
        end_date: endDate,
        deviceID: 1
      });
      console.log("data", data);
      const m1 = new Date()
      var m2 = moment(m1); 
      console.log(m2.format('H'));
      SetFetchedData(data)
      if(data?.accelerationXData?.maxArray[m2.format('H')]>12 && data?.accelerationYData?.maxArray[m2.format('H')]>12){
        showNotification();
      }
      enqueueSnackbar('Filtered', { variant: 'success' });
    }
    catch (e) {
      console.log(e)
    }
  }


  const avgaccdata = {
    labels: ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"],
    datasets: [
      {
        label: "Rotation in X",
        data: fetchedData.accelerationXData.avgArray,
        borderColor: [
          "red",
        ],
        borderWidth: 1,
      },
      {
        label: "Rotation in Y",
        data: fetchedData.accelerationYData.avgArray,
        borderColor: [
          "green",
        ],
        borderWidth: 1,
      },
      {
        label: "Rotation in Z",
        data: fetchedData.accelerationZData.avgArray,
        borderColor: [
          "violet",
        ],
        borderWidth: 1,
      }
    ],
  };



  const avgrotationdata = {
    labels: ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"],
    datasets: [
      {
        label: "Acc in X",
        data: fetchedData.rotationXData.avgArray,
        borderColor: [
          "red",
        ],
        borderWidth: 1,
      },
      {
        label: "Acc in Y",
        data: fetchedData.rotationYData.avgArray,
        borderColor: [
          "green",
        ],
        borderWidth: 1,
      },
      {
        label: "Acc in Z",
        data: fetchedData.rotationZData.avgArray,
        borderColor: [
          "violet",
        ],
        borderWidth: 1,
      }
    ],
  };



  return (
    <Layout>

      <ToastContainer />
      <Grid direction="row"
        alignItems="center"
        justifyContent="center" container spacing={2}>
        <Grid item sm={12} md={7}>
          {/* <button onClick={() => showNotification()}>Show notification</button> */}
     
          <div className="sos-container">
            <a href="tel:+011-24363260">
              <button id="earthquake-sos">
                <Image width={150} height={150} className="sos-img" src="/sos.png" alt="IGSCS Logo" />
                <h4 className="sos-heading">EARTHQUAKE</h4></button>
            </a>
            <a href="tel:+91-108">
              <button id="tsunami-sos"> <Image width={150} height={150} className="sos-img" src="/sos.png" alt="IGSCS Logo" /><h4 className="sos-heading">TSUNAMI</h4></button>
            </a>
            <a href="tel:+91-101">
              <button id="fire-sos"> <Image width={150} height={150} className="sos-img" src="/sos.png" alt="IGSCS Logo" /><h4 className="sos-heading">FIRE</h4></button>
            </a>
          </div>
        </Grid>
        <Grid item sm={12} md={5}>
          <div>


            <Stack style={{ width: '100%' }} alignItems="center"
              justifyContent="center" direction='row'>
              <DatePickerComponent
                startDate={startDate}
                SetStartDate={SetStartDate}
                endDate={endDate}
                SetEndDate={SetEndDate}
              />
              <Button onClick={() => chartDataFilter()} endIcon={<FilterAltIcon />}
                style={{ backgroundColor: '#BC6C25', borderRadius: '1rem', borderRadius: '1rem', color: 'white', marginTop: '1rem', marginBottom: '1rem', padding: '0.7rem' }} >
                <b>  Click To Filter</b>
              </Button>

            </Stack>
          </div>
        </Grid>
      </Grid>


      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography textAlign="center" fontWeight={900} variant="h3" sx={{ color: "#208850", marginBottom: "3rem" }} >Sensor 1</Typography>

        {entries?.map((element) => {
          return (<>

            <Grid container spacing={2}>

              <Grid item sm={12} md={4}>
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
                        <h5>Acceleration Trend</h5>
                      </div>
                      <div style={{ padding: "3px" }}>
                        <Line
                          height={180}
                          data={avgaccdata}
                        />
                      </div>
                    </>
                  </ResponsiveContainer>
                </div>
              </Grid>
              <Grid item sm={12} md={4}>
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
                        }}>
                        <h5>Rotation Trend</h5>
                      </div>
                      <div style={{ padding: "3px" }}>
                        <Line
                          height={180}
                          data={avgrotationdata}
                        />
                      </div>
                    </>
                  </ResponsiveContainer>
                </div>
              </Grid>


              <Grid item sm={12} md={4}>
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
                        <h5>Temperature</h5>
                      </div>
                      <div style={{ marginTop: "-5rem" }}>
                        <TempGauge value={element.temperature} />
                      </div>
                      <Typography fontWeight={900} variant="h3" align="center" >{parseFloat(element.temperature).toFixed(2)} °C</Typography>
                    </>
                  </ResponsiveContainer>
                </div>
              </Grid>
            </Grid>
          </>)
        })}
      </Paper>

    </Layout >
  );
}

export async function getServerSideProps() {
  await db.connect();
  // Array of all devices in entries collection
  const devices = await EarthquakeEntries.find({}).distinct('deviceName').lean()
  await db.disconnect();

  var array = new Array();
  for (const item of devices) {
    // finding last entries of all devices and pushing in an Array
    await db.connect();
    let x = await EarthquakeEntries.find({ deviceName: item }).sort({ _id: -1 }).limit(1).lean()
    await db.disconnect();
    array.push(x.map(db.convertDocToObj)[0])
  }
  return {
    props: {
      entries: array,
    },
  };
}

