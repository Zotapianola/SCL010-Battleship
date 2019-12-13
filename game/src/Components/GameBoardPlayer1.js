import React, { useState } from 'react';
//import { usePieceState } from './Pieces';
import './GameBoard.css';
import {ContexPlayer1} from '../Views/Game';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Input } from '@material-ui/core';

const GameBoardPlayer1 = () => {

  //importando contesto
  const {dataPlayer1, setdataPlayer1} = React.useContext(ContexPlayer1);
  // creando la tabla
  const createTablePlayer1=()=>{
    // fijar tamaño de tabla
    let tableHeight = 10;
    let tableWidth =10;
    let table = [];

    for (let h = 0; h < tableHeight; h++) {
      let row = [];
      for (let w = 0; w < tableWidth; w++) {
       row[w] = { state:false, x: h, y: w};
      }
      table[h] = row;
    }
    
    //llenar la tabla
    for (let index = 0; index < dataPlayer1.pieces.length; index++) {
      let piece = dataPlayer1.pieces[index];
      for (let i=piece.x; i< piece.x + piece.sizeH; i++){
        for (let j=piece.y; j< piece.y + piece.sizeV; j++){
          table [i][j].state = true; 
        }
      }     
    }
    console.log(dataPlayer1)
    for (let i = 0; i < dataPlayer1.checkedPositions.length; i++) {
      let position = dataPlayer1.checkedPositions[i];
      table [position.x][position.y].checked = true;
    }
    return table;
  }


  const [tableState, setTableState] = useState(createTablePlayer1());
  
  const copyTable = (table) =>{
    return table.map( x => {
      return x.map( y => {
        return { ...y} 
       })
     });
  }

  const positionColor = (position) => {
    if(position.state){
      if(position.checked){
        return "cleanDog";
      }else{
        return "dirtyDog";
      }
    }else{
      if (position.checked){
        return "water";
      }
    }
    return "emptyCell";
  }

    return (
      <div id='gameBoard'>
        <Paper>
          <Table id='boardPlayer1'>
            <TableBody>
              {tableState.map(row => (
                <TableRow>
                  {row.map(position => (
                    <TableCell
                      data={[position.x, position.y]}
                      className={positionColor(position)}
                      onClick={() =>
                        console.log("clic")
                      }
                    >
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
};

export default GameBoardPlayer1;
