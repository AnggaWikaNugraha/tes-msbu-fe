import axios from "axios";

const apiClients = {
  auth: axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_AUTH_BASE_URL,
  }),
  kemkesLokal: axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_AUTH_BASE_URL,
  }),
  kemkes: axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_KEMKES_BASE_URL,
  }),
};

// Tambahkan interceptor untuk API1
apiClients.auth.interceptors.request.use(
  async (config) => {
    // Tambahkan header atau konfigurasi khusus untuk API1
    return config;
  },
  (error) => Promise.reject(error)
);

apiClients.auth.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      try {
        // Logika refresh token untuk API1
      } catch (err) {
        console.error("Token refresh failed for API1", err);
      }
    }
    return Promise.reject(error);
  }
);

// Tambahkan interceptor untuk API2
apiClients.kemkes.interceptors.request.use(
  async (config) => {
    // Tambahkan header atau konfigurasi khusus untuk API2
    return config;
  },
  (error) => Promise.reject(error)
);

apiClients.kemkes.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      try {
        // Logika refresh token untuk API2
      } catch (err) {
        console.error("Token refresh failed for API2", err);
      }
    }
    return Promise.reject(error);
  }
);

// Tambahkan interceptor untuk API2
apiClients.kemkesLokal.interceptors.request.use(
  async (config) => {
    // Tambahkan header atau konfigurasi khusus untuk API2
    return config;
  },
  (error) => Promise.reject(error)
);

apiClients.kemkesLokal.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      try {
        // Logika refresh token untuk API2
      } catch (err) {
        console.error("Token refresh failed for API2", err);
      }
    }
    return Promise.reject(error);
  }
);

export default apiClients;
