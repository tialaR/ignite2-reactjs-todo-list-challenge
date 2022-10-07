import styles from './StatusTasks.module.css';

type Props = {
    createdTasks: string;
    concludedTasks: string;
}

const StatusTasks: React.FC<Props> = ({createdTasks, concludedTasks}) => {
  return (
    <div className={styles.container}>
        <div className={styles.statusTasksContainer}>
            <p className={styles.createdTasksText}>Tarefas criadas</p>
            <span>{createdTasks}</span>
        </div>

        <div className={styles.statusTasksContainer}>
            <p className={styles.concludedTasksText}>Concluídas</p>
            <span>{concludedTasks}</span>
        </div>
    </div>
  )
}

export default StatusTasks;