import React, { useState } from 'react'
import axios from "axios";

const baseURL = "https://gorensyu.herokuapp.com/tasks"

const Post = () => {
  const [formData, setFormData] = useState({})

  // リアルタイムで更新
  const handleChange = (event) => {
    setFormData({ content: event.target.value })
  }

  const eventHandler = () => {
    console.log(formData.name)
    axios
      .post(baseURL, {
        content: formData.name
      })
      .then((res) => console.log(res))

      .then((result) => {
        setFormData("")
      })
      .catch((err) => console.log('error detail', err))
  }


  return (
    <div className='App'>
      <input value={formData.name} onChange={handleChange} />
      <button onClick={eventHandler}>click</button>
    </div>
  )
}

export default Post



