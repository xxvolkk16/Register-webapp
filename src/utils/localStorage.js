// localStorage.js
const STORAGE_KEY = 'registeredUsers';

export const saveRegisteredUsers = (users) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const getRegisteredUsers = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : [];
};
