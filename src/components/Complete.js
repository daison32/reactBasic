import React, { useState } from 'react'
import axios from "axios";

// const baseURL = "http://localhost:8080/tasks"
// const completeURL = "http://localhost:8080/tasks/completion"

const baseURL = "https://gorensyu.herokuapp.com/tasks"
const completeURL = "https://gorensyu.herokuapp.com/tasks/completion"


const Complete = (props) => {
  const [formData, setFormData] = useState({});

  console.log('props', props)
    const handleChange = async (id) => {
        setFormData({id: id})
        console.log(formData)

        axios
        .patch(completeURL, formData)
        .then((res) => console.log(res))
        .catch((err) => console.log('error detail', err))
     }
console.log('props', props)
    return (
      <div className='App'>
       {/* <input id={task.id} type="checkbox" checked={task.isComplete} onChange={() => handleChange(task.id)}></input> */}
        <input 
          type="checkbox" 
          checked={props.task.isComplete}
          onChange={() => handleChange(props.task.id)}
        >
        </input>
      </div>
    ) 
}

export default Complete