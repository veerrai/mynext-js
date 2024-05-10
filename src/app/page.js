import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import One from "../app/assets/images/one.jpg"
import Two from "../app/assets/images/two.jpg"



export default function Home() {
  return (
    <main className={styles.main}>

      <Navbar />
      <div className="container my-5 py-5">
      <div >
      {/* <button   className={styles.login_btn} >  Publish your ad</button> */}
      <Link href={"item"}  className={styles.login_btn} > PUBLISH YOUR ADD</Link>
      </div>
        <h5 className="my-3">LATEST LISTINGS</h5>
        <div className="card  ">
          <div className="row">
            <div className="col-md-3">
              <Image src={One} width={300} height={200} alt="one"  className={styles.image_layout}/>
            </div>
            <div className="col-md-6 py-3">
            <Link href={"/"}   className={styles.links_page}>ddfsdgfdgfdgfhgfhgjhgjghjghjg</Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae enim sed magna blandit aliquet. Nullam ut elit sed massa suscipit efficitur. Sed auctor nulla sit amet purus ultricies, eget gravida elit tincidunt. 
              </p>
              <p> May 8, 2024</p>

            </div>
            <div className="col-md-3 py-3">
              {/* <p>245.00 Dollar US$</p> */}
              <div className="my-3">
          <Link href={""}  className={styles.login_btn} >Read More</Link>  
          </div>
          <div className="my-3">
          <Link href={""}  className={styles.login_btn} >View Website</Link>  
          </div>
            </div>
          </div>

          
        </div>


        <div className="card my-4">
          <div className="row">
            <div className="col-md-3">
              <Image src={Two} width={300} height={200} alt="one"  className={styles.image_layout}/>
            </div>
            <div className="col-md-6 py-3">
            <Link href={"/"}   className={styles.links_page}>1234567890</Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae enim sed magna blandit aliquet. Nullam ut elit sed massa suscipit efficitur. Sed auctor nulla sit amet purus ultricies, eget gravida elit tincidunt. 
              </p>
              <p> May 8, 2024</p>
            </div>
            <div className="col-md-3 py-3">
              {/* <p>245.00 Dollar US$</p> */}
              <div className="my-3">
          <Link href={""}  className={styles.login_btn} >Read More</Link>  
          </div>
          <div className="my-3">
          <Link href={""}  className={styles.login_btn} >View Website</Link>  
          </div>
            </div>
          </div>

          
        </div>
      </div>
    </main>
  );
}
