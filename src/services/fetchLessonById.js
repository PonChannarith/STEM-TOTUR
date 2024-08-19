import { API_BASE_URI, AUTH_HEADER } from "./constants";

export const fetchLessonById = async (id) => {
  const response = await fetch(`${API_BASE_URI}lessons/${id}/`, {
    method: "GET",
    headers: {
      Authorization: AUTH_HEADER,
    },
  });
  return response.json();
};
