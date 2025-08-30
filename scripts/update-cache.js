import fs from 'fs';
import { getVersion } from "../services/wilds-api.service.js";
import { cacheVersion, versionCacheFile as versionCacheFile } from "./cache-version.js";

/**
 * Check local version if already cached.
 */
const getCachedVersion = async () => {
  try {
    const path = `${process.cwd()}/${versionCacheFile}`;
    const data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
    const json = JSON.parse(data);
    return json.version;
  } catch (err) {
    console.log("Cannot find version from cache. Force update.");
    return null;
  }
}

/**
 * Compare cached and API versions to update or not cached datas.
 * @param {*} force Force cache update.
 */
const updateCache = async (force) => {
  try {
    // Load cached version
    const cachedVersion = await getCachedVersion();
    console.log("Cached version: " + cachedVersion);
    
    // Retrieve latest API version
    const response = await getVersion();
    const apiVersion = response.data.version;
    console.log("API version: " + apiVersion);

    // CASE Up to date cache.
    if(!force && cachedVersion && cachedVersion === apiVersion) {
      console.log("Cache already up to date!");
      return;
    }

    console.log("Start updating cache...");
    await cacheVersion();
    console.log("Cache now is up to date!");
  } catch (err) {
    return Promise.reject(err);
  }
}

updateCache(false);