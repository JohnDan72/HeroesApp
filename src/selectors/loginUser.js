import { users } from "../data/users"

export const loginUser = ( email = '' , password = '') => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(users.find(user => user.email === email && user.password === password));
        }, 1500);
        
    })
} 