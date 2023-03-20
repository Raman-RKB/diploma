/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect, useRef } from 'react';
import Prev from '../img/icon/prev.svg';
import Play from '../img/icon/play.svg';
import Pause from '../img/icon/pause.svg';
import Next from '../img/icon/next.svg';
import Repeat from '../img/icon/repeat.svg';
import Shuffle from '../img/icon/shuffle.svg';
import Note from '../img/icon/note.svg';
import Like from '../img/icon/like.svg';
import Dislike from '../img/icon/dislike.svg';
import Volume from '../img/icon/volume.svg';

import VolumeWhite from '../img/iconWhite/volume.svg';
import DislikeWhite from '../img/iconWhite/dislike.svg';
import LikeWhite from '../img/iconWhite/like.svg';
import NoteWhite from '../img/iconWhite/note.svg';
import ShuffleWhite from '../img/iconWhite/shuffle.svg';
import RepeatWhite from '../img/iconWhite/repeat.svg';
import NextWhite from '../img/iconWhite/next.svg';
import PauseWhite from '../img/iconWhite/pause.svg';
import PlayWhite from '../img/iconWhite/play.svg';
import PrevWhite from '../img/iconWhite/prev.svg';

import {
    Bar,
    BarContent,
    BarPlayerProgress,
    Progress,
    BarPlayerBlock,
    BarPlayer,
    PlayerControls,
    PlayerBtnPrev,
    PlayerBtnPlay,
    PlayerBtnPlaySvg,
    PlayerBtnNext,
    PlayerBtnNextSvg,
    PlayerBtnRepeat,
    PlayerBtnPrevSvg,
    PlayerBtnRepeatSvg,
    PlayerBtnShuffle,
    PlayerBtnShuffleImg,
    PlayerTrackPlay,
    TrackPlayContainSkeleton,
    TrackPlayContainSkeletonSquare,
    TrackPlayContainSkeletonLines,
    TrackPlayContainSkeletonLinesUpperLine,
    TrackPlayContainSkeletonLinesBottomLine,
    TrackPlayContain,
    TrackPlayImage,
    TrackPlayImg,
    TrackPlayAuthor,
    TrackPlayAuthorLink,
    TrackPlayAlbum,
    TrackPlayAlbumLink,
    TrackPlayLikeDis,
    TrackPlayLike,
    TrackPlayLikeImg,
    TrackPlayDislike,
    TrackPlayDislikeImg,
    BarVolumeBlock,
    VolumeContent,
    VolumeImage,
    VolumeIcon,
    VolumeProgress,
    VolumeProgressLine
} from '../css/playerStyle';
import { ThemeContext } from '../../../ThemeContext';
import { useSelector } from "react-redux";

