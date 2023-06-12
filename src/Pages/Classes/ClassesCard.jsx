import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import useSelectedClass from "../../Hooks/useSelectedClass";


const ClassesCard = ({ cls }) => {

    const [disabled, setDisabled] = useState(false);

    const { user } = useAuth();
    const [classes,refetch] = useSelectedClass()
    const navigate = useNavigate()
    const location = useLocation();


   classes.map(seletedCls=>{
    if(cls._id ===  seletedCls._id){
        setDisabled(true);
    }
   })

    const handleSelectedClass = Scls => {
        console.log(Scls);
        if (user && user.email) {
            const selectedClass = { selectedClassId: cls._id, class_name:cls.class_name , instructor_name:cls.instructor_name, image:cls.image, price:cls.price, email: user.email }
            fetch('http://localhost:5000/selectedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'You Successfully selected the class',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        

                        setDisabled(true);

                    }
                })
        } else {
            Swal.fire({
                title: 'Please Login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'let`s Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            })
        }

    }


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
            <div className="absolute bottom-0 w-full mb-1"><button disabled={disabled} onClick={() => handleSelectedClass(cls)} className="btn btn-outline btn-ghost w-full">Select Class</button></div>

        </div>
    );
};

export default ClassesCard;