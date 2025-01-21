import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React, { useState } from 'react'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const Home = () => {
    const[fname,setName]=useState('');
    const [count1,setCount]=useState(0);
    
    const changeValue=()=>{
        setName('Sir')
    }
    const changeCount=()=>{
         setCount(count1+1)
    }
  return (
    <>
    <h1>A Hearty Welcome {fname}</h1>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table" style={{"backgroundColor":"red","border":"1px"}}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer><br />
    <Button variant="contained" onClick={changeValue} style={{"backgroundColor":"orange"}}>Change</Button>&nbsp;
    <Button variant="contained" onClick={changeCount} style={{"backgroundColor":"green"}}>Count</Button>&nbsp;
    <small>Button pressed {count1}times</small><br /><br />
    <TextField id="outlined-basic" label="Enter your name" variant="outlined" value={fname}
       onChange={(e) => setName(e.target.value)}   />
    {/* <input type="text" placeholder="Enter your name" value={fname} onChange={(e) => setName(e.target.value)} /> */}
    <p>Your name is: {fname}</p>
    </>
  )
}

export default Home