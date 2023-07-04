import './ResetButton.css'
import React from 'react'

export const ResetScoreButton = ({resetScore}) => {
  return (
    <button className='reset-btn' onClick={resetScore}>Reset Score</button>
  )
}
