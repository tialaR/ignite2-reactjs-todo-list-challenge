import { useMemo, useState } from 'react';
import styles from './TaskCard.module.css';
import trash from '../../assets/trash.svg';

type Props = {
    isConcluded: boolean;
    description: string;
    onCheck: (isTaskChecked: boolean) => void;
    onDelete: () => void;
}

const TaskCard: React.FC<Props> = ({isConcluded, description, onCheck, onDelete}) => {

    const [checked, setChecked] = useState(isConcluded);

    const descriptionStyle = useMemo(() => {
        if (checked) {
            return styles.descriptionChecked
        }

        return styles.description
    }, [checked])

    const handleChange = () => {
        setChecked(!checked);
        onCheck(!checked)
      };


  return (
    <div className={styles.container}>
        <input type="checkbox" checked={checked} onChange={handleChange} className={styles.checkbox} />

        <p className={descriptionStyle}>{description}</p>
        <button onClick={onDelete} className={styles.button}>
            <img src={trash} alt="Delete button" />
        </button>
    </div>
  )
}

export default TaskCard;