import React from 'react'

const Players = ({ score, xPlaying, board, playerXTurn, playerYTurn, gameOver}) => {
    const { xScore, oScore } = score;
    const bgX = xPlaying && !gameOver? "bg-red-700 text-white" : "bg-white text-black";
    const bgO = xPlaying || gameOver? "bg-white text-black" : "bg-blue-700 text-white";

    const cursor = !(board.includes("X") || board.includes("O")) && !gameOver? "cursor-pointer" : "cursor-not-allowed"

    const xScoreShadow = board.includes("X") || board.includes("O") ? "hover:shadow-lg" : " hover:shadow-xl"
    const oScoreShadow = board.includes("X") || board.includes("O") ? "hover:shadow-lg" : " hover:shadow-xl"

    return (
        <div className='flex w-[25rem] sm:w-[28rem] items-center justify-between h-24 gap-2 mb-12 mt-10'>
            <div className={`rounded-lg w-3/6 h-full flex justify-evenly items-center text-3xl sm:text-4xl ${cursor} ${bgX} ${xScoreShadow} shadow-lg`} onClick={playerXTurn}>
                <span>Score X: </span>
                <span> {xScore}</span>
            </div>
            <div className={`rounded-lg w-3/6 h-full flex justify-evenly items-center text-3xl sm:text-4xl ${cursor} ${bgO} ${oScoreShadow} shadow-lg`} onClick={playerYTurn}>
                <span>Score O: </span>
                <span> {oScore}</span>
            </div>
        </div>
    )
}

export default Players