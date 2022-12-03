import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const FormReview = () => {
    return (
        <div>
            <form action="#">
                <div className='d-block d-md-flex'>
                    <div class="col-12 col-md-6 rate__content__star-rating">
                        <div class="d-flex justify-content-center rate__content__star-rating--start">
                            <input type="ratio" id="start1" name="rating" defaultValue="1"></input>
                            <label htmlFor="start1" title="1 start">☆</label>
                            <input type="ratio" id="start2" name="rating" defaultValue="2"></input>
                            <label htmlFor="start2" title="2 start">☆</label>
                            <input type="ratio" id="start3" name="rating" defaultValue="3"></input>
                            <label htmlFor="start3" title="3 start">☆</label>
                            <input type="ratio" id="start4" name="rating" defaultValue="4"></input>
                            <label htmlFor="start4" title="4 start">☆</label>
                            <input type="ratio" id="start5" name="rating" defaultValue="5"></input>
                            <label htmlFor="start5" title="5 start">☆</label>
                        </div>
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
