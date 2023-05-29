//export const PORT = import.meta.env.PORT ?? "8080";
export const HOST = import.meta.env.VITE_HOST ?? "localhost:8080";
export const API_SERVER_URL = `http://${HOST}/api`;
console.log(API_SERVER_URL);
