export const getStorage = key => JSON.parse(localStorage.getItem(key)) || [];

export const setStorage = (key, task) => {
  const data = getStorage(key);
  data.push(task);
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeStorage = (key, id) => {
  const data = getStorage(key);
  const newData = data.filter(item => item.id !== id);
  localStorage.setItem(key, JSON.stringify(newData));
};

