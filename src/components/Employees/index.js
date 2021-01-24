import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {},
});

function Employees(props) {
  let results = props.employees;
  const classes = useStyles();
//  console.log(results)
 
  return (
    
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="left">Picture/Username/Location</StyledTableCell>
              <StyledTableCell align="center"  className="user-select-all"
              scope="col"
              onClick={props.handleFormSubmit}>Name</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {results.map((result) => (
              <StyledTableRow key={result.id.value}>
                <StyledTableCell component="th" scope="row">
                  
                <Avatar alt="Cindy Baker" src={result.picture.large} align="center"/>
                <a href={"mailto:" + result.email} >{result.login.username}</a>

                <p>{result.location.city},{result.location.state}</p>
              
                </StyledTableCell>
  
                <StyledTableCell align="center">{result.name.first} {result.name.last}</StyledTableCell>
  
                <StyledTableCell align="center">{result.cell}</StyledTableCell>
                <StyledTableCell align="center">{result.email}</StyledTableCell>
                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        
      </TableContainer>
    );
  
}

export default Employees;