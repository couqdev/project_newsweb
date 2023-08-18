import React, {useEffect, useState} from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import {Link, Outlet} from "react-router-dom";
import Bottom from "./items/Bottom";
import Form from "../../search/Form";

const ViewedNews = () => {
    const [viewedNews, setViewedNews] = useState(JSON.parse(localStorage.getItem('viewedNews')));

    useEffect(() => {
        const newViewedNews = JSON.parse(localStorage.getItem("viewedNews"));
        setViewedNews(newViewedNews);
    }, []);

    return (
        <div className="NewsWatched">
            <Header/>
            <main id="main">
                <section className="category-section">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header d-flex justify-content-between align-items-center mb-5">
                            <h2 style={{fontWeight: "700"}}><Link style={{textDecoration: "none", color: "#000"}}
                                      to="/viewed-news">Tin tức đã xem</Link></h2>
                        </div>
                    </div>
                    <div className="container" data-aos="fade-up">
                        <div className="row g-5">
                            {viewedNews.map((news, index) => (
                                <Bottom key={index} news={news} setViewedNews={setViewedNews}/>
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

export default ViewedNews;