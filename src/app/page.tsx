import styles from "./page.module.css";
import Image from "next/image";
import { mainPicture1, mainPicture2, mainPicture3, colPicture, teamPicture, checkmarkPicture, speedPicture, handPicture, visaPicture, mastercardPicture, telegramPicture, linkedinPicture, githubPicture, strelka, shopBag } from "@/export";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <nav className={styles.containerNav}>
          <ul className={styles.mainNavContainer}>
            <li className="nav-element">FAKE STORE</li>
            <div className={styles.navShop}>
              <li className="nav-element">Главная</li>
              <li className="nav-element">Магазин</li>
              <li className="nav-element">О бренде</li>
              <li className="nav-element">Контакты</li>
            </div>
            <div>
              <li className="nav-element">8 800 335 35 35</li>
              <li className="nav-element">
                <Image src={shopBag} alt="m" width={24} height={24} />
              </li>
            </div>
          </ul>
        </nav>
        <section className={styles.mainSection}>
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
        </section>
        <section className={styles.newCollection}>
          <h2>Новая коллекция</h2>
          <div className={styles.shopContainer}>
            <div>
              <Image src={colPicture} alt="m" width={350} height={478} />
              <div className={styles.shopPrice}>
                <h4>Футболка (не девушка)</h4>
                <p>1000 $</p>
              </div>
            </div>
            <div>
              <Image src={colPicture} alt="m" width={350} height={478} />
              <div className={styles.shopPrice}>
                <h4>Футболка (не девушка)</h4>
                <p>1000 $</p>
              </div>
            </div>
            <div>
              <Image src={colPicture} alt="m" width={350} height={478} />
              <div className={styles.shopPrice}>
                <h4>Футболка (не девушка)</h4>
                <p>1000 $</p>
              </div>
            </div>
          </div>

          <button className={`${styles.pathToShop} ${styles.primary}`}>
            Открыть магазин
          </button>
        </section>
        <section className={styles.importantSection}>
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
        </section>
        <section className={styles.teamSection}>
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
        </section>
      </main>
      <footer className={styles.footer}>
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
              <li>Главная</li>
              <li>Магазин</li>
              <li>О бренде</li>
              <li>Контакты</li>
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
      </footer>
    </>
  );
}
