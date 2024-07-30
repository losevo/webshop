import styles from "./page.module.css";
import Image from "next/image";
import { mainPicture1, mainPicture2, mainPicture3 } from "@/export";

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <nav className="container-nav">
        <ul className="main-nav-container">
          <li className="nav-element">Fake Store</li>
          <li className="nav-element">Главная</li>
          <li className="nav-element">Магазин</li>
          <li className="nav-element">О бренде</li>
          <li className="nav-element">Контакты</li>
          <li className="nav-element">8 800 335 35 35</li>
          <li className="nav-element">Garbage</li>
        </ul>
      </nav>
      <section>
        <div className="container-slider-main-text">
          <article className="text-for-main-slider" id="text-1">
            <h1>Новое поступление несуществуюших товаров</h1>
            <p>Утонченные сочетания красивых картинок, сгенерированных в Кандинском, и реальных товаров</p>
            <button className="next-section">тут стрелочка</button>
            <button className="path-to-shop">Открыть магазин</button>
          </article>
          <article className="text-for-main-slider" id="text-2">
            <h1>Что-то новенькое. Мы заждались тебя</h1>
            <p>Надоело искать разработчика. Настало время свежих идей и умелых рук</p>
            <button className="next-section">тут стрелочка</button>
            <button className="path-to-shop">Открыть магазин</button>
          </article>
          <article className="text-for-main-slider" id="text-3">
            <h1>Входи в новую неделю со мной</h1>
            <p>Я постоянно углубляю знания - и этот проект интернет-магазина не исключение</p>
            <button className="next-section">тут стрелочка</button>
            <button className="path-to-shop">Открыть магазин</button>
          </article>
        </div>
        <div className="container-main-photos">
          <Image src={mainPicture1} alt="m" width={300} height={400}/>
          <Image src={mainPicture2} alt="m" width={200} height={300}/>
          <Image src={mainPicture3} alt="m" width={200} height={300}/>
        </div>
        <div className="rectangle-main-right"></div>
      </section>
      <section>
        <h2>Новая коллекция (вот это вот оформить в отдельные компоненты)</h2>
        <div>
          <img src="" alt="" />
          <p></p>
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
          <p></p>
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
          <p></p>
          <p></p>
        </div>
        <button className="path-to-shop secondary">Открыть магазин</button>
      </section>
      <section>
        <h2>Что для нас важно</h2>
        <article>
          <img src="" alt="" />
          <h3>Качество</h3>
          <p>Я использую лучшие инструменты для беспрецедентной разработки сайта</p>
        </article>
        <article>
        <img src="" alt="" />
          <h3>Скорость</h3>
          <p>Благодаря отлаженной системе делаю подобные макеты сайтов меньше, чем за неделю</p>
        </article>
        <article>
        <img src="" alt="" />
          <h3>Ответственность</h3>
          <p>Я забочусь о качестве работы и внимательно выслушиваю и принимаю обратную связь</p>
        </article>
      </section>
      <section>
        <h2>Команда мечты</h2>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <div>
          <h3></h3>
          <p></p>
          <p></p>
          <a href=""></a>
        </div>
      </section>
    </main>
    <footer>
      <div>
        <p></p>
      </div>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <p></p>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </footer>
    </>
  );
}
