import { FaTrashAlt, FaWallet } from "react-icons/fa";
import useSelectedClass from "../../../Hooks/useSelectedClass";
import Swal from "sweetalert2";


const MySelectedClasses = () => {
    const [classes, refetch] = useSelectedClass();
    const total = classes.reduce((sum, item) => item.price + sum, 0);

    const handlePayment = cls => {
        console.log(cls);
    }

    const handleDelete = cls => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to delete ${cls.name} from the Selected Class?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/selectedClass/${cls._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${cls.name} has been deleted from the selected class.`,
                                'success'
                            )
                        }
                    })

            }
        })
    }


    console.log(classes)
    return (
        <div className="w-full">
            <div className="p-12  rounded-lg ml-4">

                <div className="text-center pb-5">
                    <p className="text-3xl my-4">Total Selected Classes: {classes.length}</p>
                    <div>
                        <p>Total Amount : ${total}</p>
                        <span> <button className="btn btn-outline" >Pay</button> </span>
                    </div>
                </div>

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
                                    <th>{index + 1}</th>
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

                                    <td>${cls.price}</td>
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