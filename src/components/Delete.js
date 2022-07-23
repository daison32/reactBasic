import React, { useState } from 'react'
import axios from "axios";

// const baseURL = "https://gorensyu.herokuapp.com/tasks"
const baseURL = "https://gorensyu.herokuapp.com/tasks"

const Delete = () => {
  const [formData, setFormData] = useState({})

  const eventHandler = () => {
    console.log(formData)
    axios
      .post(baseURL, formData)
      .then((res) => console.log(res))

      .then((result) => {
        setFormData("")
      })
      .catch((err) => console.log('error detail', err))
  }

  return (
    <div className='App'>
      <button onClick={eventHandler}>完了したタスクを削除</button>

    </div>
  )
}

export default Delete