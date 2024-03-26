import React from 'react';
import Header from './Header';

const Login = () => {
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
      <form action="" className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='mx-4 my-4 font-bold text-3xl'>Sign In</h1>
        <input type="text" className="p-2 m-2 w-full rounded-xl py-3 text-black bg-gray-600" placeholder='Enter Email Or Mob No' />
        <input type="password" className="p-2 m-2 w-full rounded-xl py-3 text-black bg-gray-600" placeholder='Enter Password' />
        <button className='bg-red-800 font-bold text-xl w-full py-2 rounded-xl m-2'>Sign In</button>
        <p className='mx-4 my-3 font-semibold text-lg text-center'>Forget Password?</p>
      </form>
    </div>
  );
};

export default Login;
