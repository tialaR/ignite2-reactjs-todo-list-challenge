import styles from './AddTaskInput.module.css';
import plus from '../../assets/plus.svg';
import { ChangeEvent, useMemo, useState } from 'react';

type Props = {
  onCreateTask: (newTask: string) => void;
}

const AddTaskInput: React.FC<Props> = ({ onCreateTask }) => {
  const [newTask, setNewTask] = useState('');

  const isNewTaskFull = useMemo(() => newTask?.length > 0,[newTask])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  }

  const handleCreateNewTask = () => {
    if(isNewTaskFull){
      onCreateTask(newTask);
      setNewTask('');
    } 
  }

  return (
    <div className={styles.container}>
        <input value={newTask} onChange={onChange} type="text" placeholder='Adicione uma nova tarefa'  />
        <button type="submit" onClick={handleCreateNewTask}>
            <p>Criar</p>
            <img src={plus} alt="Plus icon" />
        </button>
    </div>
  )
}

export default AddTaskInput;