import { TbHomeHeart } from "react-icons/tb";
import { PiMountainsLight } from "react-icons/pi";
import { PiBrainThin } from "react-icons/pi";
import { ImFacebook } from "react-icons/im";
import { VscVerified } from "react-icons/vsc";
import { RxGithubLogo } from "react-icons/rx";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom";
import 'animate.css';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const AboutUs = () => {

    useEffect(() =>{
        Aos.init({duration: 2000})
    },[])
    return (
        <div>
            <div className="max-w-7xl mx-auto flex  lg:gap-10 ">
                <div className="animate__animated animate__fadeInLeft">
                    <img className="hidden lg:block " src="https://i.ibb.co/M2kJ0yf/13.png" alt="" />
                </div>

                <div className="mt-20 p-5 animate__animated animate__fadeInRight">
                    <h1 className="bg-[#ff3e1c33] px-3 py-1 w-28 text-center rounded-2xl text-[#ff5a3c] font-semibold">About Us</h1>
                    <h1 className="text-5xl font-bold mt-10">
                        The Leading Real Estate <br />  Rental Marketplace.
                    </h1>
                    <p className="text-gray-400 mt-10">
                        Over 39,000 people work for us in more than 70 countries all over <br /> the This breadth of global coverage, combined with specialist services
                    </p>

                    <div className="flex mt-10 gap-5 items-center">
                        <TbHomeHeart className="bg-[#ff3e1c33] py-1 rounded-full text-[#ff5a3c] text-4xl" />
                        <p className="text-gray-400">Smart Home Design</p>
                        <PiMountainsLight className="bg-[#ff3e1c33] py-1 rounded-full text-[#ff5a3c] text-4xl" />

                        <p className="text-gray-400">Beautiful Scene Around</p>
                    </div>
                    <div className="flex mt-10 gap-5 items-center">
                        <PiBrainThin className="bg-[#ff3e1c33] py-1 rounded-full text-[#ff5a3c] text-4xl" />
                        <p className="text-gray-400">Exceptional Lifestyle</p>
                        <VscVerified className="bg-[#ff3e1c33] py-1 rounded-full text-[#ff5a3c] text-4xl" />

                        <p className="text-gray-400">Complete 24/7 Security</p>
                    </div>
                   <Link to='/services'>
                   <button className="text-2xl font-semibold px-5 py-3 bg-black text-white rounded-md mt-10 relative overflow-hidden group">
                        <span className="absolute inset-0 bg-[#ff5a3c] duration-300 transition-transform group-hover:translate-x-full"></span>
                        <span className="relative z-10">Our Services</span>
                    </button>
                   </Link>

                </div>
            </div>

            <div className="max-w-7xl mx-auto text-center mt-10">
                <h1 className="text-4xl text-black font-bold">Property Agents</h1>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 my-10 p-5  lg:grid-cols-3 gap-5 " data-aos="zoom-in">
            <div className="card w-full bg-base-100 shadow-xl hover:shadow-md">
                <figure><img src="https://i.ibb.co/znvhGck/young-bearded-man-with-striped-shirt-273609-5677.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center text-2xl  font-bold hover:text-[#ff5a3c]">
                        Rosalina D. William
                         
                        </h2>
                        <p className="font-bold text-center text-[#ff5a3c]">Real Estate Broker</p>
                        <div className="card-actions text-xl justify-center">
                        <ImFacebook />
                        <RxGithubLogo />
                        <IoLogoLinkedin />
                        </div>
                    </div>
                </div>
            <div className="card w-full bg-base-100 shadow-xl hover:shadow-md">
                <figure><img src="https://i.ibb.co/K0q2B9m/handsome-bearded-guy-posing-against-white-wall-273609-20597.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center text-2xl  font-bold hover:text-[#ff5a3c]">
                        Kelian Anderson
                         
                        </h2>
                        <p className="font-bold text-center text-[#ff5a3c]">Selling Agents</p>
                        <div className="card-actions text-xl justify-center">
                        <ImFacebook />
                        <RxGithubLogo />
                        <IoLogoLinkedin />
                        </div>
                    </div>
                </div>
            <div className="card w-full bg-base-100 shadow-xl hover:shadow-md">
                <figure><img src="https://i.ibb.co/T4Jdq2B/360-F-200902415-G4e-Z9-Ok3-Ypd4-SZZKjc8nq-Jy-FVp1e-OD6-V.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center text-2xl  font-bold hover:text-[#ff5a3c]">
                        Miranda H. Halim
                         
                        </h2>
                        <p className="font-bold text-center text-[#ff5a3c]">Property Seller</p>
                        <div className="card-actions text-xl mt-2 justify-center">
                        <ImFacebook />
                        <RxGithubLogo />
                        <IoLogoLinkedin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;