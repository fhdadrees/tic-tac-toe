import React from 'react'

const NewGame = ({newGame}) => {
  return (
    <div>
        <button onClick={newGame} className='w-40 h-12 text-2xl bg-white m-10 bg-gradient-to-r from-red-700 to-blue-700 text-white rounded-lg shadow-black shadow-sm hover:shadow-md hover:shadow-black'>New Game</button>
    </div>
  )
}

export default NewGame