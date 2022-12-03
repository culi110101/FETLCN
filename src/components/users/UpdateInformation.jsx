import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from 'react-redux'
import avatarUser from '../../assets/img/avatar_user.png'
import Carousel from 'react-bootstrap/Carousel';
import { getProfileAction } from "../../store/entities/user";
import { updateProfileAction } from "../../store/entities/user";
import { editFreelancerAction } from "../../store/entities/freelancer";
import swal from 'sweetalert'


const UpdateInformation = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const {user, freelancer} = useSelector(state => state.user.getProfile)
    const {success} = useSelector(state => state.user.updateProfile)
    const [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        experience: '',
        introduction: '',
        gender: 'Male'
    })

    useEffect(() => {
        dispatch(getProfileAction())
    }, [dispatch])

    useEffect(() => {
        if (user && freelancer){
            console.log(user)
            setInfo({
                ...info,
                phone: user.phone,
                address: user.address,
                email: user.email,
                experience: user.experience,
                introduction: user.introduction,
                firstName: freelancer.firstName,
                lastName: freelancer.lastName,
                gender: freelancer.gender
            })
        }
        
    }, [user, freelancer])

    const getInfo = (event) => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        })
    }

    const submitUpdate = () => {
        dispatch(updateProfileAction(info))
        dispatch(editFreelancerAction({
            firstName: info.firstName,
            lastName: info.lastName,
            gender: info.gender
        }))
    }

    useEffect(() => {
        if (success){
            swal({
                title: "Success",
                text: "Update Profile Successfully",
                icon: "success",
                dangerMode: false,
            })
        }
    }, [success])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="updateInformation">
            <div className="updateInformation__content">
                <div className="mb-3">
                    <img src={avatarUser} />
                    <label className="form-label">Choose a profile picture</label>
                    <input type="file"
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg"></input>
                </div>
                <div className="mb-3 w-100 block-name">
                    <div className="d-flex">
                        <div className="col-6 pe-3 block-name--firstname">
                            <label className="form-label">First Name</label>
                            <input name='firstName' onChange={getInfo} value={info.firstName} className="form-input" type="text" placeholder="First Name" />
                        </div>
                        <div className="col-6 block-name--lastname">
                            <label className="form-label">Last Name</label>
                            <input name='lastName' onChange={getInfo} value={info.lastName} className="form-input" type="text" placeholder="Last Name" />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input name='phone' onChange={getInfo} value={info.phone} className="form-input" type="tel" placeholder="Phone Number" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender </label>
                    <select value={info.gender} className="dropdown w-100" name="category" onChange={getInfo} defaultValue={'0'}>
                        <option className="w-100" value="Male" selected>Male</option>
                        <option className="w-100" value="Female" selected>Female</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">E-mail</label>
                    <input name='email' onChange={getInfo} value={info.email} className="form-input" type="email" placeholder="example@gmail.com" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input name='address' onChange={getInfo} value={info.address} className="form-input" type="text" placeholder="Binh Thanh TP.HCM" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Experience</label>
                    <input name='experiences' onChange={getInfo} value={info.experience} className="form-input" type="text" placeholder="3 years in software development" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Choose a CV</label>
                    <input type="file"
                        id="avatar" name="avatar"
                        accept="application/pdf"></input>
                </div>
                <div>
                    <label htmlFor="decription">About your</label>
                    <textarea onChange={getInfo} value={info.introduction} name='introduction' id="decription" rows="5"></textarea>
                </div>
                <div className="d-flex mt-3">
                    <div className="col-6 pe-3">
                        <Button onClick={submitUpdate} variant="primary" type="submit" className="btn-go-to-home">
                            Update
                        </Button>
                    </div>
                    <div className="col-6">
                        <Button variant="primary" type="submit" className="btn-go-to-home" onClick={handleClose}>
                            Close
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateInformation
