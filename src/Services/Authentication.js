import axios from "axios";
import Cookies from "js-cookie";

async function LoginAuth(data) {
    const route = process.env.REACT_APP_API_ROUTE;
    const response = await axios.post(`${route}/auth/login`, data);
    return response;
}

export default LoginAuth;


export async function RegisterAuth(data) {
    const route = process.env.REACT_APP_API_ROUTE;
    const token = Cookies.get("token");

    const User = {
        Name: data.Name,
        email: data.email,
        password: data.password,
    };
    console.log(User, `\n${data}`);
    
    const request = await axios.post(`${route}/auth/createUser`, User, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log(User);

    return request;
}
