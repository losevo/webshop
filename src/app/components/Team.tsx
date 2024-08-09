import styles from '../page.module.css';
import Image from "next/image";
import { teamPicture } from '@/export';

export default function Team() {
    return (<section className={styles.teamSection}>
        <h2>Команда мечты</h2>
        <div>
          <div>
            <Image
              className={`${styles.teamPicture} ${styles.active}`}
              src={teamPicture}
              alt="m"
              width={729}
              height={488}
            />
            <Image
              className={`${styles.teamPicture}`}
              src={teamPicture}
              alt="m"
              width={729}
              height={488}
            />
            <Image
              className={`${styles.teamPicture}`}
              src={teamPicture}
              alt="m"
              width={729}
              height={488}
            />
          </div>
          <div className={styles.descriptionAboutTeam}>
            <h3>Для каждой (команды)</h3>
            <p>Каждая команда достойна получить такого сотрудника</p>
            <p>Мы ищем, что улучшить, находим и улучшаем вместе</p>
            <a href="">Подробнее о бренде</a>
          </div>
        </div>
      </section>)
}