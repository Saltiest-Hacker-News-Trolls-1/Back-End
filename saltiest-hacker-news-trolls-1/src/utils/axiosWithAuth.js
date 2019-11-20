import axios from "axios";

export const axiosWithAuth = () => {

    // Retrives token from server
    const token = localStorage.getItem("token");


    axios.create({
        baseURL: "",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        }
    });
}