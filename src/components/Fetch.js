import React, {useState, useEffect} from 'react'

const Fetch = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://gorensyu.herokuapp.com/tasks', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    },[])

    return (
        <div>
            <ul>


{
          posts[0].map(post => 
            <li key={post.id}>{post.content}</li>
            )
        }
        {}
            </ul>

        </div>
    )
}

export default Fetch;