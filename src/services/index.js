import axios from "axios";

export const instance = axios.create({
  baseURL: "https://643101743adb15965163e0c6.mockapi.io/api/v1/tweets/",
});
