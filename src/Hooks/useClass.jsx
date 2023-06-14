import { useQuery } from '@tanstack/react-query'

const useClass = () => {

    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('https://assignment-12-server-gamma-bice.vercel.app/classes');
            return res.json();
        }
    })

    return [classes, loading, refetch]

}

export default useClass;