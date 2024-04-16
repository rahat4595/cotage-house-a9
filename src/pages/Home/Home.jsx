import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import CardEstate from "./CardEstate/CardEstate";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const estates = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>Home | Cotage House</title>
            </Helmet>

            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-xl font-bold p-10">
                    Indulge in luxury and comfort at our curated estates,
                    Where every stay is a memorable escape.
                    Discover breathtaking views and exceptional service,
                    Your ultimate retreat begins here.
                </h1>
            </div>

            <div className="max-w-7xl mx-auto rounded-xl">
                <Banner></Banner>
            </div>
            <div className="max-w-7xl mx-auto text-center mt-10">
            <p className="text-[#5ba600] text-md">we are offering the best real state</p>
            <h1 className="text-6xl font-bold">Our Properties</h1>
            </div>
            <div className="max-w-7xl mx-auto rounded-xl p-5 gap-5 grid lg:grid-cols-3">
                
                {
                    estates.map(estate => <CardEstate
                        key={estate.id}
                        estate={estate}
                    ></CardEstate>)
                }
            </div>
        </div>
    );
};

export default Home;