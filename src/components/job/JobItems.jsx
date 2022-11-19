import React from 'react'
import Avatar from '../../assets/img/avatar.png';
import { handleDate } from '../../common/lib';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'react-bootstrap'

const JobItems = ({ job, category }) => {

    const navigate = useNavigate()

    const goJobItemPage = (id) => {
        navigate({
            pathname: '/items',
            search: `id=${id}`
        })
    }


    return (
        <div className='w-100'>
            {(job && category) && (
                <div onClick={() => goJobItemPage(job.id)} className='jobitems pulse'>
                    <div className='row mb-3 mb-md-0 block-name'>
                        <div className='col-12 col-md-6'>
                            <div className='d-flex'>
                                <img className='jobitems--avatar' src={Avatar}></img>
                                <div className='jobitems__headinfomation d-flex align-items-center'>
                                    <div>
                                        <p className='jobitems__headinfomation--header m-0'>{job.name}</p>
                                        <p className='jobitems__headinfomation--decription m-0'>{job.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='d-flex jobitems__price'>
                                {/* icon đô la */}
                                <i></i>
                                {/* số tiền target của job */}
                                <p className='jobitems__price--number'>
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
                            <a className='jobitems--category text-capitalize'>{category.name}</a>
                        </div>
                        <div className='col-12 col-md-6 mb-2 mb-0'>
                            <p className='jobitems--timeforjob'>
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

export default JobItems
