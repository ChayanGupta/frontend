import React from 'react'
import { useSelector } from 'react-redux'

export default function Product() {

    const { productDetail } = useSelector((state) => state.productReducer)

    return (
        <div className='container'>
            <div className="card mb-3" style={{color:'black'}}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={productDetail.productImageURL} className="img-fluid rounded-start" alt="SLider1" style={{height:'100%'}}/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h4 className="card-title">{productDetail.productName}</h4>
                            <h5 className="card-text" style={{color:'red'}}>${productDetail.price}</h5>
                            <ul>
                                {productDetail.bulletpoints.split('\n').map((e,index)=>{
                                    return <li key={index}>{e}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
