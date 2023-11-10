import React, { useEffect } from "react";
import { apiBuilder } from "../utils/api";

const Journey = () => {
  useEffect(() => {
    // Use the apiBuilder to create an instance with the desired apiPath
    const apiInstance = apiBuilder("gates");

    // Log the axios instance's baseURL to ensure it's correct
    console.log(`Axios instance baseURL: ${apiInstance.defaults.baseURL}`);

    // Use apiInstance to make requests
    apiInstance
      .get("")
      .then((response) => {
        // Handle the response
        console.log(">>>", response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error("There was an error!", error);
      });
  }, []);

  return <div>{/* ... */}</div>;
};

export default Journey;
