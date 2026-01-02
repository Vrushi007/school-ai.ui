// Configuration
export const API_AI_URL =
  process.env.REACT_APP_API_AI_URL || "http://localhost:8000";
export const API_CONTENT_URL =
  process.env.REACT_APP_API_CONTENT_URL || "http://localhost:8090";

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
        `Server API error: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    // Handle 201 Created - return true
    if (response.status === 201) {
      return true;
    }

    // Handle 200 OK - parse JSON response
    const result = await response.json();

    if (!result.success) {
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
      ])
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
      ])
    );
  };
  return processValue(obj);
};
