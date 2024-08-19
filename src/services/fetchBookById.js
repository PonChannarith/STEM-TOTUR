import { API_BASE_URI, AUTH_HEADER } from "./constants";

export const fetchBookById = async (id) => {
  const response = await fetch(`${API_BASE_URI}courses/${id}/`, {
    method: "GET",
    headers: {
      Authorization: AUTH_HEADER,
    },
  });
  return response.json();
};
