import React from "react";
import { API_BASE_URI, AUTH_HEADER } from "./constants";

export const fetchBlog = async (pageSize, pageNum) => {
  const response = await fetch(`${API_BASE_URI}articles/`, {
    method: "GET",
    header: {
      Authorization: AUTH_HEADER,
    },
  });
  return response.json();
};

