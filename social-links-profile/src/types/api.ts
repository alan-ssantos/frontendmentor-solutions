export interface ApiErrorInterface {
  status: string;
  message: string;
  documentation_url: string;
}

export interface ApiUserInterface {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  blog: string | null;
  location: string | null;
  twitter_username: string | null;
}
