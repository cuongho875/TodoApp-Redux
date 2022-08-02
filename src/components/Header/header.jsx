import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { logout } from '../../auth/authconfig'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
export default function Header() {
  const [user]=useAuthState(auth);
  return (
    <div className="header">
      <div className="header-title">
        <FontAwesomeIcon icon={faCircle} size="lg"/>
        <div>Todo React Redux</div>
      </div>
      {user?(
      <div className="header-account">
        <div>Hi,{user.displayName} </div>
        <div className="logout" onClick={logout}>LogOut</div>
      </div>
      ):''}
    </div>
  )
}
