import { CiLocationOn } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
import { BsArrowUpRightSquare } from "react-icons/bs";


const CardEstate = ({estate}) => {

    const {id,estate_title,segment_name,description,price,status,area,location,facilities,image} = estate

    return (
        <div className="mt-10  ">
            
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="duration-300 hover:scale-110 " src={image} alt="Estate" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{estate_title}</h2>
                    <div className="flex my-3">
                        <p className="text-xl flex gap-1"><CiLocationOn className="mt-1" />{location}</p>
                        <p className="px-4 rounded-xl text-white text-xl bg-green-500 text-center">{status}</p>
                    </div>
                    <div className="flex my-3">
                    <p className="text-xl flex gap-1"><BsHouseDoor className="mt-1" />{segment_name}</p>
                    <p className="text-xl pl-8 lg:pl-24 flex gap-1"><BsArrowUpRightSquare className="mt-1"/>{area}</p>
                    </div>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default CardEstate;