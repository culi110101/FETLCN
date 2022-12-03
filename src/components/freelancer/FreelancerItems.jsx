import React from 'react'
import Avatar from '../../assets/img/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const FreelancerItems = ({ freelancer, skills, numComment }) => {
    return (

        <div>
            {(freelancer && skills) && (
                <div className='w-100'>
                    <div className='freelancer-items pulse'>
                        <div className='row mb-3 mb-md-0 block-name'>
                            <div className='col-12 col-md-6'>
                                <div className='d-flex'>
                                    <img className='freelancer-items--avatar' src={Avatar}></img>
                                    <div className='freelancer-items__headinfomation d-flex align-items-center'>
                                        <div>
                                            <p className='freelancer-items__headinfomation--header m-0'>{freelancer.firstName + " " + freelancer.lastName}</p>
                                            <div className='freelancer-items__headinfomation--skill m-0'>SKILL:
                                                {/* {skills.map((skill, index) => (
                                                    <span>{skill.name}</span>
                                                ))}, */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='d-flex freelancer-items__rating'>
                                    <span>{freelancer.user.stars}/5</span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <span>( Đã có <span>{numComment}</span> đánh giá )</span>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-3 mb-md-0'>
                            <div className='mb-2 mb-0'>
                                <div className='freelancer-items__decription text-capitalize'>
                                    About me:
                                    <p>
                                        Email: {freelancer.user.email}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FreelancerItems
