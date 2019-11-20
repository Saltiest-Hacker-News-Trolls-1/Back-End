import axios from "axios";

export const axiosWithAuth = () => {

    // Retrives token from server
    const token = localStorage.getItem("token");


    return axios.create({
        baseURL: "",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        }
    });
}