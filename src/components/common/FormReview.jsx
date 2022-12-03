import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const FormReview = () => {
    return (
        <div>
            <form action="#">
                <div className='d-block d-md-flex'>
                    <div className="">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                </div>
                <div>
                    <label htmlFor="name">Message</label>
                    <textarea className='' name="" id="" rows="5"></textarea>
                </div>
                <button className='btn-contact'>Send</button>
            </form>
        </div>
    )
}

export default FormReview
