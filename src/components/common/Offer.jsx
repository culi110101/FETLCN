import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from "react";
/* import { offerJobAction } from "../../store/entities/job"; */
import { useDispatch } from "react-redux";

const Offer = ({job}) => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const [offerInfo, setInfo] = useState({
        price: 0
    })

    const getInfo = (event) => {
        setInfo({
            ...offerInfo,
            price: event.target.value
        })
    }

    const offerJob = () => {
        /* dispatch(offerJobAction({offerData: offerInfo, id: job.id})) */
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="offer">
                <div className="btn-apply" onClick={handleShow}>
                Apply to this job
                </div>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Body>
                        <div className='offer-block'>
                            <div className='container'>
                            <div className="close" onClick={handleClose}>
                                    <FontAwesomeIcon icon={faClose} />
                                </div>
                                <div className=''>
                                    <div className='offer__content'>
                                        <div className='offer__content__heading'>
                                            Price you want to offer
                                        </div>
                                        <div className='offer__content__input'>
                                            <input onChange={getInfo} type="number" min="0" placeholder="Enter your price" />
                                        </div>
                                        <div className='offer__content__btn'>
                                            <button onClick={offerJob}> Send Request</button>
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

export default Offer
