import React, { useEffect, useState } from "react";
import axios from "axios";
import StockTracker from "./StockTracker";
import NFTDisplay from "./NFTDisplay";

const Dashboard = () => {
  const [financialData, setFinancialData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/financial-forecast"); // replace with actual API
      setFinancialData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* Financial Overview Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Your Financial Overview
          </h3>
          {financialData ? (
            <div>
              <p className="text-lg text-gray-700">
                Predicted Credit Score: {financialData.creditScore}
              </p>
              <p className="text-lg text-gray-700">
                Expense Forecast: ${financialData.expenseForecast}
              </p>
              <p className="text-lg text-gray-700">
                Investment Growth: {financialData.investmentGrowth}%
              </p>
            </div>
          ) : (
            <p className="text-gray-500">Loading...</p>
          )}
        </div>

        {/* Stock Tracker Section */}
        <StockTracker />
      </div>

      {/* NFT Display Section */}
      <NFTDisplay />
    </div>
  );
};

export default Dashboard;
