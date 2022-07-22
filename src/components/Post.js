import React, { useState } from 'react'
import axios from "axios";

// const baseURL = "https://gorensyu.herokuapp.com/tasks"
const baseURL = "http://localhost:8080/tasks"

const Post = () => {
  const [formData, setFormData] = useState({})

  // リアルタイムで更新
  const handleChange = (event) => {
    setFormData({ content: event.target.value })
  }

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

  // const deleteHandler = () => {
  //   axios
  //     .delete(baseURL, )
  // }

  return (
    <div className='App'>
      <input value={formData.name} onChange={handleChange} />
      <button onClick={eventHandler}>追加</button>
      {/* <button onClick={deleteHandler}>完了したタスクを削除</button> */}
    </div>
  )
}

export default Post


