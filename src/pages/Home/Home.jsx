import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home | Cotage House</title>
    </Helmet>
            <div className="max-w-7xl mx-auto rounded-xl">
            <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;