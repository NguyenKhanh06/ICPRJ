import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Chip, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import Filter from '../Filter';
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ColorButton } from '../../../styles/button';
import { Link } from 'react-router-dom';

ProjectList.propTypes = {
    
};

function createData(name, calories, fat, carbs, protein, chip) {
    return { name, calories, fat, carbs, protein, chip };
  }
const rows = [
    createData(
      "Task 1",
      "Nguyen Cong Khanh",
      "20/12/2022",
      "20/12/2022",
      "Nguyen Cong Khanh",
      "todo"
    ),
    createData(
      "Task 1",
      "Nguyen Cong Khanh",
      "20/12/2022",
      "20/12/2022",
      "Nguyen Cong Khanh",
      "review"
    ),
    createData(
      "Task 1",
      "Nguyen Cong Khanh",
      "20/12/2022",
      "20/12/2022",
      "Nguyen Cong Khanh",
      "process"
    ),
    createData(
      "Task 1",
      "Nguyen Cong Khanh",
      "20/12/2022",
      "20/12/2022",
      "Nguyen Cong Khanh",
      "done"
    ),
    createData(
      "Task 1",
      "Nguyen Cong Khanh",
      "20/12/2022",
      "20/12/2022",
      "Nguyen Cong Khanh",
      "todo"
    ),
    createData(
      "Task 1",
      "Nguyen Cong Khanh",
      "20/12/2022",
      "20/12/2022",
      "Nguyen Cong Khanh",
      "process"
    ),
    createData(
      "Task 1",
      "Nguyen Cong Khanh",
      "20/12/2022",
      "20/12/2022",
      "Nguyen Cong Khanh",
      "todo"
    ),
    createData(
      "Task 1",
      "Nguyen Cong Khanh",
      "20/12/2022",
      "20/12/2022",
      "Nguyen Cong Khanh",
      "todo"
    ),
    createData(
      "Task 1",
      "Nguyen Cong Khanh",
      "20/12/2022",
      "20/12/2022",
      "Nguyen Cong Khanh",
      "todo"
    ),
    createData(
      "Task 1",
      "Nguyen Cong Khanh",
      "20/12/2022",
      "20/12/2022",
      "Nguyen Cong Khanh",
      "process"
    ),
    createData(
      "Task 1",
      "Nguyen Cong Khanh",
      "20/12/2022",
      "20/12/2022",
      "Nguyen Cong Khanh",
      "todo"
    ),
    createData(
      "Task 1",
      "Nguyen Cong Khanh",
      "20/12/2022",
      "20/12/2022",
      "Nguyen Cong Khanh",
      "todo"
    ),
    createData(
      "Task 1",
      "Nguyen Cong Khanh",
      "20/12/2022",
      "20/12/2022",
      "Nguyen Cong Khanh",
      "review"
    ),
    createData(
      "Task 1",
      "Nguyen Cong Khanh",
      "20/12/2022",
      "20/12/2022",
      "Nguyen Cong Khanh",
      "todo"
    ),
    createData(
      "Task 1",
      "Nguyen Cong Khanh",
      "20/12/2022",
      "20/12/2022",
      "Nguyen Cong Khanh",
      "review"
    ),
  ];
function ProjectList(props) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    return (
        <>
        <Stack
          sx={{ marginTop: 1 }}
          justifyContent="space-around"
          direction="row"
          alignItems="center"
          spacing="57%"
        >
          <Stack
            justifyContent="space-around"
            direction="row"
            alignItems="center"
          >
            {/* <Button
              sx={{ marginRight: 10 }}
              size="small"
              color="success"
              startIcon={<ArrowBackIcon />}
              onClick={handleClose}
              variant="outlined"
            >
              Back
            </Button> */}
            <Typography variant="h5" component="h2" gutterBottom>
              List project
            </Typography>
          </Stack>
          <Link to="/admin/create-project">
          <ColorButton
            endIcon={<AddIcon />}
            variant="contained"
          >
            Create project
          </ColorButton>
          </Link>
  
        </Stack>
  
        <Filter />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow hover>
                <TableCell sx={{ fontWeight: 700 }}>No</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="left">
                  Project's name
                </TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="left">
                  Start date < ArrowUpwardIcon sx={{width: 20}}/>
                </TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="left">
                  End date < ArrowUpwardIcon sx={{width: 20}}/>
                </TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="left">
                  Course
                </TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="left">
                  Leader
                </TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="left">
                 Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    hover
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{index + 1}</TableCell>
  
                    <TableCell component="th" scope="row">
                    <Link to="/admin/detail-project">
                    <Button
                    
                        sx={{ color: "black" }}
                        variant="text"
                      >
                        {row.name}
                      </Button>
          </Link>
                    </TableCell>
                    <TableCell align="left">{row.calories}</TableCell>
                    <TableCell align="left">{row.fat}</TableCell>
                    <TableCell align="left">{row.carbs}</TableCell>
                    <TableCell align="left">{row.carbs}</TableCell>
                    <TableCell align="left">
                      {row.chip === "todo" ? (
                        <Chip label="To do" color="warning" />
                      ) : row.chip === "process" ? (
                        <Chip label="Process" color="primary" />
                      ) : row.chip === "review" ? (
                        <Chip label="Review" color="secondary" />
                      ) : (
                        <Chip label="Done" color="success" />
                      )}
                    </TableCell>
            
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
  
      </>
    );
}

export default ProjectList;