import axios from "axios";

export const axiosWithAuth = () => {

    // Retrives token from server
    const token = localStorage.getItem("token");


    return axios.create({
        baseURL: "http://165.227.23.50:8080",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        }
    });
}