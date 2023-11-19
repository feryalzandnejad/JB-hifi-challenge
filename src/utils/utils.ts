interface ApiType {
  url: string;
  method?: "POST" | "GET";
  body?: any;
  signal: AbortSignal;
}

interface RequestOptionWithHeadersType {
  method: "POST" | "GET";
  headers: {
    'Content-Type': 'application/json';
  };
  body: string;
}

const BASE_URL = `https://api.openweathermap.org/data/2.5/`;

const API_KEYS = {
  1: {
    key: '8b7535b42fe1c551f18028f64e8688f7',
  },
  2: {
    key: '9f933451cebf1fa39de168a29a4d9a79',
  }
}

const Api = async ({url, method, body, signal}: ApiType) => {
  const requestOptions: RequestOptionWithHeadersType = {
    method: method || (body ? "POST" : "GET"),
    headers: {
      'Content-Type': 'application/json',
      ...[signal && {['signal']: signal}]
    },
    body: JSON.stringify(body)
  };
  
  const fullUrl = `${BASE_URL}${url}&apiKey=${API_KEYS[2].key}`
  
  try {
    if (body) {
      const response = await fetch(fullUrl, requestOptions);
      const data = await response.json();
      return data;
    } else {
      const response = await fetch(fullUrl, ...[signal && {['signal']: signal}]);     
      const data = await response.json();
      return data;
    }

  } catch (error) {
    throw error;
  }
};

export default Api;