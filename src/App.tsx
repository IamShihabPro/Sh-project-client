import CarouselPlugin from "./component/Carousel/Carousel";
import Discover from "./component/Discover/Discover";
import Navbar from "./component/Navbar/Navbar";
import CategoryPage from "./pages/Product/CategoryPage/CategoryPage";

const App = () => {
  return (
    <div>
      <Navbar/>
      <CarouselPlugin/>
      <Discover/>
      <CategoryPage/>
    </div>
  );
};

export default App;