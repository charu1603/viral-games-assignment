import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import Summary from "./components/Summary";
import Thankyou from "./components/Thankyou";
import Sidebar from "./components/Sidebar";
import bg1 from '../src/assets/icon-arcade.svg';

function App() {

  const [plansData, setPlansData] = useState([
    { id: "basic", name: "Arcade", monthly: "$9/month", yearly: "$90/year", icon: bg1 },
    { id: "standard", name: "Advanced", monthly: "$12/month", yearly: "$120/year", icon: bg1 },
    { id: "premium", name: "Pro", monthly: "$15/month", yearly: "$150/year", icon: bg1 },
  ]);
  
  const [addonsData, setAddonsData] = useState([
    { id: "Addon1", name: "Online Service", description: "Access to multiplayer games", price: "+$1/mo" },
    { id: "Addon2", name: "Larger Storage", description: "Extra 1TB of Cloud Storage", price: "+$2/mo" },
    { id: "Addon3", name: "Customizable Profile", description: "Custom theme on your profile", price: "+$2/mo" },
  ]);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    addons: [],
    billingType: "monthly",
  });
 

  const updateFormData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <Router>
      <div className="flex justify-center items-center h-screen bg-alabaster">
        <div className="md:max-w-4xl md:mx-auto md:p-4 rounded-lg shadow-md bg-alabaster md:bg-white md:h-[80%] md:w-[80%] w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 h-full ">
          <Sidebar/>
         
            <main className="md:col-span-2 md:px-8">
              <Routes>
                <Route
                  path="/"
                  element={<StepOne formData={formData} updateFormData={updateFormData} />}
                />
                <Route
                  path="/step-two"
                  element={
                    <StepTwo formData={formData} updateFormData={updateFormData}
                    plansData={plansData}
                    addonsData={addonsData}/>
                  }
                />
                <Route
                  path="/step-three"
                  element={
                    <StepThree formData={formData} updateFormData={updateFormData} 
                    plansData={plansData}
                    addonsData={addonsData}/>
                  }
                />
                <Route
                  path="/summary"
                  element={<Summary
                    formData={formData}
                 
                    plansData={plansData}
                    addonsData={addonsData}
                  />}
                />
                <Route path="/thankyou" element={<Thankyou />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
