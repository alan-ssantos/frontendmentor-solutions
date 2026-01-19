import { useState } from "react";
import useSWR from "swr";
import type { ApiUserInterface, ApiErrorInterface } from "./types/api";

const API_URL = import.meta.env.VITE_GITHUB_API_URL;

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

function App() {
  const [username, setUsername] = useState<string>("alan-ssantos");
  const { isLoading, data, error } = useSWR(`${API_URL}${username}`, fetcher, {
    revalidateOnFocus: false,
  });
  const [inputValue, setInputValue] = useState<string>("");

  if (!data && isLoading) {
    return <div>Carregando informações...</div>;
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      setUsername(trimmedInputValue);
      setInputValue("");
    }
  }

  return (
    <>
      <h1>Hello World!</h1>
      {error && <div>{error.message}</div>}

      {data && (
        <>
          <img src={data.avatar_url} alt="" />
          <p>My name is {data.name}.</p>
        </>
      )}

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value.toLowerCase())}
          value={inputValue}
          placeholder="Search by GitHub username"
          aria-label="GitHub username"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          Buscar perfil
        </button>
      </form>
    </>
  );
}

export default App;
