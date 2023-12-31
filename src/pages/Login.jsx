import React from 'react';
import ButtonComponent from '../components/Button';
import Input from '../components/Input';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="flex justify-center items-center bg-orange-500 h-screen">
    <form className="bg-white flex flex-col justify-center items-center shadow-md rounded px-8 pt-6 pb-8 mb-4" method = 'POST'>
        <h1 className='block text-gray-700 text-inherit font-bold mb-2 text-3xl'>Login</h1>
        <div className="mb-6">
        <Input type = 'email' label = 'Email' placeholder = 'Enter your email address' name = 'email'/>
        </div>
        <div className="mb-6">
        <Input type = 'password' label = 'Password' placeholder = '*********' name = 'password'/>
        </div>
        <div className="flex flex-col items-center justify-between ">
        <Link to = '/' ><ButtonComponent type='submit' name = 'Login'/></Link>
        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
        </a>
        </div>
    </form>
    </div>

  )
}
