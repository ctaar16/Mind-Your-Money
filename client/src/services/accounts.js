import api from "./apiConfig";

export const getAccounts = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/accounts`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAccount = async (userId, id) => {
  try {
    const response = await api.get(`/users/${userId}/accounts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createAccount = async (account) => {
  try {
    const response = await api.post("/accounts", account);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAccount = async (id, account) => {
  try {
    const response = await api.put(`/accounts/${id}`, account);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAccount = async (id) => {
  try {
    const response = await api.delete(`/accounts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};