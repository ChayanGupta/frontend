import React from 'react'
import '../CSS/footer.css'

export default function Footer() {
  return (
    <div id='contact' className='text-center' style={{ backgroundColor: '#337ab7', padding: '1rem' }}>
      <div className='contact-us container' style={{ color: 'white' }}>
        <div>
          <h4><i className="fa fa-phone"></i> &nbsp;Call us</h4>
          <p>+91 8770205201</p>
        </div>
        <div>
          <h4><i className="fa fa-envelope"></i> &nbsp;Email</h4>
          <a className='gmail-link' href="mailto:cgplinen@gmail.com">cgplinen@gmail.com</a>
        </div>
        <div>
          <h4><i className='fas fa-map-marker-alt'></i> &nbsp;Location</h4>
          <p>44, Mahalaxmi Nagar, Near Vijay Nagar,<br /> INDORE MP, 452001</p>
        </div>
      </div>
      <b>&#169; 2022 CGP Linen. All Rights Reserved.</b>
    </div>
  )
}
