import React, { useState } from 'react'
import axios from "axios";

const baseURL = "http://localhost:8080/tasks"
// const baseURL = "https://gorensyu.herokuapp.com/tasks"

const Delete = () => {

  const eventHandler = () => {
    axios
      .delete(baseURL)
      .then(() => {
        window.location.reload()
      });
    
  }

  return (
    <div className='App'>
      <button onClick={eventHandler}>完了したタスクを削除</button>

    </div>
  )
}

export default Delete