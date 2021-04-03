import axios from "axios";

export const getProduct = async () => {
    const result = await axios.get("http://localhost:8085/product")
    return result.data;
}

export const getOneProduct = async (id) => {
    const result = await axios.get("http://localhost:8085/product/"+ id)
    return result.data;
}

export const getUsers = async () => {
    const result = await axios.get("http://localhost:8085/users")
    return result.data;
}