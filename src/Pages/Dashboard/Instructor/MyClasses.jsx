import { Helmet } from "react-helmet";
import useAuth from "../../../Hooks/useAuth";
import useNewClass from "../../../Hooks/useNewClass";


const MyClasses = () => {
    const {user} =useAuth();
    const [newClass] = useNewClass();





    return (
        <div className="w-full">
            <Helmet><title>Sports Camp | Instructor | My Classes </title></Helmet>
            <div className="p-12  rounded-lg ml-4">

                <div className="text-center pb-5">
                    <p className="text-3xl my-4">Total  Classes: {newClass.length}</p>

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
                                <th>Status</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newClass.map((cls, index) => <tr key={cls._id} className="hover">
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

                                    <td>{
                                        cls.status ? cls.status : "pending"
                                    } </td>

                                    <td>
                                        {
                                            cls.feedback ? <>

                                                {/* You can open the modal using ID.showModal() method */}
                                                <button className="btn btn-warning" onClick={() => window.my_modal_4.showModal()}>show Feedback</button>
                                                <dialog id="my_modal_4" className="modal">
                                                    <form method="dialog" className="modal-box w-11/12 max-w-5xl text-center">
                                                        <h3 className="font-bold text-lg">Hello! {user.displayName}</h3>
                                                        <p className="pt-4 text-red-400 text-2xl">{cls.feedback}</p>
                                                        <div className="modal-action">
                                                            {/* if there is a button, it will close the modal */}
                                                            <button className="btn">Okay</button>
                                                        </div>
                                                    </form>
                                                </dialog>


                                            </> : "N/A"
                                        }
                                    </td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyClasses;