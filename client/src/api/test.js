import axios from "axios";

const BASE_URL = process.env.VUE_APP_BASE_URL;

export const fetchData = async () => {
    try {
        console.log("test fetch data from home page");
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw new Error("Error fetching data: " + error.message);
    }
};
