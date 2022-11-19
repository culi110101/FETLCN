import React from 'react'
import Button from "react-bootstrap/Button";
import UserDetail from './UserDetail';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { handleDate } from '../../common/lib';
const FreelancerApply = ({ job }) => {

    const dispatch = useDispatch()

    const { offers, count } = useSelector(state => state.job.getOffersByJob)

    useEffect(() => {
        if (job) {
            /* dispatch(getOffersByJobAction(job.id)) */
        }
    }, [job])

    return (
        <div className='freelancerapply__content'>
            <div className=''>
                <h4>
                    Freelancer Applied (<span>{count}</span>)
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
                                {offers && offers.map((offer, index) => (
                                    <tr key={index}>
                                        <th scope='row'>
                                            <UserDetail freelancer={offer.freelancer}></UserDetail>
                                        </th>
                                        <td>{handleDate(offer.createdAt)}</td>
                                        <td>
                                            <div className="d-flex justify-content-center profileuser__information__detail__star-rating--start">
                                                {offer.freelancer.rating.stars} 
                                                <label htmlFor="start1" title="1 start">☆</label>
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
