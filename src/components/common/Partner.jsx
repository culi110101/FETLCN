import React from 'react'
import Logo_UTE from '../../assets/img/ute_logo.png';
import Logo_FHQ from '../../assets/img/fhq_logo.png';
import Logo_FIT from '../../assets/img/fit_logo.png';


const Partner = () => {
  return (
    <div className='partner'>
      <div className='container partner-content'>
      <h2>Get hired in top companies</h2>
      <div className='d-flex'>
        <a className='col-4 d-flex justify-content-center partner__img'>
            <img className='w-50' src={Logo_FHQ}></img>
        </a>
        <a className='col-4 d-flex justify-content-center partner__img'>
            <img className='w-50' src={Logo_UTE}></img>
        </a>
        <a className='col-4 d-flex justify-content-center partner__img'>
            <img className='w-50' src={Logo_FIT}></img>
        </a>
        
      </div>
      </div>
    </div>
  )
}

export default Partner
