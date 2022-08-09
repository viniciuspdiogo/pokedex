import React from 'react';

interface HeaderProps {
    
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className='w-full flex justify-center gap-5 items-center p-5'>
            <img 
                className='h-16'
                src="/public/pokebola.png"
            />
            <img 
                className='h-32'
                src="/public/Pokédex_logo.webp"
            />
             <img 
                className='h-16'
                src="/public/pokebola.png"
            />
        </header>
    );
};

export default Header;