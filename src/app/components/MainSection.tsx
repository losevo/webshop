import styles from '../page.module.css';
import Image from "next/image";
import { strelka, mainPicture1, mainPicture2, mainPicture3 } from '@/export';

export default function MainSection() {
    return (<section className={styles.mainSection}>
        <div className={styles.containerSliderMainText}>
          <article
            className={`${styles.textForMainSlider} ${styles.active}`}
            id="text-1"
          >
            <h1>Новое поступление несуществуюших товаров</h1>
            <p>
              Утонченные сочетания красивых картинок, сгенерированных в
              Кандинском, и реальных товаров.
            </p>
          </article>
          <article className={styles.textForMainSlider} id="text-2">
            <h1>Что-то новенькое. Мы заждались тебя</h1>
            <p>
              Надоело искать разработчика. Настало время свежих идей и умелых
              рук
            </p>
          </article>
          <article className={styles.textForMainSlider} id="text-3">
            <h1>Входи в новую неделю со мной</h1>
            <p>
              Я постоянно углубляю знания - и этот проект интернет-магазина не
              исключение
            </p>
          </article>
          <div className={styles.containerForButtons}>
            <button className={styles.nextSection}>
              <Image src={strelka} alt="m" width={14} height={28} />
            </button>
            <button className={styles.pathToShop}>Открыть магазин</button>
          </div>
          <div className={styles.containerSlider}>
            <button
              className={`${styles.slider} ${styles.activeSlider}`}
            ></button>
            <button className={styles.slider}></button>
            <button className={styles.slider}></button>
          </div>
        </div>
        <div className={styles.rectangleRightSide}>
          <Image
            src={mainPicture1}
            className={styles.mainPicture1}
            alt="m"
            width={410}
            height={646}
          />
          <Image
            src={mainPicture2}
            className={styles.mainPicture2}
            alt="m"
            width={197}
            height={197}
          />
          <Image
            src={mainPicture3}
            className={styles.mainPicture3}
            alt="m"
            width={190}
            height={318}
          />
        </div>
      </section>);
}