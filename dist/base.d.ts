export declare abstract class Base {
    private baseUrl;
    protected request<T>(endpoint?: string, options?: RequestInit): Promise<T>;
}
