import React from 'react'
import './Box.css'


const Box = ({value, onClick}) => {

    const style = value === "X" ? "text-red-700" : "text-blue-700";

  return (
    <button className={`${style} shadow-sm bg-white rounded-xl pb-2 text-[10em] border-none w-32 h-32 sm:w-36 sm:h-36 font-bold text-center leading-[0rem] hover:shadow-lg`} onClick={onClick}>{value}</button>
  )
}

export default Box