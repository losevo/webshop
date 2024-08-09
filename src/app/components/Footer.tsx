import styles from '../page.module.css';
import Image from "next/image";
import { telegramPicture, linkedinPicture, githubPicture, visaPicture, mastercardPicture } from '@/export';

export default function Footer() {
    return (<footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerNameAndRights}>
            <div>
              <p>FAKE STORE</p>
            </div>
            <div className={styles.rights}>
              <p> © Все права ничем не защищены </p>
              <p> Используйте как хотите</p>
              <p>Только не выдавайте за свои</p>
            </div>
          </div>
          <div className={styles.footerNav}>
            <ul className={styles.footerMainNav}>
            <li className="nav-element"><a href="">Главная</a></li>
              <li className="nav-element"><a href="">Магазин</a></li>
              <li className="nav-element"><a href="">О бренде</a></li>
              <li className="nav-element"><a href="">Контакты</a></li>
            </ul>
            <ul className={styles.secondaryFooterNav}>
              <li>Пальто</li>
              <li>Свитшоты</li>
              <li>Кардиганы</li>
              <li>Толстовки</li>
            </ul>
          </div>
          <div className={styles.contactContainerFooter}>
            <div className={styles.contactFooter}>
              <p>8 800 335 35 35</p>
              <p>varenikda@gmail.com</p>
            </div>
              <div className={styles.footerSocial}>
                <a href="#">
                  <Image src={telegramPicture} alt="m" width={22} height={22} />
                </a>
                <a href="#">
                  <Image src={linkedinPicture} alt="m" width={22} height={22} />
                </a>
                <a href="#">
                  <Image src={githubPicture} alt="m" width={22} height={22} />
                </a>
              </div>
              <div className={styles.footerCards}>
                <Image src={visaPicture} alt="m" width={22} height={30} />
                <Image src={mastercardPicture} alt="m" width={22} height={30} />
              </div>
          </div>
        </div>
      </footer>);
}