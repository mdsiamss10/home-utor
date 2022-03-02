/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import styles from '../styles/Home.module.css';
function Subject() {
  return (
  <div className={styles.buttonDiv}>
    <Link href="/English">
      <button className={styles.subButton}>English</button>
    </Link>
    <Link href="/Math">
      <button className={styles.subButton}>Math</button>
    </Link>
    <Link href="/Exam">
      <button className={styles.subButton}>Exams</button>
    </Link>
    <Link href="/Others">
      <button className={styles.subButton}>Others</button>
    </Link>
  </div>
  )
}

export default Subject;