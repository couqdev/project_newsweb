import '../../../assets/css/variables.css';
import '../../../assets/css/main.css';
import '../../../assets/css/style.css';
import '../../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../../assets/vendor/swiper/swiper-bundle.min.css';
import '../../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../../assets/vendor/bootstrap/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../Header";
import Left from "../../Items/Left";
import Center from "../../Items/Center";
import Bottom from "../../Items/Bottom";
import Footer from "../../Footer";
import {Link, Outlet} from "react-router-dom";
import Form from "../../search/Form";

const Fashion = () => {
    const [newsList, setNewList] = useState([]);

    function getlink(url) {
        const startIndex = url.indexOf("vietnamnet.vn/") + "vietnamnet.vn/".length;
        const subUrl = url.substring(startIndex);
        return subUrl;
    }

    function setTitle(title) {
        return title.replace(/&amp;amp;/g, "&").replace(/&amp;apos;/g, "'");
    }

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get('https://vietnamnet.vn/rss/giai-tri/thoi-trang.rss');
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            let items = xml.querySelectorAll('item');
            let results = [];

            items.forEach((item) => {
                let result = {
                    title: setTitle(item.querySelector('title').textContent),
                    description: setTitle(item.querySelector('description').textContent.split("</br>")[1].trim()),
                    link: getlink(item.querySelector('link').textContent),
                    image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                    pubDate: item.querySelector('pubDate').textContent,

                }
                results.push(result);
            });
            setNewList(results);
        };
        fetchNews();
    }, []);

    function getIndex(index) {
        return {...newsList[index]};
    }

    return (
        <div className="Entertainment">
            <Header/>
            <main id="main">
                <section className="category-section">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header d-flex justify-content-between align-items-center mb-5">
                            <div>
                                <h2>Giải trí<span style={{fontSize: "28px"}}> / Thời trang</span></h2>
                                <nav id="navbar" className="navbar">
                                    <ul>
                                        <li><Link style={{textDecoration: "none"}} to="/entertainment/star-world">Sao
                                            thế
                                            giới</Link></li>
                                        <li><Link style={{textDecoration: "none"}} to="/entertainment/miss">Hoa
                                            hậu</Link>
                                        </li>
                                        <li><Link style={{textDecoration: "none"}} to="/entertainment/fashion">Thời
                                            trang</Link></li>
                                        <li><Link style={{textDecoration: "none"}} to="/entertainment/music">Âm
                                            nhạc</Link>
                                        </li>
                                        <li><Link style={{textDecoration: "none"}} to="/entertainment/movie">Phim</Link>
                                        </li>
                                        <li><Link style={{textDecoration: "none"}} to="/entertainment/tv">Truyền
                                            hình</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="container" data-aos="fade-up">
                        <div className="row g-5">
                            {<Left key={0} news={getIndex(0)}/>}
                            <div className="col-lg-8">
                                <div className="row g-5">
                                    <div className="col-lg-4 border-start custom-border">
                                        {<Center key={1} news={getIndex(1)}/>}
                                        {<Center key={2} news={getIndex(2)}/>}
                                    </div>
                                    <div className="col-lg-4 border-start custom-border">
                                        {<Center key={3} news={getIndex(3)}/>}
                                        {<Center key={4} news={getIndex(4)}/>}
                                    </div>
                                    <div className="col-lg-4 border-start custom-border">
                                        {<Center key={5} news={getIndex(5)}/>}
                                        {<Center key={6} news={getIndex(6)}/>}
                                    </div>
                                </div>
                            </div>
                            {newsList.map((news, index) => (
                                index > 6 ? <Bottom key={index} news={news}/> : ""
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

export default Fashion;