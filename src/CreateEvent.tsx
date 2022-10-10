import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { Button } from "@mui/material";
import TagInput from "./component/general/TagInput";
import FormLabel from "@mui/material/FormLabel";
import Container from "@mui/material/Container";
import { useReducer } from "react";
import FormControl from "@mui/material/FormControl";

export default function CreateEvent() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  //Reducer

  const formInitialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    eventName: "",
    location: "",
    quota: "",
    startDate: "",
    startTime: ""
  };

  const [inputValues, dispatchFormValue] = useReducer(
    (curVal, newVal) => ({ ...curVal, ...newVal }),
    formInitialState
  );

  const {
    firstName,
    lastName,
    email,
    password,
    eventName,
    location,
    quota,
    startDate,
    startTime
  } = inputValues;

  const reducerInputChange = (e) => {
    const { name, value } = e.target;
    dispatchFormValue({ [name]: value });

    console.log(inputValues);
  };

  const onFormSubmit2 = (e) => {
    e.preventDefault();
    console.log("submitted2 hahaha=");
    console.log(inputValues);
  };

  //
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    //dispatchFormValue({ [startDate]: newValue });
    dispatchFormValue({ startDate: newValue });
    console.log("date picjker hahaha=" + newValue);
    console.log(inputValues);
  };

  return (
    <Container fixed>
      <form onSubmit={onFormSubmit2}>
        <Stack spacing={3}>
          <FormLabel id="radios" sx={{ color: "rgba(200, 132, 39, .8)" }}>
            Create Event
          </FormLabel>

          <TextField
            id="eventName"
            name="eventName"
            label="Event Name"
            variant="outlined"
            value={eventName}
            onChange={reducerInputChange}
          />
          <TextField id="eventLocation" label="Location" variant="outlined" />
          <TextField
            id="eventPeople"
            label="Quota"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label="Start Date"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="Time"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <TagInput />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
