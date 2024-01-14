import React from 'react'

export default function StartMenu({setRunning, handleChange, ...props}) {
  return (
      <div className='background'>
        <span 
        className='btn--start'
        onClick={(e) => {
          setRunning(true)
          }}
        >Start the game</span>

        <div className="select__time">
          <span>Time control</span>
          <div className="option">
            <input type="radio" id="option1" name="options" value="5+3" defaultChecked={true} onChange={handleChange}/>
            <label htmlFor="option1">5+3</label>
          </div>
          <div className="option">
              <input type="radio" id="option2" name="options" value="10+5" onChange={handleChange}/>
              <label htmlFor="option2">10+5</label>
          </div>
          <div className="option">
              <input type="radio" id="option3" name="options" value="30+0" onChange={handleChange}/>
              <label htmlFor="option3">30+0</label>
          </div>
          
        </div>

      </div>
  )
}
