import React from 'react'
import Button from "react-bootstrap/Button";
import PostProcessingItems from './../customer/PostProcessingItems';


const ManagePostForFreelancer = () => {
    return (
        <div className='managepost'>
            <div>
                <div className='mx-3 my-5'>
                    <h2 className='mb-3'>
                        Freelancer's Jobs (<span>4</span>)
                    </h2>
                    <div className='managepost__postlistprocessing'>
                        <div className='managepost__postlistprocessing__table'>
                            <table>
                                <thead>
                                    <tr>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Job Type</th>
                                        <th scope='col'>Start Day</th>
                                        <th scope='col'>End Day</th>
                                        <th scope='col'>Control</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope='row'>
                                            <PostProcessingItems></PostProcessingItems>
                                        </th>
                                        <td>Design</td>
                                        <td>12 July, 2020</td>
                                        <td>12 July, 2020</td>
                                        <td>
                                            <div>
                                                <Button variant="primary" className="btn-delete-post">
                                                    Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>
                                            <PostProcessingItems></PostProcessingItems>
                                        </th>
                                        <td>Design</td>
                                        <td>12 July, 2020</td>
                                        <td>12 July, 2020</td>
                                        <td>
                                            <div>
                                                <Button variant="primary" className="btn-delete-post">
                                                    Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope='row'>
                                            <PostProcessingItems></PostProcessingItems>
                                        </th>
                                        <td>Design</td>
                                        <td>12 July, 2020</td>
                                        <td>12 July, 2020</td>
                                        <td>
                                            <div>
                                                <Button variant="primary" className="btn-delete-post">
                                                    Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ManagePostForFreelancer
