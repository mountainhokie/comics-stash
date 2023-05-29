//export const PORT = import.meta.env.PORT ?? "8080";
export const HOST = import.meta.env.VITE_HOST ?? "http://localhost:8080";
export const API_SERVER_URL = `${HOST}/api`;
console.log(API_SERVER_URL);
