import Discover from "@/component/Discover/Discover";
import CategoryPage from "../Product/CategoryPage/CategoryPage";
import CarouselPlugin from "../../component/Carousel/Carousel";
import Footer from "@/component/Footer/Footer";
import FaqAsk from "@/component/FaqAsk/FaqAsk";
import UniqueSection from "@/component/UniqueSection/UniqueSection";


const Home = () => {
    return (
        <div>
            <CarouselPlugin/>
            <Discover/>
            <CategoryPage/>
            <UniqueSection/>
            <FaqAsk/>
            <Footer/>
        </div>
    );
};

export default Home;