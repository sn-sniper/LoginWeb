import { RegisterAuth } from "../Services/Authentication";

export default async function CreateUser(info) {
    try {
        const { status } = await RegisterAuth(info);
        if (status === 201) {
            alert("User created successfully!");
        }
    } catch (error) {
        console.error(error);
    }
}