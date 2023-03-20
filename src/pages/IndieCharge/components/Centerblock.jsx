/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars

import React, { useContext, useState, useEffect } from 'react';
import Playlistitem from "./Playlistitem";
import Search from '../img/icon/search.svg';
import SearchWhite from '../img/iconWhite/search.svg';

import Watch from '../img/icon/watch.svg';
import WatchWhite from '../img/iconWhite/watch.svg';
import {
    MainCenterblock,
    CenterblockSearch,
    SearchSvg,
    SearchText,
    CenterblockTracksTitle,
    CenterblockContent,
    ContentTitle,
    Col01,
    Col02,
    Col03,
    Col04,
    PlaylistTitleSvg,
    ContentPlaylist,
} from '../css/centerBlockStyle';
import { ThemeContext } from '../../../ThemeContext';
import {  selections } from '../../../Store/API/api';

const Centerblock = () => {
    const [showPlaylistitem, setPlaylistitem] = useState(false);
    const [resultTracks, setResultTracks] = useState([])

    const { theme } = useContext(ThemeContext);

    const resultTracksSet = resultTracks.items

    const getTracks = async () => {
        const resultTracks = await  selections(3);
        setResultTracks(resultTracks)
        console.log(resultTracks.items)
    }

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds - minutes * 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    useEffect(() => {
        setTimeout(() => {
            setPlaylistitem(true);
            getTracks()
        }, 5000);
    }, []);

    return (
        <MainCenterblock>
            <CenterblockSearch theme={theme === 'dark' ? '#4E4E4E' : '#D9D9D9'}>
                <SearchSvg>
                    <img src={theme === 'dark' ? Search : SearchWhite} alt="" />
                </SearchSvg>
                <SearchText
                    theme={theme === 'dark' ? '#ffffff' : '#000000'}
                    type="search"
                    placeholder="Поиск"
                    name="search"
                />
            </CenterblockSearch>
            <CenterblockTracksTitle theme={theme === 'dark' ? '#FFFFFF' : '#000000'}>Инди заряд</CenterblockTracksTitle>
            <CenterblockContent>
                <ContentTitle>
                    <Col01 theme={theme === 'dark' ? '#FFFFFF' : '#B1B1B1'}>Трек</Col01>
                    <Col02 theme={theme === 'dark' ? '#FFFFFF' : '#B1B1B1'}>ИСПОЛНИТЕЛЬ</Col02>
                    <Col03 theme={theme === 'dark' ? '#FFFFFF' : '#B1B1B1'}>АЛЬБОМ</Col03>
                    <Col04>
                        <PlaylistTitleSvg alt="time">
                            <img src={theme === 'dark' ? WatchWhite : Watch} alt="" />
                        </PlaylistTitleSvg>
                    </Col04>
                </ContentTitle>
                <ContentPlaylist>
                    {showPlaylistitem ? (
                        <>
                            {resultTracksSet && resultTracksSet.map((track) => (
                                <Playlistitem
                                    id={track.id}
                                    track={track.name}
                                    author={track.author}
                                    album={track.album}
                                    time={formatTime(track.duration_in_seconds)}
                                    span={track.span}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            {[...Array(9)].map((_, index) => (
                                <Playlistitem key={index} skeleton='true' />
                            ))}
                        </>
                    )}

                </ContentPlaylist>
            </CenterblockContent>
        </MainCenterblock>
    );
};

export default Centerblock;