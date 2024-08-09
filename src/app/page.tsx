import styles from "./page.module.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NewCollection from "./components/NewCollection";
import Team from "./components/Team";
import MainSection from "./components/MainSection";
import Important from "./components/Important";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Nav />
        <MainSection />
        <NewCollection />
        <Important />
        <Team />
      </main>
      <Footer />
    </>
  );
}
