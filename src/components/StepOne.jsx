import React from 'react'
import { useNavigate,Link } from 'react-router-dom';

const StepOne = ({formData, updateFormData, nextStep}) => {
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleChange=(e)=>{
updateFormData(e.target.name, e.target.value);
  };
  const handleSubmit = (e)=>{
 e.preventDefault();
 if(formData.name && isValidEmail(formData.email) && formData.phone){
  navigate('/step-two');
 }
 else{
  if (!formData.name || !formData.phone || !formData.email) {
    alert("Please fill all the blanks");
  } else if (!isValidEmail(formData.email)) {
    alert("The email address is not formatted correctly");
  }
 }

  };
  return (
    <form onSubmit={handleSubmit} className=' flex flex-col justify-between items-between h-full gap-4 rounded-md'>
      <div className='bg-white p-2 rounded-md -mt-16  md:m-0 mx-6 '>
    <div className=''>
    <h2 className="text-xl md:text-3xl font-bold text-marine-blue mb-2">Personal Info</h2>
    <p className='text-cool-gray'>Please provide your name, email address and phone number.</p>
    </div>
<div className=''>
<div className='my-4'>
<label className="block mb-2 font-semibold text-marine-blue">Name</label>
<input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          placeholder="Stephen King"
        />
</div>
<div className="mb-4">
        <label className="block text-marine-blue font-semibold mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-marine-blue font-semibold">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
     </div>
     </div>
     <div className='flex justify-end items-center bg-white md:bg-transparent p-4 md:p-0'>
     <Link to="/step-two"><button type="submit" className="btn w-auto bg-marine-blue ">
        Next Step
      </button></Link>
      </div>
    </form>
  )
}

export default StepOne