function Player() {
    const playTrackLinkStore = useSelector((state) => state.play.play?.track_file)
    const [showTrackPlayContain, setshowTrackPlayContain] = useState(false);
    const [showPauseButton, setShowPauseButton] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setcurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playTrackLink, setPlayTrackLink] = useState('');


    const { theme } = useContext(ThemeContext);

    const audioRef = useRef(null);
    const playButtonRef = useRef(null);
    const trackObject = useSelector((state) => state.play.play);
    const playTrackId = useSelector((state) => state.play.play?.id);
    const trackList = useSelector((state) => state.tracks?.tracklist);


    function handlePlay(reset) {

        if (reset) {
            audioRef.current.play();
            setShowPauseButton(true);
            setIsPlaying(true);
        } else {
            audioRef.current.currentTime = currentTime;
            audioRef.current.play();
            setShowPauseButton(true);
            setIsPlaying(true);
        }
    }

    function handleStop() {
        audioRef.current.pause();
        setcurrentTime(audioRef.current.currentTime);
        setShowPauseButton(false);
        setIsPlaying(false);
    }

    function handleTimeUpdate() {
        const duration = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;
        const progress = (currentTime / duration) * 100;
        setProgress(progress);
    }

    function handleEnded() {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }

    function handlePrev() {
        console.log(playTrackLinkStore)
        console.log(playTrackLink)

        //--------------------------------------------------
        // for (let i = 0; i < trackList.length; i++) {
        //     if (trackList[i].id === playTrackId) {
        //         setPlayTrackLink(trackList[i-1].track_file)
        //     }
        // }
        // return -1;
    }

    useEffect(() => {
        setTimeout(() => {
            setshowTrackPlayContain(true);
        }, 500);
    }, []);

    useEffect(() => {

        setPlayTrackLink(playTrackLinkStore)

        handlePlay('reset');
    }, [playTrackLinkStore]);

    return (
        <Bar display={currentTime === 0 && !showPauseButton ? 'none' : ''} theme={theme === 'white' ? '#ffffff' : '#000000'}>
            <audio ref={audioRef}
                src={playTrackLink}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
                // eslint-disable-next-line react/no-unknown-property
                currentTime={currentTime}
            ></audio>

            <BarContent>
                <BarPlayerProgress theme={theme === 'white' ? '#D9D9D9' : '#2E2E2E'}>
                    <Progress progress={progress} bgColor='#580EA2' />
                </BarPlayerProgress>
                <BarPlayerBlock>
                    <BarPlayer>
                        <PlayerControls>
                            <PlayerBtnPrev >
                                <PlayerBtnPrevSvg alt="prev" onClick={handlePrev}>
                                    <img src={theme === 'white' ? PrevWhite : Prev} />
                                </PlayerBtnPrevSvg>
                            </PlayerBtnPrev>
                            <PlayerBtnPlay ref={playButtonRef} onClick={!showPauseButton ? handlePlay : handleStop}>
                                <PlayerBtnPlaySvg alt="play">
                                    <img src={!showPauseButton ?
                                        (theme === 'white' ? PlayWhite : Play) :
                                        (theme === 'white' ? PauseWhite : Pause)}>
                                    </img>
                                </PlayerBtnPlaySvg>
                            </PlayerBtnPlay>
                            <PlayerBtnNext>
                                <PlayerBtnNextSvg alt="next">
                                    <img src={theme === 'white' ? NextWhite : Next}></img>
                                </PlayerBtnNextSvg>
                            </PlayerBtnNext>
                            <PlayerBtnRepeat>
                                <PlayerBtnRepeatSvg alt="repeat">
                                    <img src={theme === 'white' ? RepeatWhite : Repeat}></img>
                                </PlayerBtnRepeatSvg>
                            </PlayerBtnRepeat>
                            <PlayerBtnShuffle>
                                <PlayerBtnShuffleImg alt="shuffle">
                                    <img src={theme === 'white' ? ShuffleWhite : Shuffle}></img>
                                </PlayerBtnShuffleImg>
                            </PlayerBtnShuffle>
                        </PlayerControls>

                        <PlayerTrackPlay>
                            {!showTrackPlayContain ? (
                                <TrackPlayContainSkeleton>
                                    <TrackPlayContainSkeletonSquare></TrackPlayContainSkeletonSquare>
                                    <TrackPlayContainSkeletonLines>
                                        <TrackPlayContainSkeletonLinesUpperLine></TrackPlayContainSkeletonLinesUpperLine>
                                        <TrackPlayContainSkeletonLinesBottomLine></TrackPlayContainSkeletonLinesBottomLine>
                                    </TrackPlayContainSkeletonLines>
                                </TrackPlayContainSkeleton>
                            ) : (
                                <TrackPlayContain>
                                    <TrackPlayImage theme={theme === 'white' ? '#F6F4F4' : '#313131'}>
                                        <TrackPlayImg alt="music">
                                            <img src={theme === 'white' ? NoteWhite : Note}></img>
                                        </TrackPlayImg>
                                    </TrackPlayImage>
                                    <TrackPlayAuthor>
                                        <TrackPlayAuthorLink
                                            theme={theme === 'white' ? '#000000' : '#ffffff'}
                                            href="http://">{trackObject ? trackObject.author : ''}
                                        </TrackPlayAuthorLink>
                                    </TrackPlayAuthor>
                                    <TrackPlayAlbum>
                                        <TrackPlayAlbumLink
                                            theme={theme === 'white' ? '#000000' : '#ffffff'}
                                            href="http://">{trackObject ? trackObject.album : ''}
                                        </TrackPlayAlbumLink>
                                    </TrackPlayAlbum>
                                </TrackPlayContain>
                            )
                            }
                            <TrackPlayLikeDis>
                                <TrackPlayLike>
                                    <TrackPlayLikeImg alt="like">
                                        <img src={theme === 'white' ? LikeWhite : Like}></img>
                                    </TrackPlayLikeImg>
                                </TrackPlayLike>
                                <TrackPlayDislike>
                                    <TrackPlayDislikeImg alt="dislike">
                                        <img src={theme === 'white' ? DislikeWhite : Dislike}></img>
                                    </TrackPlayDislikeImg>
                                </TrackPlayDislike >
                            </TrackPlayLikeDis >
                        </PlayerTrackPlay >
                    </BarPlayer >
                    <BarVolumeBlock>
                        <VolumeContent>
                            <VolumeImage>
                                <VolumeIcon alt="volume">
                                    <img src={theme === 'white' ? VolumeWhite : Volume}></img>
                                </VolumeIcon>
                            </VolumeImage>
                            <VolumeProgress>
                                <VolumeProgressLine type="range" name="range" />
                            </VolumeProgress>

                        </VolumeContent>
                    </BarVolumeBlock >
                </BarPlayerBlock >
            </BarContent >
        </Bar >
    );
}

export default Player;
