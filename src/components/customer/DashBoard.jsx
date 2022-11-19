import React from 'react'
import Button from "react-bootstrap/Button";
import ItemsDetailControl from './ItemsDetailControl';
import CreatePost from './CreatePost';
import PostProcessingItems from './PostProcessingItems';
import ManagePostForFreelancer from '../freelancer/ManagePostForFreelancer';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { handleDate } from '../../common/lib';
import { convert2arr } from '../../common/lib';
import { Pagination } from 'react-bootstrap';
import { getMyJobsAction } from '../../store/entities/job';

const DashBoard = () => {
    const dispatch = useDispatch()

    const [info, setInfo] = useState({
        pageShowOpen: 1
    })

    const {jobs, length, totalPages, applies} = useSelector(state => state.job.getMyJobs)

    const changePageOpen = (page) => {
        setInfo({
            ...info,
            pageShowOpen: page
        })
        dispatch(getMyJobsAction({num: 3, page:page}))
    }

    useEffect(() => {
        dispatch(getMyJobsAction({num: 3, page:1}))
    }, [dispatch])


    return (
        <div className='dashboard-manage'>
            <div className='d-flex'>
                <div className='dashboard-manage__control'>
                    <CreatePost></CreatePost>
                </div>
                <div className='dashboard-manage__content'>
                    <div className='m-3'>
                        <h2>
                            Posted Jobs (<span>{length}</span>)
                        </h2>
                        <div className='dashboard-manage__content__postlist'>
                            <div className='dashboard-manage__content__postlist__table'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th scope='col'>Name</th>
                                            <th scope='col'>Job Type</th>
                                            <th scope='col'>Created on</th>
                                            <th scope='col'>Total Applicants</th>
                                            <th scope='col'>Control</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {jobs && jobs.map((job, index) => (
                                            <tr key={index}>
                                                <th scope='row'>
                                                    <ItemsDetailControl job={job}></ItemsDetailControl>
                                                </th>
                                                <td>dsafsdaf</td>
                                                <td>{handleDate(job.createdAt)}</td>
                                                <td>{applies[index]}</td>
                                                <td>
                                                    <div>
                                                        <Button variant="primary" className="btn-delete-post">
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {totalPages && (
                                    <Pagination className='mt-2'>
                                        {convert2arr(totalPages).map((item) => (
                                            <Pagination.Item onClick={() => changePageOpen(item + 1)} active={item + 1 === info.pageShowOpen} key={item}>{item + 1}</Pagination.Item>
                                        ))}
                                    </Pagination>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='mx-3 my-5 py-5'>
                        <h2>
                            Posted Jobs Processing (<span></span>)
                        </h2>
                        <div className='dashboard-manage__content__postlistprocessing'>
                            <div className='dashboard-manage__content__postlistprocessing__table'>
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
                                        {/* {resultsProcessing && resultsProcessing.map((item, index) => (
                                            <tr key={index}>
                                                <th scope='row'>
                                                    <PostProcessingItems></PostProcessingItems>
                                                </th>
                                                <td>{item.name}</td>
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
                                        ))} */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default DashBoard
