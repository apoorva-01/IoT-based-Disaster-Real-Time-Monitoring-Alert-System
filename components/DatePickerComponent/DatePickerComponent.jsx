import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import moment from 'moment'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerComponent({ startDate, SetStartDate, endDate, SetEndDate }) {

  const [pickerValue, setPickerValue] = useState(moment(startDate, "YYYY-MM-DD").add(0, 'days').format("YYYY-MM-DDTHH:mm:ss"))
  function setValue(value) {
    setPickerValue(moment(value, "YYYY-MM-DD").format("YYYY-MM-DD"))
    SetStartDate(moment(value, "YYYY-MM-DD").add(0, 'days').format("YYYY-MM-DD"))
    SetEndDate(moment(value, "YYYY-MM-DD").add(1, 'days').format("YYYY-MM-DD"))
  }


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box m={2}>
        <DatePicker
          label="Choose a date"
          views={["year", "month", "day"]}
          format="DD-MM-YYYY"
          value={pickerValue}
          onChange={(newValue) => {
            setValue(moment(newValue).format("YYYY-MM-DDTHH:mm:ss"))
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
    </LocalizationProvider>
  );
}
