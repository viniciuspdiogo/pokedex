import { PokemonDetail } from '../../pokemon/interfaces/pokemonDetail';

export function formattId(pokemon: PokemonDetail){
    let pad = "00000";
    let str = "";
    str = pokemon.id.toString();
    return pad.substring(0, pad.length - str.length) + str;
}