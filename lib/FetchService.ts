import toasts from "./Toasts";

const BASE_URL = "https://coding-challenge-api.aerolab.co";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWUyZDZhMWJjNDgzYTAwMjE2ZGE5NjgiLCJpYXQiOjE2NDIyNTYwMzN9.VVA-ablaYVIMKITor6C3F5DnVb9CjfrD-egzU_mAwyY";

export const Get = async (endPoint: string = "") => {
  try {
    const response = await fetch(`${BASE_URL}/${endPoint}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    const parsedResponse = await response.json();
    if (response.ok) {
      return { success: true, data: parsedResponse };
    } else {
      return { success: false, data: parsedResponse };
    }
  } catch (error) {
    toasts.fail("Something went wrong, please refresh");
    return { success: false, data: error };
  }
};

export const Post = async (endPoint: string = "", body: {}) => {
  try {
    const response = await fetch(`${BASE_URL}/${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(body),
    });
    const parsedResponse = await response.json();
    if (response.ok) {
      return { success: true, data: parsedResponse };
    } else {
      return { success: false, data: parsedResponse };
    }
  } catch (error) {
    toasts.fail("Something went wrong, please try again");
    return { success: false, data: error };
  }
};
