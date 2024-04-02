import React, { useState,useRef } from 'react';
import Header from './Header';
import {checkValidData} from '../utils/Validate';

const Login = () => {
  const [contain, setContain] = useState(true);
  const [errormsg,setErrormsg] = useState(null);

const email=useRef(null);
const password=useRef(null);
const name=useRef(null);



  const handleForm = () => {
    setContain(!contain);
  
  }
  // const handelSubmit=(e)=>{
  //   const massege =checkValidData(email.current.value,password.current.value ,name.current.value);
  //   setErrormsg(massege)
  //   e.preventDefault()
  // }
  
  const handelSubmit = () => {
    if (contain) {
      // Sign in case, validate only email and password
      const massege = checkValidData(email.current.value, password.current.value);
      setErrormsg(massege);
    } else {
      // Sign up case, validate all fields
      const massege = checkValidData(email.current.value, password.current.value, name.current.value);
      setErrormsg(massege);
    }
  };
  


  return (
    <div className='relative'>
      <Header />
      <div className="absolute w-full">
        <img
          className="w-full h-auto bg-no-repeat"
          src="https://flexsub.shop/content/images/size/w1600/2021/11/1_5lyavS59mazOFnb55Z6znQ.png"
          alt="Netflix logo"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} action="" className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='mx-4 my-4 font-bold text-3xl'>{contain ? 'Sign In' : 'Sign Up'}</h1>
        {!contain && <input ref={name}  type="text" className="p-2 m-2 w-full rounded-xl py-3 text-black bg-gray-600" placeholder='Enter Full Name' /> }
        <input ref={email} type="email" className="p-2 m-2 w-full rounded-xl py-3 text-black bg-opacity-80" placeholder='Enter Email Or Mob No' />
       
        <input  ref={password} type="password" className="p-2 m-2 w-full rounded-xl py-3 text-black bg-opacity-80" placeholder='Enter Password' />
        <p className='text-red-600 text-lg font-bold py-3'>{errormsg}</p>

        <button className='bg-red-800 font-bold text-xl w-full py-2 rounded-xl m-2' onClick={handelSubmit}>{contain ? 'Sign In' : 'Sign Up'}</button>
        <p className='mx-4 my-3 font-semibold text-lg text-center'>Forget Password?</p>
        <p className='mx-4 my-3 font-semibold text-lg text-center'>
          {contain ? "Already Registered" : "Create New Account"}
          <span onClick={handleForm} className='font-bold text-xl cursor-pointer ml-2'>
            {contain ? "Sign Up" : "Sign In"}?
          </span>
        </p>

      </form>
    </div>
  );
};

export default Login;
