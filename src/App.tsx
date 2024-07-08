import CarouselPlugin from "./component/Carousel/Carousel";
import Discover from "./component/Discover/Discover";
import Navbar from "./component/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <CarouselPlugin/>
      <Discover/>
    </div>
  );
};

export default App;