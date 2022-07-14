import React, { useState, useEffect } from "react";


const Post = () => {
  const [formData, setFormData] = useState({})


  // リアルタイムで更新
  const handleChange = (event) => {
    setFormData({ content: event.target.value })
  }

  const eventHandler = (event) => {
    fetch('http://localhost:8080/tasks', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setFormData('')
      })
      .catch((err) => console.log('error'))
  }


return (
  <div className="App">
    <form>
      <input name="name" value={formData.name || ''} onChange={handleChange} />
      <button onClick={eventHandler}>click</button>
    </form>
    
  </div>
)
}

export default Post