// Configuration
export const API_AI_URL =
  process.env.REACT_APP_API_AI_URL || "http://localhost:8000";
export const API_CONTENT_URL =
  process.env.REACT_APP_API_CONTENT_URL || "http://localhost:8090";
export const API_AUTH_URL =
  process.env.REACT_APP_API_AUTH_URL || "http://localhost:8080";

// Helper function to make GET API calls
export const makeGetRequest = async <T>(endpoint: string): Promise<T[]> => {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return transformSnakeCaseToCamelCase(result) as T[];
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

// Helper function to make API calls to your server
export const makePostRequest = async (endpoint: string, body: any) => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transformCamelCaseToSnakeCase(body)),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Server API error: ${response.status} ${response.statusText} - ${errorText}`,
      );
    }

    // Handle 201 Created - return true
    if (response.status === 201) {
      return true;
    }

    // Handle 200 OK - parse JSON response
    const result = await response.json();

    // Only check for success flag if it exists in the response
    // Some endpoints don't use this pattern (e.g., auth endpoints)
    if (result.success === false) {
      throw new Error(result.error || "Server returned unsuccessful response");
    }
    return transformSnakeCaseToCamelCase(result);
  } catch (error) {
    console.error("Server API call failed:", error);
    throw error;
  }
};

// Helper function to make PUT API calls to your server
export const makePutRequest = async (endpoint: string, body: any) => {
  try {
    const response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transformCamelCaseToSnakeCase(body)),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Server API error: ${response.status} ${response.statusText} - ${errorText}`,
      );
    }

    // Handle 200 OK - parse JSON response
    const result = await response.json();

    // Only check for success flag if it exists in the response
    if (result.success === false) {
      throw new Error(result.error || "Server returned unsuccessful response");
    }
    return transformSnakeCaseToCamelCase(result);
  } catch (error) {
    console.error("Server API call failed:", error);
    throw error;
  }
};

/**
 * recursively loops through obj, converting all keys from snake_case to camelCase
 */
export const transformSnakeCaseToCamelCase = (obj: any) => {
  const processValue = (value: unknown): unknown => {
    if (typeof value !== "object" || value === null) {
      return value;
    }
    // if array, process the children without touching the key names
    if (Array.isArray(value)) {
      return value.map(processValue);
    }

    // otherwise its an object - rename the keys and process the values
    return Object.fromEntries(
      Object.entries(value).map(([key, value]) => [
        key.replace(/_(.)/g, (_z, char) => char.toUpperCase()),
        processValue(value),
      ]),
    );
  };
  return processValue(obj);
};

/**
 * recursively loops through obj, converting all keys from camelCase to snake_case
 */
export const transformCamelCaseToSnakeCase = (obj: any) => {
  const processValue = (value: unknown): unknown => {
    if (typeof value !== "object" || value === null) {
      return value;
    }
    // if array, process the children without touching the key names
    if (Array.isArray(value)) {
      return value.map(processValue);
    }

    // otherwise its an object - rename the keys and process the values
    return Object.fromEntries(
      Object.entries(value).map(([key, value]) => [
        key.replace(/([A-Z])/g, (z, char) => `_${char.toLowerCase()}`),
        processValue(value),
      ]),
    );
  };
  return processValue(obj);
};

// Helper function to make authenticated GET requests
export const makeAuthenticatedGetRequest = async <T>(
  endpoint: string,
  token: string,
): Promise<T> => {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return transformSnakeCaseToCamelCase(result) as T;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

// Helper function to make authenticated POST requests
export const makeAuthenticatedPostRequest = async <T>(
  endpoint: string,
  body: any,
  token: string,
): Promise<T> => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(transformCamelCaseToSnakeCase(body)),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Server API error: ${response.status} ${response.statusText} - ${errorText}`,
      );
    }

    // Handle 204 No Content
    if (response.status === 204) {
      return true as T;
    }

    // Handle 201 Created - return JSON response
    if (response.status === 201) {
      const result = await response.json();
      return transformSnakeCaseToCamelCase(result) as T;
    }

    // Handle 200 OK - parse JSON response
    const result = await response.json();
    return transformSnakeCaseToCamelCase(result) as T;
  } catch (error) {
    console.error("Authenticated API call failed:", error);
    throw error;
  }
};

// Helper function to make authenticated PUT requests
export const makeAuthenticatedPutRequest = async <T>(
  endpoint: string,
  body: any,
  token: string,
): Promise<T> => {
  try {
    const response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(transformCamelCaseToSnakeCase(body)),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Server API error: ${response.status} ${response.statusText} - ${errorText}`,
      );
    }

    // Handle 204 No Content
    if (response.status === 204) {
      return true as T;
    }

    // Handle 200 OK - parse JSON response
    const result = await response.json();
    return transformSnakeCaseToCamelCase(result) as T;
  } catch (error) {
    console.error("Authenticated PUT request failed:", error);
    throw error;
  }
};

// Helper function to make authenticated PATCH requests
export const makeAuthenticatedPatchRequest = async <T>(
  endpoint: string,
  body: any,
  token: string,
): Promise<T> => {
  try {
    const response = await fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(transformCamelCaseToSnakeCase(body)),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Server API error: ${response.status} ${response.statusText} - ${errorText}`,
      );
    }

    // Handle 204 No Content
    if (response.status === 204) {
      return true as T;
    }

    // Handle 200 OK - parse JSON response
    const result = await response.json();
    return transformSnakeCaseToCamelCase(result) as T;
  } catch (error) {
    console.error("Authenticated PATCH request failed:", error);
    throw error;
  }
};

// Helper function to make authenticated DELETE requests
export const makeAuthenticatedDeleteRequest = async (
  endpoint: string,
  token: string,
): Promise<void> => {
  try {
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Server API error: ${response.status} ${response.statusText} - ${errorText}`,
      );
    }

    // DELETE typically returns 204 No Content or 200 OK with no body
    return;
  } catch (error) {
    console.error("Authenticated DELETE request failed:", error);
    throw error;
  }
};
