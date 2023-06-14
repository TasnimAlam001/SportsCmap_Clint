import usePayment from "../../../../Hooks/usePayment";



const EnroledClass = () => {
    const [payments] = usePayment();


    return (
        <div className="w-full">
            <div className="p-12  rounded-lg ml-4">

                <div className="text-center pb-5">
                    <p className="text-3xl my-4">Total Enrolled Classes: {payments.length}</p>

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
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((cls, index) => <tr key={cls._id} className="hover">
                                    {/* {
                                        setUpdateCls(cls)
                                    } */}
                                    <th>{index + 1}</th>
                                    <td>



                                        <div className="font-bold">{cls.class_name}</div>


                                    </td>


                                    <td>{cls.instructor}</td>

                                    <td>${cls.price}</td>



                                </tr>)
                            }



                        </tbody>
                    </table>
                </div >
            </div >

        </div >
    );
};

export default EnroledClass;