import axios from 'axios';

 const axiosInstance=axios.create({
baseURL:'http://localhost:9008/'

});


export default axiosInstance;