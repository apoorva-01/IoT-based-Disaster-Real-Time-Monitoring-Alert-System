import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';

export default function MonthPickerComponent({startDate, SetStartDate,endDate, SetEndDate}) {
  function ISTtoDate(date){
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    return `${year}-${month}-${day}`

  } 
  
  function setValue(value) {
      var month = value.getMonth()
      var  year = value.getFullYear();
       // GET THE FIRST AND LAST DATE OF THE MONTH.
       var FirstDay =ISTtoDate(new Date(year, month, 1));
       var LastDay =ISTtoDate(new Date(year, month + 1, 0));
      SetStartDate(FirstDay)
      SetEndDate(LastDay)
      console.log(startDate)
      console.log(endDate)
    }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box m={2}>
        <DatePicker
          inputFormat="yyyy-MM"
          views={["year", "month"]}
          format="MM-YYYY"
          label="Choose a Month"
          minDate={new Date('2012-03-01')}
          maxDate={new Date('2023-06-01')}
          value={startDate}
          onChange={setValue}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </Box>
    </LocalizationProvider>
  );
}
