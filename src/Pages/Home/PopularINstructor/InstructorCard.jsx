

const InstructorCard = ( data ) => {

    const NewData = data.data;
    // const { instructor_image, class_name,instructor_description,total_enrolled_student} = data;
    return (


        <div className="max-w-md mx-auto h-[600px] bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" >
            <div >
                <div className="md:flex-shrink-0">
                    <img className="h-[260px] w-full object-cover" src={NewData?.instructor_image} alt="card" />
                    <p className="mt-4 text-center font-bold ">{NewData?.name}</p>
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm  font-semibold">Camp: <span className="text-indigo-500">{NewData?.class_name}</span> </div>

                    <p className="mt-2 text-gray-500">{NewData?.instructor_description}</p>
                    <div className="mt-4 ">

                        <div className="text-gray-500 mr-8">
                            <span className="font-bold">Total Enrolled Student:</span> <p>{NewData?.total_enrolled_student}</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default InstructorCard;