import styles from '../styles/Home.module.css';
function exams() {
  return (
    <div>
      <nav className={styles.nav}>
          <h1 className={styles.name}>EXAMS</h1>
      </nav>
      <div className={styles.box}>
        <div className={styles.exams}>
            <h2>English: (11/3/2022)</h2>
            <h4>Paragraph:</h4>
            <ol>
              <li>Your school library.</li>
              <li>Tree plantation.</li>
              <li>Physical exercise.</li>
            </ol>
            <h4>Unit 1 (Lesson 1, 2, 3)</h4>
            <hr/>
            <h2>Math: (7/3/2022)</h2>
            <h3>2.1 & 2.2 থেকে পরীক্ষা</h3>
            <hr/>
        </div>

      </div>
    </div>
  )
}
export default exams;