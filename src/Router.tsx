import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
import { Pokedex } from './domains/pokedex/Pokedex';
import { PokemonDetails } from './domains/pokemon/components/PokemonDetails';
  
interface Router {
    
}

export const Router: React.FC<Router> = () => {
    return (
        <Routes>
          <Route path='/pokemon' element={<PokemonDetails />}/>
          <Route path="/" element={<Pokedex />}/>
        </Routes>
      
    );
};

export default Router;