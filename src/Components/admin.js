import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import '../CSS/admin.css'

export default function Admin({setChangeUI,changeUI}) {

    const {isAuthenticate} = useSelector((state)=>state.userReducer)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!isAuthenticate){
            navigate('/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isAuthenticate])

    const [values, setValues] = useState({
        brandname:"",
        productName:"",
        price:"",
        productImageURL:"",
        bulletpoints:"",
        uniqueId:Math.random().toString(36).toUpperCase().substring(2, 10)
    })

    const [productId, setProductId] = useState("")
    const [brandName, setBrandName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        axios.post('http://localhost:8082/product/add-product',values)
            .then(res=>{
                if(res.status === 200){
                    toast.info('Product Added Successfully',{autoClose:2000,toastId:'error'})
                    setChangeUI(!changeUI)
                }else{
                    toast.error('Something went wrong',{autoClose:2000,toastId:'error'})
                }
            }).catch(err=>{
                toast.error('Something went wrong',{autoClose:2000,toastId:'error'})
            })
        setValues({
            brandname:"",
            productName:"",
            price:"",
            productImageURL:"",
            bulletpoints:"",
            uniqueId:Math.random().toString(36).toUpperCase().substring(2, 10)
        })
    }

    const handleDeleteProductSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8082/product/delete-product',{id:productId})
            .then(res=>{
                if(res.status === 200){
                    toast.dark('Product Deleted Successfully',{autoClose:2000,toastId:'error'})
                    setChangeUI(!changeUI)
                }
                else
                    toast.info('Something went wrong',{autoClose:2000,toastId:'error'})
            }).catch(err=>{
                toast.error('Something went wrong',{autoClose:2000,toastId:'error'})
            })
        setProductId("")
    }

    const handleDeleteBrandSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8082/admin/delete-brand',{brandName})
            .then(res=>{
                console.log(res.status)
                if(res.status === 200){
                    toast.dark('Product Deleted Successfully',{autoClose:2000,toastId:'error'})
                    setChangeUI(!changeUI)
                }
                else
                    toast.info('Something went wrong',{autoClose:2000,toastId:'error'})
            }).catch(err=>{
                toast.error('Something went wrong',{autoClose:2000,toastId:'error'})
            })
        setBrandName("")
    }

    const handleChange = (e) =>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    return (
        <div className='container admin mb-3'>
            <div className='add-product'>
                <h3 className='text-center'>Add a Product</h3>
                <div className='container'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter Brand name' name='brandname' value={values.brandname} onChange={handleChange} required />
                        <input className='my-2' type="text" placeholder='Enter Product name' value={values.productName} name='productName' onChange={handleChange} required />
                        <input type="text" placeholder='Enter Price' name='price' value={values.price} onChange={handleChange} required />
                        <input type="url" placeholder='Enter Image url' name='productImageURL' value={values.productImageURL} onChange={handleChange} required/>
                        <textarea className='my-2' rows={7} placeholder="Enter bullet points" value={values.bulletpoints} name='bulletpoints' onChange={handleChange} required />
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='delete'>
                <div className='delete-product'>
                    <h3 className='text-center'>Delete a Product</h3>
                    <div className='container'>
                        <form onSubmit={handleDeleteProductSubmit}>
                            <input type="text" placeholder='Enter Product Id' name='productId' onChange={(e)=>setProductId(e.target.value)} value={productId} className='my-2' required />
                            <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        </form>
                    </div>
                </div>
                <div className='delete-brand my-4'>
                <h3 className='text-center'>Delete a Brand</h3>
                    <div className='container'>
                        <form onSubmit={handleDeleteBrandSubmit}>
                            <input type="text" placeholder='Enter Brand Name' name='brandName' onChange={(e)=>setBrandName(e.target.value)} value={brandName} className='my-2' required />
                            <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
