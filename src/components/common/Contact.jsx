import React from 'react'

const Contact = ({ user }) => {
    return (
        <div>
            {user && (
                <div className='contact-form'>
                    <form action="#">
                        <div>
                            <label htmlFor="name">Your Name</label>
                            <input value={user.name} type="text" />
                        </div>
                        <div className='d-block d-md-flex'>
                            <div className='col-12 col-md-6 pe-md-3'>
                                <label htmlFor="name">E-mail</label>
                                <input value={user.email} type="email" />
                            </div>
                            <div className='col-12 col-md-6'>
                                <label htmlFor="name">Subject</label>
                                <input value={user.roles} type="text" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name">Message</label>
                            <textarea className='' name="" id="" rows="5"></textarea>
                        </div>
                        <button className='btn-contact'>Send</button>
                    </form>
                </div>
            )}
        </div>
    )
}
export default Contact
