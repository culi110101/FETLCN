import React from 'react'
import Header from '../components/layer/Header'
import Footer from '../components/layer/Footer'


const JobItemsLayer = () => {
    let body = (
        <div className='body mt-5 pt-5'>
          <p>404</p>
          <button>back to home</button>
        </div>
    )

  return (
    <div>
        <Header></Header>
      {body}
      <Footer></Footer>
    </div>
  )
}

export default JobItemsLayer