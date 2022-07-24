import React, { useState } from 'react'
import axios from "axios";

const baseURL = "http://localhost:8080/tasks"
const completeURL = "http://localhost:8080/tasks/completion"

// const baseURL = "https://gorensyu.herokuapp.com/tasks"
// const completeURL = "https://gorensyu.herokuapp.com/tasks/completion"


const Complete = (props) => {

  console.log('props', props)
    const handleChange = async (task) => {
      
      const sentId = document.getElementById(props.task.id).checked

        await axios
        .patch(completeURL, {id: task.id, isComplete: sentId})
        .then((res) => console.log(res))
        .then(window.location.reload())
        .catch((err) => console.log('error detail', err))
     }

    return (
      <div className='App'>
        <input 
          type="checkbox" 
          id={props.task.id}
          checked={props.task.isComplete}
          onChange={() => handleChange(props.task)}
        ></input>
      </div>
    ) 
}

export default Complete