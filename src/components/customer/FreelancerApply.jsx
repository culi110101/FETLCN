import React from 'react'
import Button from "react-bootstrap/Button";
import UserDetail from './UserDetail';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { handleDate } from '../../common/lib';
import { getAppliedsByJobAction } from '../../store/entities/applied';

const FreelancerApply = ({ job }) => {

    const dispatch = useDispatch()

    const { applies, length } = useSelector(state => state.applied.getAppliedsByJob)

    useEffect(() => {
        console.log(job)
        if (job) {
            dispatch(getAppliedsByJobAction({jobId: job.id, num:3, page:1}))
        }
    }, [job, dispatch])

    return (
        <div className='freelancerapply__content'>
            <div className=''>
                <h4>
                    Freelancer Applied (<span>{length}</span>)
                </h4>
                <div className='freelancerapply__content__postlist'>
                    <div className='freelancerapply__content__postlist__table'>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Applied on</th>
                                    <th scope='col'>Total Rate</th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {applies && applies.map((apply, index) => (
                                    <tr key={index}>
                                        <th scope='row'>
                                            <UserDetail freelancer={apply.freelancer}></UserDetail>
                                        </th>
                                        <td>{handleDate(apply.appliedAt)}</td>
                                        <td>
                                            <div className="d-flex justify-content-center profileuser__information__detail__star-rating--start">
                                                4
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <Button variant="primary" className="btn-contact-post">
                                                    Contact
                                                </Button>
                                                <Button variant="primary" className="btn-reject-post">
                                                    Reject
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreelancerApply
