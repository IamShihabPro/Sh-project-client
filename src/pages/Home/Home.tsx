import Discover from "@/component/Discover/Discover";
import CategoryPage from "../Product/CategoryPage/CategoryPage";
import CarouselPlugin from "../../component/Carousel/Carousel";


const Home = () => {
    return (
        <div>
            <CarouselPlugin/>
            <Discover/>
            <CategoryPage/>
        </div>
    );
};

export default Home;