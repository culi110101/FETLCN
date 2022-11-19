import React from 'react'
import JobItems from './JobItems'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getJobsAction } from '../../store/entities/job'

const FeaturedJobs = () => {

  const dispatch = useDispatch()


  const {jobs, categories} = useSelector(state => state.job.getJobs)
  


  useEffect(() => {
    console.log("ok")
    dispatch(getJobsAction({num: 3, page:1}))
  }, [dispatch])



  return (
    <div className='container featuredjobs'>
      <div className='d-flex justify-content-center'>
        <div className='featuredjobs__content'>
          <h2 className='featuredjobs__content--header text-center'>Featured Jobs</h2>
          <p className='featuredjobs__content--decription text-center'>Leverage agile frameworks to provide a robust synopsis for high level overviews to start.</p>
        </div>
      </div>
      <ul>
        {(jobs && categories) && jobs.map((item, index) => (
          <li key={index} className='text-center'>
            <JobItems job={item} categories={categories[index]}></JobItems>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeaturedJobs
