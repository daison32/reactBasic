import React, {useState, useEffect} from 'react'

const ApiFetch = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://gorensyu.herokuapp.com/', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    },[])

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default ApiFetch
