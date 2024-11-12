import axios from 'axios';

const apiRegion = import.meta.env.VITE_API_REGION_URL;

const axiosRegionInstance = axios.create({
    baseURL: `${apiRegion}`
});

axiosRegionInstance.interceptors.response.use(
    async (response) => {
        return response;
    },
    (error) => {
        console.error(error);
        throw error;
    }
);

export default axiosRegionInstance;
