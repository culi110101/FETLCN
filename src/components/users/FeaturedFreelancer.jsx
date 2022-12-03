import React from 'react'
import FreelancerItems from '../freelancer/FreelancerItems'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getFreelancersAction } from '../../store/entities/freelancer'

const FeaturedFreelancer = () => {
  const dispatch = useDispatch()
  const {freelancers, freelancersSkills, numComments} = useSelector(state => state.freelancer.getFreelancers)
  useEffect(() => {
    dispatch(getFreelancersAction())
  }, [dispatch])
  return (
    <div className='container featuredjobs'>
      <div className='d-flex justify-content-center'>
        <div className='featuredjobs__content'>
          <h2 className='featuredjobs__content--header text-center'>Featured Freelancer</h2>
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
          {freelancers.length != 0 && freelancers.map((freelancer, index) => (
            <li key={freelancer.id} className='text-center'>
              <FreelancerItems freelancer={freelancer} skills={freelancersSkills[index]} numComment={numComments[index]}></FreelancerItems>
            </li>
          ))}

          {/* <li className='text-center'>
            <FreelancerItems></FreelancerItems>
          </li>
          <li className='text-center'>
            <FreelancerItems></FreelancerItems>
          </li> */}
      </ul>
    </div>
  )
}

export default FeaturedFreelancer
