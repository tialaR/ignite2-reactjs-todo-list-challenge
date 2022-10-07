import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <img src={logo} alt="TodoList logo" />
    </header>
  )
}

export default Header;