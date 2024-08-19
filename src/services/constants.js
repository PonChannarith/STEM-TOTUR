export const accessToken = localStorage.getItem("access_token");

export const AUTH_HEADER = {
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};

// Use the AUTH_HEADER to make authenticated requests
export const API_BASE_URI = "http://136.228.158.126:50001/api/";

