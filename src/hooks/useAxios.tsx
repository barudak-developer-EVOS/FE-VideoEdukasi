import axios from "axios";
import { makeUseAxios } from "axios-hooks";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
});

// Mendapatkan token dari cookie
const getAuthToken = () => {
  if (typeof window !== "undefined") {
    return Cookies.get("tkn") || "";
  }
  return "";
};

// Mendapatkan refresh token dari cookie
const getRefreshToken = () => {
  if (typeof window !== "undefined") {
    return Cookies.get("rtkn") || "";
  }
  return "";
};

// Mendapatkan tenant site ID dari cookie
const getTenantSiteId = () => {
  if (typeof window !== "undefined") {
    return Cookies.get("tenant") || "";
  }
  return "";
};

// Fungsi untuk memperbarui token
const refreshToken = async () => {
  try {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      throw new Error("Refresh token tidak tersedia");
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/refresh`,
      {}, // Sesuaikan payload jika diperlukan
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );

    const { token } = response.data;
    if (token) {
      Cookies.set("tkn", token, { secure: true }); // Simpan token baru
      return token;
    }

    throw new Error("Gagal mendapatkan token baru");
  } catch (error) {
    console.error("Refresh token gagal:", error);
    Cookies.remove("tkn");
    Cookies.remove("rtkn");
    // Router.push('/logout'); @TODO: need to fix
    throw error;
  }
};

// Interceptor untuk request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    const siteId = getTenantSiteId();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (siteId) {
      config.headers["site-id"] = siteId;
    }

    config.headers["Cache-Control"] = "no-cache";
    config.headers["Pragma"] = "no-cache";
    config.headers["Expires"] = "0";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor untuk response
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry // Mencegah loop refresh
    ) {
      originalRequest._retry = true;

      try {
        const newToken = await refreshToken();
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(originalRequest); // Kirim ulang request dengan token baru
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

const useAxios = makeUseAxios({
  axios: axiosInstance,
  cache: false,
});

export default useAxios;
