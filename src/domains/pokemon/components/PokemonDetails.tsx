import React, { useState,useEffect } from 'react';
import { PokemonDetail } from '../interfaces/pokemonDetail';
import { getPokemonsDetails } from '../services/getPokemonDetails';
import { PokemonInterface } from '../services/listPokemons';

interface PokemonDetailsProps {

}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
    console.log("Tete");
    
    const [selectedPokemon, setselectedPokemon] = useState<PokemonInterface | undefined>(undefined);
    const [selectedPokemonDetails, setselectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);

    useEffect(() => {

        if (!selectedPokemon) return;
        console.log("Renderizou");
        getPokemonsDetails(selectedPokemon.name).then((response) => setselectedPokemonDetails(response));

    }, [selectedPokemon]);

    return (
        <div>
            POkemon
             {JSON.stringify(selectedPokemonDetails,undefined,2)}
        </div>
    );
};
