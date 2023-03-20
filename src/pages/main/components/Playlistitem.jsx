/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import Note from '../img/icon/note.svg';
import NoteWhite from '../img/iconWhite/note.svg';
import IconLike from '../img/icon/like.svg';
import IconLikeWhite from '../img/iconWhite/like.svg';
import IconLikeLiked from '../img/icon/IconLikeLiked.svg';
import IconLikeWhiteLiked from '../img/iconWhite/IconLikeWhiteLiked.svg';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
    PlaylistItem,
    PlaylistTrack,
    TrackTitle,
    TrackTitleImage,
    TrackTitleSvg,
    TrackTitleLink,
    TrackTitleSpan,
    TrackAuthor,
    TrackAuthorLink,
    TrackAlbum,
    TrackAlbumLink,
    TrackTimeImg,
    TrackTime,
    TrackTimeImgLike,
    TrackTimeText,
    TrackTitleTextSkeleton,
    TrackTitleTextSkeletonSquare,
    TrackTitleTextSkeletonTrack,
    TrackTitleTextSkeletonAuthor,
    TrackTitleTextSkeletonAlbum

} from '../../main/css/centerBlockStyle';
import { ThemeContext } from '../../../ThemeContext';
// import { chosenTracks } from '../../../Store/API/api';
import { trackById } from '../../../Store/API/api';

export const saveId = (id) => {
    return {
        type: "SAVE_ID",
        payload: id
    };
};

export const removeId = (id) => {
    return {
        type: "REMOVE_ID",
        payload: id
    };
};

export const play = (id) => {
    return {
        type: "PLAY_TRACK",
        payload: id
    };
};

const getSavedIds = () => {
    const ids = localStorage.getItem("ids");
    return ids ? JSON.parse(ids) : [];
};

const Playlistitem = ({ skeleton, track, author, album, time, span, id }) => {
    const { theme } = useContext(ThemeContext);
    const [like, setLike] = useState(getSavedIds().includes(id));
    const dispatch = useDispatch();

    const saveIds = (ids) => {
        localStorage.setItem("ids", JSON.stringify(ids));
    };

    const handleLikeClick = async (id) => {
        if (!like) {
            setLike(true);
            dispatch(saveId(id));
            const ids = [...getSavedIds(), id]; 
            saveIds(ids); 
        } else {
            setLike(false);
            dispatch(removeId(id));
            const ids = getSavedIds().filter((savedId) => savedId !== id); 
            saveIds(ids); 
        }
    };

    const handlePlayClick = async (id) => {
        const resultTracksForPlay = await trackById(id);
        dispatch(play(resultTracksForPlay));
    };

    return (!skeleton ?
        <PlaylistItem>
            <PlaylistTrack>
                <TrackTitle>
                    <TrackTitleImage theme={theme === 'dark' ? '#4E4E4E' : '#F6F4F4'}>
                        <TrackTitleSvg alt="music">
                            <img src={theme === 'dark' ? NoteWhite : Note}></img>
                        </TrackTitleSvg>
                    </TrackTitleImage>
                    <div>
                        <TrackTitleLink
                            onClick={() => handlePlayClick(id)}
                            theme={theme === 'dark' ? '#ffffff' : '#000000'}
                            href="http://">
                            {track}
                            <TrackTitleSpan theme={theme === 'dark' ? '#4E4E4E' : '#B1B1B1'}> {span}</TrackTitleSpan>
                        </TrackTitleLink>
                    </div>
                </TrackTitle>
                <TrackAuthor>
                    <TrackAuthorLink
                        onClick={() => handlePlayClick(id)}
                        theme={theme === 'dark' ? '#ffffff' : '#000000'}
                        href="http://">{author}
                    </TrackAuthorLink>
                </TrackAuthor>
                <TrackAlbum>
                    <TrackAlbumLink
                        onClick={() => handlePlayClick(id)}
                        theme={theme === 'dark' ? '#4E4E4E' : '#B1B1B1'}
                        href="http://">{album}
                    </TrackAlbumLink>
                </TrackAlbum>
                <TrackTime>
                    <TrackTimeImg alt="time">
                        <TrackTimeImgLike
                            onClick={() => handleLikeClick(id)}
                            src={theme === 'dark' ? (like ? IconLikeLiked : IconLike) : (like ? IconLikeWhiteLiked : IconLikeWhite)}>
                        </TrackTimeImgLike>
                    </TrackTimeImg>
                    <TrackTimeText theme={theme === 'dark' ? '#4E4E4E' : '#B1B1B1'}>{time}</TrackTimeText>
                </TrackTime>
            </PlaylistTrack>
        </PlaylistItem>
        :
        <TrackTitleTextSkeleton>
            <TrackTitleTextSkeletonSquare></TrackTitleTextSkeletonSquare>
            <TrackTitleTextSkeletonTrack></TrackTitleTextSkeletonTrack>
            <TrackTitleTextSkeletonAuthor></TrackTitleTextSkeletonAuthor>
            <TrackTitleTextSkeletonAlbum></TrackTitleTextSkeletonAlbum>
        </TrackTitleTextSkeleton>

    );
};

export default Playlistitem;