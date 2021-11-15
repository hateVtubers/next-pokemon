import { useEffect, useState } from "react";

export const useGeneration = (gen) => {
  const [generation, setGeneration] = useState(gen);
  const [loading, setLoading] = useState(false);
  const generationName = [
    "GENERATION I",
    "GENERATION II",
    "GENERATION III",
    "GENERATION IV",
    "GENERATION V",
    "GENERATION VI",
    "GENERATION VII",
    "GENERATION VIII",
  ];
  const getUrl = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/generation/${generationName.indexOf(loading) + 1}/`)
      .then((r) => r.json())
      .then((r) => r.pokemon_species);
    setGeneration(res);
  };

  useEffect(() => {
    loading ? getUrl() : null;
  }, [loading]);

  return {
    generation,
    loading,
    setGeneration,
    setLoading,

    generationName,
    getUrl,
  };
};
