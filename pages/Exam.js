import styles from '../styles/Home.module.css';
function exams() {
  return (
    <div>
      <nav className={styles.nav}>
          <h1 className={styles.name}>EXAMS</h1>
      </nav>
      <div className={styles.box}>

        <div className={styles.exams}>
            <h2>English: </h2>
            <h3>Currently no exam.</h3>
            <hr/>
            <h2>Math: </h2>
            <h3>2.1 & 2.2 থেকে পরীক্ষা</h3>
            <hr/>
        </div>

      </div>
    </div>
  )
}
export default exams;