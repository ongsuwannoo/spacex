import { objToParameter } from '../utils/functions';

export const BASE_URL = "https://api.spacexdata.com/v3";

const createUrl = (base, path) => `${base}${path}`;

export const getInfo = () => [
  createUrl(BASE_URL, "/info")
];

export const getRockets = () => [
  createUrl(BASE_URL, "/rockets")
];

export const getLaunches = (option) => [
  createUrl(BASE_URL, `/launches?${objToParameter(option)}`)
];

export const getRocketsById = (id) => [
  createUrl(BASE_URL, `/rockets/${id}`)
];
