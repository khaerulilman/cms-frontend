const BASE_URL = process.env.NEXT_PUBLIC_MAIN_API;

if (!BASE_URL) {
  throw new Error(
    "NEXT_PUBLIC_MAIN_API is not defined in environment variables"
  );
}

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  token?: string;
};

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T = any>(
    path: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const { method = "GET", body, token } = options;

    const res = await fetch(`${this.baseUrl}${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      ...(body && { body: JSON.stringify(body) }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "API request failed");
    }

    return data;
  }

  private getTokenFromStorage(): string {
    if (typeof window !== "undefined") {
      return localStorage.getItem("accessToken") || "";
    }
    return "";
  }

  async login(email: string, password: string) {
    const response = await this.request("/api/v1/auth/login", {
      method: "POST",
      body: { email, password },
    });

    if (typeof window !== "undefined" && response.data?.accessToken) {
      // Gunakan nama yang sama: accessToken
      localStorage.setItem("accessToken", response.data.accessToken); // optional untuk backward compatibility

      if (response.data.refreshToken) {
        localStorage.setItem("refreshToken", response.data.refreshToken);
      }
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    }

    return response;
  }

  getAllUserProjects() {
    const accessToken = this.getTokenFromStorage();
    return this.request("/api/v1/projects", { token: accessToken });
  }

  getAllUserTables(projectId?: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request(`/api/v1/cms-tables/project/${projectId}`, {
      token: accessToken,
    });
  }

  getColumnByTableId(tableId?: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request(`/api/v1/cms-columns/table/${tableId}`, {
      token: accessToken,
    });
  }

  getRowByTableId(tableId?: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request(`/api/v1/cms-rows/table/${tableId}`, {
      token: accessToken,
    });
  }

  getCellsByRowId(rowId?: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request(`/api/v1/cms-cells/row/${rowId}`, {
      token: accessToken,
    });
  }

  createColumn(tableId: string, columns: Array<{ name: string }>) {
    const accessToken = this.getTokenFromStorage();
    return this.request("/api/v1/cms-columns", {
      method: "POST",
      body: { tableId, columns },
      token: accessToken,
    });
  }

  createRow(tableId: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request("/api/v1/cms-rows", {
      method: "POST",
      body: { tableId },
      token: accessToken,
    });
  }

  createTable(projectId: string, name: string, isSubTable: boolean) {
    const accessToken = this.getTokenFromStorage();
    return this.request("/api/v1/cms-tables", {
      method: "POST",
      body: { projectId, name, isSubTable },
      token: accessToken,
    });
  }

  createProject(name: string, description: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request("/api/v1/projects", {
      method: "POST",
      body: { name, description },
      token: accessToken,
    });
  }

  deleteTable(tableId: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request(`/api/v1/cms-tables/${tableId}`, {
      method: "DELETE",
      token: accessToken,
    });
  }

  deleteRow(rowId: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request(`/api/v1/cms-rows/${rowId}`, {
      method: "DELETE",
      token: accessToken,
    });
  }

  deleteColumn(columnId: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request(`/api/v1/cms-columns/${columnId}`, {
      method: "DELETE",
      token: accessToken,
    });
  }

  deleteProject(projectId: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request(`/api/v1/projects/${projectId}`, {
      method: "DELETE",
      token: accessToken,
    });
  }

  updateCell(rowId: string, columnId: string, value: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request(`/api/v1/cms-cells/row/${rowId}`, {
      method: "POST",
      body: { columnId, value },
      token: accessToken,
    });
  }

  async updateCellWithImage(
    rowId: string,
    columnId: string,
    image: File
  ): Promise<any> {
    const accessToken = this.getTokenFromStorage();
    const formData = new FormData();
    formData.append("columnId", columnId);
    formData.append("image", image);

    const res = await fetch(`${this.baseUrl}/api/v1/cms-cells/row/${rowId}`, {
      method: "POST",
      headers: {
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "API request failed");
    }

    return data;
  }

  getApiKeys() {
    const accessToken = this.getTokenFromStorage();
    return this.request("/api/v1/api-keys", {
      token: accessToken,
    });
  }

  generateApiKey() {
    const accessToken = this.getTokenFromStorage();
    return this.request("/api/v1/api-keys", {
      method: "POST",
      token: accessToken,
    });
  }

  deleteApiKey(apiId: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request(`/api/v1/api-keys/${apiId}`, {
      method: "DELETE",
      token: accessToken,
    });
  }

  updateProjects(projectId: string, name: string, description?: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request(`/api/v1/projects/${projectId}`, {
      method: "PUT",
      body: { name, description },
      token: accessToken,
    });
  }

  updateTables(tableId: string, name: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request(`/api/v1/cms-tables/${tableId}`, {
      method: "PUT",
      body: { name },
      token: accessToken,
    });
  }

  updateColumns(columnId: string, name: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request(`/api/v1/cms-columns/${columnId}`, {
      method: "PUT",
      body: { name },
      token: accessToken,
    });
  }

  updateCellImage(rowId: string, columnId: string, imageUrl: string) {
    const accessToken = this.getTokenFromStorage();
    return this.request(`/api/v1/cms-cells/row/${rowId}`, {
      method: "POST",
      body: { columnId, imageUrl },
      token: accessToken,
    });
  }
}

export const api = new ApiClient(BASE_URL);
