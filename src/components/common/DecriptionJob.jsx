import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
/* import { getTasksByJobAction } from '../../store/entities/task' */

const DecriptionJob = ({job}) => {
    const dispatch = useDispatch()

    /* const { tasks } = useSelector(state => state.task.getTasksByJob) */
    const tasks = []
    useEffect(() => {
        if (job) {
            /* dispatch(getTasksByJobAction(job.id)) */
        }
    }, [job])
    return (
        <div className='decriptionjob'>
            <div className=''>
                <div className='decriptionjob__decription mb-5'>
                    <h4 className='decriptionjob__decription--heading mb-4'>Job Description</h4>
                    <p className='decriptionjob__decription--detail'>
                        We’re looking for a passionate individual to design beautiful and functional products for our customers at Gubagoo. We move very fast and you will be expected to contribute to a cross-functional product development squad, that includes product managers and developers, to deliver the UX and UI for the team to bring to life.We are serious about remote work. You can work for from anywhere.
                    </p>
                </div>
            </div>
            <div className=''>
                <div className='decriptionjob__tasklist mb-5'>
                    <h4 className='decriptionjob__tasklist--heading mb-4'>What you will be doing:</h4>
                    <ul className="decriptionjob__tasklist__items">
                        
                        {(tasks && tasks.length != 0) ? tasks.map((task, index) => (
                            <li className="decriptionjob__tasklist__items--detail">{task.name}</li>
                        )): <p>Add Your Task</p>}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DecriptionJob
