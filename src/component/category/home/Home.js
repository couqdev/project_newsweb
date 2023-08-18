import '../../../assets/css/variables.css';
import '../../../assets/css/main.css';
import '../../../assets/css/style.css';
import '../../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../../assets/vendor/swiper/swiper-bundle.min.css';
import '../../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../../assets/vendor/bootstrap/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from "../../Header";
import Footer from "../../Footer";
import Left_Home from "./Left_Home";
import Center_Home from "./Center_Home";
import Trending_Home from "./Trending_Home";
import Small_Center from "./Small_Center";
import SmallTrending from "./SmallTrending";
import Form from "../../search/Form";
import {Link} from "react-router-dom";

const Home = () => {
    // lấy tin tức du lịch
    const [travelList, setTravelList] = useState([]);
    // lấy tin tức bất động sản
    const [realEstateList, setRealEstateList] = useState([]);
    // lấy tin tức thời sự
    const [newsList, setNewsList] = useState([]);
    // lấy tin tức giáo dục
    const [educationList, setEducationList] = useState([]);
    // lấy tin tức đời sống
    const [lifeList, setLifeList] = useState([]);
    // lấy tin tức kinh doanh
    const [businessList, setBusinessList] = useState([]);
    // lấy tin tức thể thao
    const [sportList, setSportList] = useState([]);
    // lấy tin tức giải trí
    const [entertainmentList, setEntertainmentList] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/du-lich.rss'
            );
            console.log(response); // in dữ liệu trả về từ API
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            console.log(xml); // in ra để kiểm tra xem XML đã được phân tích đúng không
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
            setTravelList(results);
        };
        fetchNews();
    }, []);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/bat-dong-san.rss'
            );
            console.log(response); // in dữ liệu trả về từ API
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            console.log(xml); // in ra để kiểm tra xem XML đã được phân tích đúng không
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
            setRealEstateList(results);
        };
        fetchNews();
    }, []);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/thoi-su.rss'
            );
            console.log(response); // in dữ liệu trả về từ API
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            console.log(xml); // in ra để kiểm tra xem XML đã được phân tích đúng không
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
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/giao-duc.rss'
            );
            console.log(response); // in dữ liệu trả về từ API
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            console.log(xml); // in ra để kiểm tra xem XML đã được phân tích đúng không
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
            setEducationList(results);
        };
        fetchNews();
    }, []);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/doi-song.rss'
            );
            console.log(response); // in dữ liệu trả về từ API
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            console.log(xml); // in ra để kiểm tra xem XML đã được phân tích đúng không
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
            setLifeList(results);
        };
        fetchNews();
    }, []);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/kinh-doanh.rss'
            );
            console.log(response); // in dữ liệu trả về từ API
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            console.log(xml); // in ra để kiểm tra xem XML đã được phân tích đúng không
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
            setBusinessList(results);
        };
        fetchNews();
    }, []);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/the-thao.rss'
            );
            console.log(response); // in dữ liệu trả về từ API
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            console.log(xml); // in ra để kiểm tra xem XML đã được phân tích đúng không
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
            setSportList(results);
        };
        fetchNews();
    }, []);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/giai-tri.rss'
            );
            console.log(response); // in dữ liệu trả về từ API
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            console.log(xml); // in ra để kiểm tra xem XML đã được phân tích đúng không
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
            setEntertainmentList(results);
        };
        fetchNews();
    }, []);
    function getIndexTravel(index){
        return {...travelList[index]};
    }
    function getIndexRealEstate(index){
        return {...realEstateList[index]};
    }
    function getIndexNews(index){
        return {...newsList[index]};
    }
    function getIndexEducation(index){
        return {...educationList[index]};
    }
    function getIndexLife(index){
        return {...lifeList[index]};
    }
    function getIndexBusiness(index){
        return {...businessList[index]};
    }
    function getIndexSport(index){
        return {...sportList[index]};
    }
    function getIndexEntertainment(index){
        return {...entertainmentList[index]};
    }
    function getlink(url){
        const startIndex = url.indexOf("vietnamnet.vn/") + "vietnamnet.vn/".length;
        const subUrl = url.substring(startIndex);
        return "news/"+subUrl;
    }
    function setTitle(title){
        return title.replace(/&amp;amp;/g,"&").replace(/&amp;apos;/g,"");
    }
    return (
        <div className="Home">
            <Header/>
            <main id="main">
                <section id="posts" className="posts">
                    <div className="container" data-aos="fade-up">
                        <div className="row g-9">
                            <div className="col-lg-4">
                                {<Left_Home key={0} news={getIndexLife(0)}/>}
                                {<Left_Home key={1} news={getIndexLife(1)}/>}
                                {<Left_Home key={0} news={getIndexBusiness(0)}/>}
                                {<Left_Home key={1} news={getIndexBusiness(1)}/>}
                                {<Left_Home key={0} news={getIndexRealEstate(0)}/>}
                                {<Left_Home key={1} news={getIndexRealEstate(1)}/>}
                            </div>

                            <div className="col-lg-8">
                                <div className="row g-12">
                                    <div className="col-lg-7 border-start custom-border">

                                        {<Center_Home key={0} news={getIndexNews(0)}/>}
                                        <div className="col-lg-5 " style={{float: "left", marginLeft:20}}>
                                            {<Small_Center key={0} news={getIndexSport(0)}/>}
                                        </div>
                                        <div className="col-lg-5 " style={{float: "right",marginRight:20}}>
                                            {<Small_Center key={0} news={getIndexEntertainment(0)}/>}
                                        </div>
                                    </div>

                                    <div className="col-lg-5">

                                        <div className="trending">
                                            <h3>Trending</h3>
                                            <ul className="trending-post">
                                                <li>
                                                    {<Trending_Home key={1} news={getIndexTravel(1)}/>}
                                                </li>
                                                <li>
                                                    {<Trending_Home key={1} news={getIndexNews(1)}/>}
                                                </li>
                                                <li>
                                                    {<Trending_Home key={0} news={getIndexEducation(0)}/>}
                                                </li>
                                                <li>
                                                    {<Trending_Home key={1} news={getIndexSport(1)}/>}
                                                </li>
                                                <li>
                                                    {<Trending_Home key={1} news={getIndexEntertainment(1)}/>}
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="container" data-aos="fade-up" style={{backgroundColor: 'rgb(246,246,246)', marginTop: 50}}>
                        <div className="row g-5">
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {<Small_Center key={2} news={getIndexLife(2)}/>}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {<Small_Center key={2} news={getIndexEntertainment(2)}/>}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {<Small_Center key={2} news={getIndexSport(2)}/>}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {<Small_Center key={1} news={getIndexEducation(1)}/>}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="posts">
                    <div className="container" data-aos="fade-up">
                        <div className="row g-5">
                            <div className="col-lg-3">
                                {<Left_Home key={2} news={getIndexTravel(2)}/>}
                                {<Left_Home key={3} news={getIndexTravel(3)}/>}
                                {<Left_Home key={2} news={getIndexRealEstate(2)}/>}
                                {<Left_Home key={3} news={getIndexRealEstate(3)}/>}
                                {<Left_Home key={2} news={getIndexNews(2)}/>}
                                {<Left_Home key={3} news={getIndexLife(3)}/>}
                                {<Left_Home key={4} news={getIndexLife(4)}/>}
                                {<Left_Home key={2} news={getIndexBusiness(2)}/>}
                                {<Left_Home key={3} news={getIndexBusiness(3)}/>}
                                {<Left_Home key={3} news={getIndexSport(3)}/>}
                                {<Left_Home key={4} news={getIndexSport(4)}/>}
                                {<Left_Home key={3} news={getIndexEntertainment(3)}/>}
                            </div>

                            <div className="col-lg-9">
                                <div className="row g-5">
                                    <div className="col-lg-6 border-start custom-border">
                                        <div className="section-header d-flex justify-content-between align-items-center mb-5">
                                            <Link style={{textDecoration: "none", color:"black"}} to="/current-events"><h3>Thời sự</h3></Link>
                                            <nav id="navbar" className="navbar">
                                                <Link style={{textDecoration: "none"}} to="/congress">Quốc hội</Link>
                                                <Link style={{textDecoration: "none"}} to="/traffic">An toàn giao thông</Link>
                                            </nav>
                                        </div>
                                        {<Center_Home key={3} news={getIndexNews(3)}/>}
                                        {<SmallTrending key={4} news={getIndexNews(4)}/>}
                                        {<SmallTrending key={5} news={getIndexNews(5)}/>}
                                        {<SmallTrending key={6} news={getIndexNews(6)}/>}
                                        {<SmallTrending key={7} news={getIndexNews(7)}/>}
                                        <div className="section-header d-flex justify-content-between align-items-center mb-5">
                                            <Link style={{textDecoration: "none", color:"black"}} to="/travel"><h3>Du lịch</h3></Link>
                                            <nav id="navbar" className="navbar">
                                                <Link style={{textDecoration: "none"}} to="/go">Đi đâu chơi đi</Link>
                                                <Link style={{textDecoration: "none"}} to="/eat">Ăn ăn uống uống</Link>
                                            </nav>
                                        </div>
                                        {<Center_Home key={4} news={getIndexTravel(4)}/>}
                                        {<SmallTrending key={5} news={getIndexTravel(5)}/>}
                                        {<SmallTrending key={6} news={getIndexTravel(6)}/>}
                                        {<SmallTrending key={7} news={getIndexTravel(7)}/>}
                                        {<SmallTrending key={8} news={getIndexTravel(8)}/>}
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="col-lg-11 border-start custom-border">
                                            <div style={{marginLeft:15}}>
                                                <div className="section-header d-flex justify-content-between align-items-center mb-5">
                                                    <Link style={{textDecoration: "none",color:"black"}} to="/sport"><h3>Thể thao</h3></Link>
                                                    <nav id="navbar" className="navbar">
                                                        <Link style={{textDecoration: "none"}} to="/sport/international-football">Bóng đá quốc tế</Link>
                                                    </nav>
                                                </div>
                                                {<Center_Home key={5} news={getIndexSport(5)}/>}
                                                {<SmallTrending key={6} news={getIndexSport(6)}/>}
                                                {<SmallTrending key={7} news={getIndexSport(7)}/>}
                                                {<SmallTrending key={8} news={getIndexSport(8)}/>}
                                                {<SmallTrending key={9} news={getIndexSport(9)}/>}
                                                <div className="section-header d-flex justify-content-between align-items-center mb-5">
                                                    <Link style={{textDecoration: "none",color:"black"}} to="/real-estate"><h3>Bất động sản</h3></Link>
                                                    <nav id="navbar" className="navbar">
                                                        <Link style={{textDecoration: "none"}} to="/project">Dự án</Link>
                                                        <Link style={{textDecoration: "none"}} to="/interior">Nội thất</Link>
                                                    </nav>
                                                </div>
                                                {<Center_Home key={4} news={getIndexRealEstate(4)}/>}
                                                {<SmallTrending key={5} news={getIndexRealEstate(5)}/>}
                                                {<SmallTrending key={6} news={getIndexRealEstate(6)}/>}
                                                {<SmallTrending key={7} news={getIndexRealEstate(7)}/>}
                                                {<SmallTrending key={8} news={getIndexRealEstate(8)}/>}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="container" data-aos="fade-up" style={{backgroundColor: 'rgb(246,246,246)', marginTop: 50}}>
                        <div className="row g-5">
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {<Small_Center key={8} news={getIndexEducation(2)}/>}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {<Small_Center key={8} news={getIndexLife(5)}/>}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {<Small_Center key={4} news={getIndexBusiness(4)}/>}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {<Small_Center key={4} news={getIndexEntertainment(4)}/>}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="posts">
                    <div className="container" data-aos="fade-up">
                        <div className="row g-5">
                            <div className="col-lg-3">
                                {<Left_Home key={9} news={getIndexTravel(9)}/>}
                                {<Left_Home key={10} news={getIndexTravel(10)}/>}
                                {<Left_Home key={9} news={getIndexRealEstate(9)}/>}
                                {<Left_Home key={10} news={getIndexRealEstate(10)}/>}
                                {<Left_Home key={8} news={getIndexNews(8)}/>}
                                {<Left_Home key={6} news={getIndexLife(6)}/>}
                                {<Left_Home key={7} news={getIndexLife(7)}/>}
                                {<Left_Home key={13} news={getIndexBusiness(5)}/>}
                                {<Left_Home key={14} news={getIndexBusiness(6)}/>}
                                {<Left_Home key={10} news={getIndexSport(10)}/>}
                                {<Left_Home key={11} news={getIndexSport(11)}/>}
                                {<Left_Home key={5} news={getIndexEntertainment(5)}/>}
                            </div>

                            <div className="col-lg-9">
                                <div className="row g-5">
                                    <div className="col-lg-6 border-start custom-border">
                                        <div className="section-header d-flex justify-content-between align-items-center mb-5">
                                            <Link style={{textDecoration: "none", color:"black"}} to="/life"><h3>Đời sống</h3></Link>
                                            <nav id="navbar" className="navbar">
                                                <Link style={{textDecoration: "none"}} to="/family">Gia đình</Link>
                                                <Link style={{textDecoration: "none"}} to="/story">Chuyện lạ</Link>
                                            </nav>
                                        </div>
                                        {<Center_Home key={8} news={getIndexLife(8)}/>}
                                        {<SmallTrending key={9} news={getIndexLife(9)}/>}
                                        {<SmallTrending key={10} news={getIndexLife(10)}/>}
                                        {<SmallTrending key={11} news={getIndexLife(11)}/>}
                                        {<SmallTrending key={12} news={getIndexLife(12)}/>}
                                        <div className="section-header d-flex justify-content-between align-items-center mb-5">
                                            <Link style={{textDecoration: "none", color:"black"}} to="/education"><h3>Giáo dục</h3></Link>
                                            <nav id="navbar" className="navbar">
                                                <Link style={{textDecoration: "none"}} to="/admissions">Tuyển sinh</Link>
                                                <Link style={{textDecoration: "none"}} to="/study-abroad">Du học</Link>
                                            </nav>
                                        </div>
                                        {<Center_Home key={3} news={getIndexEducation(3)}/>}
                                        {<SmallTrending key={4} news={getIndexEducation(4)}/>}
                                        {<SmallTrending key={5} news={getIndexEducation(5)}/>}
                                        {<SmallTrending key={6} news={getIndexEducation(6)}/>}
                                        {<SmallTrending key={7} news={getIndexEducation(7)}/>}
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="col-lg-11 border-start custom-border">
                                            <div style={{marginLeft:15}}>
                                                <div className="section-header d-flex justify-content-between align-items-center mb-5">
                                                    <Link style={{textDecoration: "none",color:"black"}} to="/business"><h3>Kinh doanh</h3></Link>
                                                    <nav id="navbar" className="navbar">
                                                        <Link style={{textDecoration: "none"}} to="/business/businessmen">Doanh nhân</Link>
                                                        <Link style={{textDecoration: "none"}} to="/business/market">Thị trường</Link>
                                                    </nav>
                                                </div>
                                                {<Center_Home key={7} news={getIndexBusiness(7)}/>}
                                                {<SmallTrending key={8} news={getIndexBusiness(8)}/>}
                                                {<SmallTrending key={9} news={getIndexBusiness(9)}/>}
                                                {<SmallTrending key={10} news={getIndexBusiness(10)}/>}
                                                {<SmallTrending key={11} news={getIndexBusiness(11)}/>}
                                                <div className="section-header d-flex justify-content-between align-items-center mb-5">
                                                    <Link style={{textDecoration: "none",color:"black"}} to="/entertainment"><h3>Giải trí</h3></Link>
                                                    <nav id="navbar" className="navbar">
                                                       <Link style={{textDecoration: "none"}} to="/entertainment/fashion">Thời trang</Link>
                                                       <Link style={{textDecoration: "none"}} to="/entertainment/music">Âm nhạc</Link>
                                                    </nav>
                                                </div>
                                                {<Center_Home key={6} news={getIndexEntertainment(6)}/>}
                                                {<SmallTrending key={7} news={getIndexEntertainment(7)}/>}
                                                {<SmallTrending key={8} news={getIndexEntertainment(8)}/>}
                                                {<SmallTrending key={9} news={getIndexEntertainment(9)}/>}
                                                {<SmallTrending key={10} news={getIndexEntertainment(10)}/>}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="container" data-aos="fade-up" style={{backgroundColor: 'rgb(246,246,246)', marginTop: 50}}>
                        <div className="row g-5">
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {<Small_Center key={8} news={getIndexEducation(8)}/>}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {<Small_Center key={13} news={getIndexLife(13)}/>}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {<Small_Center key={12} news={getIndexBusiness(12)}/>}
                            </div>
                            <div className="col-lg-3 " style={{float: "left"}}>
                                {<Small_Center key={11} news={getIndexEntertainment(11)}/>}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;