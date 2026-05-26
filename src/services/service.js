export const createUserService = (userData) => {
  return {
    id: Date.now(),
    ...userData
  };
};