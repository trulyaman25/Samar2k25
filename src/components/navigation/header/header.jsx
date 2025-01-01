import { useState, useRef } from 'react';
import '../../../../globalStyles.css';
import HoverAudio from '../../../assets/audio/buttonHoverGTA.mp3';
import samarLogo from '/favicon.png';
import { NavLink } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const hoverAudioRef = useRef(new Audio(HoverAudio));

    const handleHover = () => {
        hoverAudioRef.current.play();
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className='fixed top-0 w-screen h-[80px] px-6 md:px-28 bg-slate-800 bg-opacity-30 backdrop-blur-xl transition-all duration-300 flex flex-row justify-between items-center border-b border-white border-opacity-50 z-50'>
            {/* Logo and Title */}
            <div className='flex flex-row justify-start items-center gap-6'>
                <img src={samarLogo} alt="Samar Logo" width="60px" height="60px" />
                <h1 className='text-lg text-white'>|</h1>
                <NavLink className='font-vermin text-3xl text-white cursor-pointer' to="/">SAMAR</NavLink>
            </div>

            {/* Hamburger Button */}
            <button
                className='xl:hidden flex flex-col justify-center items-center gap-1 focus:outline-none'
                onClick={toggleMenu}
            >
                <div className='w-6 h-0.5 bg-white'></div>
                <div className='w-6 h-0.5 bg-white'></div>
                <div className='w-6 h-0.5 bg-white'></div>
            </button>

            {/* Navigation Menu */}
            <div
                className={`absolute top-[80px] left-0 w-full bg-slate-800 bg-opacity-90 xl:bg-transparent xl:static xl:flex xl:items-center xl:w-auto transition-transform duration-300 ${
                    isMenuOpen ? 'flex flex-col items-center' : 'hidden xl:flex'
                }`}
            >
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-8 py-3 hover:text-rose-400 font-crossFly text-xs tracking-widest ${
                            isActive ? 'text-rose-400' : 'text-white'
                        }`
                    }
                    onMouseEnter={handleHover}
                >
                    HOME
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `px-8 py-3 hover:text-rose-400 font-crossFly text-xs tracking-widest ${
                            isActive ? 'text-rose-400' : 'text-white'
                        }`
                    }
                    onMouseEnter={handleHover}
                >
                    ABOUT
                </NavLink>

                <NavLink
                    to="/merchandise"
                    className={({ isActive }) =>
                        `px-8 py-3 hover:text-rose-400 font-crossFly text-xs tracking-widest ${
                            isActive ? 'text-rose-400' : 'text-white'
                        }`
                    }
                    onMouseEnter={handleHover}
                >
                    MERCHANDISE
                </NavLink>
                <NavLink
                    to="/team"
                    className={({ isActive }) =>
                        `px-8 py-3 hover:text-rose-400 font-crossFly text-xs tracking-widest ${
                            isActive ? 'text-rose-400' : 'text-white'
                        }`
                    }
                    onMouseEnter={handleHover}
                >
                    TEAM
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `px-8 py-3 hover:text-rose-400 font-crossFly text-xs tracking-widest ${
                            isActive ? 'text-rose-400' : 'text-white'
                        }`
                    }
                    onMouseEnter={handleHover}
                >
                    CONTACT US
                </NavLink>
            </div>

            <button className='hidden md:block border-2 px-8 py-3 border-rose-200 bg-rose-500 text-white italic font-crossFly rounded-tl-3xl rounded-br-3xl hover:rounded-lg hover:text-white hover:scale-[.97] transition-all ease-in-out duration-75' onMouseEnter={handleHover}>
                PLAY
            </button>
        </header>
    );
}

export default Header;
