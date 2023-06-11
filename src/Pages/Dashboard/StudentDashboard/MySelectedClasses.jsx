import { FaTrashAlt, FaWallet } from "react-icons/fa";
import useSelectedClass from "../../../Hooks/useSelectedClass";


const MySelectedClasses = () => {
    const [classes, refetch] = useSelectedClass();

    const handlePayment = cls => {
        console.log(cls);
    }

    const handleDelete = cls => {
        console.log(cls)
    }


    console.log(classes)
    return (
        <div className="w-full">
            <div className="p-12  rounded-lg ml-4">

                <p className="text-3xl my-4">Total Selected Classes :{classes.length}</p>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-orange-100">
                            <tr>
                                <th>#</th>
                                <th>Class</th>
                                <th>Instructor</th>
                                <th>Class Price</th>
                                <th>Pay</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((cls, index) => <tr key={cls._id} className="hover">
                                    <th>{index}</th>
                                    <td>

                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{cls.class_name}</div>
                                                
                                            </div>
                                        </div>
                                    </td>


                                    <td>{cls.instructor_name}</td>
                                    
                                    <td>{cls.price}</td>
                                    <td><button onClick={() => handlePayment(cls)} className="btn btn-ghost text-1xl bg-orange-400 text-white">
                                        <FaWallet></FaWallet>
                                        {
                                            // cls.role === 'admin' ? 'admin' : <FaclsShield></FaclsShield>
                                        }
                                    </button> </td>
                                    <td><button onClick={() => handleDelete(cls)} className="btn btn-ghost text-1xl bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MySelectedClasses;