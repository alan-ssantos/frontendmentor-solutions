import type { ApiUserInterface, ApiErrorInterface } from "../types/api";

async function fetcher(key: string): Promise<ApiUserInterface> {
  const response = await fetch(key);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Usuário não encontrado!");
    }

    if (response.status === 403) {
      throw new Error("Limite de requisições atingido!");
    }

    const responseError: ApiErrorInterface = await response.json().catch(() => ({}));
    throw new Error(responseError.message || `Erro ${response.status}: ${response.statusText}`);
  }

  return await response.json();
}

export default fetcher;
