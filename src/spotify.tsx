import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "b4f1900489514d5d999a1b99009e9a1c";
const redirectUri = "http://localhost:5173";
const scopes = ["user-read-playback-state", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

export const setClientToken = (token: string | null) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
