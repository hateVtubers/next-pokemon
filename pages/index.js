import HeadContainer from "../containers/HeadContainer";
import HeaderContainer from "../containers/HeaderContainer";
import { useGeneration } from "../hooks/useGeneration";
import { Text } from "../components/Text";

const Home = ({ pokemon_species }) => {
  const { generation, generationName, setLoading, loading } = useGeneration(pokemon_species);

  const handleState = (event) => {
    setLoading(event.target.value);
  };
  return (
    <>
      <HeadContainer></HeadContainer>
      <HeaderContainer></HeaderContainer>
      <main className="mt-10 mb-5 flex items-center flex-col">
        <select
          className="w-11/12 max-w-lg lg:max-w-2xl transition-all text-center py-2 lg:py-3 rounded-t text-sm bg-red-500 text-white outline-none border-0"
          onClick={handleState}
        >
          {generationName.map((g) => (
            <option
              className="bg-red-500 hover:bg-red-400 transition-colors text-sm"
              key={g}
            >
              {g}
            </option>
          ))}
        </select>
        <section className="rounded-b bg-black text-white p-3 lg:px-4 w-11/12 max-w-lg lg:max-w-2xl text-xs lg:text-sm flex flex-wrap gap-2 lg:gap-2.5 items-center justify-center">
          {loading
            ? generation.map(({ name }) => <Text name={name} key={name}></Text>)
            : pokemon_species.map(({ name }) => (
                <Text name={name} key={name}></Text>
              ))}
        </section>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/generation/1/").then((r) =>
    r.json()
  );
  const { pokemon_species } = res;
  return {
    props: {
      pokemon_species,
    },
  };
};

export default Home;
