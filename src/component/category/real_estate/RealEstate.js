import '../../../assets/css/variables.css';
import '../../../assets/css/main.css';
import '../../../assets/css/style.css';
import '../../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../../assets/vendor/swiper/swiper-bundle.min.css';
import '../../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../../assets/vendor/bootstrap/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Center from "../../Items/Center";
import Bottom from "../../Items/Bottom";
import Header from "../../Header";
import Footer from "../../Footer";
import Small_Center from "../home/Small_Center";
import Form from "../../search/Form";
import {Link} from "react-router-dom";

const RealEstate = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/bat-dong-san.rss'
            );
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            let items = xml.querySelectorAll('item');
            let results = [];

            items.forEach((item) => {
                let result = {
                    title: setTitle(item.querySelector('title').textContent),
                    description: item.querySelector('description').textContent.split("</br>")[1].trim(),
                    link: getlink(item.querySelector('link').textContent),
                    image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                    pubDate: item.querySelector('pubDate').textContent,
                };
                results.push(result);
            });
            setNewsList(results);
        };
        fetchNews();
    }, []);
    function getIndex(index){
        return {...newsList[index]};
    }
    function getlink(url){
        const startIndex = url.indexOf("vietnamnet.vn/") + "vietnamnet.vn/".length;
        const subUrl = url.substring(startIndex);
        return subUrl;
    }
    function setTitle(title){
        return title.replace(/&amp;amp;/g,"&").replace(/&amp;apos;/g,"");
    }

    return (
        <div className="RealEstate">
            <Header/>
            <main id="main">
                <section className="category-section">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header d-flex justify-content-between align-items-center mb-5">
                            <div><h2>Bất động sản</h2>
                                <nav id="navbar" className="navbar">
                                    <Link style={{textDecoration: "none"}} to="/project">Dự án</Link>
                                    <Link style={{textDecoration: "none"}} to="/interior">Nội thất</Link>
                                    <Link style={{textDecoration: "none"}} to="/advise">Tư vấn</Link>
                                    <Link style={{textDecoration: "none"}} to="/stock-market">Thị trường</Link>
                                    <Link style={{textDecoration: "none"}} to="/beautiful-house">Nhà đẹp</Link>
                                    <Link style={{textDecoration: "none"}} to="/chance-to-settle-down">Cơ hội an cư</Link>
                                </nav></div>
                        </div>
                    </div>
                    <div className="container" data-aos="fade-up">
                        <div className="row g-12">
                            <div className="col-lg-12">
                                <div className="row g-5">
                                    <div className="col-lg-6 border-start custom-border">
                                        {<Center key={0} news={getIndex(0)}/>}
                                        <div className="col-lg-3 " style={{float: "left", marginLeft: 40}}>
                                            {<Center key={1} news={getIndex(1)}/>}
                                        </div>
                                        <div className="col-lg-3 " style={{float: "left" , marginLeft: 40, marginRight: 40}}>
                                            {<Center key={2} news={getIndex(2)}/>}
                                        </div>
                                        <div className="col-lg-3 " style={{float: "left"}}>
                                            {<Center key={3} news={getIndex(3)}/>}
                                        </div>
                                    </div>
                                    <div className="col-lg-3 border-start custom-border">
                                        {<Center key={4} news={getIndex(4)}/>}
                                        {<Center key={5} news={getIndex(5)}/>}
                                    </div>
                                    <div className="col-lg-3 border-start custom-border">
                                        {<Center key={6} news={getIndex(6)}/>}
                                        {<Center key={7} news={getIndex(7)}/>}
                                    </div>
                                </div>
                            </div>
                            {newsList.map((news, index) => (
                                index > 7 && index < 15 ? <Bottom key={index} news={news}/> : ""
                            ))}

                            <div className="container" data-aos="fade-up" style={{ marginTop: 50}}>
                                <div className="row g-5">
                                    <div className="col-lg-3 " style={{float: "left"}}>
                                        {<Small_Center key={15} news={getIndex(15)}/>}
                                    </div>
                                    <div className="col-lg-3 " style={{float: "left"}}>
                                        {<Small_Center key={16} news={getIndex(16)}/>}
                                    </div>
                                    <div className="col-lg-3 " style={{float: "left"}}>
                                        {<Small_Center key={17} news={getIndex(17)}/>}
                                    </div>
                                    <div className="col-lg-3 " style={{float: "left"}}>
                                        {<Small_Center key={18} news={getIndex(18)}/>}
                                    </div>
                                </div>
                            </div>
                            {newsList.map((news, index) => (
                                index > 18 && index < 41 ? <Bottom key={index} news={news}/> : ""
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default RealEstate;