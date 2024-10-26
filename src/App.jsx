import AvailablePlayers from "./Components/AvailablePlayers";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header";
import PlayerCard from "./Components/PlayerCard";
import SubscribeUs from "./Components/Subscribe/SubscribeUs";


const App = () => {
  return (
    <div className="container mx-auto mt-8 ">
      <Header />
      <Banner />
      <AvailablePlayers />
      <SubscribeUs />
    </div>
  );
};

export default App;