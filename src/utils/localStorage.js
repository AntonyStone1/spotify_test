export const setItem = (key, item) => {
  try {
    localStorage.setItem(key, JSON.stringify(item))
  } catch (e) {
    console.log(e.message);
  }
}

export const removeKey = (key) => {
  localStorage.removeItem(key)
}

export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (e) {
    console.log(e.message);
  }
}

