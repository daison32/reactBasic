import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "http://localhost:8080/tasks"
const completeURL = "http://localhost:8080/tasks/completion"

// const baseURL = "https://gorensyu.herokuapp.com/tasks"
// const completeURL = "https://gorensyu.herokuapp.com/tasks/completion"

const Fetch = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios.get(baseURL)
      .then((res) => res.data)
      .then((data) => {
            setTasks(data.tasks);
            setLoading(false);
    });
  }, []);
  if (loading) return <p>loading ...</p>;

 const eventHandler = (event) => {
    setFormData({id: event.target.id})
    // ↑が機能していない
    console.log({id: event.target.id})
    console.log(formData)
    axios
    .patch(completeURL, formData)
    .then((res) => console.log(res))
    .catch((err) => console.log('error detail', err))
  
 }

  return (
    <div>
     
      <ul>
        {tasks.map((task) => (
          <>
            <li key={task.id}>{task.content}</li>
            <input id={task.id} type="checkbox" onChange={eventHandler}></input>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;