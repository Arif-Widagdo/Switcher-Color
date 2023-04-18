import React from 'react'

export default function Button({color, switchColor}) {
  return (
    <button
        className={color} 
        onClick={()=> switchColor(color)}
    >
            {color}
    </button>
  )
}
