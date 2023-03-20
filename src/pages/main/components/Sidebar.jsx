// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useEffect } from 'react';
import Sidebaritem from './Sidebaritem';
import Playlist01 from '../img/playlist01.png';
import Playlist02 from '../img/playlist02.png';
import Playlist03 from '../img/playlist03.png';
import { NavLink } from "react-router-dom";
import {
    MainSidebar,
    SidebarBlock,
    Sidebarlist,
    // SidebarPersonal,
    // SidebarPersonalName,
    // SidebarAvatar,
} from '../css/sideBarStyle';
// import { ThemeContext } from '../../../ThemeContext';

const Sidebar = () => {
    const [showSidebaritem, setSidebaritem] = useState(false);
    // const { theme } = useContext(ThemeContext);
    useEffect(() => {
        setTimeout(() => {
            setSidebaritem(true);
        }, 5000);
    }, []);
    return (
        <MainSidebar>
            {/* <SidebarPersonal>
                <SidebarPersonalName theme={theme === 'dark' ? '#ffffff' : '#000000'}>Raman.Kaiko-Bialkowsky</SidebarPersonalName>
                <SidebarAvatar theme={theme === 'dark' ? '#4E4E4E' : '#F6F4F4'}>
                </SidebarAvatar>
            </SidebarPersonal> */}
            <SidebarBlock>
                <Sidebarlist>
                    {showSidebaritem ? (
                        <>
                            <NavLink to={`/PlaylistOfTheDay`} replace>
                                <Sidebaritem source={Playlist01} />
                            </NavLink>

                            <NavLink to={`/100DanceHits`} replace>
                                <Sidebaritem source={Playlist02} />
                            </NavLink>
                            
                            <NavLink to={`/IndieCharge`} replace>
                                <Sidebaritem source={Playlist03} />
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <Sidebaritem skeleton='true' />
                            <Sidebaritem skeleton='true' />
                            <Sidebaritem skeleton='true' />
                        </>
                    )

                    }

                </Sidebarlist>
            </SidebarBlock>
        </MainSidebar>
    );
};

export default Sidebar;