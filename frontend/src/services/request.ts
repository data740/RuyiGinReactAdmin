const USE_MOCK = import.meta.env.VITE_USE_MOCK !== 'false';

export async function request<T>(url: string, options?: RequestInit): Promise<T> {
  if (USE_MOCK) {
    const { getMockData } = await import('./mock');
    return getMockData(url) as T;
  }
  const res = await fetch(url, { ...options });
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
