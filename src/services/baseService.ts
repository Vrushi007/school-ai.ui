// Configuration
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

// Log the API URL for debugging (only in development)
if (process.env.NODE_ENV === "development") {
  console.log("API Base URL:", API_BASE_URL);
  console.log("Environment:", process.env.NODE_ENV);
}

// Helper function to make API calls to your server
export const makePostRequest = async (endpoint: string, body: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
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

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || "Server returned unsuccessful response");
    }

    return transformSnakeCaseToCamelCase(result.data);
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
