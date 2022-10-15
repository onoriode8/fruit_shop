import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://testing-a784f-default-rtdb.firebaseio.com/"
})

export default axiosInstance;