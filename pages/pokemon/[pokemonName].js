import HeaderContainer from "../../containers/HeaderContainer";
import HeadContainer from "../../containers/HeadContainer";
import { Card } from "../../components/Card";

const Name = ({ name, id, versions }) => {
  /* [...[generationName, [...[gameName, [images]]]] */
  const pokemonData = Object.entries(versions).map(
    ([generationName, gameName]) => {
      const a = Object.entries(gameName).map(([gn, img]) => {
        // gn = gameName
        const gnImg = Object.values(img); // img(Objects)
        const filterImages = gnImg.filter((i) => i && typeof i === "string");
        return [gn, filterImages];
      });
      return [generationName, a];
    }
  );
  return (
    <>
      <HeadContainer></HeadContainer>
      <HeaderContainer></HeaderContainer>
      <main className="mt-10 mb-5 bg-crimson-500 py-2 px-3 text-white w-11/12 mx-auto rounded max-w-xl lg:max-w-3xl">
        <header>
          <h1 className="text-lg text-center">{name.toUpperCase()}</h1>
          <h2 className="text-xs text-center mb-2">pokedex number {id}</h2>
        </header>
        <main className={`grid grid-cols-${pokemonData.length} place-items-center gap-3`}>
          {pokemonData.map(([generationName, assets]) => (
            <div className="bg-black w-11/12 py-2 px-3 rounded" key={generationName}>
              <h3 className="text-center text-sm">{generationName.toUpperCase()}</h3>
              <div className="flex items-center justify-evenly gap-4 flex-wrap py-2">
                {assets.map(([title, image]) => (
                  <Card title={title} imageArray={image} key={title}></Card>
                ))}
              </div>
            </div>
          ))}
        </main>
      </main>
    </>
  );
};

export const getServerSideProps = async ({ query: { pokemonName } }) => {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`
  ).then((r) => r.json());
  const {
    name,
    id,
    sprites: { versions },
  } = pokemon;
  return {
    props: { name, id, versions },
  };
};

export default Name;
