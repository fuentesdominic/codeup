import Notes from '../components/Notes'
import { useLocation, useParams } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'

const Task = () => {
  const { taskId } = useParams()
  const [task, setTask] = useState([])

  const getTask = async () => {
    try {
      const res = await axios.get(`/tasks/${taskId}`)
      console.log(res)
      setTask(res.data)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTask()
  }, [])


  return (
    <div className='task'>
      <h1>{task.title}</h1>
      <p>{task.content}</p>
      <a href={task.videoLink}>Video Link</a>
      <p>Category: {task.category}</p>
      <p>Notes: <div>
        <Notes taskId={task.id} />
      </div>
      </p>
    </div >
  )
}
export default Task