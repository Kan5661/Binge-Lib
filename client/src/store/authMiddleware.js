import { useAuthStore } from './authStore';
import { verifyUser } from '../api/api.auth';

export async function authMiddleware(to, from, next) {
    const authStore = useAuthStore();
    const token = localStorage.getItem('token');

    if (token) {
        try {
            console.log("token sent to backend:" + token)
            const res = await verifyUser(token);
            if (res.status === 200) {
                next();   
                console.log(res)
            }
        }
        catch (err) {
            authStore.logout();
            next({name: 'Login'});
        }  
    }
    else {
        next({name: 'Login'});
    }
}