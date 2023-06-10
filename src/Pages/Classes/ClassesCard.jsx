

const ClassesCard = ({cls}) => {
    return (
        <div className="max-w-md mx-auto h-[700px] bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl relative" >
            <div className="" >
                <div className="md:flex-shrink-0">
                    <img className="h-[260px] w-full object-cover" src={cls.image} alt="card" />
                </div>
                <div className="p-8 ">

                    <div className="uppercase tracking-wide text-sm  font-bold">Instructor: <span className="text-indigo-500">{cls.instructor_name}</span> </div>
                    <div className="uppercase tracking-wide text-sm  font-semibold mt-4">Camp: <span className="text-indigo-500">{cls.class_name}</span> </div>

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
            <div className="absolute bottom-0 w-full mb-1"><button className="btn btn-outline btn-ghost w-full">Select Class</button></div>

        </div>
    );
};

export default ClassesCard;