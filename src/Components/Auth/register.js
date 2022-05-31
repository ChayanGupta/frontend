import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { setIsAuthenticate, setUserInfo } from '../../Actions/UserActions'
import '../../CSS/login.css'

export default function Register() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {isAuthenticate} = useSelector((state)=>state.userReducer)

  useEffect(()=>{
    if(isAuthenticate)
      navigate('/')
  })

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const completeLogin = e => {
    e.preventDefault()

    axios.post('http://localhost:8082/user/register', values)
      .then(res => {
        if (res.status === 200 && res.data.email !== null) {
          dispatch(setIsAuthenticate(true))
          dispatch(setUserInfo({ email: res.data.email, role: res.data.role }))
          toast.success('Register Successfull', {autoClose: 2000})
          navigate('/')
        } else {
          toast.info("User with this email already exists!!", { autoClose: 3000 })
        }
      }).catch(err => {
        toast.warning('Something went wrong', {autoClose: 3000})
      })

    setValues({
      username: "",
      email: "",
      password: ""
    })
  };


  return (
    <div className='login-form-background'>
      <div className="login-form">
        <div className="form-box solid">
          <form onSubmit={completeLogin}>
            <h1 className="login-text">Sign Up</h1>
            <label>Username</label>
            <br></br>
            <input type="text" name="username" className="login-box" value={values.username} onChange={handleInputs} />
            <br></br>
            <label>Email</label>
            <br></br>
            <input type="email" name="email" className="login-box" value={values.email} onChange={handleInputs} />
            <br></br>
            <label>Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" value={values.password} onChange={handleInputs} />
            <br></br>
            <input type="submit" value="REGISTER" className="login-btn" />
          </form>
        </div>
      </div>
    </div>
  )
}