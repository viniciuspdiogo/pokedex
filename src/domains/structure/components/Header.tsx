import React from 'react';
import imgPokebola from '../../../assets/pokebola.png';
import imgPokedex from '../../../assets/Pokedex_logo.webp';
interface HeaderProps {
    
}

const Header: React.FC<HeaderProps> = () => {
    
    return (
        <header className='w-full flex justify-center gap-5 items-center p-5'>
            <img 
                className='max-h-16 hidden sm:inline' 
                src={imgPokebola}
            />
            <a href="/" >
                <img 
                    className='max-h-32'
                    src={imgPokedex}
                    title='Pokédex'
                />

            </a>
           
             <img 
                className='max-h-16 hidden sm:inline'
                src={imgPokebola}
            />
        </header>
    );
};

export default Header;