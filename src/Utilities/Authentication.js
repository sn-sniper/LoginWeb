import { useNavigate } from "react-router-dom";
import LoginAuth from "../Services/Authentication";
import Cookies from "js-cookie";

export function useLogin() {
    const navigate = useNavigate();
    async function login(userData) {
        try {
            const response = await LoginAuth(userData);
            const { status, data } = response;
            if (status === 200) {
                navigate("/admin");
                Cookies.set("token", data.token);
                Cookies.set("Name", data.Name);
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert("Invalid email or password");
            }
            console.error(`Something went wrong: ${error}`);
        }
    }
    return { login };
}