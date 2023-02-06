import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { StyledTextField } from "../../../styles/textfield";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { ColorButton } from "../../../styles/button";
import AddIcon from "@mui/icons-material/Add";
import TextareaAutosize from '@mui/base/TextareaAutosize';

CreateProject.propTypes = {};

function CreateProject(props) {
  const [inputValue, setInputValue] = useState({
    name: "",
    course: "",
    leader: "",
    partner: "",
    description: "",
  });
  const [ estimate_start, setEstimate_start] = useState(null);
  const [ estimate_end, setEstimate_end] = useState(null);
  const [ regis_open, setRegis_open] = useState(null);
  const [  regis_close, setRegis_close] = useState(null);

  const handleOnChangeInputProject = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const input = {
      ...inputValue,
      [name]: value,
    };

    setInputValue(input);
  };
  console.log("handleOnChangeInputProduct", inputValue);

  const onKeyDown = (e) => {
    e.preventDefault();
 };

 const handleSubmit =  (e) => {

console.log("inputValue", inputValue)
console.log("inputValue", estimate_start)
console.log("inputValue",  regis_open)
 }
  return (
   <form onSubmit={handleSubmit}>
     <Box>
      <Link>
        <Button
          sx={{
            float: "left",
            marginBottom: 4,
          }}
          variant="outlined"
          color="success"
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Link>
      <p style={{ padding: "6px 0px 0px 10px" }} className="title-section">
        CREATE PROJECT
      </p>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F0F0F0",
          width: "100%",
          padding: "40px 20px 20px 40px",
          borderRadius: "20px"
        }}
      >

<Box
sx={{
  borderBottom: "1px solid black",
  borderBottomWidth: "100%",
}}
>
          <Typography
            sx={{
              paddingBottom: 2,
              float: "left",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            Create new project
          </Typography>
         
        </Box>

        <Box   sx={{
            marginTop: 3
        }}>
          <Typography
            sx={{
              float: "left",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            Project's Name
          </Typography>
          <StyledTextField
            label="Project's name"
            autoComplete="off"
            fullWidth
            size="small"
            name="name"
            value={inputValue.name}
            onChange={handleOnChangeInputProject}
          />
        </Box>

        <Stack
        sx={{
            marginTop: 3
        }}
         justifyContent="space-between"
         direction="row"
         alignItems="center"
         spacing="5%">
        <Box>
          <Typography
            sx={{
              float: "left",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            Estimate time start
          </Typography>
          <LocalizationProvider size="small" dateAdapter={AdapterMoment}>
      <DatePicker 
        label="To date"
        value={estimate_start}
        onChange={(newValueTo) => {
            setEstimate_start(newValueTo);
          }}
          sx={{width: " 548px"}}
        renderInput={(params) => <StyledTextField  onKeyDown={onKeyDown}  size="small" {...params}  sx={{backgroundColor: "white", width: '548px'}}/>}
      />
    </LocalizationProvider>
        </Box>
        <Box>
          <Typography
            sx={{
              float: "left",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            Estimate time end
          </Typography>
          <LocalizationProvider size="small" dateAdapter={AdapterMoment}>
      <DatePicker 
        label="To date"
        name = "estimate_end"
        value={estimate_end}
        onChange={(newValueTo) => {
            setEstimate_end(newValueTo);
          }}
          sx={{width: "548px"}}
        renderInput={(params) => <StyledTextField  onKeyDown={onKeyDown}  size="small" {...params}  sx={{backgroundColor: "white" , width: '548px'}}/>}
      />
    </LocalizationProvider>
        </Box>
        </Stack>
        <Stack
        sx={{
            marginTop: 3
        }}
         justifyContent="space-between"
         direction="row"
         alignItems="center"
         spacing="5%">
        <Box>
          <Typography
            sx={{
              float: "left",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            Registration Opening Time
          </Typography>
          <LocalizationProvider size="small" dateAdapter={AdapterMoment}>
      <DatePicker 
        label="To date"
        value={regis_open}
        onChange={(newValueTo) => {
            setRegis_open(newValueTo);
          }}
          sx={{width: " 548px"}}
        renderInput={(params) => <StyledTextField  onKeyDown={onKeyDown}  size="small" {...params}  sx={{backgroundColor: "white", width: '548px'}}/>}
      />
    </LocalizationProvider>
        </Box>
        <Box>
          <Typography
            sx={{
              float: "left",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            Registration Opening Close
          </Typography>
          <LocalizationProvider size="small" dateAdapter={AdapterMoment}>
      <DatePicker 
        label="To date"
        name = "regis_close"
        value={regis_close}
        onChange={(newValueTo) => {
           setRegis_close(newValueTo);
          }}
          sx={{width: "548px"}}
        renderInput={(params) => <StyledTextField  onKeyDown={onKeyDown}  size="small" {...params}  sx={{backgroundColor: "white" , width: '548px'}}/>}
      />
    </LocalizationProvider>
        </Box>
        </Stack>

        <Box 
           sx={{
            marginTop: 3
        }}
        >
          <Typography
            sx={{
              float: "left",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            Course
          </Typography>
          <FormControl fullWidth>
        <Select
        size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputValue.course}
          name= "course"
          onChange={handleOnChangeInputProject}
          sx={{backgroundColor: "white"}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Stack  sx={{
            marginTop: 3
        }}
         direction="row"
         alignItems="center"
         spacing="5%">
             <Link>
          <Button variant="text">View detail course</Button>
          </Link>
      <Link>
      <ColorButton
            endIcon={<AddIcon />}
            variant="contained"
          >
            Create course
          </ColorButton>
          </Link>
         
      </Stack>
      
        </Box>

        <Stack
        sx={{
            marginTop: 3
        }}
         justifyContent="space-between"
         direction="row"
         alignItems="center"
         spacing="5%">
        <Box>
          <Typography
            sx={{
              float: "left",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
           Leader
          </Typography>
          <FormControl  sx={{width: "548px"}}>
        <Select
        size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputValue.leader}
          name= "leader"
          onChange={handleOnChangeInputProject}
          sx={{backgroundColor: "white"}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Box>
        <Box>
          <Typography
            sx={{
              float: "left",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            Partner
          </Typography>
          <FormControl  sx={{width: "548px"}}>
        <Select
        size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={inputValue.partner}
          name= "partner"
          onChange={handleOnChangeInputProject}
          sx={{backgroundColor: "white"}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Box>
        </Stack>

        <Box
           sx={{
            marginTop: 3
        }}
        >
          <Typography
            sx={{
              float: "left",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            Project Description
          </Typography>
          <StyledTextField
            label="Description"
            autoComplete="off"
            fullWidth
            size="small"
            name="description"
            value={inputValue.description}
            onChange={handleOnChangeInputProject}
            multiline={true}
          />
        </Box>
        <Box sx={{marginTop: 6, marginLeft: "86%"}}>
        <ColorButton
        onClick={() =>{
            handleSubmit();
        }}
            variant="contained"
          >
            Create Project
          </ColorButton>
        </Box>
      </Box>
      
    </Box>
   </form>
  );
}

export default CreateProject;
