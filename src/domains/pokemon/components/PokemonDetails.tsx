import React, { useState,useEffect } from 'react';
import { PokemonDetail } from '../interfaces/pokemonDetail';
import { getPokemonsDetails } from '../services/getPokemonDetails';
import { PokemonInterface } from '../services/listPokemons';
import { useParams } from "react-router-dom";

interface PokemonDetailsProps {

}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
    
    let { name } = useParams();
    
    const [selectedPokemonDetails, setselectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);
    
    useEffect(() => {

        if (!name) return; 
        getPokemonsDetails(name).then((response) => 
        setselectedPokemonDetails(response)
        );
        
    }, []);

    return (
        <div>
            Pokemon: {name}
            
            <img src={selectedPokemonDetails?.sprites.front_default} alt={name} title={"Pokemon: "+name}/>
            
        </div>
    );
};
