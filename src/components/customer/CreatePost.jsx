import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
/* import { getAllCategoriesAction } from "../../store/entities/category";
import { createJobAction } from "../../store/entities/job";
import { getMyJobsAction } from "../../store/entities/job"; */
import swal from 'sweetalert';

const CreatePost = () => {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()
    /* const {categories } = useSelector(state => state.category.getAllCategories)
    
    const {successCreateJob} = useSelector(state => state.job.createJob) */
    const categories = []
    useEffect(() => {
        /* dispatch(getAllCategoriesAction()) */
    }, [dispatch])

    const [jobData, setData] = useState({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        minPrice: 0,
        maxPrice: 0,
        category: ""
    })

    const getInfo = (event) => {
        setData({
            ...jobData,
            [event.target.name]: event.target.value
        })
    }

    const submitCreateJob = () => {
        console.log(jobData)
        /* dispatch(createJobAction(jobData)) */
    }

    useEffect(() => {
        /* if (successCreateJob){
            swal({
                title: "Create Job",
                text: "Create Job Successfully",
                icon: "success",
                dangerMode: false,
              })
            dispatch(getMyJobsAction({ limit: 3, page: 1 }))
            
        } */
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="createpost">
            <Button onClick={handleShow} variant="primary" type="submit" className="btn-create-post">
                + POST A NEW JOB
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <div className="createpost">
                        <div className="createpost__content">

                            <div className="mb-3">
                                <label className="form-label">Name Of Job</label>
                                <input name='name' onChange={getInfo} className="form-input" type="text" placeholder="Name Of Job" />
                            </div>
                            <div className="mb-3 w-100 block-date">
                                <div className="d-flex">
                                    <div className="col-6 mb-3 pe-3">
                                        <label className="form-label">Start Day</label>
                                        <input name='startDate' onChange={getInfo} className="form-input" type="date" placeholder="Start Day" />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <label className="form-label">End Day</label>
                                        <input name='endDate' onChange={getInfo} className="form-input" type="date" placeholder="End Day" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 w-100 block-price">
                                <div className="d-flex">
                                    <div className="col-6 mb-3 pe-3">
                                        <label className="form-label">Price</label>
                                        <input name='minPrice' className="form-input" type="number" placeholder="Limited Price" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Type Of Job </label>
                                <select  className ="dropdown w-100" name="category" onChange={getInfo} defaultValue={'0'}>
                                    <option className ="w-100" value="0" selected>Type Of Job</option>
                                    {categories && categories.map((category) => (
                                        <option className ="w-100" value={category.id} selected>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="decription">Decription</label>
                                <textarea className='' name="description" onChange={getInfo} id="decription" rows="5"></textarea>
                            </div>
                            <div className="d-flex mt-3">
                                <div className="col-6 pe-3">
                                    <Button onClick={submitCreateJob} variant="primary" type="submit" className="btn-go-to-home">
                                        Create
                                    </Button>
                                </div>
                                <div className="col-6">
                                    <Button variant="primary" type="submit" className="btn-go-to-home" onClick={handleClose}>
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CreatePost
