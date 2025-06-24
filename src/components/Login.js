import React from 'react';
import { HomeBg } from '../utils/content';
import Header from './Header';

const Login = () => {
  return (
    <div className="relative min-h-screen">
      <Header />

   
      <img
        src={HomeBg}
        alt="background"
        className="w-full h-screen object-cover"
      />

      {/* Overlay form */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
        
        <form className="bg-black bg-opacity-70 p-6 rounded shadow-md space-y-4">
            <h1 className='font-bold text-3xl text-white'>Sign In</h1>
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 border w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border w-full"
          />
          <button className="p-2 bg-red-600 text-white w-full rounded">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
