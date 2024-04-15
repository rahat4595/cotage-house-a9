import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import CardEstate from "./CardEstate/CardEstate";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home | Cotage House</title>
    </Helmet>
            <div className="max-w-7xl mx-auto rounded-xl p-5">
            <Banner></Banner>
            <CardEstate></CardEstate>
            </div>
        </div>
    );
};

export default Home;