import './ResetButton.css'
import React from 'react'

export const ResetBoardButton = ({resetBoard}) => {
  return (
    <button className='reset-btn' onClick={resetBoard}>Reset Board</button>
  )
}
