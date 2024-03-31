import fetch from "isomorphic-unfetch";

export abstract class Base {
  private baseUrl: string = "https://search.imdbot.workers.dev/";

  protected async request<T>(
    endpoint?: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const config = Object.assign({}, options, {
      "Content-Type": "application/json",
    });

    const response = await fetch(url, config);

    if (response.ok) {
      const data = await response.json();
      return data as T;
    }

    throw new Error(response.statusText);
  }
}
