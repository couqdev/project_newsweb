import Header from "../Header";
import {Link, useParams} from "react-router-dom";
import ViewedNew from "./items/ViewedNew";
import Footer from "../Footer";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import Relate from "./items/Relate";import * as cheerio from "cheerio";
import Form from "../search/Form";

const PodcastDetail = () => {
    const [title, setTitle] = useState();
    const [summary, setSummary] = useState();
    const [audio, setAudio] = useState();
    const {link} = useParams();
    const PLAYBACK_RATES = [0.5, 0.75, 1, 1.25, 1.5, 2];
    const [displayPlaybackRates, setDisplayPlaybackRates] = useState(false);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [viewedNews, setViewedNews] = useState(JSON.parse(localStorage.getItem("viewedNews")))
    const [relatedPodcasts, setRelatedPodcasts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(`https://vietnamnet.vn/${link}`);
                const cheerio = require("cheerio");
                const $ = cheerio.load(data);

                setTitle($("h1").text());
                setSummary($("h2").text());
                setAudio($('audio source').attr('src'));

                // Lay thong tin lien quan podcast
                let result = [];
                $('.related-podcast-horizontal').each((i, el) => {
                    const title = $(el).find('.horizontalPost__main-title a').text();
                    const link = $(el).find('.horizontalPost__main-title a').attr('href');
                    const image = $(el).find('img').attr('src');
                    let related = {
                        title: title,
                        link: link,
                        image: image,
                    }
                    result.push(related);
                });
                setRelatedPodcasts(result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);


    const handleVolumeChange = (event) => {
        const volume = parseFloat(event.target.value);
        if (isMuted) {
            setIsMuted(false);
            handleMuteClick();
        }
        if (volume === 0) {
            setIsMuted(true);
            handleMuteClick();
        }
        setVolume(volume);
        audioRef.current.volume = volume;
    };

    const handleSetPlaybackRate = (newRate) => {
        setPlaybackRate(newRate);
        audioRef.current.playbackRate = newRate;
        setDisplayPlaybackRates(false);
    };

    const handlePlayPauseClick = () => {
        if (audioRef?.current) {
            setIsPlaying(!isPlaying);
            !isPlaying ? audioRef.current.play() : audioRef.current.pause();
        }
    };

    const handleAudioForward = () => {
        if (audioRef?.current) {
            audioRef.current.currentTime += 10;
        }
    };

    const handleAudioRewind = () => {
        if (audioRef?.current) {
            audioRef.current.currentTime -= 10;
        }
    };

    const handleMuteClick = () => {
        if (audioRef?.current) {
            setIsMuted(!isMuted);
            audioRef.current.muted = !isMuted;
            setVolume(!isMuted ? 0 : 1);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            const handleLoadedMetadata = () => {
                setDuration(audioRef.current.duration);
            };

            const handleTimeupdate = () => {
                if (audioRef.current) {
                    setCurrentTime(audioRef.current.currentTime);
                }
            };
            audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
            audioRef.current.addEventListener("timeupdate", handleTimeupdate);
            return () => {
                audioRef.current?.removeEventListener("loadedmetadata", handleLoadedMetadata);
                audioRef.current?.removeEventListener("timeupdate", handleTimeupdate);
            };
        }
    }, [audioRef, duration]);

    const handleAudioSeek = (event) => {
        if (audioRef?.current) {
            const newTime = parseFloat(event.target.value);
            setCurrentTime(newTime);
            audioRef.current.currentTime = newTime;
        }
    };

    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds - minutes * 60);

        const formattedMinutes = minutes.toString().padStart(2, "0");
        const formattedSeconds = seconds.toString().padStart(2, "0");

        return formattedMinutes + ":" + formattedSeconds;
    }

    return (
        <div>
            <Header/>
            <main id="main">
                <section className="single-post-content">
                    <div className="container">
                        <div style={{maxWidth: "100%", margin: "auto", marginBottom: "50px"}}>
                            <img style={{maxWidth: "70%", marginLeft: "15%", marginRight: "15%"}}
                                 src={"https://static.vnncdn.net/images/vnn-viet-nam-hung-cuong.svg"}/>
                        </div>
                        <div className="row">
                            <div className="col-md-9 post-content" data-aos="fade-up">
                                <div className="single-post podcast-bg">
                                    <h1 className="mb-5 pt-4" style={{textAlign: "center"}}>{title}</h1>
                                    <p className="text-lg-center" style={{
                                        fontWeight: "bold",
                                        marginBottom: "150px",
                                        padding: "0 24px"
                                    }}>{summary}</p>
                                    <div className="podcast-player p-4">
                                        {/*<audio controls>*/}
                                        {/*    <source src={audio}/>*/}
                                        {/*</audio>*/}
                                        <audio src={audio} ref={audioRef}/>
                                        <div className="d-flex">
                                            <div className="wl-7 m-auto">
                                                <div>{formatTime(currentTime)}
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max={duration.toFixed(2)}
                                                        step="0.01"
                                                        value={currentTime.toFixed(2)}
                                                        onChange={handleAudioSeek}
                                                        style={{width: "80%", margin: "0 8px"}}
                                                    />
                                                    {formatTime(duration)}</div>
                                            </div>
                                            <div className="d-flex">
                                                <div role={"button"} onClick={handleMuteClick}>
                                                    {isMuted ? <img src="/mute.png" alt="Mute" width={"20px"}
                                                                    height={"20px"}/> :
                                                        <img src="/volume.png" alt="Unmute" width={"20px"}
                                                             height={"20px"}/>}
                                                </div>
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="1"
                                                    step="0.01"
                                                    value={volume}
                                                    onChange={handleVolumeChange}
                                                    style={{margin: "0 8px"}}
                                                />
                                                <div role={"button"} className="podcast-speed"
                                                     onClick={() => setDisplayPlaybackRates(!displayPlaybackRates)}>
                                                    {playbackRate.toFixed(2)}x
                                                </div>
                                                {displayPlaybackRates && (
                                                    <div>
                                                        <ul className="podcast-speed-list">
                                                            {PLAYBACK_RATES.map((rate) => (
                                                                <li key={rate} role={"button"}
                                                                    onClick={() => handleSetPlaybackRate(rate)}>
                                                                    {rate.toFixed(2)}x
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="d-flex m-auto justify-content-center mt-2">
                                            <div role={"button"} onClick={handleAudioRewind}>
                                                <img src="/ten-decrease.png" alt="-10s" width={"20px"} height={"20px"}/>
                                            </div>
                                            <div role={"button"} onClick={handlePlayPauseClick}
                                                 style={{margin: "0 20px"}}>
                                                {isPlaying ? <img src={'/pause.png'} alt="-10s" width={"30px"}
                                                                  height={"30px"}/> :
                                                    <img src={'/play-button.png'} alt="-10s" width={"30px"}
                                                         height={"30px"}/>}
                                            </div>
                                            <div role={"button"} onClick={handleAudioForward}>
                                                <img src="/ten-increase.png" alt="+10s" width={"20px"} height={"20px"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-12">
                                        <h5 className="comment-title">Bình luận</h5>
                                        <div className="row">
                                            <div className="col-lg-6 m-3">
                                                <label htmlFor="comment-name">Tên</label>
                                                <input type="text" className="form-control" id="comment-name"
                                                       placeholder="Nhập tên"></input>
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label htmlFor="comment-email">Email</label>
                                                <input type="text" className="form-control" id="comment-email"
                                                       placeholder="Nhập Email"></input>
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="comment-message">Nội dung</label>

                                                <textarea className="form-control" id="comment-message"
                                                          placeholder="Nhập nội dung" cols="30" rows="10"></textarea>
                                            </div>
                                            <div className="col-12">
                                                <input type="submit" className="btn btn-primary"
                                                       value="Bình luận"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3" style={{marginTop: "140px"}}>
                                <div className="aside-block">
                                    <ul className="nav nav-pills custom-tab-nav mb-4" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-popular-tab"
                                                    data-bs-toggle="pill" data-bs-target="#pills-popular" type="button"
                                                    role="tab" aria-controls="pills-popular"
                                                    aria-selected="true">Liên quan
                                            </button>
                                        </li>
                                    </ul>

                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade active show" id="pills-popular" role="tabpanel"
                                             aria-labelledby="pills-popular-tab">
                                            {relatedPodcasts.map((podcast, index) => (
                                                index < 6 ?
                                                    <div className="post-entry-1 border-bottom" key={index}>
                                                        <div className="post-meta"></div>
                                                        <h2 className="mb-2">
                                                            <a style={{textDecoration: "none"}}
                                                               href={"/podcast" + podcast.link}>
                                                                <img src="/headphone.png" alt="podcast" width={"20px"}
                                                                     height={"20px"}
                                                                     style={{margin: "auto"}}/>{podcast.title}</a>
                                                        </h2>
                                                    </div> : ""
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="aside-block">
                                    <h3 className="aside-title">Danh mục</h3>
                                    <ul className="aside-links list-unstyled">
                                        <li><Link style={{textDecoration: "none"}} to="/">Trang chủ</Link></li>
                                        <li><Link style={{textDecoration: "none"}} to="/life">Đời sống</Link></li>
                                        <li><Link style={{textDecoration: "none"}} to="/education">Giáo dục</Link></li>
                                        <li><Link style={{textDecoration: "none"}} to="/current-events">Thời sự</Link>
                                        </li>
                                        <li><Link style={{textDecoration: "none"}} to="/travel">Du lịch</Link></li>
                                        <li><Link style={{textDecoration: "none"}} to="/real-estate">Bất động sản</Link>
                                        </li>
                                        <li><Link style={{textDecoration: "none"}} to="/business">Kinh doanh</Link></li>
                                        <li><Link style={{textDecoration: "none"}} to="/sport">Thể thao</Link></li>
                                        <li><Link style={{textDecoration: "none"}} to="/entertainment">Giải trí</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="aside-block">
                                    <h3 className="aside-title"><Link style={{textDecoration: "none", color: "#000"}}
                                                                      to="/viewed-news">Tin tức đã xem</Link></h3>
                                    <ul className="aside-links list-unstyled">
                                        {viewedNews.map((news, index) => (
                                            index < 6 ? <ViewedNew key={index} news={news}/> : ""
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
};

export default PodcastDetail;