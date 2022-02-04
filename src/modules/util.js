// require('dotenv').config();

export const filePath = (fileName) => {
  const rootURL = "http://127.0.0.1:3100/uploads";
  return `${rootURL}/${fileName.substr(0, 6)}/${fileName}`;
};
