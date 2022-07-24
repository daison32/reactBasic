import React, { useState, useEffect } from "react";
import axios from "axios";
import Complete from "./Complete";

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

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <div key={task.id}>
            <li >{task.content}</li>
            <Complete 
              task = {task}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;