import React from 'react'
import Button from "react-bootstrap/Button";


const ManageJobProcessing = () => {
    return (
        <div className='managejobprocessing'>
            <div className=''>
                <h4>
                Job Duties (<span>4</span>)
                </h4>
                <div className='managejobprocessing__content'>
                    <div className='managejobprocessing__content__table'>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Start Day</th>
                                    <th scope='col'>End Day</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>
                                        <h5>Tên task</h5>
                                    </th>
                                    <td>12 July, 2020</td>
                                    <td>
                                        12 July, 2020
                                    </td>
                                    <td className='status-processing'>Processing</td>
                                    <td>
                                        <div>
                                            <Button variant="primary" className="btn-delete-task">
                                                Confirm
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>
                                        <h5>Tên task</h5>
                                    </th>
                                    <td>12 July, 2020</td>
                                    <td>
                                        12 July, 2020
                                    </td>
                                    <td className='status-waiting'>Waiting</td>
                                    <td>
                                        <div>
                                            <Button variant="primary" className="btn-delete-task">
                                                Confirm
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>
                                        <h5>Tên task</h5>
                                    </th>
                                    <td>12 July, 2020</td>
                                    <td>
                                        12 July, 2020
                                    </td>
                                    <td className='status-finished'>Finished</td>
                                    <td>
                                        <div>
                                            <Button variant="primary" className="btn-delete-task">
                                                Confirm
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
    )
}

export default ManageJobProcessing
