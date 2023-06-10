import { useQuery } from '@tanstack/react-query'

const useInstructor = () => {
    


    // const { isLoading, data: instructor=[] } = useQuery({
    //     queryKey: ['instructor'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/instructor')
    //         return res.json();
    //       },
    //   })

    // return [isLoading, instructor]
    const {data: instructor = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructor'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/instructor');
            return res.json();
        }
    })

    return [instructor, loading, refetch]

};

export default useInstructor;