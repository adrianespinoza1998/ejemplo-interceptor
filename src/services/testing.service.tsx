import axios from "axios";

export const testingService = () => {
  return axios.get("https://rickandmortyapigfgfgfg.com/api/character/2");
};
