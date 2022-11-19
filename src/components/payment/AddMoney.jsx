import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPackagesAction } from '../../store/entities/package'

const AddMoney = () => {

    const dispatch = useDispatch()

    const {packages} = useSelector(state => state.package.getPackages)


    useEffect(() => {
        dispatch(getPackagesAction(3))
    }, [dispatch])


    return (
        <div className='add-money'>
            <div className='container'>
                <h2 class="add-money--heading text-center">
                    POINTS CHANGE PRICE LIST
                    <div class="d-flex add-money__items">
                        {packages && packages.map((pack, index) => (
                            <div key={index} class="col-lg-4 hang add-money__items__card">
                                <div class="add-money__items__card__content mx-auto">
                                    <span class="add-money__items__card__content__icon">
                                        <i class="lp-medal d-flex align-items-center"></i>
                                    </span>
                                    <p class="add-money__items__card__content--heading">{pack.description}</p>
                                    <p class="add-money__items__card__content--price">
                                        {pack.price}$ - {pack.points} points
                                    </p>
                                    {/* <span class="add-money__items__card__content__decription">
                                        <p class="add-money__items__card__content__decription--content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <p class="add-money__items__card__content__decription--content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <p class="add-money__items__card__content__decription--content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <p class="add-money__items__card__content__decription--content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </span> */}
                                    <div class="d-flex justify-content-center add-money__items__card__content__btn">
                                        <a href="#section-contact" class="d-flex align-items-center pulse">
                                            <p class="me-lg-1 mb-0">
                                                Pay Now
                                            </p>
                                            <i class="d-flex align-items-center lp-circel-arrow-up"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* <div class="col-lg-4 hang add-money__items__card">
                            <div class="add-money__items__card__content mx-auto">
                                <span class="add-money__items__card__content__icon">
                                    <i class="lp-medal d-flex align-items-center"></i>
                                </span>
                                <p class="add-money__items__card__content--heading">THEO Ý TƯỞNG</p>
                                <p class="add-money__items__card__content--price">
                                    800.000 đ
                                </p>
                                <span class="add-money__items__card__content__decription">
                                    <p class="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <p class="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <p class="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <p class="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </span>
                                <div class="d-flex justify-content-center add-money__items__card__content__btn">
                                    <a href="#section-contact" class="d-flex align-items-center pulse">
                                        <p class="me-lg-1 mb-0">
                                            Đăng ký ngay
                                        </p>
                                        <i class="d-flex align-items-center lp-circel-arrow-up"></i>
                                    </a>
                                </div>
                            </div>
                        </div> */}
                        {/* <div class="col-lg-4 hang add-money__items__card">
                            <div class="add-money__items__card__content mx-auto">
                                <span class="add-money__items__card__content__icon">
                                    <i class="lp-medal d-flex align-items-center"></i>
                                </span>
                                <p class="add-money__items__card__content--heading">THEO Ý TƯỞNG</p>
                                <p class="add-money__items__card__content--price">
                                    800.000 đ
                                </p>
                                <span class="add-money__items__card__content__decription">
                                    <p class="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <p class="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <p class="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <p class="add-money__items__card__content__decription--content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </span>
                                <div class="d-flex justify-content-center add-money__items__card__content__btn">
                                    <a href="#section-contact" class="d-flex align-items-center pulse">
                                        <p class="me-lg-1 mb-0">
                                            Đăng ký ngay
                                        </p>
                                        <i class="d-flex align-items-center lp-circel-arrow-up"></i>
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
