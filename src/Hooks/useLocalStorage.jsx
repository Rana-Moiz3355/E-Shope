export const useLocalStorage = (key) => {
    const setItem = (value) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    };
    const removeItem = (value) => {
      window.localStorage.removeItem(key, JSON.stringify(value));
    };
    const getItem = (value) => {
    const item=  window.localStorage.getItem(key, JSON.stringify(value));
    return item ? JSON.parse(item) : null;
      
    };
  
    return { setItem, removeItem  ,getItem};
  };
  