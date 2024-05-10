'use client'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar';
import Link from "next/link";
import styles from "../page.module.css";




const page = () => {
    const[data, setData] = useState({
        name: "",
        email: "",
        passowrd: "",
        confirmpassowrd: "",



    })

    const onChangename = (e) => {
        const name = e.target.value
      setData({
        ...data, name
      })  
    }


    const onChangeemail = (e) => {
        const email = e.target.value

        setData({
            ...data, email
          })
        
    }

    const onChangepassword = (e) => {
        const passowrd = e.target.value

        setData({
            ...data, passowrd
          }) 
    }

    const onChangeconfirmpass = (e) => {
        const confirmpassowrd = e.target.value

        setData({
            ...data, confirmpassowrd
          })  
    }

   const  onClicksubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            // Handle successful login
        } else {
            // Handle login error
        }
    } catch (error) {
        console.error('Error:', error);
    }
   }

  return (
    <>
    <Navbar />
    <div className='container card my-5 py-3 col-md-3 col-lg-3' >
       <form>
        <h6 className='text-center'>ACCESS TO YOUR ACCOUNT</h6>
      {/* <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" value={data.name} onChange={onChangename}/>
      </div> */}
 
      <div>
        <input className='form-control my-3' id="email" name="email" placeholder="E-mail*" value={data.email} onChange={onChangeemail}/>
      </div>
 
      <div>
        <input  className='form-control my-3' id="password" name="password" type="password" placeholder='Password*' value={data.passowrd} onChange={onChangepassword}/>
      </div>

      {/* <div>
        <label htmlFor="password">Confirm Password</label>
        <input id="password" name="password" type="password" value={data.confirmpassowrd} onChange={onChangeconfirmpass}/>
      </div> */}
     
      <button onClick={onClicksubmit} type='submit'  className={styles.login_btn} >LOG IN</button>
    </form>

    <Link href={'register'}  style={{fontSize: '13px'}} className='my-3'>Register for a free account</Link>

    </div>
    </>
  )
}

export default page
