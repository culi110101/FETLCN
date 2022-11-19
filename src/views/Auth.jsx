import React from 'react'
import Header from '../components/layer/Header'
import Footer from '../components/layer/Footer'
import Baner from '../components/common/Baner'
import Partner from '../components/common/Partner'
import Category from '../components/common/Category'
import FeaturedJobs from '../components/job/FeaturedJobs'
import AddMoney from '../components/payment/AddMoney'



const Auth = ({authRoute}) => {

    let body = (
        <div className='body'>
            <Baner />
            <Partner></Partner>
            <Category></Category>
            <FeaturedJobs></FeaturedJobs>
            <AddMoney></AddMoney>
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

export default Auth
