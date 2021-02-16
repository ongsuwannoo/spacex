export const BASE_URL = "https://api.spacexdata.com/v3";

const createUrl = (base, path) => `${base}${path}`;

export const getInfo = () => [
  createUrl(BASE_URL, "/info")
];
