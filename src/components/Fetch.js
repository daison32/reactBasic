import React, { useState, useEffect } from "react";
import axios from "axios";

// const baseURL = "http://localhost:8080/tasks"
// const completeURL = "http://localhost:8080/tasks/completion"

const baseURL = "https://gorensyu.herokuapp.com/tasks"
const completeURL = "https://gorensyu.herokuapp.com/tasks/completion"

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

 const handleChange = (id) => {
    setFormData({id: id})
    console.log({id: id})
  
 }
 const eventHandler = () => {
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
          <div key={task.id}>
            <li >{task.content}</li>
            <input id={task.id} type="checkbox" onChange={() => handleChange(task.id)}></input>
            <button onClick={eventHandler}>完了を確定</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;