import styles from '../page.module.css';
import Image from "next/image";
import { colPicture, arrow } from '@/export';

export default function NewCollection() {
    return (<section className={styles.newCollection}>
        <h2>Новая коллекция</h2>
        <div className={styles.shopContainer}>
          <div>
            <Image src={colPicture} alt="m" width={350} height={478} />
            <div className={styles.colPicHover}><Image className={styles.arrow} src={arrow} alt="m" width={31} height={22}/></div>
            <div className={styles.shopPrice}>
              <h4>Футболка (не девушка)</h4>
              <p>1000 $</p>
            </div>
          </div>
          <div>
            <Image src={colPicture} alt="m" width={350} height={478} />
            <div className={styles.colPicHover}><Image className={styles.arrow} src={arrow} alt="m" width={31} height={22}/></div>
            <div className={styles.shopPrice}>
              <h4>Футболка (не девушка)</h4>
              <p>1000 $</p>
            </div>
          </div>
          <div>
            <Image src={colPicture} alt="m" width={350} height={478} />
            <div className={styles.colPicHover}><Image className={styles.arrow} src={arrow} alt="m" width={31} height={22}/></div>
            <div className={styles.shopPrice}>
              <h4>Футболка (не девушка)</h4>
              <p>1000 $</p>
            </div>
          </div>
        </div>

        <button className={`${styles.pathToShop} ${styles.primary}`}>
          Открыть магазин
        </button>
      </section>)
}