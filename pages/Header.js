import styles from '../styles/Home.module.css';
import Subject from './Subject';
function Header() {
  return (
    <div>
      <nav className={styles.nav}>
          <h1 className={styles.name}>SIAM</h1>
      </nav>
      <Subject/>
    </div>
  )
}
export default Header;