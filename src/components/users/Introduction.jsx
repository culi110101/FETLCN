import React from 'react'
import Avatar from '../../assets/img/avatar.png'
import Status from "../common/Status";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Introduction = ({ user }) => {
    return (
        <div>

            {user && (
                <div className='profileuser__information'>
                    <div className='profileuser__information__heading'>
                        <img className='profileuser__information__heading--avatar' src={Avatar}></img>
                        <p className='profileuser__information__heading--name'>{user.name}</p>
                        <p className='profileuser__information__heading--career'>Product Designer</p>
                    </div>
                    <div className='profileuser__information__detail'>
                        <div className='profileuser__information__detail__location text-center'>
                            <i></i>
                            <p className='profileuser__information__detail--header my-2'>Location</p>
                            <p className='profileuser__information__detail--decription'>{user.country}</p>
                        </div>
                        <div className='profileuser__information__detail__email text-center'>
                            <i></i>
                            <p className='profileuser__information__detail--header my-2'>E-mail</p>
                            <p className='profileuser__information__detail--decription'>{user.email}</p>
                        </div>
                        <div className='profileuser__information__detail__phone text-center'>
                            <i></i>
                            <p className='profileuser__information__detail--header my-2'>Phone</p>
                            <p className='profileuser__information__detail--decription'>{user.phone}</p>
                        </div>
                        <div className='profileuser__information__detail__experience text-center'>
                            <i></i>
                            <p className='profileuser__information__detail--header my-2'>Experience</p>
                            <p className='profileuser__information__detail--decription'>3 years in software development</p>
                        </div>
                        <div className="profileuser__information__detail__star-rating my-2">
                            <div className='d-flex freelancer-items__rating'>
                                <span>4/5</span>
                                <FontAwesomeIcon icon={faStar} />
                                <span>( Đã có <span>1120</span> đánh giá )</span>
                            </div>
                        </div>
                        <div className="profileuser__information__detail__star-rating my-2">
                            <Status
                                status={false}
                            ></Status>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Introduction
