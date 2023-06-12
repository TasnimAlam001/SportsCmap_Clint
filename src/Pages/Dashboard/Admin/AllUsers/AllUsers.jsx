import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaTrashAlt, FaUserSecret, FaUserShield } from "react-icons/fa";

const AllUsers = () => {

    
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    console.log(users);

    const handleMakeInstructor = (user)=>{
        console.log(user);
        
    }

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire(
                        'Done !',
                        `${user.name} has added as an admin.`,
                        'success'
                    )
                }
            })

    }

    //TODO: delete is incomplete
    const handleDelete = user => {
        console.log(user)
    }
    return (
        <div className="w-full">
            

            <div className="p-12  rounded-lg ml-4">

                <p className="text-3xl my-4">Total User ${users.length}</p>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-orange-100">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                                <th>Make Instructor</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id} className="hover">
                                    <th>{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost text-1xl bg-orange-400 text-white">
                                        {
                                            user.role === 'admin' ? 'admin' : <FaUserShield></FaUserShield>
                                        }
                                    </button> </td>
                                    <td><button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost text-1xl bg-orange-400 text-white">
                                        {
                                            user.role === 'admin' ? 'admin' : <FaUserSecret></FaUserSecret>
                                        }
                                    </button> </td>
                                    <td><button onClick={() => handleDelete(user)} className="btn btn-ghost text-1xl bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );
};

export default AllUsers;