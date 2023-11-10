import axios from "axios";

const getApiUrl = (apiPath?: string): string => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASEURL}${apiPath || ""}`;
  return apiUrl;
};

export const apiBuilder = (apiPath?: string) => {
  const apiUrl = getApiUrl(apiPath);

  const instance = axios.create({
    baseURL: apiUrl,
    timeout: 300000,
    headers: {
      [process.env.NEXT_PUBLIC_API_NAME as string]: process.env
        .NEXT_PUBLIC_API_KEY as string,
    },
  });

  return instance;
};
