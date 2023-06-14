import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaCheckCircle, FaTrashAlt, FaUserSecret, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiousSecure";

const AllUsers = () => {
    const [axiosSecure]= useAxiosSecure();


    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    console.log(users);

    const handleMakeInstructor = (user) => {
        console.log(user);
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire(
                        'Done !',
                        `${user.name} has added as an instructor.`,
                        'success'
                    )
                }
            })

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
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to delete ${user.name} from the User List?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${user.name} has been deleted from the user list.`,
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className="w-full">


            <div className="p-12  rounded-lg ml-4">

                <p className="text-3xl my-4">Total User: {users.length}</p>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-orange-100">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Make Admin</th>
                                <th>Make Instructor</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td><button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost text-1xl bg-orange-400 text-white">
                                        {
                                            user.role === 'admin' ? <span className="text-blue-600 text-2xl "> <FaCheckCircle></FaCheckCircle></span>  : <FaUserShield></FaUserShield>
                                        }
                                    </button> </td>
                                    <td><button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost text-1xl bg-orange-400 text-white">
                                        {
                                            user.role === 'instructor' ?  <span className="text-blue-600 text-2xl "> <FaCheckCircle></FaCheckCircle></span>  : <FaUserSecret></FaUserSecret>
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