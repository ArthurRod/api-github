export type User = {
  login: string;
  name: string;
  avatar_url: string;
  followers: number;
  following: number;
  company?: string;
  blog?: string;
  location?: string;
};
