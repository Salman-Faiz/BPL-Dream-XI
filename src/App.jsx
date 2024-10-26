import AvailablePlayers from "./Components/AvailablePlayers";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";



const App = () => {
  return (
    <div className="container mx-auto mt-8 ">
      <div className="bg-white pb-80">
      <Header />
      <Banner />
      <AvailablePlayers />
      </div>
      <Footer />
    </div>
  );
};

export default App;