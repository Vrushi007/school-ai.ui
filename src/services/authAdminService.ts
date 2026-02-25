import {
  API_AUTH_URL,
  makeAuthenticatedGetRequest,
  makeAuthenticatedPostRequest,
  makeAuthenticatedPatchRequest,
  makeAuthenticatedDeleteRequest,
} from "./baseService";

// Type definitions for Auth Admin Service entities
export interface Organization {
  id: number;
  name: string;
  code: string;
  address?: string;
  city?: string;
  state?: string;
  country: string;
  postal_code?: string;
  phone?: string;
  email?: string;
  website?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  permissions: Record<string, string[]>;
  is_active: boolean;
}

export interface User {
  id: number;
  email: string;
  username: string;
  full_name: string;
  is_active: boolean;
  is_verified: boolean;
  role_id: number;
  organization_id?: number;
  role: Role;
  organization?: Organization;
  created_at: string;
  updated_at: string;
}

export interface CreateOrganizationData {
  name: string;
  code: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  phone?: string;
  email: string;  // Required for sending welcome emails
  website?: string;
}

export interface UpdateOrganizationData {
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  phone?: string;
  email?: string;
  website?: string;
  is_active?: boolean;
}

export interface CreateUserData {
  email: string;
  username: string;
  password: string;
  full_name: string;
  role_id: number;
  organization_id?: number;
}

export interface UpdateUserData {
  email?: string;
  full_name?: string;
  is_active?: boolean;
  role_id?: number;
  organization_id?: number;
}

// Organization API calls
export const fetchOrganizations = async (): Promise<Organization[]> => {
  const token = localStorage.getItem("access_token") || "";
  return makeAuthenticatedGetRequest<Organization[]>(
    `${API_AUTH_URL}/organizations`,
    token,
  );
};

export const createOrganization = async (
  data: CreateOrganizationData,
): Promise<Organization> => {
  const token = localStorage.getItem("access_token") || "";
  return makeAuthenticatedPostRequest<Organization>(
    `${API_AUTH_URL}/organizations`,
    data,
    token,
  );
};

export const updateOrganization = async (
  id: number,
  data: UpdateOrganizationData,
): Promise<Organization> => {
  const token = localStorage.getItem("access_token") || "";
  return makeAuthenticatedPatchRequest<Organization>(
    `${API_AUTH_URL}/organizations/${id}`,
    data,
    token,
  );
};

export const deleteOrganization = async (id: number): Promise<void> => {
  const token = localStorage.getItem("access_token") || "";
  return makeAuthenticatedDeleteRequest(
    `${API_AUTH_URL}/organizations/${id}`,
    token,
  );
};

// User API calls
export const fetchUsers = async (organizationId?: number): Promise<User[]> => {
  const token = localStorage.getItem("access_token") || "";
  const params = organizationId ? `?organization_id=${organizationId}` : "";
  return makeAuthenticatedGetRequest<User[]>(
    `${API_AUTH_URL}/users${params}`,
    token,
  );
};

export const createUser = async (data: CreateUserData): Promise<User> => {
  const token = localStorage.getItem("access_token") || "";
  return makeAuthenticatedPostRequest<User>(
    `${API_AUTH_URL}/auth/register`,
    data,
    token,
  );
};

export const updateUser = async (
  id: number,
  data: UpdateUserData,
): Promise<User> => {
  const token = localStorage.getItem("access_token") || "";
  return makeAuthenticatedPatchRequest<User>(
    `${API_AUTH_URL}/users/${id}`,
    data,
    token,
  );
};

export const deleteUser = async (id: number): Promise<void> => {
  const token = localStorage.getItem("access_token") || "";
  return makeAuthenticatedDeleteRequest(`${API_AUTH_URL}/users/${id}`, token);
};

// Role API calls
export const fetchRoles = async (): Promise<Role[]> => {
  const token = localStorage.getItem("access_token") || "";
  return makeAuthenticatedGetRequest<Role[]>(`${API_AUTH_URL}/roles`, token);
};
