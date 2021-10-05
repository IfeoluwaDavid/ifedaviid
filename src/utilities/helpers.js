export const hasMissingValues = (object) => {
  const entries = Object.values(object);
  for (var index = 0; index < entries.length; index++) {
    if (entries[index] === "") {
      return true;
    }
  }
  return false;
};
