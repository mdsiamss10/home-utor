import styles from '../styles/Home.module.css';
function exams() {
  return (
    <div>
      <nav className={styles.nav}>
          <h1 className={styles.name}>EXAMS</h1>
      </nav>
      <div className={styles.box}>
        <div className={styles.exams}>
            <h2>English: (4/3/2022)</h2>
            <h4>Email:</h4>
            <ol>
              <li>Planting more trees.</li>
              <li>Attentive in study.</li>
              <li>Natural beauty of Bangladesh.</li>
              <li>Annual sports day.</li>
              <li>Asking for some money.</li>
            </ol>
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