import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const ClassCard = ({cls}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    })
    return (
        <div >

            <div  className="max-w-md mx-auto h-[600px] bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" >
                <div  >
                    <div className="md:flex-shrink-0">
                        <img className="h-[260px] w-full object-cover" src={cls.image} alt="card" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{cls.class_name}</div>
                        
                        <p className="mt-2 text-gray-500">{cls.description}</p>
                        <div className="mt-4 grid grid-cols-2">
                            
                            <div className="text-gray-500 mr-8">
                                <span className="font-bold">Start Date:</span> <p>{cls.start_date}</p>
                            </div>
                            
                            <div className="text-gray-500 mr-8">
                                <span className="font-bold">Duration:</span> {cls.duration}
                            </div>
                            
                            <div className="text-gray-500 mr-8">
                                <span className="font-bold">Available Slots:</span> {cls.available_slots}
                            </div>
                            <div className="text-gray-500">
                                <span className="font-bold">Location:</span> {cls.location}
                            </div>
                            <div className="text-gray-500">
                                <span className="font-bold">Price:</span> {cls.price}
                            </div>
                            <div className="text-gray-500">
                                <span className="font-bold">Age Range:</span> {cls.age_range}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ClassCard;