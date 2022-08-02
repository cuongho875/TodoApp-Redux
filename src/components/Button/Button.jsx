import React from 'react'
import './button.scss'
export default function Button({authProvider,OnClick}) {
  return (
    <div className="button-sign_in">
        <button onClick={OnClick}>{authProvider}</button>
    </div>
  )
}
