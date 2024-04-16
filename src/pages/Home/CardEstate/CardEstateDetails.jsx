import 'animate.css';
import { useLoaderData, useParams } from 'react-router-dom';
import './card.css';
import { Helmet } from 'react-helmet-async';


const CardEstateDetails = () => {
    const details = useLoaderData();
    const {id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail => detail.id === idInt);
    console.log(detail)
     
    return (
        <div>
            <Helmet>
            <title>Details | Cotage House</title>
            </Helmet>
            <div className="custom-bg-image flex  justify-center items-center   h-52">

                <h1 className=' text-4xl lg:text-5xl text-white font-bold'>Property Details</h1>
            </div>
            <div className="hero my-20 bg-base-200 animate__animated animate__zoomIn">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={detail.image}className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{detail.estate_title}</h1>
                        <p className="py-6">{detail.description}</p>
                        <h1 className='text-xl text-black font-bold'>Facilities:</h1>
                        <ul>
                            {detail.facilities.map((facility, index) => (
                                <li key={index}>{facility}</li>
                            ))}
                        </ul>
                        <p className='mt-2 text-xl text-black'>Location: {detail.location}</p>
                        <div className='flex gap-10 mt-4'>
                            <b className='lg:text-xl'>Status: {detail.status}</b><b className='lg:text-xl'>Price: {detail.price}</b>
                        </div>
                        <div className='flex gap-10 mt-4'>
                            <b className='lg:text-xl'>{detail.segment_name}</b><b className='lg:text-xl'>Area: {detail.area}</b>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className=" flex  justify-center items-center">

                <h1 className=' text-4xl lg:text-5xl text-black font-bold'>Estate Location</h1>
            </div>
        </div>
    );
};

export default CardEstateDetails;