import React from 'react'
import Box from './Box'

const Board = ({ board, onClick, gameOver, whoWon }) => {

    let renderWinner = whoWon === "O" || whoWon === "X" ? `Winner ${whoWon}` : whoWon;

    if(!gameOver) {

    return (
        <div className='grid grid-cols-3 place-items-center justify-center h-[24rem] sm:h-[27rem] gap-2'>
            {board.map((value, idx) => {
                return <Box value={value} key={idx} onClick={() => value === null && onClick (idx)} />
            })}
        </div>
    )
        }else {

            return (
                <div className='h-[24rem] sm:h-[27rem] flex justify-center items-center '>
                    <h2 className='text-[5rem] sm:text-[6rem]'>{renderWinner}</h2>
                </div>
            )
        }
}

export default Board