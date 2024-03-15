export const sortDataByUserId = (data, userId) => {
  return data.sort((a, b) => {
    const aMatches = a.user_id === userId;
    const bMatches = b.user_id === userId;

    if (aMatches && !bMatches) {
      return -1; // a va antes que b
    } else if (!aMatches && bMatches) {
      return 1; // b va antes que a
    } else {
      return 0; // a y b son iguales
    }
  });
};
