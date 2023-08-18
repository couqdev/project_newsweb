import React, {useState} from 'react';

const Center_Home = ({news}) => {
    const [viewedNews, setViewedNews] = useState(JSON.parse(localStorage.getItem("viewedNews")));

    //Kiem tra tin tuc trung lap trong LocalStorage
    function checkDuplicateNews(news, viewedNews) {
        for (let i = 0; i < viewedNews.length; i++) {
            if (news.link === viewedNews[i].link) {
                // Xoa value cu trong LocalStorage
                viewedNews.splice(i, 1);
                localStorage.setItem("viewedNews", JSON.stringify(viewedNews));
                // Them tin tuc da xem vao lich su xem tin tuc
                const newViewedNews = [news, ...viewedNews];
                setViewedNews(newViewedNews);
                // Luu lich su xem tin tuc vao LocalStorage
                localStorage.setItem('viewedNews', JSON.stringify(newViewedNews));
                return true;
            }
        }
        return false;
    }

    const handleViewNews = (news) => {
        if (!checkDuplicateNews(news, viewedNews)) {
            // Them tin tuc da xem vao lich su xem tin tuc
            const newViewedNews = [news, ...viewedNews];
            setViewedNews(newViewedNews);
            // Lưu lich su xem tin tuc vao LocalStorage
            localStorage.setItem('viewedNews', JSON.stringify(newViewedNews));
        }
    };
    return (
        <div className="post-entry-1">
            <a href={news.link} onClick={() => handleViewNews(news)}><img src={news.image} alt=""
                                                                          className="img-fluid"></img></a>
            <div className="post-meta">
            </div>
            <h3><a href={news.link} onClick={() => handleViewNews(news)}
                   style={{textDecoration: "none", color: "black"}}>{news.title}</a></h3>
            <p className="mb-4 d-block">{news.description}</p>
        </div>
    );
};

export default Center_Home;