import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://gorensyu.herokuapp.com/tasks"
const completeURL = "https://gorensyu.herokuapp.com/tasks/completion"

const Fetch = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(baseURL)
      .then((res) => res.data)
      .then((data) => {
            setTasks(data.tasks);
            setLoading(false);
            console.log(tasks)
    });
  }, []);
  if (loading) return <p>loading ...</p>;

 

  return (
    <div>
     
      <ul>
        {tasks.map((task) => (
          <>
            <li key={task.id}>{task.content}</li>
            <input type="checkbox" onChange={
              axios
              .patch(completeURL, )
              .then((res) => console.log(res))
              .catch((err) => console.log('error detail', err))
            }></input>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;