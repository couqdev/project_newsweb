import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import Bottom from "../Items/Bottom";
import Form from "./Form";
import currentEvents from "../category/current_events/CurrentEvents";

function SearchNews() {
    const {name} = useParams();

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

    const [congressList, setCongressList] = useState([]);
    const [corruptionList, setCorruptionList] = useState([]);
    const [insuranceList, setInsuranceList] = useState([]);
    const [national_DefenseList, setNational_DefenseList] = useState([]);
    const [trafficList, setTrafficList] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/quoc-hoi.rss'
            );
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            let items = xml.querySelectorAll('item');
            let results = [];

            items.forEach((item) => {
                if(filterNews(item.querySelector('title').textContent,name)){
                    let result = {
                        title: setTitle(item.querySelector('title').textContent),
                        description: item.querySelector('description').textContent.split("</br>")[1].trim(),
                        link: getlink(item.querySelector('link').textContent),
                        image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                        pubDate: item.querySelector('pubDate').textContent,
                    };
                    results.push(result);
                }
            });
            setCongressList(results);
        };
        fetchNews();
    }, [congressList]);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/chong-tham-nhung.rss'
            );
            console.log(response); // in dữ liệu trả về từ API
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            console.log(xml); // in ra để kiểm tra xem XML đã được phân tích đúng không
            let items = xml.querySelectorAll('item');
            let results = [];

            items.forEach((item) => {
                if(filterNews(item.querySelector('title').textContent,name)){
                    let result = {
                        title: setTitle(item.querySelector('title').textContent),
                        description: item.querySelector('description').textContent.split("</br>")[1].trim(),
                        link: getlink(item.querySelector('link').textContent),
                        image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                        pubDate: item.querySelector('pubDate').textContent,
                    };
                    results.push(result);
                }
            });
            setCorruptionList(results);
        };
        fetchNews();
    }, [corruptionList]);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/bhxh-bhyt.rss'
            );
            console.log(response); // in dữ liệu trả về từ API
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            console.log(xml); // in ra để kiểm tra xem XML đã được phân tích đúng không
            let items = xml.querySelectorAll('item');
            let results = [];

            items.forEach((item) => {
                if(filterNews(item.querySelector('title').textContent,name)){
                    let result = {
                        title: setTitle(item.querySelector('title').textContent),
                        description: item.querySelector('description').textContent.split("</br>")[1].trim(),
                        link: getlink(item.querySelector('link').textContent),
                        image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                        pubDate: item.querySelector('pubDate').textContent,
                    };
                    results.push(result);
                }
            });
            setInsuranceList(results);
        };
        fetchNews();
    }, [insuranceList]);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/quoc-phong.rss'
            );
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            let items = xml.querySelectorAll('item');
            let results = [];

            items.forEach((item) => {
                if(filterNews(item.querySelector('title').textContent,name)){
                    let result = {
                        title: setTitle(item.querySelector('title').textContent),
                        description: item.querySelector('description').textContent.split("</br>")[1].trim(),
                        link: getlink(item.querySelector('link').textContent),
                        image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                        pubDate: item.querySelector('pubDate').textContent,
                    };
                    results.push(result);
                }
            });
            setNational_DefenseList(results);
        };
        fetchNews();
    }, [national_DefenseList]);
    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/an-toan-giao-thong.rss'
            );
            console.log(response); // in dữ liệu trả về từ API
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            console.log(xml); // in ra để kiểm tra xem XML đã được phân tích đúng không
            let items = xml.querySelectorAll('item');
            let results = [];

            items.forEach((item) => {
                if(filterNews(item.querySelector('title').textContent,name)){
                    let result = {
                        title: setTitle(item.querySelector('title').textContent),
                        description: item.querySelector('description').textContent.split("</br>")[1].trim(),
                        link: getlink(item.querySelector('link').textContent),
                        image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                        pubDate: item.querySelector('pubDate').textContent,
                    };
                    results.push(result);
                }
            });
            setTrafficList(results);
        };
        fetchNews();
    }, [trafficList]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(
                'https://vietnamnet.vn/rss/du-lich.rss'
            );
            const rss = response.data;
            let parser = new DOMParser();
            let xml = parser.parseFromString(rss, 'text/xml');
            let items = xml.querySelectorAll('item');
            let results = [];

            items.forEach((item) => {
                if(filterNews(item.querySelector('title').textContent,name)){
                    let result = {
                        title: setTitle(item.querySelector('title').textContent),
                        description: item.querySelector('description').textContent.split("</br>")[1].trim(),
                        link: getlink(item.querySelector('link').textContent),
                        image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                        pubDate: item.querySelector('pubDate').textContent,
                    };
                    results.push(result);
                }
            });
            setTravelList(results);
        };
        fetchNews();
    }, [travelList]);
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
                if(filterNews(item.querySelector('title').textContent,name)){
                    let result = {
                        title: setTitle(item.querySelector('title').textContent),
                        description: item.querySelector('description').textContent.split("</br>")[1].trim(),
                        link: getlink(item.querySelector('link').textContent),
                        image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                        pubDate: item.querySelector('pubDate').textContent,
                    };
                    results.push(result);
                }
            });
            setRealEstateList(results);
        };
        fetchNews();
    }, [realEstateList]);
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
                if(filterNews(item.querySelector('title').textContent,name)){
                    let result = {
                        title: setTitle(item.querySelector('title').textContent),
                        description: item.querySelector('description').textContent.split("</br>")[1].trim(),
                        link: getlink(item.querySelector('link').textContent),
                        image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                        pubDate: item.querySelector('pubDate').textContent,
                    };
                    results.push(result);
                }
            });
            setNewsList(results);
        };
        fetchNews();
    }, [newsList]);
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
                if(filterNews(item.querySelector('title').textContent,name)){
                    let result = {
                        title: setTitle(item.querySelector('title').textContent),
                        description: item.querySelector('description').textContent.split("</br>")[1].trim(),
                        link: getlink(item.querySelector('link').textContent),
                        image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                        pubDate: item.querySelector('pubDate').textContent,
                    };
                    results.push(result);
                }
            });
            setEducationList(results);
        };
        fetchNews();
    }, [educationList]);
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
                if(filterNews(item.querySelector('title').textContent,name)){
                    let result = {
                        title: setTitle(item.querySelector('title').textContent),
                        description: item.querySelector('description').textContent.split("</br>")[1].trim(),
                        link: getlink(item.querySelector('link').textContent),
                        image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                        pubDate: item.querySelector('pubDate').textContent,
                    };
                    results.push(result);
                }
            });
            setLifeList(results);
        };
        fetchNews();
    }, [lifeList]);
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
                if(filterNews(item.querySelector('title').textContent,name)){
                    let result = {
                        title: setTitle(item.querySelector('title').textContent),
                        description: item.querySelector('description').textContent.split("</br>")[1].trim(),
                        link: getlink(item.querySelector('link').textContent),
                        image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                        pubDate: item.querySelector('pubDate').textContent,
                    };
                    results.push(result);
                }
            });
            setBusinessList(results);
        };
        fetchNews();
    }, [businessList]);
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
                if(filterNews(item.querySelector('title').textContent,name)){
                    let result = {
                        title: setTitle(item.querySelector('title').textContent),
                        description: item.querySelector('description').textContent.split("</br>")[1].trim(),
                        link: getlink(item.querySelector('link').textContent),
                        image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                        pubDate: item.querySelector('pubDate').textContent,
                    };
                    results.push(result);
                }
            });
            setSportList(results);
        };
        fetchNews();
    }, [sportList]);
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
                if(filterNews(item.querySelector('title').textContent,name)){
                    let result = {
                        title: setTitle(item.querySelector('title').textContent),
                        description: item.querySelector('description').textContent.split("</br>")[1].trim(),
                        link: getlink(item.querySelector('link').textContent),
                        image: item.querySelector('description').textContent.match(/src="([^"]+)"/i)[1],
                        pubDate: item.querySelector('pubDate').textContent,
                    };
                    results.push(result);
                }
            });
            setEntertainmentList(results);
        };
        fetchNews();
    }, [entertainmentList]);

    function getlink(url){
        const startIndex = url.indexOf("vietnamnet.vn/") + "vietnamnet.vn/".length;
        const subUrl = url.substring(startIndex);
        const currentUrl = window.location.href;
        const newUrl = currentUrl.replace("search/","")+subUrl;
        return subUrl;
    }
    function filterNews(text,para){
        if(text.toLowerCase().includes(para.trim().toLowerCase())){
            return true;
        }else{
            return false;
        }
    }
    function lengthNews(a){
        return a<10?a:10;
    }
    function setTitle(title){
        return title.replace(/&amp;amp;/g,"&").replace(/&amp;apos;/g,"");
    }

    return (
        <div className="Home">
            <Header/>
            <main id="main">
                <section className="category-section">
                    <div className="container" data-aos="fade-up">
                        <div className="row g-5">
                            {newsList.map((news, index) => (
                                index >= 0 && index <=lengthNews(newsList.length) ? <Bottom key={index} news={news}/> : ""
                            ))}
                            {congressList.map((news, index) => (
                                index >= 0 && index <=lengthNews(congressList.length) ? <Bottom key={index} news={news}/> : ""
                            ))}
                            {corruptionList.map((news, index) => (
                                index >= 0 && index <=lengthNews(corruptionList.length) ? <Bottom key={index} news={news}/> : ""
                            ))}
                            {insuranceList.map((news, index) => (
                                index >= 0 && index <=lengthNews(insuranceList.length) ? <Bottom key={index} news={news}/> : ""
                            ))}
                            {national_DefenseList.map((news, index) => (
                                index >= 0 && index <=lengthNews(national_DefenseList.length) ? <Bottom key={index} news={news}/> : ""
                            ))}
                            {trafficList.map((news, index) => (
                                index >= 0 && index <=lengthNews(trafficList.length) ? <Bottom key={index} news={news}/> : ""
                            ))}

                            {travelList.map((news, index) => (
                                index >= 0 && index <=lengthNews(travelList.length) ? <Bottom key={index} news={news}/> : ""
                            ))}

                            {realEstateList.map((news, index) => (
                                index >= 0 && index <=lengthNews(realEstateList.length) ? <Bottom key={index} news={news}/> : ""
                            ))}

                            {educationList.map((news, index) => (
                                index >= 0 && index <=lengthNews(educationList.length) ? <Bottom key={index} news={news}/> : ""
                            ))}

                            {lifeList.map((news, index) => (
                                index >= 0 && index <=lengthNews(lifeList.length) ? <Bottom key={index} news={news}/> : ""
                            ))}

                            {businessList.map((news, index) => (
                                index >= 0 && index <=lengthNews(businessList.length) ? <Bottom key={index} news={news}/> : ""
                            ))}

                            {sportList.map((news, index) => (
                                index >= 0 && index <=lengthNews(sportList.length) ? <Bottom key={index} news={news}/> : ""
                            ))}

                            {entertainmentList.map((news, index) => (
                                index >= 0 && index <=lengthNews(entertainmentList.length) ? <Bottom key={index} news={news}/> : ""
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default SearchNews;
