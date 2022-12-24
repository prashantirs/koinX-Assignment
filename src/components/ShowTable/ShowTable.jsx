import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ShowTable.css";

const ShowTable = ({ rows }) => {
  return (
    <>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="number" align="left">#</TableCell>
              <TableCell align="left" >Name</TableCell>
              <TableCell align="left" >Price</TableCell>
              <TableCell align="left" >24H🔻</TableCell>
              <TableCell className="number" align="left">7D</TableCell>
              <TableCell className="number" align="left">Market Cap</TableCell>
              <TableCell className="number" align="left">Volume</TableCell>
              <TableCell className="number" align="left">Circulating Supply</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow onClick={()=>{console.log(row.id)}} className="changeWidth tableRow" key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell className="number" component="th" scope="row">
                    {row.market_cap_rank}
                  </TableCell>
                  <TableCell align="left">
                    <div className="logoText mobileText ">
                      <div>
                        <img src={row.image} alt={row.id} height={20} width={20} />
                      </div>
                      <div>{row.id.slice(0,1).toUpperCase() + row.id.slice(1)}</div>
                      <div>{row.symbol.toUpperCase()}</div>
                    </div>
                  </TableCell>
                  <TableCell align="left" className="mobileText" >{`$${row.current_price}`}</TableCell>
                  <TableCell align="left" className="mobileText" >{row.high_24h}</TableCell>
                  <TableCell className="number" align="left">{row.low_24h}</TableCell>
                  <TableCell className="number" align="left">{row.market_cap}</TableCell>
                  <TableCell className="number" align="left">{row.total_volume}</TableCell>
                  <TableCell className="number" align="left">{row.circulating_supply}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ShowTable;
