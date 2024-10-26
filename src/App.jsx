import AvailablePlayers from "./Components/AvailablePlayers";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header";
import PlayerCard from "./Components/PlayerCard";


const App = () => {
  return (
    <div className="container mx-auto mt-8 ">
      <Header />
      <Banner />
      <AvailablePlayers />
    </div>
  );
};

export default App;