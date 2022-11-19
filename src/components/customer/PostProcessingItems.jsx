import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Avatar from '../../assets/img/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import ManageJobProcessing from "./ManageJobProcessing";
import DecriptionJob from "../common/DecriptionJob";

const PostProcessingItems = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="postprocessingitems">
                <div className="postprocessingitems__heading" variant="primary" onClick={handleShow}>
                    Senior Project Manager
                </div>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Body>
                        <div className='postprocessingitems'>
                            <div className='container'>
                            <div className="close" onClick={handleClose}>
                                    <FontAwesomeIcon icon={faClose} />
                                </div>
                                <div className='postprocessingitems-block'>
                                    <div className='postprocessingitems__content'>
                                        <div className='postprocessingitems__content__heading'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='postprocessingitems__content__heading__right d-flex'>
                                                    <img className='postprocessingitems__content__heading__right--avatar pe-4 pb-4' src={Avatar}></img>
                                                    <div>
                                                        <h3 className='postprocessingitems__content__heading__right--header'>
                                                            Product Designer
                                                        </h3>
                                                        {/* tên người đăng */}
                                                        <p className='postprocessingitems__content__heading__right--name'>
                                                            Name
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='postprocessingitems__content__heading__left d-flex'>
                                                    <div className='postprocessingitems__content__heading__left__freelancer d-flex'>
                                                        {/* ngày đăng */}
                                                        <h3 className='postprocessingitems__content__heading__left__freelancer--name'>
                                                            Freelancer's Name
                                                        </h3>
                                                    <img className='postprocessingitems__content__heading__left__freelancer--avatar ms-4' src={Avatar}></img>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <div className='d-flex'>
                                                    <div className='d-flex postprocessingitems__price'>
                                                        {/* icon đô la */}
                                                        <i></i>
                                                        {/* số tiền target của job */}
                                                        <p className='postprocessingitems__price--number'>
                                                            <span>80</span>
                                                            &nbsp;
                                                            Point
                                                        </p>
                                                    </div>
                                                    <div className=''>
                                                        <p className='postprocessingitems--timeforjob'>Start day: &nbsp;
                                                            <span>2022-10-19</span>
                                                            &nbsp;
                                                            End day: &nbsp;
                                                            <span>2022-10-19</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='postprocessingitems__content__body'>
                                            <DecriptionJob></DecriptionJob>
                                            <ManageJobProcessing></ManageJobProcessing>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default PostProcessingItems
