import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiousSecure";
import useAuth from "./useAuth";


const useUser = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isUser, isLoading: isUserLoading} = useQuery({
        queryKey: ['isUser', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/user/${user?.email}`);
            return res.data.user;
        }
    })
    return [isUser, isUserLoading]
}
export default useUser;