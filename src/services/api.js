import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchDeviceData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/location`);
        return response.data;
    } catch (error) {
        console.error("Error fetching device data:", error);
        throw error;
    }
};
