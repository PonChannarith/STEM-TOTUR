import { API_BASE_URI, AUTH_HEADER } from "./constants";
export const fetchBooks = async (pageSize, pageNum) => {
  const response = await fetch(`${API_BASE_URI}courses/`, {
    method: "GET",
    header: {
      ...AUTH_HEADER,
    },
  });
  return response.json();
};

export const saveBook = async ({ title, description, image }) => {
  const response = await fetch(`${API_BASE_URI}forums/`, {
    method: "POST",
    body: JSON.stringify({ title, description, image }),
    headers: {
      ...AUTH_HEADER,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
export const saveProfileImage = async ({ image }) => {
  const response = await fetch(`${API_BASE_URI}profile/`, {
    method: "PUT",
    body: JSON.stringify({ image }),
    headers: {
      ...AUTH_HEADER,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
export const saveComment = async ({ forum_id, content }) => {
  const response = await fetch(`${API_BASE_URI}comments/`, {
    method: "POST",
    body: JSON.stringify({ forum_id, content }),
    headers: {
      ...AUTH_HEADER,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
export const saveBlog = async ({ title, content, image }) => {
  const response = await fetch(`${API_BASE_URI}articles/`, {
    method: "POST",
    body: JSON.stringify({ title, content, image }),
    headers: {
      ...AUTH_HEADER,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
