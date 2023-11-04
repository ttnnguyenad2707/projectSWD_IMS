import axios from "axios";

const API_BASE = "http://localhost:5000/issue";
const getAllIssue = async () => {
  try {
    const result = await axios.get(API_BASE);
    return result;
  } catch (error) {
    console.log("🚀 ========= error:", error);
  }
};
const createNewIssue = async (formData) => {
  try {
    const result = await axios.post(API_BASE, formData);
    console.log(result);
  } catch (error) {
    console.log("🚀 ========= error:", error);
  }
};
const getIssueById = async (id) => {
  try {
    const result = await axios.get(`${API_BASE}/${id}`);
    return result;
  } catch (error) {
    console.log("🚀 ========= error:", error);
  }
};

const updateIssue = async (id, updateData) => {
  try {
    const result = await axios.put(`${API_BASE}/${id}`, updateData);
    return result;
  } catch (error) {
    console.log("🚀 ========= error:", error);
  }
};

export { getAllIssue, createNewIssue, getIssueById, updateIssue };