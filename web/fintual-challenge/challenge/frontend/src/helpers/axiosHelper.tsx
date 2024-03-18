import axios from 'axios';
/* eslint-disable */


const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const access_token = localStorage.getItem('access_token');
        if (access_token) {
            config.headers.Authorization = `Bearer ${access_token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    async (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (
            (error.response.status === 401 &&
                error.response.data.code === 'token_not_valid')
            ||
            (error.response.status == 401 &&
                error.response.data.detail === 'Authentication credentials were not provided.')
        ) {
            originalRequest._retry = true;

            const refresh_token = localStorage.getItem('refresh_token');
            const access_token = localStorage.getItem('access_token');

            if (access_token) {
                localStorage.removeItem('access_token');
            }

            if (refresh_token) {
                try {
                    const refreshResponse = await axiosInstance.post(
                        '/token/refresh/',
                        { refresh: refresh_token }
                    );
                    localStorage.setItem('access_token', refreshResponse.data.access);

                    return axiosInstance(originalRequest);
                } catch (refreshError) {
                    localStorage.removeItem('refresh_token');
                    try {
                        await axiosInstance.post("/api/logout", { refresh_token });
                    } catch (error) {
                        console.log("Error logging out:", error);
                    }
                }
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
