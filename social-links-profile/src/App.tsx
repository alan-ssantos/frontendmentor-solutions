import useSWR from "swr";
import { useParams } from "react-router";
import type { ApiUserInterface, ApiErrorInterface } from "./types/api";

import Profile from "./components/Profile/Profile";
import ProfileHeader from "./components/Profile/ProfileHeader";
import ProfilePicture from "./components/Profile/ProfilePicture";
import ProfileName from "./components/Profile/ProfileName";
import ProfileLocation from "./components/Profile/ProfileLocation";
import ProfileDescription from "./components/Profile/ProfileDescription";
import ProfileNavLinks from "./components/Profile/ProfileNavLinks";
import ProfileLink from "./components/Profile/ProfileLink";

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
  const { username } = useParams();

  const { isLoading, data, error } = useSWR(`${API_URL}/${username}`, fetcher, {
    revalidateOnFocus: false,
  });

  if (!data && isLoading) {
    return <div>Carregando informações...</div>;
  }

  return (
    <main className="wrapper">
      {error && <div>{error.message}</div>}

      {data && (
        <Profile>
          <ProfileHeader>
            <ProfilePicture src={data.avatar_url} alt={`Foto de perfil de ${data.name}`} />
            <ProfileName>{data.name}</ProfileName>
            <ProfileLocation>{data.location}</ProfileLocation>
          </ProfileHeader>
          <ProfileDescription>{data.bio}</ProfileDescription>
          <ProfileNavLinks>
            <ProfileLink href={data.html_url}>GitHub</ProfileLink>
            {data.blog && <ProfileLink href={data.blog}>Blog / Portfólio</ProfileLink>}
          </ProfileNavLinks>
        </Profile>
      )}
    </main>
  );
}

export default App;
