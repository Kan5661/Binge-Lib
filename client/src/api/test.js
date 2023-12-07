import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const fetchData = async () => {
    try {
        console.log("fetching data");
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw new Error("Error fetching data: " + error.message);
    }
};
