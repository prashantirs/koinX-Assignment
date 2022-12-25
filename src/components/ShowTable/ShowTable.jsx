import React,{useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ShowTable.css";
import { Button } from "@mui/material";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';

const ShowTable = ({ rows }) => {
  const [open, setOpen] = useState('');
  const [id, setId] = useState('')
  const [logo, setLogo] = useState('')
  const [price, setPrice] = useState()
  const [hour, setHour] = useState()
  const [day, setDay] = useState()
  const [marketcap, setMarketcap] = useState()
  const [volume, setVolume] = useState()
  const [cirsupply, setcirSupply] = useState()

  const [initialPage, setInitialPage] = useState(0);
  const [finalPage, setFinalPage] = useState(10);

  //pagination
  const renderRow = rows.slice(initialPage,finalPage);
  const handelPrevious = ()=>{
    setInitialPage(initialPage-10)
    setFinalPage(finalPage-10)
  }
  const handelNext = ()=>{
      setInitialPage(initialPage+10)
      setFinalPage(finalPage+10)
  }
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
            {renderRow.map((row) => (
              <TableRow onClick={()=>{
                setOpen('center');
                setId(row.id.slice(0,1).toUpperCase() + row.id.slice(1));
                setLogo(row.image)
                setPrice(row.current_price)
                setDay(row.high_24h)
                setHour(row.low_24h)
                setMarketcap(row.market_cap)
                setVolume(row.total_volume)
                setcirSupply(row.circulating_supply)

              }} className="changeWidth tableRow" key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>

                  


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
                  <TableCell className="number" align="left" style={{color:"red"}}>{row.low_24h}</TableCell>
                  <TableCell align="left" className="mobileText" style={{color:"green"}} >{row.high_24h}</TableCell>
                  <TableCell className="number" align="left">{row.market_cap}</TableCell>
                  <TableCell className="number" align="left">{row.total_volume}</TableCell>
                  <TableCell className="number" align="left">{row.circulating_supply}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={!!open} onClose={() => setOpen('')}>
        <ModalDialog
        variant="plain"
          className="Modalbox"    
          aria-labelledby="layout-modal-title"
          aria-describedby="layout-modal-description"
          layout={open || undefined}
        >
          <ModalClose />
          <Typography
            id="layout-modal-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="0.25em"
            className="modalboxtitle"
          >
            <div><img src={logo} alt={rows.id} height={20} width={20} /></div>
            <div className="names">{id}</div>
          </Typography>
          <div className="description">

            <div className="ModalTitle" id="layout-modal-description"  textColor="text.tertiary">
              <div className="price">
                <div>Price</div>
                <div>{price}</div>
              </div>
              <div className="hour">
                <div>24H🔻</div>
                <div style={{color:"red"}}>{hour}%</div>
              </div>
              <div className="day">
                <div>7D <span style={{color:"green"}}>🔼</span></div>
                <div style={{color:"green"}}>{day}</div>
              </div>
            </div>
            
            <Typography id="layout-modal-description" textColor="text.tertiary">
              <div className="marketcap">Market Cap</div>
              <div className="marketcap">{marketcap}</div>
            </Typography>
            <Typography id="layout-modal-description" textColor="text.tertiary">
              <div className="marketcap">Volume</div>
              <div className="marketcap">{volume}</div>
            </Typography>
            <Typography id="layout-modal-description" textColor="text.tertiary">
            <div className="marketcap">Circulating supply</div>
              <div className="marketcap">{cirsupply}BTC</div>
            </Typography>


          </div>       
        </ModalDialog>
      </Modal>

      <div className="pagination">
        <Button variant="solid" size="md" color="primary" disabled={initialPage === 0 ? true:false} onClick={handelPrevious}> {`<`} </Button>
        <div className="pageno">{`${initialPage+1} - ${finalPage}`}</div>       
        <Button variant="solid" size="lg" color="primary" disabled={finalPage === 100 ? true:false} onClick={handelNext}> {`>`} </Button>
        
      </div>    
    
    </>
  );
};

export default ShowTable;
