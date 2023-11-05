import axios from "axios";
import Cookies from "js-cookie";

const API_BASE = "http://localhost:5000/issue";
const getAllIssue = async () => {
  const token = Cookies.get('accessToken');
  try {
    const result = await axios.get(API_BASE,
      {
        withCredentials: true,
        headers: {
          authorization: `Bearer ${token}`,
        }
      });
    return result;
  } catch (error) {
    console.log("🚀 ========= error:", error);
  }
};
const createNewIssue = async (formData) => {
  const token = Cookies.get('accessToken');
  try {
    const result = await axios.post(API_BASE, formData,
      {
        withCredentials: true,
        headers: {
          authorization: `Bearer ${token}`,
        }
      });
    console.log(result);
  } catch (error) {
    console.log("🚀 ========= error:", error);
  }
};
const getIssueById = async (id) => {
  const token = Cookies.get('accessToken');
  try {
    const result = await axios.get(`${API_BASE}/${id}`,
    {
      withCredentials: true,
      headers: {
        authorization: `Bearer ${token}`,
      }
    });
    return result;
  } catch (error) {
    console.log("🚀 ========= error:", error);
  }
};

const updateIssue = async (id, updateData) => {
  const token = Cookies.get('accessToken');
  try {
    const result = await axios.put(`${API_BASE}/${id}`, updateData,
    {
      withCredentials: true,
      headers: {
        authorization: `Bearer ${token}`,
      }
    });
    return result;
  } catch (error) {
    console.log("🚀 ========= error:", error);
  }
};

export { getAllIssue, createNewIssue, getIssueById, updateIssue };