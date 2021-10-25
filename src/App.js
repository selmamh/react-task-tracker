import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import './App.css';
import { useState } from 'react'



const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:20pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: ' Feb 7th 2pm',
      reminder: false
    }
  ])
  //add task
  const addTask= (task) => {
    const id = Math.floor(Math.random() * 1000 +1)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //toggle reminder
  const onToggleReminder= (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder : 
      ! task.reminder} : task
      )
    )
  }


  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks}
        onDelete={deleteTask}
        onToggle = {onToggleReminder} /> : 'Nothing to show'}

    </div>
  );
}

export default App;
