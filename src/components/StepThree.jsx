import React,{useState} from "react";
import { useNavigate,Link } from "react-router-dom";

const StepThree = ({ formData, updateFormData, addonsData  }) => {
    const navigate = useNavigate();
  
    
      const handleAddOnSelect = (addonId) => {
        const updatedAddons = formData.addons.includes(addonId)
          ? formData.addons.filter((id) => id !== addonId)
          : [...formData.addons, addonId]; 
        updateFormData("addons", updatedAddons);
      };
      
 
  return (
    <div className=" flex flex-col justify-between gap-4 h-full">
         <div className="flex flex-col gap-4 p-4 rounded-md -mt-16  md:m-0 mx-6  bg-white">
   <div className="">
<h2 className="text-3xl font-bold text-marine-blue mb-2">Select a Plan</h2>
<p className='text-cool-gray'>Add-ons help enhance your personal gaming experience.</p>
</div>
<div className="grid gap-4">
        {addonsData.map((addon) => (
          <button
            key={addon.id}
            onClick={() => handleAddOnSelect(addon.id)}
            className={`h-16 rounded-md border hover:border-purplish-blue p-2 flex justify-between items-center ${
              formData.addons.includes(addon.id) ? "bg-alabaster border-purplish-blue border" : "bg-white border-gray-400"
            }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={formData.addons.includes(addon.id)}
                onChange={() => handleAddOnSelect(addon.id)}
                className="mr-4"
              />
              <div className="flex flex-col items-start text-xs md:text-sm text-left">
                <p className="text-marine-blue font-medium">{addon.name}</p>
                <span className="text-cool-gray text-sm">{addon.description}</span>
              </div>
            </div>
            <div className="flex items-center text-blue-600">
              <span>{addon.price}</span>
            </div>
          </button>
        ))}
      </div>
      </div>
      <div className="flex justify-between bg-white p-4">
     <Link to="/step-two"> <button  className="text-cool-gray">Go Back</button></Link>
     <Link to="/summary"><button className="btn bg-marine-blue">Next Step</button></Link>
    </div></div>
  );
};

export default StepThree;
