import { RepositoryType } from "../types/RepositoryType";
import { langColors } from "./config";

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
