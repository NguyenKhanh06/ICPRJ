import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { InputAdornment, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ColorButton } from '../../styles/button';
import "../../styles/home.css"
Filter.propTypes = {
    
};

function Filter(props) {
    const [age, setAge] = useState('');
    const [valueTo, setValueTo] = useState(null);
    const [valueFrom, setValueFrom] = useState(null);


    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <Stack
        sx={{marginBottom: 2, marginTop: 2, height: 75, backgroundColor: "#F0F0F0"}}
        justifyContent="space-around"
         direction="row"
        alignItems="center"
        spacing={0.4}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Status</InputLabel>
        <Select
          sx={{backgroundColor: "white"}}
          labelId="demo-select-small"
          id="demo-select-small"
          value={age}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <LocalizationProvider size="small" dateAdapter={AdapterMoment}>
      <DatePicker 
        label="From date"
        value={valueFrom}
        onChange={(newValueFrom) => {
          setValueFrom(newValueFrom);
        }}
        renderInput={(params) => <TextField size="small" {...params} sx={{backgroundColor: "white"}} />}
      />
    </LocalizationProvider>
    <LocalizationProvider size="small" dateAdapter={AdapterMoment}>
      <DatePicker 
        label="To date"
        value={valueTo}
        onChange={(newValueTo) => {
          setValueTo(newValueTo);
        }}
        renderInput={(params) => <TextField  size="small" {...params}  sx={{backgroundColor: "white"}}/>}
      />
    </LocalizationProvider>
    <TextField
          id="outlined-start-adornment"
          size='small'
          sx={{backgroundColor: "white"}}
          placeholder='Search'
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
          }}
        />
          <ColorButton size='small' variant="contained">Search</ColorButton>

          </Stack>
      
    );
}

export default Filter;