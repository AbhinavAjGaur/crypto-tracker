import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePrices } from "./redux/cryptoSlice";
import CryptoTable from "./component/CryptoTable";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000); // update every 2 seconds

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-6">Real-Time Crypto Price Tracker</h1>
      <CryptoTable/>
    </div>
  );
};

export default App;
