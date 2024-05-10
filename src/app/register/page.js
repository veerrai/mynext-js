'use client'
import React, { useState } from 'react';
import Navbar from "../Navbar";
import styles from "../page.module.css";



const Page = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone_number: '',
    user_type: '0' // Default to User
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://pv.greatfuturetechno.com/pv-api/user/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token aa4d0b1b9b2794090b18febbd71cf2c90e0d5a83` // Include token in the request headers
          },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data); // Do something with the response data
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='container card my-5 py-3 col-md-3 col-lg-3'>
        <form onSubmit={handleSubmit}>
          <h6 className='text-center'>REGISTER AN ACCOUNT FOR FREE</h6>
          <div>
            <input className='form-control my-3' id="email" name="email" placeholder="E-mail*" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <input className='form-control my-3' id="password" name="password" type="password" placeholder='Password*' value={formData.password} onChange={handleChange} />
          </div>
          <div>
            <input className='form-control my-3' id="confirmPassword" name="confirmPassword" type="password" placeholder='Re-type Password*' value={formData.confirmPassword} onChange={handleChange} />
          </div>
          <div>
            <input className='form-control my-3' id="phone_number" name="phone_number" type="text" placeholder='Mobile Phone*' value={formData.phone_number} onChange={handleChange} />
          </div>
          <div>
            <select className="form-control" name="user_type" value={formData.user_type} onChange={handleChange}>
              <option value="0">User</option>
              <option value="1">Company</option>
            </select>
          </div>
          <p className='my-2'>* This field is required</p>
          <button type='submit' className={styles.login_btn} onClick={handleSubmit}>CREATE</button>
        </form>
      </div>
    </>
  );
};

export default Page;
