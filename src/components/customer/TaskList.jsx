import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from 'react-redux';

const TaskList = ({ job }) => {
    const dispatch = useDispatch()

    const [taskInfo, setInfo] = useState({
        name: '',
        job: '',
        startDate: '',
        endDate: ''
    })

    /* const { tasks } = useSelector(state => state.task.getTasksByJob)
    const {successCreateTask} = useSelector(state => state.task.createTask) */

    useEffect(() => {
        /* if (job) {
            setInfo({
                ...taskInfo,
                job: job.id
            })
            dispatch(getTasksByJobAction(job.id))
        } */
    }, [])


    const getInfo = (event) => {
        setInfo({
            ...taskInfo,
            [event.target.name]: event.target.value
        })
    }

    const submitAddTask = () => {
        console.log(taskInfo)
        /* dispatch(createTaskAction(taskInfo)) */
    }

    useEffect(() => {
        /* if (successCreateTask){
            dispatch(getTasksByJobAction(job.id))
        } */
    }, [])

    return (
        <div className='tasklist'>
            <div className=''>
                <h4>
                    Job Duties (<span>4</span>)
                </h4>
                <div className='tasklist__content'>
                    <div className='tasklist__content__table'>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Start Day</th>
                                    <th scope='col'>Start Day</th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {(tasks && tasks.length != 0) ? tasks.map((task, index) => (
                                    <tr key={index}>
                                        <th scope='row'>
                                            <p className='name-of-task'>{task.name}</p>
                                        </th>
                                        <td>12 July, 2020</td>
                                        <td>
                                            12 July, 2020
                                        </td>
                                        <td>
                                            <div>
                                                <Button variant="primary" className="btn-delete-task">
                                                    Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                )): (<h1>Nothing</h1>)} */}

                            </tbody>
                        </table>
                    </div>
                    <div className='tasklist__content__addtask my-4 p-3'>
                        <div className="mb-3">
                            <label className="form-label">Name of task</label>
                            <input name='name' onChange={getInfo} className="form-input" type="text" placeholder="Name of task" />
                        </div>
                        <div className="mb-3 w-100">
                            <div className="d-flex">
                                <div className="col-6 pe-3">
                                    <label className="form-label">Start Day</label>
                                    <input name='startDate' onChange={getInfo} className="form-input" type="date" placeholder="Start Day" />
                                </div>
                                <div className="col-6">
                                    <label className="form-label">End Day</label>
                                    <input name='endDate' onChange={getInfo} className="form-input" type="date" placeholder="End Day" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button onClick={submitAddTask} variant="primary" className="btn-add-task">
                                Add Task
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskList
