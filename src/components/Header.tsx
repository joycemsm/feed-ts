import logoFeed from "../assets/logo-feed.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoFeed} alt="logo" />
      <strong>Feed</strong>

    </header>
  );
}
