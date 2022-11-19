import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
/* import { getCategoriesIntroAction } from '../../store/entities/category' */
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faPenNib, faMicrochip,faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { getCategoriesAction } from '../../store/entities/category'

const Category = () => {
    const dispatch = useDispatch()

    const {categories} = useSelector(state => state.category.getCategories)
    useEffect(() => {
        dispatch(getCategoriesAction({page: 1, num:4}))
    }, [dispatch])
    const items =[{
        icon:faDesktop,
        color:"#4743db",
        backgroundColor:"rgba(71,67,219,.1)"
    },
    {
        icon:faKeyboard,
        color:"#f71e3f",
        backgroundColor:"rgba(247,30,63,.1)"
    },
    {
        icon:faMicrochip,
        color:"#65efe3",
        backgroundColor:"rgba(101,239,227,.1)"
        
    },
    {
        icon:faPenNib,
        color:"#fa8557",
        backgroundColor:"rgba(250,133,87,.1)"
    },
]

    return (
        <div className='content'>
            <div className='container category'>
                <div className='row category__header'>
                    <h2>Explore by category</h2>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews to start.</p>
                </div>
                <ul className='category__list row'>
                    {categories && categories.map((item, index) => (
                        <li key={index} className='col-6 col-md-3 mb-3 category__list__items grow'>
                            <a href='#'>
                                <div>
                                    <div className='category__list__items--icon' style={{color: items[index].color,backgroundColor:items[index].backgroundColor}}>
                                        <FontAwesomeIcon icon={items[index].icon} />
                                    </div>
                                    <p className='category__list__items--header'>{item.name}</p>
                                    <p className='category__list__items--decription'> <span className='category__list__items--sum-job'>{item.numJobs}</span> Vacancy </p>
                                </div>
                            </a>
                        </li>
                    ))}

                </ul>
                <div className='d-flex justify-content-center pulse-grow'>
                    <a href="#" className='category--explore'>
                        search now
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Category
