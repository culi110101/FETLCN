import React from 'react'

const FeaturedFreelancer = () => {
  return (
    <div className='container featuredjobs'>
      <div className='d-flex justify-content-center'>
        <div className='featuredjobs__content'>
          <h2 className='featuredjobs__content--header text-center'>Featured Jobs</h2>
          <p className='featuredjobs__content--decription text-center'>Leverage agile frameworks to provide a robust synopsis for high level overviews to start.</p>
        </div>
      </div>
      <ul>
        {/* {jobs && jobs.map((item, index) => (
          <li key={index} className='text-center'>
            <JobItems job={item} category={categories[index]}></JobItems>
          </li>
        ))} */}
        {/* <li className='d-flex justify-content-center'>
            <JobItems></JobItems>
          </li>
          <li className='d-flex justify-content-center'>
            <JobItems></JobItems>
          </li> */}
          <li></li>
          <li></li>
          <li></li>
      </ul>
    </div>
  )
}

export default FeaturedFreelancer
