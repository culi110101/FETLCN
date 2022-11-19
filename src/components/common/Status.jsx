import React from 'react'

const Status = (value) => {
    return (
        <>
            {value.status ? (
                <div className='d-flex justify-content-center status-available'>
                    <p>Available</p>
                </div>)
                :
                (
                <div className='d-flex justify-content-center status-unavailable'>
                    <p>Unavailable</p>
                </div>)
                }
        </>
    )
}

export default Status
