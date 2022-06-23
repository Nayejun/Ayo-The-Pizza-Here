const createMenuData = (menus) => {
  const result = [];
  for (let i = 0; i < menus.length; i++) {
    const data = { id: i, name: menus[i], checked: false };
    result.push(data);
  }
  return result;
};

export default createMenuData;
