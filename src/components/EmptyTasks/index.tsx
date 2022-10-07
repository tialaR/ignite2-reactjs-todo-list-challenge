import styles from './EmptyTasks.module.css';
import clipboard from '../../assets/clipboard.svg';

const EmptyTasks: React.FC = () => {
  return (
    <div className={styles.container}>
        <img src={clipboard} className={styles.image} alt="Clipboard image" />
        <div className={styles.textContainer}>
          <span className={styles.text}>
              Você ainda não tem tarefas cadastradas  
          </span>
          <span> Crie tarefas e organize seus itens a fazer</span>
        </div>
    </div>
  )
}

export default EmptyTasks;