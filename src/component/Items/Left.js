import React, {useState} from 'react';
// import '../../../assets/css/style.css';
const Left = ({news}) => {
    const [viewedNews, setViewedNews] = useState(JSON.parse(localStorage.getItem("viewedNews")));

    const handleViewNews = (news) => {
        // bien found kiem tra phan tu ton tai
        let found = false;
        const newViewedNews = viewedNews.filter((item) => {
            if (item.link === news.link) {
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
            newViewedNews.unshift(news);
            // cap nhat mang viewedNews
            setViewedNews(newViewedNews);
            // luu vao LocalStoragre
            localStorage.setItem('viewedNews', JSON.stringify(newViewedNews));
            return true;
        } else {
            // found=false
            // tao mang moi them news vao dau
            const updatedViewedNews = [news, ...viewedNews];
            // cap nhat mang viewedNews
            setViewedNews(updatedViewedNews);
            // luu vao LocalStorage
            localStorage.setItem('viewedNews', JSON.stringify(updatedViewedNews));
            return false;
        }
    };

    return (
        <div className="col-lg-4">
            <div className="post-entry-1 lg">
                <a to={"/news/" + news.link} onClick={() => handleViewNews(news)}><img src={news.image} alt=""
                                                                                       className="img-fluid"></img></a>
                <div className="post-meta">{news.pubDate}</div>
                <h2><a href={"/news/" + news.link} onClick={() => handleViewNews(news)}
                       style={{textDecoration: "none"}}>{news.title}</a>
                </h2>
                <p className="mb-4 d-block">{news.description}</p>
            </div>

        </div>
    );
};

export default Left;