const convertTheDataForIndiaLevel = (string) => {
  let str1 = "";
  let str2 = "";
  const n = string.length;
  for (let i = 0; i < n; i++) {
    if (string[i] === "(") {
      break;
    }
    str1 += string[i];
  }
  for (let i = n - 2; i > 0; i--) {
    if (string[i] === "(") {
      break;
    }
    str2 = string[i] + str2;
  }
  return [str1.trim(), str2];
};

module.exports = {
  convertTheDataForIndiaLevel,
};
