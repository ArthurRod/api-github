import axios from "axios";

import { RepositoryType } from "../types/RepositoryType";
import { langColors } from "./config";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export async function getUser(login: string) {
  try {
    const response = await api.get(`/users/${login}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getRepos(login: string) {
  try {
    const response = await api.get(`/users/${login}/repos`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export function getLangsFrom(repositories: RepositoryType[]) {
  let stats: any = repositories
    .map((RepositoryType: RepositoryType) => RepositoryType.language)
    .reduce(
      (data: Record<string, number>, language: string) => ({
        ...data,
        [language]: (data[language && language] || 0) + 1,
      }),
      {}
    );

  delete stats.null;

  stats = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColors[language.toLowerCase() as keyof typeof langColors],
    }))
    .sort((a, b) => b.count - a.count);

  return stats;
}

export default api;
