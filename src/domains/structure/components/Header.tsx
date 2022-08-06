import React from 'react';

interface HeaderProps {
    
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div className='w-full'>
            <img src="/public/Pokédex_logo.webp"/>
        </div>
    );
};

export default Header;