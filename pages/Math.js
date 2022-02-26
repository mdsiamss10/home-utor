/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import styles from '../styles/Home.module.css';
function Math() {
  return (
    <div>
      <nav className={styles.nav}>
          <h1 className={styles.name}>SIAM</h1>
      </nav>
      <div className={styles.box}>

        <div className={styles.hw_1}>
          <h2>27/2/2022</h2>
          <h4>এই গুলো করতে হবেঃ</h4>
          <a href="https://res.cloudinary.com/dpm3f0tz8/image/upload/v1645901383/273816033_1718626798341874_4747002746406077234_n_xwphfd.jpg"><img className={styles.img} src="https://res.cloudinary.com/dpm3f0tz8/image/upload/v1645901383/273816033_1718626798341874_4747002746406077234_n_xwphfd.jpg"/></a>
          <a href="https://res.cloudinary.com/dpm3f0tz8/image/upload/v1645901374/273066196_3061798344075635_3851781656114784353_n_w2pzpd.jpg"><img className={styles.img} src="https://res.cloudinary.com/dpm3f0tz8/image/upload/v1645901374/273066196_3061798344075635_3851781656114784353_n_w2pzpd.jpg"/></a>
          <hr/>
        </div>

      </div>
    </div>
  )
}
export default Math;