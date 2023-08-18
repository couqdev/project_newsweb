import '../../assets/css/variables.css';
import '../../assets/css/main.css';
import '../../assets/css/style.css';
import '../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../assets/vendor/swiper/swiper-bundle.min.css';
import '../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import axios from 'axios';
import React, {useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import Image from "./items/Image";
import {Link, useParams} from "react-router-dom";
import Relate from "./items/Relate";
import ViewedNew from "./items/ViewedNew";
const Detail = () => {
    const [title, setTitle] = useState();
    const [listImage, setListImage] = useState([]);
    const [listDecription, setListDecription] = useState([]);
    const [summary, setSummary] = useState();

    const [article, setArticle] = useState([]);
    const [articleTitle, setarTicleTitle] = useState([]);
    const [viewedNews, setViewedNews] = useState(JSON.parse(localStorage.getItem("viewedNews")));
    async function ScrapeData() {
        let {link} = useParams();
       try{
           const {data} = await axios.get("https://vietnamnet.vn/" + link);
           const cheerio = require('cheerio');
           const $ = cheerio.load(data);

           // Lay ra title
           setTitle($('h1').text());
           // Lay ra noi dung tomtat
           setSummary($('h2').text());
           // Lay ra danh sach image
           const list = [];
           $('figure img').each((i, el) => {
               const imageUrl = $(el).attr('src');
               list.push(imageUrl);
           });
           setListImage(list);
           // Lay ra danh sach thong tin
           const listDes = [];
           $('div p').each((i, el) => {
               const text = $(el).text();
               listDes.push(text);
           });
           setListDecription(listDes);

           // Link trang chi tiet
           const linkDetail = [];
           $('article a').each((i, el) => {
               const titleL = $(el).attr('href');
               linkDetail.push(titleL);
           });
           setArticle(linkDetail);

           const texts = [];
           $('article a').each((i, el) => {
               const titleL = $(el).text();
               texts.push(titleL);
           });
           setarTicleTitle(texts);
       }catch (error){
       }
    }
    ScrapeData();

    function getIndex() {
        let x = listDecription.length / listImage.length;
        let y = Math.round(listDecription.length / listImage.length);
        if (y - x >= 0.5) {
            return y;
        }
        if (y - x <= 0.5) {
            return y - 1;
        }
    }

    function voice() {
        let text = title + ". " + summary;
         // text += listDecription.join(' ');
        for (let i = 2; i < listDecription.length - 1; i++) {
            text += listDecription[i];
            if (i !== listDecription.length - 2) {
                text += ' ';
            }
        }
        window.responsiveVoice.speak(text.replace(/\s{2,}/g, ' '), 'Vietnamese Female');
    }

    function cancelVoice() {
        window.responsiveVoice.cancel();
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
                                <div className="single-post">
                                    <img src="/audio-speaker-on.png"
                                         alt="Tin tức đã xem"
                                         width={"30px"}
                                         height={"30px"} onClick={voice}/>
                                    <img src="/mute.png"
                                         alt="Tin tức đã xem"
                                         width={"30px"}
                                         height={"30px"} onClick={cancelVoice} style={{marginLeft:"15px"}}/>
                                    <h1 className="mb-5" style={{maxWidth: "90%"}}>{title}</h1>
                                    <p style={{maxWidth: "90%", fontWeight: "bold"}}>{summary}</p>
                                    {listDecription.map((p, index) => (
                                        index % getIndex() === 0 ?
                                            <Image key={index} p={p} link={listImage[index / getIndex()]}/> :
                                            <p key={index} style={{maxWidth: "90%"}}>{p}</p>
                                    ))}
                                </div>
                                <div className="row justify-content-center mt-5">

                                    <div className="col-lg-12">
                                        <h5 className="comment-title">Bình luận</h5>
                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
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
                                            {article.map((i, index) => (
                                                index % 2 !== 0 ?
                                                    <Relate key={index} link={i} title={articleTitle[index]}/> : ""
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
}

export default Detail;
