import axios from "axios";

export const getProduct = async () => {
    const result = await axios.get("http://localhost:8085/product")
    return result.data;
}