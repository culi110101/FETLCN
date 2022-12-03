import React from 'react'
import Header from '../components/layer/Header'
import Footer from '../components/layer/Footer'
import Introduction from '../components/users/Introduction'
import Overview from '../components/users/Overview'
import UpdateInformation from '../components/users/UpdateInformation'
import Review from '../components/common/Review'
import FormReview from '../components/common/FormReview'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileAction } from '../store/entities/user'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ProfileCompany = () => {
    const dispatch = useDispatch()

    const { user } = useSelector(state => state.user.getProfile)

    useEffect(() => {
        dispatch(getProfileAction())
    }, [])
    let body = (
        <div className='body'>
            <div className='profileuser'>
                <div className='container'>
                    <div className='d-block d-md-flex'>
                        <div className='col-12 col-md-4 sticky'>
                            <p>đây là company</p>
                            {user && <Button><Link className='text-light' to="/updateprofile">Setting</Link></Button>}
                        </div>
                        <div className='col-12 col-md-8 px-md-3'>
                            <div className='profileuser-content'>
                                <Overview></Overview>
                                <div className='profileuser-content__contact'>
                                    <p className='profileuser-content__contact--heading'>Leave me your review</p>
                                    {user && (<FormReview user={user}></FormReview>)}
                                </div>
                            </div>
                            <div className='profileuser-content__review'>
                                <Review></Review>
                                <Review></Review>
                                <Review></Review>
                                <Review></Review>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <Header></Header>
            {body}
            <Footer></Footer>
        </div>
    )
}

export default ProfileCompany
