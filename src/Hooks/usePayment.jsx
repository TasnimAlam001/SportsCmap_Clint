import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiousSecure";


const usePayment = () => {
    const {user,loading} = useAuth();
    const [axiosSecure]= useAxiosSecure();

    const { refetch, data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure(`/payments/user?email=${user?.email}`)
            return res.data;
        },
      })

    return [payments, refetch]
};

export default usePayment;