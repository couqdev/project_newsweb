import React, {useEffect, useState} from 'react';
import left from "../../../Items/Left";

const Bottom = ({podcast}) => {
    const [audioDuration, setAudioDuration] = useState([]);
    const [viewedNews, setViewedNews] = useState(JSON.parse(localStorage.getItem("viewedNews")));

    const handleViewNews = (podcast) => {
        // bien found kiem tra phan tu ton tai
        let found = false;
        const newViewedNews = viewedNews.filter((item) => {
            if (item.link === podcast.link) {
                // ton tai
                found = true;
                // tra ve false de loai bo phan tu khoi man viewedNews
                return false;
            }
            // tra ve true vi khong co phan tu nao trung lap
            return true;
        });
        if (found) {
            // found=true
            // dua news vao dau mang
            newViewedNews.unshift(podcast);
            // cap nhat mang viewedNews
            setViewedNews(newViewedNews);
            // luu vao LocalStoragre
            localStorage.setItem('viewedNews', JSON.stringify(newViewedNews));
            return true;
        } else {
            // found=false
            // tao mang moi them news vao dau
            const updatedViewedNews = [podcast, ...viewedNews];
            // cap nhat mang viewedNews
            setViewedNews(updatedViewedNews);
            // luu vao LocalStorage
            localStorage.setItem('viewedNews', JSON.stringify(updatedViewedNews));
            return false;
        }
    };
    const getAudioDuration = async () => {
        try {
            const audio = new Audio(podcast.audio);
            // chờ tệp audio được tải xuống trước khi truy cập vào thuộc tính duration
            await audio.addEventListener("loadedmetadata", () => {
                const duration = Math.floor(audio.duration / 60);
                setAudioDuration(`${duration} phút`);
            });
            audio.load(); // để tải dữ liệu trước khi đăng ký sự kiện.
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getAudioDuration();
    }, []);

    return (
        <div className="post-entry-1 border-bottom">
            <div className="left-layout">
                <a href={"/podcast/" + podcast.link} onClick={() => handleViewNews(podcast)}>
                    <img src="/headphone.png" alt="podcast" width={"30px"} height={"30px"} style={{
                        position: "absolute",
                        margin: "5px",
                        borderRadius: "50%",
                        backgroundColor: "rgb(242,242,242,0.3)"
                    }}/>
                    <img src={podcast.image} alt="" className="img-fix-size"/>
                </a>
            </div>
            <div className="right-layout">
                <div className="mar-left">
                    <div className="post-meta">
                        <span className="mx-1">•</span>
                        <span>{podcast.pubDate}</span>
                    </div>
                    <h2 className="mb-2">
                        <a href={"/podcast/" + podcast.link} onClick={() => handleViewNews(podcast)}
                           style={{textDecoration: "none"}}>{podcast.title}
                        </a>
                    </h2>
                    <p>{podcast.description}</p>
                    <a onClick={() => handleViewNews(podcast)} href={"/podcast/" + podcast.link}
                       style={{textDecoration: "none", color: "#000000"}}>
                        <img src="/headphone.png" alt="podcast" width={"30px"} height={"30px"} style={{margin: "auto"}}/>
                        <span style={{marginLeft: "15px"}}>{audioDuration}</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Bottom;