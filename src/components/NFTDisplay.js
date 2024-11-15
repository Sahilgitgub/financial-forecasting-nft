import React, { useEffect, useState } from "react";
import axios from "axios";

const NFTDisplay = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      const response = await axios.get("/api/user-nfts"); // replace with actual API
      setNfts(response.data);
    };
    fetchNFTs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Your NFTs</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {nfts.map((nft, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              NFT #{nft.id}
            </h4>
            <p className="text-sm text-gray-600">
              Credit Score Forecast: {nft.creditScoreForecast}
            </p>
            <p className="text-sm text-gray-600">
              Investment Growth: {nft.investmentGrowth}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTDisplay;
