export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validateEventCapacity = (capacity) => {
  const numCapacity = parseInt(capacity, 10);
  return !isNaN(numCapacity) && numCapacity > 0;
};
