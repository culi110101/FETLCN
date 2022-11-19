import React from 'react'
import baner from '../../assets/img/bg-home.png';
import Search from './Search'


const Baner = () => {
    return (
        <div className='home-baner'>
            <div className='home-baner__img h-100'>
                <img src={baner} className="h-100"></img>
            </div>
            <div className='container'>
                <div className='col-xxl-9 col-xl-10 col-lg-11 home-baner__content'>
                    <div className='d-flex'>
                        <div className='col-xxl-8 col-xl-7 col-md-8 col-sm-10'>
                            <h1 className='home-baner__content--heading'>Find the most exciting jobs.</h1>
                            <p className='home-baner__content--subheading'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative to</p>
                        </div>
                    </div>
                </div>
            </div>
            <Search></Search>
        </div>
    )
}

export default Baner
