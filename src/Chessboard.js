import React, {useState} from "react";
import "./chess.css";


export default function Gameboard() {

const [isPieceClicked, setIsPieceClicked] = useState(false)
const [pieceLocation, setPieceLocation] = useState([0,0])
const [clickedLocation, setClickedLocation] = useState([0,0])


const chessboard = [
  [0, 1 , 2 ,3, 4, 5 ,6, 7 ],
  [0, 1 , 2 ,3, 4, 5 ,6, 7 ],
  [0, 1 , 2 ,3, 4, 5 ,6, 7 ],
  [0, 1 , 2 ,3, 4, 5 ,6, 7 ],
  [0, 1 , 2 ,3, 4, 5 ,6, 7 ],
  [0, 1 , 2 ,3, 4, 5 ,6, 7 ],
  [0, 1 , 2 ,3, 4, 5 ,6, 7 ],
  [0, 1 , 2 ,3, 4, 5 ,6, 7 ]
]

// const movePiece = (x , y) => {
// if(isPieceClicked) {
// setPieceLocation(x,y)
// }
// }

const getClickedLocation = (e) => {
  console.log(e)
  // setClickedLocation(x,y)
}

const renderRow = (row, index) => {
const columns = []

  for(let x = 0; x < row.length; x++ ){

    let piece = null

    if (index === pieceLocation[0] && x === pieceLocation[0]){
     piece = <div className="piece"> </div>
    }

    if(index % 2 === 0) {
        columns.push(
       <div className="column" y-index={index} x-index={x} onClick={(e) => getClickedLocation(e)}> {piece} </div>
    )
    } else {
        columns.push(<div className="columnOdd" y-index={index} x-index={x} onClick={(e) => getClickedLocation(e)}></div>)
    }
  }
return <div className="row" >{columns}</div> //return columns
}


  return(
    <div>
      <div id="chess-board">
      {
        chessboard.map((row, index) => renderRow(row,index)) //add key!
      }

      </div>
    </div>
  )
}
