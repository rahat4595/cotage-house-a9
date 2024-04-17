import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import CardEstate from "./CardEstate/CardEstate";
import { useLoaderData } from "react-router-dom";
import 'animate.css';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Home = () => {
    const estates = useLoaderData()

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className="max-w-6xl mx-auto text-center animate__animated animate__zoomIn">
                <h1 className="textmd md:text-xl font-bold p-10">
                    Welcome to your sanctuary of luxury and tranquility. Step into a world where elegance meets comfort, and every corner tells a story of refined living
                </h1>
            </div>

            <div className="max-w-7xl mx-auto text-center my-5 animate__animated animate__zoomIn" >
               
                <h1 className="text-4xl md:text-6xl font-bold">TAKE A LOOK</h1>
            </div>

            <div className="max-w-7xl mx-auto rounded-xl p-2 shadow-xl animate__animated animate__fadeInLeft">
                <Banner />
            </div>

            <div className="max-w-7xl mx-auto text-center mt-10">
                <p className="text-[#5ba600] text-md">we are offering the best real estate</p>
                <h1 className="text-4xl md:text-6xl font-bold">OUR PROPERTIES</h1>
            </div>

            <div className="max-w-7xl mx-auto rounded-xl p-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-left">
                {estates.map(estate => (
                    <CardEstate
                        key={estate.id}
                        estate={estate}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
