import React from 'react'
import Avatar from '../../assets/img/avatar.png';
import { useDispatch, useSelector } from 'react-redux';
/* import { getJobByIdAction } from '../../store/entities/job'; */
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react';
import { handleDate } from '../../common/lib';
import Offer from '../common/Offer';
/* import { getTasksByJobAction } from '../../store/entities/task'; */
import { findJobByIdAction } from '../../store/entities/job';
const JobDetails = () => {
    const dispatch = useDispatch()

    let [searchParams, setSearchParams] = useSearchParams();

    const {job} = useSelector(state => state.job.findJobById)

    useEffect(() => {
        const id = searchParams.get('id')
        if (id) {
            dispatch(findJobByIdAction(id))
        }
    }, [dispatch])



    return (
        <div>
            {job && (
                <div className='jobdetail'>
                    <div className='container'>
                        <div className='jobdetail-block'>
                            <div className='jobdetail__content'>
                                <div className='jobdetail__content__heading'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='jobdetail__content__heading__right d-flex'>
                                            <img className='jobdetail__content__heading__right--avatar pe-4 pb-4' src={Avatar}></img>
                                            <div>
                                                <h3 className='jobdetail__content__heading__right--header'>
                                                    {job.name}
                                                </h3>
                                                {/* tên người đăng */}
                                                <p className='jobdetail__content__heading__right--name'>
                                                    {/* {user.name} */}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='jobdetail__content__heading__left d-flex'>
                                            <div>
                                                {/* ngày đăng */}
                                                <p className='jobdetail__content__heading__left--date'>
                                                    {handleDate(job.createdAt)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        {/* {job && <Offer job={job}></Offer>} */}
                                        <div className='d-flex'>
                                            <div className='d-flex jobdetail__price'>
                                                {/* icon đô la */}
                                                <i></i>
                                                {/* số tiền target của job */}
                                                <p className='jobdetail__price--number'>
                                                    {/* <span>{job.minPrice}</span>
                                                    <span>-</span>
                                                    <span>{job.maxPrice}</span>
                                                    &nbsp;
                                                    Point */}
                                                    <span>{job.price} $</span>
                                                </p>
                                            </div>
                                            <div className=''>
                                                <p className='jobdetail--timeforjob'>Start day: &nbsp;
                                                    <span>{handleDate(job.startDate)}</span>
                                                    &nbsp;
                                                    End day: &nbsp;
                                                    <span>{handleDate(job.expireDate)}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='jobdetail__content__body'>
                                    <div className=''>
                                        <div className='jobdetail__content__body__decription mb-5'>
                                            <h4 className='jobdetail__content__body__decription--heading mb-4'>Job Description</h4>
                                            <p className='jobdetail__content__body__decription--detail'>
                                                {job.description}
                                            </p>
                                        </div>
                                        <div className='jobdetail__content__body__tast mb-5'>
                                            <ul>
                                                <h4 className=' mb-4'>What you will be doing:</h4>
                                                {/* {tasks && tasks.map((task, index) => (
                                                    <li key={index}>{task.name}</li>
                                                ))} */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default JobDetails
