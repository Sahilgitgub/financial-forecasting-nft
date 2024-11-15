import React from "react";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <header className="py-8 w-full bg-blue-600 text-white text-center text-4xl font-bold">
        AI-Generated Personalized Financial Forecasting NFTs
      </header>
      <Dashboard />
    </div>
  );
};

export default App;
