import React, { useState } from 'react'

const Complete = () => {
  const [formData, setFormData] = useState({});

    const handleChange = (id) => {
        setFormData({id: id})
        console.log({id: id})
     }

    return (
      <div className='App'>
       {/* <input id={task.id} type="checkbox" checked={task.isComplete} onChange={() => handleChange(task.id)}></input> */}
        <input 
          type="checkbox" 
          // checked={this.props.isComplete}
        >
        </input>
      </div>
    ) 
}

export default Complete