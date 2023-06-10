import useInstructor from "../../Hooks/useInstructor";


const Instructor = () => {
    const [instructor] = useInstructor();
    return (
        <div className="">

            <div className="overflow-x-auto py-40 w-3/4 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-orange-400 font-bold py-3  md:text-2xl">
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructor.map((instr, index)=> <tr
                            key={instr._id}
                            >
                            
                                <td>{index+1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 lg:w-24 h-12 lg:h-24">
                                                <img src={instr.instructor_image} />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td className="font-bold"> 
                                   {instr.name}
                                </td>
                                <td>{instr.email}</td>
                                
                                
                            </tr>)

                        }
                        
                        
                    </tbody>
                    

                </table>
            </div>

        </div>
    );
};

export default Instructor;