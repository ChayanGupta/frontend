import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import {setIsAuthenticate,setUserInfo} from '../../Actions/UserActions'
import '../../CSS/login.css'

export default function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const completeLogin = e => {
    e.preventDefault()

    axios.post('http://localhost:8082/user/login', values)
      .then(res => {
        if (res.status === 200 && res.data.email !== null) {
          dispatch(setIsAuthenticate(true))
          dispatch(setUserInfo({ email: res.data.email, role: res.data.role }))
          toast.success('Login Successfull', { autoClose: 2000, toastId:'error'})
          if(res.data.role!=='admin'){
            navigate('/')
          }
          else{
            navigate('/admin')
          }
        } else {
          toast.info("Please Login with Correct Credentials!!", { autoClose: 3000 })
        }
      }).catch(err => {
        toast.warning('Something went wrong', { autoClose: 3000 })
      })

    setValues({
      email: "",
      password: ""
    })
  };


  return (
    <div className='login-form-background'>
      <div className="login-form">
        <div className="form-box solid">
          <form onSubmit={completeLogin}>
            <h1 className="login-text">Sign In</h1>
            <label>Email</label>
            <br></br>
            <input type="email" name="email" className="login-box" value={values.email} onChange={handleInputs} />
            <br></br>
            <label>Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" value={values.password} onChange={handleInputs} />
            <br></br>
            <input type="submit" value="LOGIN" className="login-btn" />
          </form>
        </div>
      </div>
    </div>
  )
}
