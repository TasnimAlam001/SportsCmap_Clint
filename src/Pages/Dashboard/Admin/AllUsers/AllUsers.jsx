import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaCheckCircle, FaTrashAlt, FaUserSecret, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiousSecure";
import { Helmet } from "react-helmet";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();


    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    console.log(users);

    const handleMakeInstructor = (user) => {
        console.log(user);
        fetch(`https://assignment-12-server-gamma-bice.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    const newData ={name: user.name, email: user.email, instructor_image: user.image}
                    axiosSecure.post('/instructor', newData)
                        .then(data => {
                            console.log('after posting ', data.data)
                            if (data.data.insertedId) {
                                Swal.fire(
                                    'Done !',
                                    `${user.name} added as an Instructor.`,
                                    'success'
                                )
                            }
                        })
                }
            })

    }

    const handleMakeAdmin = (user) => {
        fetch(`https://assignment-12-server-gamma-bice.vercel.app/users/admin/${user._id}`, {
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

                fetch(`https://assignment-12-server-gamma-bice.vercel.app/users/${user._id}`, {
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

            <Helmet>
                <title>Sports Camp | Admin | Manage Users </title>
            </Helmet>


            <div className="p-12  rounded-lg ml-4">

                <p className="text-3xl my-4">Total User: {users.length}</p>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-orange-400 text-black">
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
                                            user.role === 'admin' ? <span className="text-blue-600 text-2xl "> <FaCheckCircle></FaCheckCircle></span> : <FaUserShield></FaUserShield>
                                        }
                                    </button> </td>
                                    <td><button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost text-1xl bg-orange-400 text-white">
                                        {
                                            user.role === 'instructor' ? <span className="text-blue-600 text-2xl "> <FaCheckCircle></FaCheckCircle></span> : <FaUserSecret></FaUserSecret>
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