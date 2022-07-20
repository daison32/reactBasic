import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://gorensyu.herokuapp.com/tasks"

const Fetch = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("https://gorensyu.herokuapp.com/tasks", { method: "GET" })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setTasks(data.tasks);
    //     setLoading(false);
    //   });

    axios.get(baseURL)
      .then((res) => res.json())
      .then((data) => {
            console.log(data);
            setTasks(data.tasks);
            setLoading(false);
    });
  }, []);
  if (loading) return <p>loading ...</p>;
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;