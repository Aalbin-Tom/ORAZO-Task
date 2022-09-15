import React, { useEffect, useState } from 'react'
import { TableBody, TableCell, TableContainer, TableHead, Table, TableRow, Paper } from '@mui/material'
import axios from 'axios'
import { Container } from '@mui/system'


function Admin() {

  const [Details, setDetails] = useState([])



  const details = (async () => {
    const detail = await axios.get('/admin/details')
    console.log(detail);
    setDetails(detail.data.details)
  })


  useEffect(() => {
    details()

  }, [])


  return (
    <div >

      <h1 style={{ color: "black", paddingLeft: "6rem", fontSize: "2.3rem" }}>DETAILS LIST</h1>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%" }} size="small" aria-label="a dense table" >
            <TableHead  >
              <TableRow >
                <TableCell sx={{ fontSize: '17px', width: "0.5%", fontWeight: "bold" }}>SL.NO</TableCell>
                <TableCell sx={{ fontSize: '17px', fontWeight: "bold" }} align="center">First Name</TableCell>
                <TableCell sx={{ fontSize: '17px', fontWeight: "bold" }} align="center">Last Name</TableCell>
                <TableCell sx={{ fontSize: '17px', fontWeight: "bold" }} align="center">Email</TableCell>
                <TableCell sx={{ fontSize: '17px', fontWeight: "bold" }} align="center">Requirement</TableCell>
                <TableCell sx={{ fontSize: '17px', fontWeight: "bold" }} align="center">Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Details?.map((detail, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right">{index + 1}</TableCell>
                    <TableCell align='center' >{detail.firstname}</TableCell>
                    <TableCell align='center' >{detail.lastname}</TableCell>

                    <TableCell align='center' component="th" scope="row">
                      {detail.email}
                    </TableCell>
                    <TableCell align="center"> {detail.requirement} </TableCell>
                    <TableCell align="center"> {detail.phone} </TableCell>
                  </TableRow>)
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

    </div >
    // <div> <h1>haloo</h1></div>
  )
}


export default Admin
