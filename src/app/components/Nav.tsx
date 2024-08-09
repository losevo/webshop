import styles from '../page.module.css';
import Image from "next/image";
import { shopBag } from '@/export';

export default function Nav() {
    return  (<nav className={styles.containerNav}>
    <ul className={styles.mainNavContainer}>
      <li className="nav-element">FAKE STORE</li>
      <div className={styles.navShop}>
        <li className="nav-element"><a href="">Главная</a></li>
        <li className="nav-element"><a href="">Магазин</a></li>
        <li className="nav-element"><a href="">О бренде</a></li>
        <li className="nav-element"><a href="">Контакты</a></li>
      </div>
      <div>
        <li className="nav-element">8 800 335 35 35</li>
        <li className="nav-element">
          <Image src={shopBag} alt="m" width={24} height={24} />
        </li>
      </div>
    </ul>
  </nav>)
};