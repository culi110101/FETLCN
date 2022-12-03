import React from 'react'
import Header from '../components/layer/Header'
import Footer from '../components/layer/Footer'
import Baner from '../components/common/Baner'
import Partner from '../components/common/Partner'
import Category from '../components/common/Category'
import FeaturedJobs from '../components/job/FeaturedJobs'
import AddMoney from '../components/payment/AddMoney'
import FeaturedFreelancer from '../components/users/FeaturedFreelancer'



const Auth = ({authRoute}) => {

  return (
    <>
       <Baner />
        <Partner />
        <Category />
        {/* <FeaturedJobs></FeaturedJobs> */}
        <FeaturedFreelancer />
        <AddMoney />
    </>
  )
}

export default Auth
