import React, { useContext, useState } from "react";
import Menuitem from './Menuitem';
import logo from '../img/logo.png'
import logoWhite from '../img/iconWhite/logo.png'
import ThemeWhite from '../img/icon/ThemeWhite.svg'
import ThemeDark from '../img/iconWhite/ThemeDark.svg'
import { NavLink } from "react-router-dom";
import { ThemeContext } from '../../../ThemeContext';

import {
    MainNav,
    NavLogo,
    LogoImage,
    NavBurger,
    BurgerLine,
    NavMenu,
    MenuList
} from '../css/NavigationLeftStyle';

const NavigationLeft = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { toggleTheme, theme } = useContext(ThemeContext);

    const handleBurgerClick = () => {
        setShowMenu(!showMenu);
    };

    const handleTheme = () => {

        toggleTheme();
    };

    const navActive = `${showMenu ? (theme === 'dark' ? '#1C1C1C' : '#F6F5F3') : (theme === 'dark' ? '#000000' : '#ffffff')}`;

    return (
        <MainNav
            navActive={navActive}
        >
            <NavLogo>
                <LogoImage src={theme === 'dark' ? logo : logoWhite} alt="logo" />
            </NavLogo>
            <NavBurger onClick={handleBurgerClick}>
                <BurgerLine theme={theme === 'dark' ? '#D3D3D3' : '#000000'}></BurgerLine>
                <BurgerLine theme={theme === 'dark' ? '#D3D3D3' : '#000000'}></BurgerLine>
                <BurgerLine theme={theme === 'dark' ? '#D3D3D3' : '#000000'}></BurgerLine>
            </NavBurger>
            {showMenu && (
                <NavMenu>
                    <MenuList >
                        <NavLink to={`/main`} replace>
                            <Menuitem text="Главное" />
                        </NavLink>
                        <NavLink to={`/mytracks`} replace>
                            <Menuitem text="Мой плейлист" />
                        </NavLink>
                        <Menuitem text="Войти" />
                        <img src={theme === 'dark' ? ThemeWhite : ThemeDark} onClick={handleTheme} />
                    </MenuList>
                </NavMenu>
            )}
        </MainNav>
    );
};

export default NavigationLeft;
