// App.js

import "./App.css";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleBillingClick = () => {
    setShowContent(true);
  };

  const handleDashboardClick = () => {
    setShowContent(false);
  };

  const handlePatientClick = () => {
    setShowContent(false);
    };
    
    const handleAppointmentClick = () => {
    setShowContent(false);
    };
    
    const handleSupportClick = () => {
    setShowContent(false);
    };
    
    const handleSettingClick = () => {
    setShowContent(false);
    };
    
    const hideContent = () => {
    setShowContent(false);
    }
  return (
    <div className="main-container">
      <div className="container">
        <Sidebar onDashboardClick={handleDashboardClick}
           onBillingClick={handleBillingClick} 
           onPatientClick={handlePatientClick}
           onAppointmentClick={handleAppointmentClick}
           onSupportClick={handleSupportClick}
           onSettingClick={handleSettingClick}
           onHideContent={hideContent}
        />
        {showContent && <Content />}
      </div>
    </div>
  );
}

export default App;
