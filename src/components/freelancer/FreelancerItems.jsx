import React from 'react'
import Avatar from '../../assets/img/avatar.png';
import { handleDate } from '../../common/lib';
import { useNavigate } from 'react-router-dom';

const FreelancerItems = () => {
  return (
    
    <div className='w-100'>
            {(job && category) && (
                <div onClick={() => goJobItemPage(job.id)} className='freelanceritems pulse'>
                    <div className='row mb-3 mb-md-0 block-name'>
                        <div className='col-12 col-md-6'>
                            <div className='d-flex'>
                                <img className='freelanceritems--avatar' src={Avatar}></img>
                                <div className='freelanceritems__headinfomation d-flex align-items-center'>
                                    <div>
                                        <p className='freelanceritems__headinfomation--header m-0'>{job.name}</p>
                                        <p className='freelanceritems__headinfomation--decription m-0'>{job.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='d-flex freelanceritems__price'>
                                {/* icon đô la */}
                                <i></i>
                                {/* số tiền target của job */}
                                <p className='freelanceritems__price--number'>
                                    <span>{job.minPrice}</span>
                                    <span>-</span>
                                    <span>{job.maxPrice}</span>
                                    &nbsp;
                                    Point
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-3 mb-md-0'>
                        <div className='col-12 col-md-6 mb-2 mb-0'>
                            <a className='freelanceritems--category text-capitalize'>{category.name}</a>
                        </div>
                        <div className='col-12 col-md-6 mb-2 mb-0'>
                            <p className='freelanceritems--timeforjob'>
                                <span className='mx-2'>
                                    Start day: &nbsp;
                                    <span>{handleDate(job.startDate)}</span>
                                </span>
                                &nbsp;
                                <span className='mx-2'>
                                    End day: &nbsp;
                                    <span>{handleDate(job.endDate)}</span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
  )
}

export default FreelancerItems
