import React from 'react'
import bg5 from '../assets/icon-thank-you.svg';

const Thankyou = () => {
  return (
    <div className=" flex flex-col justify-between gap-4 h-full">
         <div className="flex flex-col items-center justify-center gap-4 p-4 py-6 h-full rounded-md -mt-16  md:m-0 mx-6  bg-white">

<img src={bg5} alt='thank-you' className='h-22 w-22'></img>
<h1 className='text-marine-blue font-bold text-3xl'>Thank-you!</h1>
<p className='text-cool-gray text-center'>Thanks for confirming your confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div></div>
  )
}

export default Thankyou