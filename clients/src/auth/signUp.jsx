import React, { useState } from 'react';
import {v4 as uuidv4} from "uuid";
import './up.css';

export const SignUpForm = () => {
  const [initial, setinitial] = useState({
    name: '',
    email: '',
    password: '',
    username: '',
    mobNo: '',
  });
  


  const onchangeHandler=(e)=>{
    let {name,value}=e.target;
    setinitial((initia)=>({...initia,[name]:value}));
  }
  const handleSubmit =async (e) => {
    e.preventDefault();

    try{
         const response=await fetch("http://localhost:3000/signup",{
          method:"POST",
          headers:{
            "content-Type":"application/json",
          },
          body:JSON.stringify(initial),   //send form data as json
         });
         if(response.ok){
          const data=await response.json();
          console.log("user signed up successfully",data);
         }else{
          console.log("error during sign up");
          
         }
    }catch{
      console.error('Error:', error);

    }
  };


     

  return (
    <div className="dark-form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="dark-form-title">Sign Up</h2>
        <div className="dark-form-group">
          <label className="dark-form-label" htmlFor="name">
            <i className="fas fa-user" />
            Name:
          </label>
          <input
            type="text"
            id="name"
            name='name'
            value={initial.name}
            onChange={onchangeHandler}
            className="dark-form-input"
            placeholder="Enter your name"
          />
        </div>
        <div className="dark-form-group">
          <label className="dark-form-label" htmlFor="email">
            <i className="fas fa-envelope" />
            Email:
          </label>
          <input
            type="email"
            id="email"
            name='email'

            value={initial.email}
            onChange={onchangeHandler}            className="dark-form-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="dark-form-group">
          <label className="dark-form-label" htmlFor="password">
            <i className="fas fa-lock" />
            Password:
          </label>
          <input
            type="password"
            id="password"
            name='password'
            value={initial.password}
            onChange={onchangeHandler}            className="dark-form-input"
            placeholder="Enter your password"
          />
        </div>
        <div className="dark-form-group">
          <label className="dark-form-label" htmlFor="username">
            <i className="fas fa-user-circle" />
            Username:
          </label>
          <input
            type="text"
            id="username"
            name='username'
            value={initial.username}
            onChange={onchangeHandler}            className="dark-form-input"
            placeholder="Enter your username"
          />
        </div>
        <div className="dark-form-group">
          <label className="dark-form-label" htmlFor="mobNo">
            <i className="fas fa-mobile-alt" />
            Mobile Number:
          </label>
          <input
            type="tel"
            id="mobNo"
            name='mobNo'
            value={initial.mobNo}
            onChange={onchangeHandler}            className="dark-form-input"
            placeholder="Enter your mobile number"
          />
        </div>
        <button type="submit" className="dark-form-btn">
          Sign Up
          <i className="fas fa-arrow-right" />
        </button>
      </form>
    </div>
  );
};

