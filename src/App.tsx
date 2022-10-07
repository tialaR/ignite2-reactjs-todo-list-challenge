import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css';
import './global.css';

import Header from './components/Header';
import AddTaskInput from './components/AddTaskInput';
import EmptyTasks from './components/EmptyTasks';
import StatusTasks from './components/StatusTasks';
import { useMemo, useState } from 'react';
import TaskCard from './components/TaskCard';

type Task = {
  id: string;
  isConcluded: boolean;
  description: string;
}


function App() {
  const [tasks, setTasks] = useState<Task[]>([] as Task[]);

  const isTaskListEmpty = useMemo(() => tasks?.length <= 0, [tasks])
  const createdTasksSize = useMemo(() => tasks?.length,[tasks])
  const concludedTasksStatus = useMemo(() => {

    const concludedTasks = tasks?.reduce((total, task) => {
      if(task?.isConcluded) {
        return total + 1;
      } else {
        return total;
      }
    }, 0);

    return `${concludedTasks} de ${createdTasksSize}`

  },[tasks, createdTasksSize])

  const handleCreateNewTask = (newTaskText: string) => {

    const newTask = {
      id: uuidv4(),
      isConcluded: false,
      description: newTaskText
    }

    setTasks([...tasks, newTask])
  }

  const handleDeleteTask = (taskId: string) => {
    const newTasks = tasks?.filter(task => task?.id !== taskId);

    setTasks(newTasks);
  }

  const handleConcludedTask = (taskId: string) => {
    const newTasks = tasks?.map(task => {
      if (task?.id === taskId) {
        return {
          ...task,
          isConcluded: !task?.isConcluded,
        }
      } else  {
        return task;
      }
    });

    setTasks(newTasks);
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <AddTaskInput onCreateTask={(newTaskText: string) => handleCreateNewTask(newTaskText)} />

        <main className={styles.bodyContainer}>
          <StatusTasks createdTasks={String(createdTasksSize)} concludedTasks={concludedTasksStatus} /> 

          {isTaskListEmpty && <EmptyTasks />}

          {tasks?.map((task: Task) => (
            <TaskCard
              key={task.id}
              onCheck={() => handleConcludedTask(task.id)}
              onDelete={() => handleDeleteTask(task.id)}
              isConcluded={task.isConcluded}
              description={task.description}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
