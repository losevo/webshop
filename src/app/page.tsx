import styles from "./page.module.css";
import Image from "next/image";
import { mainPicture1, mainPicture2, mainPicture3, colPicture, teamPicture, checkmarkPicture, speedPicture, handPicture, visaPicture, mastercardPicture, telegramPicture, linkedinPicture, githubPicture, strelka } from "@/export";

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <nav className={styles.containerNav}>
        <ul className={styles.mainNavContainer}>
          <li className="nav-element">FAKE STORE</li>
          <li className="nav-element">Главная</li>
          <li className="nav-element">Магазин</li>
          <li className="nav-element">О бренде</li>
          <li className="nav-element">Контакты</li>
          <li className="nav-element">8 800 335 35 35</li>
          <li className="nav-element">Garbage</li>
        </ul>
      </nav>
      <section className={styles.mainSection}>
        <div className={styles.containerSliderMainText}>
          <article className={`${styles.textForMainSlider} ${styles.active}`} id="text-1">
            <h1>Новое поступление несуществуюших товаров</h1>
            <p>Утонченные сочетания красивых картинок, сгенерированных в Кандинском, и реальных товаров.</p>
          </article>
          <article className={styles.textForMainSlider} id="text-2">
            <h1>Что-то новенькое. Мы заждались тебя</h1>
            <p>Надоело искать разработчика. Настало время свежих идей и умелых рук</p>
          </article>
          <article className={styles.textForMainSlider} id="text-3">
            <h1>Входи в новую неделю со мной</h1>
            <p>Я постоянно углубляю знания - и этот проект интернет-магазина не исключение</p>
          </article>
          <div className={styles.containerForButtons}>
            <button className={styles.nextSection}>
              <Image src={strelka} alt="m" width={14} height={28}/>
            </button>
            <button className={styles.pathToShop}>Открыть магазин</button>
          </div>
        </div>
        <div className="container-main-photos">
          <Image src={mainPicture1} alt="m" width={300} height={450}/>
          <Image src={mainPicture2} alt="m" width={250} height={400}/>
          <Image src={mainPicture3} alt="m" width={250} height={400}/>
        </div>
        <div className="rectangle-main-right"></div>
      </section>
      <section>
        <h2>Новая коллекция (вот это вот оформить в отдельные компоненты)</h2>
        <div>
        <Image src={colPicture} alt="m" width={250} height={400}/>
          <p>Футболка (не девушка)</p>
          <p>1000 $</p>
        </div>
        <div>
        <Image src={colPicture} alt="m" width={250} height={400}/>
          <p>Футболка (не девушка)</p>
          <p>1000 $</p>
        </div>
        <div>
        <Image src={colPicture} alt="m" width={250} height={400}/>
          <p>Футболка (не девушка)</p>
          <p>1000 $</p>
        </div>
        <button className="path-to-shop secondary">Открыть магазин</button>
      </section>
      <section>
        <h2>Что для нас важно</h2>
        <article>
        <Image src={checkmarkPicture} alt="m" width={50} height={50}/>
          <h3>Качество</h3>
          <p>Я использую лучшие инструменты для беспрецедентной разработки сайта</p>
        </article>
        <article>
        <Image src={speedPicture} alt="m" width={50} height={50}/>
          <h3>Скорость</h3>
          <p>Благодаря отлаженной системе делаю подобные макеты сайтов меньше, чем за две недели</p>
        </article>
        <article>
        <Image src={handPicture} alt="m" width={50} height={50}/>
          <h3>Ответственность</h3>
          <p>Я забочусь о качестве работы и внимательно выслушиваю и принимаю обратную связь</p>
        </article>
      </section>
      <section>
        <h2>Команда мечты</h2>
        <Image src={teamPicture} alt="m" width={400} height={250}/>
        <Image src={teamPicture} alt="m" width={400} height={250}/>
        <Image src={teamPicture} alt="m" width={400} height={250}/>
        <div>
          <h3>Для каждой (команды)</h3>
          <p>Каждая команда достойна получить такого сотрудника</p>
          <p>Мы ищем, что улучшить, находим и улучшаем вместе</p>
          <a href=""></a>
        </div>
      </section>
    </main>
    <footer>
      <div>
        <p>THIS IS JOOOOOOOOOOHN CENA</p>
      </div>
      <div>
        <ul>
          <li>Главная</li>
          <li>Магазин</li>
          <li>О бренде</li>
          <li>Контакты</li>
        </ul>
      </div>
      <div>
        <p>8 800 335 35 35</p>
        <p>varenikda@gmail.com</p>
      </div>
      <div>
        <p>Все права ничем не защищены, используйте как хотите, только не выдавайте за свои. И позовите меня на собес))</p>
      </div>
      <div>
        <ul>
          <li>Пальто</li>
          <li>Свитшоты</li>
          <li>Кардиганы</li>
          <li>Толстовки</li>
        </ul>
      </div>
      <div>
        <a href="#"><Image src={telegramPicture} alt="m" width={50} height={50}/></a>
        <a href="#"><Image src={linkedinPicture} alt="m" width={50} height={50}/></a>
        <a href="#"><Image src={githubPicture} alt="m" width={50} height={50}/></a>
        <Image src={visaPicture} alt="m" width={50} height={50}/>
        <Image src={mastercardPicture} alt="m" width={50} height={50}/>
      </div>
    </footer>
    </>
  );
}
