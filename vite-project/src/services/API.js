
const link = "https://pokeapi.co/api/v2/pokemon/?limit=30";

async function onResolve(data) {

    data = await Promise.allSettled(data.map(async (pokemonLink) => {
        let pokemon = await fetch(pokemonLink.url);
        pokemon = await pokemon.json();

        return {
            name: pokemonLink.name,
            image: pokemon.sprites.other["official-artwork"].front_default,
        }
    })
    )

    data = data.filter(x => x.status == "fulfilled");
    if (data.length == 0) throw new Error("failed");
    else return data.map(x => x.value);

}
export async function fetchData() {

    try {
        let response = await fetch(link);
        let data = await response.json();
        data = await onResolve(data.results);
        return data;
    }
    catch (error) {
        throw error;
    }


}