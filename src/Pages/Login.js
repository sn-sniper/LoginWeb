import React, { useState } from 'react'
import Form from '../Components/Form';
import { useLogin } from "../Utilities/Authentication"
export default function Login() {
    const [data, setData] = useState({
        Name : "",
        password: ""
    })

    const { login } = useLogin();

    const handleChanges = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };


    const handleLogin = (e) =>{
        e.preventDefault();
        login(data);
        console.log(data);
    }

    return (
        <React.Fragment>
            <Form action={handleLogin} input={handleChanges}/>
        </React.Fragment>
    )
}
