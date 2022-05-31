import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { setBrandsDetail } from '../Actions/BrandsAction'
import { setProductsDetail } from '../Actions/ProductsAction'

import '../CSS/brands.css'

export default function Brands({ changeUI, setIsHome, setBrandName }) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { brandsDetail } = useSelector((state) => state.brandsReducer)


  useEffect(() => {
    axios.get('http://localhost:8082/admin/all-brand')
      .then(res => {
        dispatch(setBrandsDetail(res.data))
      }).catch(err => {
        console.log(err)
        toast.error('Something went wrong', { autoClose: 2000, toastId: 'error' })
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeUI])

  const handleClick = (id,brandName) => {
    setBrandName(brandName)
    if (id !== 0) {
      setIsHome(false)
      axios.post('http://localhost:8082/product/fetch-products', { id })
        .then(res => {
          if (res.status === 200) {
            dispatch(setProductsDetail(res.data))
            navigate('/')
          }
        }).catch(err => {
          toast.error('Something went wrong', { autoClose: 2000, toastId: 'error' })
        })
    } else {
      setIsHome(true)
      navigate('/')
    }
  }

  return (
    <div className='home mt-3'>
      <div className='brands'>
        <p className='mx-3 brand-name' onClick={() => handleClick(0)}>Home</p>
        {brandsDetail.length > 0 && brandsDetail?.map((e, index) => {
          return <p className='mx-3 brand-name' onClick={() => handleClick(e.id,e.brandName)} key={index}>{e.brandName}</p>
        })}
      </div>
    </div>
  )
}