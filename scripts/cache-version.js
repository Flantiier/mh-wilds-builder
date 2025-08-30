import fs from 'fs';
import { getVersion } from "../services/wilds-api.service.js";

export const versionCacheFile = 'src/cache/version.json';

export const cacheVersion = async () => {
  try {
    const version = await getVersion();
    const json = JSON.stringify(version.data, null, 2);
    fs.writeFileSync(versionCacheFile, json);
    console.log(`Version cached successfully at: ${process.cwd()}/${versionCacheFile}!`);
  }
  catch (err) {
    return Promise.reject(err);
  }
};