import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const StepTwo = ({ formData, updateFormData, plansData }) => {
  const [billingType, setBillingType] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(formData?.plan || null);

  const toggleBilling = () => {
    
    const newBillingType = billingType === "monthly" ? "yearly" : "monthly";
    setBillingType(newBillingType);
    updateFormData("billingType", newBillingType);
  };


  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    updateFormData("plan", planId);
  };

  useEffect(() => {
   
    if (formData) {
      setBillingType(formData.billingType || "monthly");
      setSelectedPlan(formData.plan || null);
    }
  }, [formData]);

  return (
    <div className="flex flex-col justify-between gap-4 h-full">
      <div className="flex flex-col gap-4 p-4 rounded-md -mt-16 md:m-0 mx-6 bg-white">
        <div>
          <h2 className="text-3xl font-bold text-marine-blue mb-2">Select a Plan</h2>
          <p className='text-cool-gray'>You have an option of monthly or yearly billing.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
          {plansData.map((plan) => (
            <div
              key={plan.id}
              onClick={() => handlePlanSelect(plan.id)}
              className={`hover:border-purplish-blue  rounded-md border p-1 px-2 w-full md:w-1/3 h-24 md:h-32 gap-4 flex flex-row md:flex-col items-center md:items-start md:justify-around ${
                selectedPlan === plan.id ? "bg-magnolia border-purplish-blue border" : "border-gray-300"
              }`}
            >
              <img src={plan.icon} alt={plan.name} className="h-10 w-10" />
              <div className="flex flex-col">
                <span className={`font-ubuntu ${selectedPlan === plan.id ? "text-marine-blue" : "text-marine-blue"}`}>
                  {plan.name}
                </span>
                <span className="text-xs text-cool-gray">{plan[billingType]}</span>
              </div>
            </div>
          ))}
        </div>

   
        <div className="flex items-center justify-center mt-8 bg-alabaster py-2 rounded-md">
          <span
            className={`mr-4 text-sm font-medium ${
              billingType === "monthly" ? "text-marine-blue" : "text-gray-500"
            }`}
          >
            Monthly
          </span>

          <div
            className="relative flex items-center bg-marine-blue rounded-full w-16 h-8 p-1 cursor-pointer"
            onClick={toggleBilling}
          >
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                billingType === "monthly" ? "translate-x-1" : "translate-x-8"
              }`}
            ></div>
          </div>

          <span
            className={`ml-4 text-sm font-medium ${
              billingType === "yearly" ? "text-marine-blue" : "text-gray-500"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>

 
      <div className="flex justify-between bg-white p-4">
        <Link to="/">
          <button className="text-cool-gray">Go Back</button>
        </Link>
        <Link to="/step-three">
          <button className="bg-marine-blue w-auto btn">Next Step</button>
        </Link>
      </div>
    </div>
    
  );
};

export default StepTwo;

