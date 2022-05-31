import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import {setIsAuthenticate,setUserInfo} from '../Actions/UserActions'

import '../CSS/navbar.css'

export default function Navbar() {

  const {isAuthenticate, user} = useSelector((state)=>state.userReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(setIsAuthenticate(false))
    dispatch(setUserInfo({}))
    navigate('/login')
  }

  return (
    <nav className='navbar navbar-light bg-dark'>
      <div className='container'>
        <h2>CGP LINEN</h2>
        <ul>
            <li className='mx-5'><Link className='link' to="/">Home</Link></li>
            <li><a className='link' href="#contact">Contact</a></li>
            {isAuthenticate?<>
            {user.role==='admin'?<li className='mx-4' style={{cursor:'pointer'}}><Link className='link' to="/admin">Admin</Link></li>:null}
            <li className='mx-5' style={{cursor:'pointer'}} onClick={handleClick}><i className='fas fa-user-alt'></i> Logout</li>
            <li><i className='fas fa-user-circle'></i> {user.email}</li>
            </>:
            <>
            <li className='mx-5' ><Link className='link' to="/login"><i className='fas fa-user-alt'></i> Login</Link></li>
            <li><Link className='link' to="/register"><i className='fas fa-user-circle'></i> Signup</Link></li>
            </>
            }
        </ul>
        </div>
    </nav>
  )
}