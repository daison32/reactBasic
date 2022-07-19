import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://gorensyu.herokuapp.com/tasks", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTasks(data.tasks);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>loading ...</p>;

  function TodoItem({ task,onCheck }) {
    const handleChange = () => {
      onCheck(task);
    };

    return (
      <label className="panel-block">
        <input 
          type="checkbox" 
          checked={task.isComplete}
          onChange={handleChange}
          />
        {task.content}
      </label>
    );
  }

  const handleCheck = checked => {
    const newTasks = tasks.map(task => {
      if (task.id === checked.id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          // <li key={task.id}>{task.content}</li>
          <TodoItem 
            id={task.id} 
            task={task} 
            onCheck={handleCheck}
          />
          
        ))}
        <div className="panel-block">
          {tasks.length} tasks
        </div>
      </ul>
    </div>
  );

  
};

export default Fetch;