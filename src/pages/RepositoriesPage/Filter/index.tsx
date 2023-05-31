import { X } from "phosphor-react";

import { Language } from "../../../types/Language";

import { Cleaner, Container, Selector } from "./styles";

interface FilterProps {
  languages: Language[];
  currentLanguage?: string;
  onclick?: (currentLanguage: string | undefined) => void;
}

export function Filter({ languages, currentLanguage, onclick }: FilterProps) {
  const selectors = languages.map((language: Language, index: number) => {
    const { name, count, color } = language;

    return (
      <Selector
        key={index}
        color={color}
        className={
          currentLanguage && currentLanguage === name ? "selected" : ""
        }
        onClick={() => onclick && onclick(name)}
      >
        <span>{name}</span>
        <span>{count}</span>
      </Selector>
    );
  });

  return (
    <Container>
      {selectors}
      {currentLanguage && (
        <Cleaner onClick={() => onclick && onclick(undefined)}>
          Limpar <X size={15} />
        </Cleaner>
      )}
    </Container>
  );
}
