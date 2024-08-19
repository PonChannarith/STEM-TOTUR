import { API_BASE_URI, AUTH_HEADER } from "./constants";

export const upload = async (formData) => {
  const response = await fetch(`${API_BASE_URI}upload/`, {
    method: "POST",
    body: formData,
    headers: {
      Authorization: AUTH_HEADER,
    },
  });
  return response.json();
};
