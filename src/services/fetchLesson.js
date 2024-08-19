import { API_BASE_URI, AUTH_HEADER } from "./constants";
export const fetchLesson = async (pageNum, pageSize) => {
  const response = await fetch(`${API_BASE_URI}lessons/`, {
    method: "GET",
    headers: {
      Authorization: AUTH_HEADER,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};
