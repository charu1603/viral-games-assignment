import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const steps = [
    { path: "/", label: "Step 1", name: "Your Info" },
    { path: "/step-two", label: "Step 2", name: "Select Plan" },
    { path: "/step-three", label: "Step 3", name: "Add-Ons" },
    { path: "/summary", label: "Step 4", name: "Summary" },
  ];

  const location = useLocation();

  return (
    <div
      className="desktop:w-1/3 desktop-bg mobile-bg bg-cover text-white flex justify-center items-center md:justify-start md:items-start  md:flex-col p-8 md:rounded-md h-full overflow-hidden"
    
    >
      {steps.map((step, index) => {
        const isActive = location.pathname === step.path;

        return (
          <NavLink
            key={index}
            to={step.path}
            className="flex items-center gap-4 p-3"
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                isActive ? "bg-pastel-blue text-white border-blue-600" : "border-white text-white"
              }`}
            >
              {index + 1}
            </div>
            <div className="hidden md:block ">
              <p className="font-bold ">{step.label}</p>
              <p className="text-sm">{step.name}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;

