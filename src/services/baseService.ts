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
      body: JSON.stringify(body),
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

    return result.data;
  } catch (error) {
    console.error("Server API call failed:", error);
    throw error;
  }
};
