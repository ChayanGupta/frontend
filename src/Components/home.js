import React, { useEffect } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import { setProductDetail } from '../Actions/ProductActions'
import { setProductsDetail } from '../Actions/ProductsAction'

import Slider1 from '../Images/slider-1.jpg'
import Slider2 from '../Images/slider-2.jpg'
import Slider3 from '../Images/slider-3.jpg'
import Slider4 from '../Images/slider-4.jpg'
import '../CSS/home.css'

export default function Home({ isHome, brandName }) {

  const images = [{ url: Slider1 }, { url: Slider2 }, { url: Slider3 }, { url: Slider4 }]

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { productsDetail } = useSelector((state) => state.productsReducer)

  useEffect(() => {
    if (isHome) {
      axios.get('http://localhost:8082/product/all-products')
        .then(res => {
          if (res.status === 200) {
            dispatch(setProductsDetail(res.data))
          }
        }).catch(err => {
          toast.error('Something went wrong', { autoClose: 2000, toastId: 'error' })
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHome])

  const handleOnClick = (e) => {
    dispatch(setProductDetail(e))
    navigate('/product-page')
  }

  return (
    <>
      {isHome ? <SimpleImageSlider
        width="98.7vw"
        height="90%"
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={1}
        autoPlay={true}
      /> : <div className='container my-2' style={{width:'fit-content', border:'2px solid grey',backgroundColor:'#337ab7'}}>
          <h3>{brandName}</h3>
        </div>}
      <div className='container home-card mb-5' style={isHome?{marginTop:'100vh'}:{marginTop:'2vh'}}>
        {productsDetail.length > 0 && productsDetail?.map((e, index) => {
          return <div className="card" key={index} style={{ width: '18rem' }} onClick={()=>handleOnClick(e)}>
            <img src={e.productImageURL} className="card-img-top" alt="product" height="200px" />
            <div className="card-body">
              <p className="card-text text-center" style={{ textTransform: 'capitalize' }}>{e.productName}</p>
              <p className='text-center' style={{ color: 'gray' }}><i className="fa fa-shopping-cart" style={{ color: 'red' }}></i> ${e.price}</p>
              <p className='text-center'>Product Code: {e.uniqueId}-{e.brandId}-{e.id}</p>
            </div>
          </div>
        })}
      </div>
    </>
  )
}