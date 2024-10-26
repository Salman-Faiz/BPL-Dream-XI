import { useState } from "react";
import AvailablePlayers from "./Components/AvailablePlayers";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { CricketersContext } from "./Context/Cricketers";
import { Bounce, ToastContainer } from "react-toastify";




const App = () => {
  const [freeCredit, setFreeCredit] = useState(0)
  const [selectedPlayers, setSelectedPlayers] = useState([])
  return (
    <>
    <CricketersContext.Provider value={{freeCredit,setFreeCredit,selectedPlayers,setSelectedPlayers}}>
    <div className="container mx-auto  ">
      <div className="bg-white pb-80">
      <Header />
      <Banner />
      <AvailablePlayers />
      </div>
      <Footer />
    </div>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce} 
      />
    
    </CricketersContext.Provider>
    </>
  );
};

export default App;