// components/Navbar.js
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";


const Navbar = () => {
  return (
    <main>
    <nav className={styles.navbar}>
 
      <ul className={styles.navList}>
       <li>
         <Link href={"http://localhost:3000/"}>HOME</Link>
       </li>
       <li>
         <Link href={"login"}>LOGIN</Link>
       </li>

       <li>
         <Link href={"/"}>LOGOUT</Link>
       </li>

       <li>
         <Link href={"register"}>REGISTER</Link>
       </li>
       <li>
       <Link href={"about"}>ABOUT</Link>

       </li>
       <li>
      <Link href={"contact"}>CONTACT</Link>

       </li>
      </ul>
     
    </nav>
    <div className='col-md-8'>
    <div className={styles.logo}>
        {/* <img src="/logo.png" alt="Logo" className= {styles.logoImage} /> */}
        <h1 className={styles.logoText}> Bookmaking</h1>
      </div>
      </div>
    </main>
  );
};

export default Navbar;
