import React, { useState } from 'react'

const Post = () => {
  const [formData, setFormData] = useState({})

  // リアルタイムで更新
  const handleChange = (event) => {
    setFormData({ content: event.target.value })
  }

  const eventHandler = () => {
    fetch('http://localhost:8080/tasks', {
      method: 'POST',
      handlers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setFormData('')
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

