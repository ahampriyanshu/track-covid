import {getComparator, stableSort} from '../../utils';
import Rotating from '../Rotating/Rotating.jsx';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, {useState} from 'react';
import CountUp from 'react-countup';

import './DataTable.css';

const useStyles = makeStyles((theme) => ({
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

const DataTable = ({data, value, index}) => {
  const classes = useStyles();
  const [orderBy, setOrderBy] = useState('confirmed');
  const [order, setOrder] = useState('desc');

  let firstLabel = ' ';

  if (value !== index) return null;
  if (index === 1) {
    firstLabel = 'State/UT';
    data = data && data.stateData ? data.stateData : [];
  } else if (index === 2) {
    firstLabel = 'Country';
  }

  const headCells = [
    {id: 'stateName', numeric: false, disablePadding: false, label: firstLabel},
    {id: 'confirmed', numeric: true, disablePadding: false, label: 'Confirmed'},
    {id: 'recovered', numeric: true, disablePadding: false, label: 'Recovered'},
    {id: 'deaths', numeric: true, disablePadding: false, label: 'Deceased'},
  ];

  const tableData =
    data && !data.length ? (
      <TableRow>
        <TableCell align="center" colSpan={6}>
          <Rotating />
        </TableCell>
      </TableRow>
    ) : (
      stableSort(data, getComparator(order, orderBy)).map(
        ({
          stateName,
          confirmed,
          recovered,
          deaths,
          deltaconfirmed,
          deltadeaths,
          deltarecovered,
        }) => {
          return (
            <TableRow key={stateName} hover>
              <TableCell
                component="th"
                scope="row"
                className="table-cell state-name"
              >
                {stateName}
              </TableCell>
              <TableCell align="right" className="table-cell">
                {deltaconfirmed > 0 ? (
                  <Typography className="counterConfirmed">
                    +{deltaconfirmed}
                  </Typography>
                ) : null}
                <CountUp
                  start={0}
                  end={confirmed ? confirmed : 0}
                  duration={2.5}
                  separator=","
                />
              </TableCell>
              <TableCell align="right" className="table-cell">
                {deltarecovered > 0 ? (
                  <Typography className="counterRecovered">
                    +{deltarecovered}
                  </Typography>
                ) : null}
                <CountUp
                  start={0}
                  end={recovered ? recovered : 0}
                  duration={2.5}
                  separator=","
                />
              </TableCell>
              <TableCell align="right" className="table-cell">
                {deltadeaths > 0 ? (
                  <Typography className="counterDeaths">
                    +{deltadeaths}
                  </Typography>
                ) : null}
                <CountUp
                  start={0}
                  end={deaths ? deaths : 0}
                  duration={2.5}
                  separator=","
                />
              </TableCell>
            </TableRow>
          );
        }
      )
    );

  const handleSort = (property) => (event) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <div className="datatable-container">
      <Paper className="paper" elevation={0}>
        <TableContainer  padding="normal" className="random">
          <Table  padding="normal" className="table" size="small" stickyHeader>
            <TableHead  padding="normal">
              <TableRow  padding="normal">
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? 'right' : 'left'}
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                    sortDirection={orderBy === headCell.id ? order : false}
                    className="table-cell"
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={handleSort(headCell.id)}
                      className="t-head"
                    >
                      {headCell.label}
                      {orderBy === headCell.id ? (
                        <span className={classes.visuallyHidden}>
                          {order === 'desc'
                            ? 'sorted descending'
                            : 'sorted ascending'}
                        </span>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>{tableData}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default React.memo(DataTable);
