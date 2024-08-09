import styles from '../page.module.css';
import Image from "next/image";
import { checkmarkPicture, speedPicture, handPicture } from '@/export';

export default function Important() {
    return (<section className={styles.importantSection}>
        <h2>Что для нас важно</h2>
        <div className={styles.importantContainer}>
          <article>
            <Image src={checkmarkPicture} alt="m" width={50} height={50} />
            <div className={styles.importantText}>
              <h3>Качество</h3>
              <p>
                Я использую лучшие инструменты для беспрецедентной разработки
                сайта
              </p>
            </div>
          </article>
          <article>
            <Image src={speedPicture} alt="m" width={50} height={50} />
            <div className={styles.importantText}>
              <h3>Скорость</h3>
              <p>
                Благодаря отлаженной системе делаю подобные макеты сайтов
                меньше, чем за две недели
              </p>
            </div>
          </article>
          <article>
            <Image src={handPicture} alt="m" width={50} height={50} />
            <div className={styles.importantText}>
              <h3>Ответственность</h3>
              <p>
                Я забочусь о качестве работы и внимательно выслушиваю и
                принимаю обратную связь
              </p>
            </div>
          </article>
        </div>
      </section>);
}