import React, { useEffect } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router'
import './login.scss'
import Button from '../../components/Button/Button'
import { signInWithFacebook, signInWithGithub, signInWithGoogle } from '../../auth/authconfig'
export default function Login() {
    const [user,loading,error]=useAuthState(auth)
    const navigate=useNavigate()
    useEffect(()=>{
      if(user){
        navigate("/")
      }
    },[user])    
  return (
    <div className="Login">
      <div className="Login-title">
        <h3>Sign In</h3>
      </div>
      <div className="btns-auth-login">
        <Button authProvider="Google" OnClick={signInWithGoogle}/>
        <Button authProvider="FaceBook" OnClick={signInWithFacebook}/>
        <Button authProvider="GitHub" OnClick={signInWithGithub}/>

      </div>
    </div>
  )
}
