import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../Header";
import {Link, Outlet} from "react-router-dom";
import Footer from "../../Footer";
import Bottom from "./items/Bottom";
import Left from "./items/Left";
import Center from "./items/Center";
import Form from "../../search/Form";

const PodcastGoodBook = () => {
    const [podcasts, setPodcasts] = useState([]);

    function getlink(url) {
        const startIndex = url.indexOf("vietnamnet.vn/") + "vietnamnet.vn/".length;
        const subUrl = url.substring(startIndex);
        return subUrl;
    }

    function setTitle(title) {
        return title.replace(/&amp;amp;/g, "&").replace(/&amp;apos;/g, "'");
    }

    useEffect(() => {
        const fetchPodcasts = async () => {
            try {
                const response = await axios.get('https://vietnamnet.vn/podcast/sach-hay.rss');
                const rss = response.data;
                const parser = new DOMParser();
                const xml = parser.parseFromString(rss, 'text/xml');
                const items = xml.querySelectorAll('item');
                const results = [];

                for (const item of items) {
                    try {
                        const itemLink = item.querySelector('link').textContent;
                        const itemResponse = await axios.get(itemLink);
                        const itemHtml = itemResponse.data;
                        const itemParser = new DOMParser();
                        const itemXml = itemParser.parseFromString(itemHtml, 'text/html');
                        const audio = itemXml.querySelector('audio source').getAttribute('src');

                        let result = {
                            title: setTitle(item.querySelector('title').textContent),
                            description: setTitle(item.querySelector('description').textContent.split('</br>')[1].trim()),
                            link: getlink(itemLink),
                            image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                            pubDate: item.querySelector('pubDate').textContent,
                            audio: audio,
                        };
                        results.push(result);
                        setPodcasts(results);
                    } catch (error) {
                        console.error(error);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchPodcasts();
    }, []);

    function getIndex(index) {
        return {...podcasts[index]};
    }

    return (
        <div className="Podcast">
            <Header/>
            <main id="main">
                <section className="category-section">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header d-flex justify-content-between align-items-center mb-5">
                            <div>
                                <h2><Link
                                    style={{textDecoration: "none", color: "#000"}} to="/podcast">Podcast</Link></h2>
                                <nav id="navbar" className="navbar">
                                    <ul>
                                        <li><Link style={{textDecoration: "none"}} to="/podcast/current-event">Bản tin thời
                                            sự</Link></li>
                                        {/*<li><Link style={{textDecoration: "none"}} to="/podcast/sight">Góc nhìn</Link>*/}
                                        {/*</li>*/}
                                        {/*<li><Link style={{textDecoration: "none"}} to="/podcast/strange">Độc lạ</Link></li>*/}
                                        <li><Link style={{textDecoration: "none"}} to="/podcast/live-young">Sống trẻ</Link>
                                        </li>
                                        <li><Link style={{textDecoration: "none"}} to="/podcast/good-book">Sách hay</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="container" data-aos="fade-up">
                        <div className="row g-5">
                            {<Left key={0} podcast={getIndex(0)}/>}
                            <div className="col-lg-8">
                                <div className="row g-5">
                                    <div className="col-lg-4 border-start custom-border">
                                        {<Center key={1} podcast={getIndex(1)}/>}
                                        {<Center key={2} podcast={getIndex(2)}/>}
                                    </div>
                                    <div className="col-lg-4 border-start custom-border">
                                        {<Center key={3} podcast={getIndex(3)}/>}
                                        {<Center key={4} podcast={getIndex(4)}/>}
                                    </div>
                                    <div className="col-lg-4 border-start custom-border">
                                        {<Center key={5} podcast={getIndex(5)}/>}
                                        {<Center key={6} podcast={getIndex(6)}/>}
                                    </div>
                                </div>
                            </div>
                            {podcasts.map((podcast, index) => (
                                index > 6 ? <Bottom key={index} podcast={podcast}/> : ""
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
            <Outlet/>
        </div>
    );
};

export default PodcastGoodBook;