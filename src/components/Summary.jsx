import React from "react";
import { useNavigate,Link } from "react-router-dom";

const Summary = ({ formData, plansData, addonsData }) => {
 


  const selectedPlan = plansData?.find((plan) => plan.id === formData?.plan);
  const { plan, billingType } = formData || {};
 
  const selectedAddons = addonsData?.filter((addon) =>
    formData?.addons?.includes(addon.id)
  );

  const planPrice =
    selectedPlan && billingType === "monthly"
      ? parseInt(selectedPlan.monthly.replace(/[^0-9]/g, ""))
      : selectedPlan
      ? parseInt(selectedPlan.yearly.replace(/[^0-9]/g, ""))
      : 0;

  const addonsPrice = selectedAddons?.reduce(
    (total, addon) =>
      total + parseInt(addon.price.replace(/[^0-9]/g, "")),
    0
  );

  const totalPrice = planPrice + (addonsPrice || 0);


  return (
    <div className="flex flex-col justify-between gap-4 h-full">
      <div className="flex flex-col gap-4 p-4 rounded-md -mt-16 md:m-0 mx-6 bg-white">
        <div>
          <h2 className="text-3xl font-bold text-marine-blue mb-2">
            Finishing up
          </h2>
          <p className="text-cool-gray">
            Double-check everything looks OK before confirming.
          </p>
        </div>

        <div className="border p-4 rounded-md bg-alabaster flex flex-col">
          <div className="border-b-gray-200 border-b pb-2">
          {selectedPlan ? (
            <>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-marine-blue">
                  {selectedPlan.name} ({billingType})
                </h3>
                <span className="font-bold text-marine-blue">
                  {billingType === "monthly"
                    ? selectedPlan.monthly
                    : selectedPlan.yearly}
                </span>
              </div>
             <Link to="/step-two"><button
                className="text-blue-500 underline text-sm"
             
              >
                Change
              </button></Link> 
            </>
          ) : (
            <p className="text-cool-gray">No plan selected</p>
          )}</div>  
            <div className="pt-2">
           {selectedAddons?.length > 0 ? (
            <ul>
              {selectedAddons.map((addon, index) => (
                <li key={index} className="flex justify-between text-cool-gray">
                  <span>{addon.name}</span>
                  <span>{addon.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-cool-gray">No add-ons selected</p>
          )}</div>
        </div>

    
  
        <div className="flex justify-between font-bold text-marine-blue p-4">
          <span>Total ({billingType})</span>
          <span>${totalPrice}/{billingType === "monthly" ? "mo" : "yr"}</span>
        </div>
      </div>

   
      <div className="flex justify-between bg-white p-4">
        <Link to="/step-three"><button className="text-cool-gray">
          Go Back
        </button></Link>
        <Link to="/thankyou"> <button  className="btn bg-marine-blue">
          Confirm
        </button></Link>
      </div>
    </div>
  );
};

export default Summary;
