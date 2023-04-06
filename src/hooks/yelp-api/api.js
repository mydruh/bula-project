import queryString from "query-string";

//import { API_BASE_URL, BEARER_TOKEN } from "./config";


export function get(path, queryParams) {
  const API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3";

  const BEARER_TOKEN = "j7IfgED1AlgfruS4D5KDXUrn_d__yPpt4fMh0gMIm68pMfsRerCoqIfQbmiKxwkfGcKUWgO11yFf6mcyoYmPyvy9t0yXVRgAtm9G-TVi_OtZ7vWpJazYhyGq1cBsY3Yx"

  const query = queryString.stringify(queryParams);
  return fetch(`${API_BASE_URL}${path}?${query}`, {
    headers: {
      Authorization: 'Bearer ' + BEARER_TOKEN,
      Origin: "localhost",
      withCredentials: true,
    },
  });
}
