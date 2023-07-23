import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useUser = () => {
    const { user } = useContext(AuthContext);

    const {  refetch, data: info = [] } = useQuery({
        queryKey: ['userInfo', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await fetch(`http://localhost:5000/userInfo?email=${user.email}`)
                return res.json();
            }

        },
    })
    return [info, refetch]

}
export default useUser;