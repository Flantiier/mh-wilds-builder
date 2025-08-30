import 'dotenv/config';
import axios from 'axios';

const BASE_URL = process.env.MH_WILDS_API;
const computeUrl = (uri) => {
  return `${BASE_URL}/${uri}`;
}

/**
 * Make an API call to retrieve MH Wilds API version.
 * Caching API datas to avoid making many requests.
 * Require a versio ncheck pipeline to get up to date datas.
 */
export const getVersion = async () => {
  return axios.get(computeUrl('version'));
};

/**
 * Make an API call to retrieve weapons list from MH Wilds API.
 */
export const getWeapons = async () => {
  return axios.get(computeUrl('en/weapons'));
};

/**
 * Make an API call to retrieve armor sets list from MH Wilds API.
 */
export const getArmorSets = async () => {
  return axios.get(computeUrl('en/armor'));
};

/**
 * Make an API call to retrieve charms list from MH Wilds API.
 */
export const getCharms = async () => {
  return axios.get(computeUrl('en/charms'));
};

/**
 * Make an API call to retrieve decorations list from MH Wilds API.
 */
export const getDecorations = async () => {
  return axios.get(computeUrl('en/decorations'));
};

/**
 * Make an API call to retrieve skills list from MH Wilds API.
 */
export const getSkills = async () => {
  return axios.get(computeUrl('en/skills'));
};

/**
 * Make an API call to retrieve items list from MH Wilds API.
 */
export const getItems = async () => {
  return axios.get(computeUrl('en/items'));
};