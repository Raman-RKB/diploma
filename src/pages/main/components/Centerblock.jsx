/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars

import React, { useContext, useState, useEffect } from 'react';
import Playlistitem from "./Playlistitem";
import Filterbutton from './Filterbutton';
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
    CenterblockFilter,
    CenterblockContent,
    ContentTitle,
    Col01,
    Col02,
    Col03,
    Col04,
    PlaylistTitleSvg,
    ContentPlaylist,
    FilterTitle
} from '../css/centerBlockStyle';
import { ThemeContext } from '../../../ThemeContext';
import { tracks } from '../../../Store/API/api';
import { useDispatch } from "react-redux";

export const setTrackList = (arr) => {
    return {
        type: "SET_TRACKLIST",
        payload: arr
    };
};

const Centerblock = () => {
    const [showPlaylistitem, setPlaylistitem] = useState(false);
    const [resultTracks, setResultTracks] = useState()

    const { theme } = useContext(ThemeContext);
    const dispatch = useDispatch();

    const getTracks = async () => {
        const resultTracks = await tracks();
        setResultTracks(resultTracks)
        dispatch(setTrackList(resultTracks));
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
        }, 500);
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
            <CenterblockTracksTitle theme={theme === 'dark' ? '#FFFFFF' : '#000000'}>Треки</CenterblockTracksTitle>
            <CenterblockFilter>
                <FilterTitle theme={theme === 'dark' ? '#FFFFFF' : '#000000'}>Искать по:</FilterTitle>
                <Filterbutton class="button-author" text="исполнителю" popupId="ID кнопки исполнителя" />
                <Filterbutton class="button-year" text="году выпуска" popupId="ID кнопки года выпуска" />
                <Filterbutton class="button-genre" text="жанру" popupId="ID кнопки жанра" />
            </CenterblockFilter>
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
                            {resultTracks && resultTracks.map((track) => (
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