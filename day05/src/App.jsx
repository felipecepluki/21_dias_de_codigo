import { useState } from 'react'
import reactLogo from './assets/react.svg';
import { Bug } from "phosphor-react";

export function App() {
  return (
    <div className='bg-[#1f1a25] h-screen justify-center items-center flex flex-col'>
      <div className='flex flex-row items-center'>
      <Bug size={80} color="#f71818" />
      <div className='flex pl-4 pr-4 flex-col items-center justify-center'>
      <strong className='text-white text-9xl'>404</strong>
      <p className='text-white text-2xl'>Page not found</p>
      </div>
      <Bug size={80} color="#f71818" />
      </div>
      <p className='text-white mt-4 text-xl'>Contact support for more information</p>
    </div>
  )
}
