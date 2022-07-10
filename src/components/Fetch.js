import React, {useState, useEffect} from 'react'

const Fetch = () => {

    const [tasks, settasks] = useState([])
    
    useEffect(() => {
        fetch('https://gorensyu.herokuapp.com/tasks', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            settasks(data)
        })
    },[])

    return (
        <div>
            <ul>


        {
          tasks.map(post => 
            <li key={post.id}>{post.content}</li>
            )
        }
        
            </ul>

        </div>
    )
}

export default Fetch;