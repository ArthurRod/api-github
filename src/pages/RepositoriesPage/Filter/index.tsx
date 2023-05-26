import { X } from "phosphor-react";

import { Lang } from "../../../types/Lang";
import { Cleaner, Container, Selector } from "./styles";

export function Filter() {
  const langs = [
    { name: "JavaScript", count: 5, color: "#f1c40f" },
    { name: "TypeScript", count: 2, color: "#3498db" },
    { name: "Java", count: 1, color: "#95a5a6" },
  ];

  const selectors = langs.map((lang: Lang, index: number) => {
    const { name, count, color } = lang;

    return (
      <Selector key={index} color={color}>
        <span>{name}</span>
        <span>{count}</span>
      </Selector>
    );
  });

  return (
    <Container>
      {selectors}
      <Cleaner>
        Limpar <X size={15} />
      </Cleaner>
    </Container>
  );
}
