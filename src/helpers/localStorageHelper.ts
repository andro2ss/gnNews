export default {
  set: (key: string, data: object | string) =>
    localStorage.setItem(key, JSON.stringify(data)),
  get: (key: string) => {
    const objectToReturn =
      key?.length > 0 && JSON?.parse(localStorage?.getItem(key) || "{}");
    if (Object.values(objectToReturn).length === 0) return;
    return objectToReturn;
  },
  remove: (key: string) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
};
