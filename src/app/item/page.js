import React from 'react'
import Navbar from "../Navbar";
import Link from "next/link";
import styles from "../page.module.css";
import * as LR from '@uploadcare/blocks';
LR.registerBlocks(LR);



const page = () => {
  return (
    <div>
           <Navbar />
      {/* <Link href={"item"}  className={styles.login_btn} > PUBLISH YOUR ADD</Link> */}


      <div className='container card my-5 py-3  col-lg-8'>
        <form >
          <h6>PUBLISH A LISTING</h6>
          <div>
          <label>Select a category <span className='text-danger'>*</span> </label>
          <select className="form-control my-2" name="user_type" >
            <option>select a category...</option>
              <option >Tikal Nagar</option>
              <option>Study Visa</option>
            </select>
          </div>

          <div>
          <label>Select a sub category <span className='text-danger'>*</span> </label>
          <select className="form-control my-2" name="user_type" >
            <option>select a sub category...</option>
              <option >Tikal Nagar</option>
              <option>Study Visa</option>
            </select>
          </div>


          <div>
          <label>Title <span className='text-danger'>*</span> </label>
            <input className='form-control my-3' id="title" name="title" type="text"   />
          </div>
          <div>
          <label>Description  <span className='text-danger'>*</span> </label>
            <input className='form-control my-3' id="description" name="description" type="text"   />
          </div>
          <div>
          <label>  ADD IMAGES  <span className='text-danger'>*</span> </label>
            <input className='form-control my-3' id="add_images" name="add_images" type="text"   />
          </div>
          {/* <div>
          <label>  LISTING LOCATION   </label>
          <p>Country <span className='text-danger'>*</span></p>
          <select className="form-control" name="user_type" >
            <option>Select a Country...</option>
              <option >Tikal Nagar</option>
              <option>Study Visa</option>
            </select>
          </div>

          <div>
          <p className='my-2'>Region <span className='text-danger'>*</span></p>
          <select className="form-control" name="user_type" >
            <option>Select a Region...</option>
              <option >Tikal Nagar</option>
              <option>Study Visa</option>
            </select>
          </div>

          <div>
          <p className='my-2'>City <span className='text-danger'>*</span></p>
          <select className="form-control" name="user_type" >
            <option>Select a City...</option>
              <option >Tikal Nagar</option>
              <option>Study Visa</option>
            </select>
          </div>


          <div>
            <p className='my-2'>City Area </p>
            <input />
          </div>

          <div>
            <p className='my-2'>Address  </p>
            <input />
          </div> */}

          <div >
          <p className='my-3'>Please visit our website:  </p>
          <input  id='website' name='wesbite'/>
          </div>


          <div >
          <p className='my-3'>Keywords: </p>
          <input id='keywords' name='keywords'/>
          </div>


          <div >
          <p className='my-3'>Phone: </p>
          <input id='phone_number' name='phone_number'/>
          </div>

          
          <div >
          <p className='my-3'>Facebook: </p>
          <input id='facebook' name='facebook'/>
          </div>


          <div>
          <lr-config
        ctx-name="my-uploader"
        pubkey="44bd1529cda1c0841654"
      />
      <lr-file-uploader-regular
        ctx-name="my-uploader"
        src-css={''}
      />
          </div>
          <p className='my-2'>* This field is required</p>
          <button type='submit' className={styles.publish} >PUBLISH</button>
        </form>
      </div>
    </div>
  )
}

export default page
