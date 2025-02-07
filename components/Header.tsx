import Image from "next/image";
import styles from "./Header.module.css";

const name = "naobe";

const Header = () => {
  return (
    <header className={styles.container}>
      <Image src="/icon.jpg" alt="logo" width={100} height={100} />
      <h1>{name}</h1>
    </header>
  );
};

export default Header;
