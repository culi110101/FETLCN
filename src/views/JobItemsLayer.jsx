import React from 'react'
import Header from '../components/layer/Header'
import Footer from '../components/layer/Footer'
import JobDetails from '../components/job/JobDetails'


const JobItemsLayer = () => {
    let body = (
        <div className='body'>
          <JobDetails></JobDetails>
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
