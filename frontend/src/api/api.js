import axios from 'axios';

export const jwtToken = localStorage.getItem("authorization");

axios.interceptors.request.use(
    function(config) {
        if (jwtToken) {
            config.headers["authorization"] = "Bearer " + jwtToken;
        }
        return config;
    },
    function(err) {
        return Promise.reject(err);
    }
);

export const getProduct = async () => {
    const result = await axios.get("http://localhost:8075/product")
    return result.data;
}

export const getOneProduct = async (id) => {
    const result = await axios.get("http://localhost:8075/product/"+ id)
    return result.data;
}

export const getUsers = async () => {
    const result = await axios.get("http://localhost:8075/users")
    return result.data;
}