import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const StockTracker = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      const response = await axios.get("/api/stock-forecast"); // replace with actual API
      setStockData(response.data);
    };
    fetchStockData();
  }, []);

  const chartData = stockData
    ? {
        labels: stockData.dates,
        datasets: [
          {
            label: "Stock Price Prediction",
            data: stockData.prices,
            borderColor: "rgba(75,192,192,1)",
            fill: false,
          },
        ],
      }
    : {};

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Stock Tracker
      </h3>
      {stockData ? (
        <div className="h-72">
          <Line data={chartData} />
        </div>
      ) : (
        <p className="text-gray-500">Loading stock data...</p>
      )}
    </div>
  );
};

export default StockTracker;
