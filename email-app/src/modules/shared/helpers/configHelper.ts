import { devToolsEnhancer } from "redux-devtools-extension";

export const loadConfig = (environment: string = "development") => {
  const config = require(`../../../config/config.${environment}.json`);
  return config;
};
