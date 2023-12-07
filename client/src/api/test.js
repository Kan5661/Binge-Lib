import axios from "axios";

const BASE_URL = process.env.VUE_APP_BASE_URL;

export const fetchData = async () => {
    try {
        console.log("fetching data");
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw new Error("Error fetching data: " + error.message);
    }
};
