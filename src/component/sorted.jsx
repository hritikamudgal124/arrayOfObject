import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import freshers from './utils';
import sortingFun from './function';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Sorted = () => {
  const classes = useStyles();
  const [data, setData] = useState(freshers);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('id');

  const handleSort = (property) => {
    let newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    let newData = sortingFun(property, newSortOrder, property === 'joining_date', 'DD/MM/YYYY hh:mm A');

    setSortOrder(newSortOrder);
    setSortBy(property);
    setData(newData);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Joining Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.joining_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Button variant="contained" color="primary" onClick={() => handleSort('id')}>
          Sort by ID
        </Button>
        <Button variant="contained" color="secondary" onClick={() => handleSort('name')}>
          Sort by Name
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleSort('joining_date')}>
          Sort by Date
        </Button>
      </Box>
    </div>
  );
};

export default Sorted;