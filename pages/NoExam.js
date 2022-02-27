import styles from '../styles/Home.module.css';
function NoExam() {
  return (
    <div>
      <nav className={styles.nav}>
          <h1 className={styles.name}>EXAMS</h1>
      </nav>
      <div className={styles.box}>

        <div className={styles.exams}>
            <h2>No Exam Currently.</h2>
        </div>

      </div>
    </div>
  )
}
export default NoExam;