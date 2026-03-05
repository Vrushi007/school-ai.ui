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
  password?: string;
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
  return makeAuthenticatedGetRequest<Organization[]>(
    `${API_AUTH_URL}/organizations`,
  );
};

export const createOrganization = async (
  data: CreateOrganizationData,
): Promise<Organization> => {
  return makeAuthenticatedPostRequest<Organization>(
    `${API_AUTH_URL}/organizations`,
    data,
  );
};

export const updateOrganization = async (
  id: number,
  data: UpdateOrganizationData,
): Promise<Organization> => {
  return makeAuthenticatedPatchRequest<Organization>(
    `${API_AUTH_URL}/organizations/${id}`,
    data,
  );
};

export const deleteOrganization = async (id: number): Promise<void> => {
  return makeAuthenticatedDeleteRequest(
    `${API_AUTH_URL}/organizations/${id}`,
  );
};

// User API calls
export const fetchUsers = async (organizationId?: number): Promise<User[]> => {
  const params = organizationId ? `?organization_id=${organizationId}` : "";
  return makeAuthenticatedGetRequest<User[]>(
    `${API_AUTH_URL}/users${params}`,
  );
};

export const createUser = async (data: CreateUserData): Promise<User> => {
  return makeAuthenticatedPostRequest<User>(
    `${API_AUTH_URL}/users?auto_generate_password=true`,
    data,
  );
};

export const updateUser = async (
  id: number,
  data: UpdateUserData,
): Promise<User> => {
  return makeAuthenticatedPatchRequest<User>(
    `${API_AUTH_URL}/users/${id}`,
    data,
  );
};

export const deleteUser = async (id: number): Promise<void> => {
  return makeAuthenticatedDeleteRequest(`${API_AUTH_URL}/users/${id}`);
};

// Role API calls
export const fetchRoles = async (): Promise<Role[]> => {
  return makeAuthenticatedGetRequest<Role[]>(`${API_AUTH_URL}/roles`);
};
