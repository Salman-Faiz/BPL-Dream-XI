import { useState } from "react";
import AvailablePlayers from "./Components/AvailablePlayers";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { CricketersContext } from "./Context/Cricketers";




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
    
    </CricketersContext.Provider>
    </>
  );
};

export default App;