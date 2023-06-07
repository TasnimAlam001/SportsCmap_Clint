import { useQuery } from '@tanstack/react-query'

const useClass = () => {
    const { isLoading, data: classes=[] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/class')
            return res.json()
          },
      })


    return [isLoading, classes]
};

export default useClass;