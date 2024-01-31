import styles from '../styles/navbar.module.css';
import { Outlet } from 'react-router-dom';


const Navbar = () => {
    return (
      <>
      <div className={styles.nav}>
        <div className={styles.leftDiv}>
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/128/1358/1358994.png"
              className={styles.logo}
            />
            <span className={styles.title}>Albums</span>
        </div>
       
      </div>
      <Outlet/>
      </>
    );
  
  };
  
  export default Navbar;