import usePayment from "../../../../Hooks/usePayment";


const PaymentHistry = () => {


    const [payments] = usePayment();
    console.log(payments);



    return (
        <div className="w-full">


            <div className="p-12  rounded-lg ml-4">

                <p className="text-3xl my-4">Total Payed Classes: {payments.length}</p>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-orange-100">
                            <tr>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Price</th>
                                <th>Email</th>
                                <th>Transaction ID</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((pymnt, index) => <tr key={pymnt._id} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{pymnt.class_name}</td>
                                    <td>{pymnt.price}</td>
                                    <td>{pymnt.email}</td>
                                    <td>{pymnt.transactionId}</td>
                                    
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );
};

export default PaymentHistry;