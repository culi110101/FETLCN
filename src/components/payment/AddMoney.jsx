import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
/* import { getCreditsAction } from '../../store/entities/credit' */

const AddMoney = () => {

    const dispatch = useDispatch()

    /* const { credits } = useSelector(state => state.credit.getCredits) */
    const credits = []


    useEffect(() => {
        /* dispatch(getCreditsAction(3)) */
    }, [])


    return (
        <div className='add-money'>
            <div className='container'>
                <h2 className="add-money--heading text-center">
                    POINTS CHANGE PRICE LIST
                    <div className="d-flex add-money__items">
                        {credits && credits.map((credit, index) => (
                            <div key={index} className="col-lg-4 hang add-money__items__card">
                                <div className="add-money__items__card__content mx-auto">
                                    <span className="add-money__items__card__content__icon">
                                        <i className="lp-medal d-flex align-items-center"></i>
                                    </span>
                                    <p className="add-money__items__card__content--heading">{credit.name}</p>
                                    <p className="add-money__items__card__content--price">
                                        {credit.price}$ - {credit.points} points
                                    </p>
                                    {/* <span className="add-money__items__card__content__decription">
                                        <p className="add-money__items__card__content__decription--content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <p className="add-money__items__card__content__decription--content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <p className="add-money__items__card__content__decription--content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <p className="add-money__items__card__content__decription--content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </span> */}
                                    <div className="d-flex justify-content-center add-money__items__card__content__btn">
                                        <a href="#section-contact" className="d-flex align-items-center pulse">
                                            <p className="me-lg-1 mb-0">
                                                Pay Now
                                            </p>
                                            <i className="d-flex align-items-center lp-circel-arrow-up"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* <div className="col-lg-4 hang add-money__items__card">
                            <div className="add-money__items__card__content mx-auto">
                                <span className="add-money__items__card__content__icon">
                                    <i className="lp-medal d-flex align-items-center"></i>
                                </span>
                                <p className="add-money__items__card__content--heading">THEO Ý TƯỞNG</p>
                                <p className="add-money__items__card__content--price">
                                    800.000 đ
                                </p>
                                <span className="add-money__items__card__content__decription">
                                    <p className="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <p className="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <p className="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <p className="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </span>
                                <div className="d-flex justify-content-center add-money__items__card__content__btn">
                                    <a href="#section-contact" className="d-flex align-items-center pulse">
                                        <p className="me-lg-1 mb-0">
                                            Đăng ký ngay
                                        </p>
                                        <i className="d-flex align-items-center lp-circel-arrow-up"></i>
                                    </a>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-4 hang add-money__items__card">
                            <div className="add-money__items__card__content mx-auto">
                                <span className="add-money__items__card__content__icon">
                                    <i className="lp-medal d-flex align-items-center"></i>
                                </span>
                                <p className="add-money__items__card__content--heading">THEO Ý TƯỞNG</p>
                                <p className="add-money__items__card__content--price">
                                    800.000 đ
                                </p>
                                <span className="add-money__items__card__content__decription">
                                    <p className="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <p className="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <p className="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <p className="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </span>
                                <div className="d-flex justify-content-center add-money__items__card__content__btn">
                                    <a href="#section-contact" className="d-flex align-items-center pulse">
                                        <p className="me-lg-1 mb-0">
                                            Đăng ký ngay
                                        </p>
                                        <i className="d-flex align-items-center lp-circel-arrow-up"></i>
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </h2>
            </div>
        </div>
    )
}

export default AddMoney
