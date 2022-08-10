import React from 'react';
interface HeaderProps {
    
}

const Header: React.FC<HeaderProps> = () => {
    
    return (
        <header className='w-full flex justify-center gap-5 items-center p-5'>
            <img 
                className='max-h-16 hidden sm:inline' 
                src="/public/pokebola.png"
            />
            <a href="/" >
                <img 
                    className='max-h-32'
                    src="/public/Pokedex_logo.webp"
                    title='Pokédex'
                />

            </a>
           
             <img 
                className='max-h-16 hidden sm:inline'
                src="/public/pokebola.png"
            />
        </header>
    );
};

export default Header;