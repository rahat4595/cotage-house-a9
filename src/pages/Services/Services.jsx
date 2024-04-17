import { useState } from "react";
import { PiHouseLine } from "react-icons/pi";

import "./Services.css"; // Import CSS file for styling
import { Helmet } from "react-helmet-async";

const Services = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);

    return (
        <div>
            <Helmet>
            <title>Services | Cottage House</title>
            </Helmet>
            <div className="max-w-7xl mx-auto text-center mt-10">
                <h1 className="text-4xl text-black font-bold">OUR CORE SERVICES</h1>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 p-5 lg:grid-cols-3 gap-5 my-20">

                <div
                    className={`card w-full bg-base-100 shadow-xl ${isHovered1 ? "hovered" : ""}`}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                >
                    <div className="flex justify-center p-5 items-center">
                        <PiHouseLine className="text-6xl text-[#ff5a3c]" />
                    </div>
                    <div className="card-body text-center">
                        <a href="#"><h2 className="text-3xl font-bold text-center hover:text-[#ff5a3c]">Property Management</h2></a>
                        <p className="p-5">Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                    </div>
                    <div className="hover-line"></div> {/* Orange line on hover */}
                </div>
                <div
                    className={`card w-full  bg-base-100 shadow-xl ${isHovered2 ? "hovered" : ""}`}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                >
                    <div className="flex justify-center p-5 items-center">
                        <PiHouseLine className="text-6xl text-[#ff5a3c]" />
                    </div>
                    <div className="card-body text-center">
                        <a href="#"><h2 className="text-3xl font-bold text-center hover:text-[#ff5a3c]">Mortgage Service</h2></a>
                        <p className="p-5">Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                    </div>
                    <div className="hover-line"></div> {/* Orange line on hover */}
                </div>
                <div
                    className={`card w-full bg-base-100 shadow-xl ${isHovered3 ? "hovered" : ""}`}
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                >
                    <div className="flex justify-center p-5  items-center">
                        <PiHouseLine className="text-6xl text-[#ff5a3c]" />
                    </div>
                    <div className="card-body text-center">
                        <a href="#"><h2 className="text-3xl font-bold text-center hover:text-[#ff5a3c]">Consulting Service</h2></a>
                        <p className="p-5">Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                    </div>
                    <div className="hover-line"></div> {/* Orange line on hover */}
                </div>
                <div
                    className={`card w-full bg-base-100 shadow-xl ${isHovered4 ? "hovered" : ""}`}
                    onMouseEnter={() => setIsHovered4(true)}
                    onMouseLeave={() => setIsHovered4(false)}
                >
                    <div className="flex justify-center p-5 items-center">
                        <PiHouseLine className="text-6xl text-[#ff5a3c]" />
                    </div>
                    <div className="card-body text-center">
                        <a href="#"><h2 className="text-3xl font-bold text-center hover:text-[#ff5a3c]">Home Buying</h2></a>
                        <p className="p-5">Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                    </div>
                    <div className="hover-line"></div> {/* Orange line on hover */}
                </div>
                <div
                    className={`card w-full bg-base-100 shadow-xl ${isHovered5 ? "hovered" : ""}`}
                    onMouseEnter={() => setIsHovered5(true)}
                    onMouseLeave={() => setIsHovered5(false)}
                >
                    <div className="flex justify-center p-5 items-center">
                        <PiHouseLine className="text-6xl text-[#ff5a3c]" />
                    </div>
                    <div className="card-body text-center">
                        <a href="#"><h2 className="text-3xl font-bold text-center hover:text-[#ff5a3c]">Home Selling</h2></a>
                        <p className="p-5">Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                    </div>
                    <div className="hover-line"></div> {/* Orange line on hover */}
                </div>
                <div
                    className={`card w-full bg-base-100 shadow-xl ${isHovered6 ? "hovered" : ""}`}
                    onMouseEnter={() => setIsHovered6(true)}
                    onMouseLeave={() => setIsHovered6(false)}
                >
                    <div className="flex justify-center p-5 items-center">
                        <PiHouseLine className="text-6xl text-[#ff5a3c]" />
                    </div>
                    <div className="card-body text-center">
                        <a href="#"><h2 className="text-3xl font-bold text-center hover:text-[#ff5a3c]">Escrow Services</h2></a>
                        <p className="p-5">Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                    </div>
                    <div className="hover-line"></div> {/* Orange line on hover */}
                </div>
            </div>

            <div className="max-w-7xl mx-auto text-center mt-10">
                <h1 className="text-4xl text-black font-bold">PROFESSIONAL  SERVICES</h1>
            </div>

            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 p-5 lg:grid-cols-4 gap-5  my-10 mx-auto">
                <div className="card w-full bg-base-100 shadow-xl hover:shadow-md">
                <figure><img src="https://i.ibb.co/b7QtgPH/service-4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Room Service
                         
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, rerum?</p>
                        <div className="card-actions justify-start">
                        <h1 className="text-[#23BE0A] hover:text-blue-500 hover:cursor-pointer">Read More...</h1>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl hover:shadow-md">
                <figure><img src="https://i.ibb.co/v1mcQGG/service-3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                           Bank Loan
                         
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, rerum?</p>
                        <div className="card-actions justify-start">
                        <h1 className="text-[#23BE0A] hover:text-blue-500 hover:cursor-pointer">Read More...</h1>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl hover:shadow-md">
                <figure><img src="https://i.ibb.co/NT8HHsC/service-2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Security
                         
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, rerum?</p>
                        <div className="card-actions justify-start">
                        <h1 className="text-[#23BE0A] hover:text-blue-500 hover:cursor-pointer">Read More...</h1>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl hover:shadow-md" >
                <figure><img src="https://i.ibb.co/hBYQMQG/service.jpghttps://i.ibb.co/b7QtgPH/service-4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Support 24/7
                         
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, rerum?</p>
                        <div className="card-actions justify-start">
                           <h1 className="text-[#23BE0A] hover:text-blue-500 hover:cursor-pointer">Read More...</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;
