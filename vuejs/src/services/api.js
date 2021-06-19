import md5 from "md5";
import { stringifyUrl } from "query-string";

export const defaultHeaders = {
  "Content-Type": "application/json",
};

const API_URL = process.env.VUE_APP_API_BASE_URI;
const PUBLIC_KEY = process.env.VUE_APP_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = process.env.VUE_APP_MARVEL_PRIVATE_KEY;

const fetchApi = async (
  url,
  body,
  method = "GET",
  headers = defaultHeaders
) => {
  const ts = new Date().getTime();
  const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`);
  const uri = stringifyUrl({
    url: `${API_URL}${url}`,
    query: {
      ts: ts,
      apikey: PUBLIC_KEY,
      hash: hash,
    },
  });

  const result = {};

  try {
    const response = await fetch(uri, {
      method,
      body,
      headers,
    });

    const res = await response.json();

    if (!response.ok) {
      throw res;
    }

    result.data = res.data;
  } catch (err) {
    result.error = err;
  }

  return result;
};

export default fetchApi;
