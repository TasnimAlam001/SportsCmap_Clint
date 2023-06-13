import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiousSecure";
import useAuth from "./useAuth";


const useNewClass = () => {
    const {user,loading} = useAuth();
    const [axiosSecure]= useAxiosSecure();

    const { refetch, data: newClass =[] } = useQuery({
        queryKey: ['newClass', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure(`/newClass/myClass?email=${user.email}`)
            return res.data;
        },
      })

    return [newClass, refetch]
};

export default useNewClass;