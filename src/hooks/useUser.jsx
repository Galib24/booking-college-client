import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useUser = () => {
    const { user } = useContext(AuthContext);

    const {  refetch, data: info = [] } = useQuery({
        queryKey: ['userInfo', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await fetch(`https://booking-college-server.vercel.app/userInfo?email=${user.email}`)
                return res.json();
            }

        },
    })
    return [info, refetch]

}
export default useUser;