import Image from 'next/image';
import styles from './navBar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navTopPartContainer}>
          <div className={styles.icon}>
            <Image
              src='/static/icons/language.svg'
              width='24'
              height='24'
              alt='language'
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
