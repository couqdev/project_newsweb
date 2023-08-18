import React, {useState} from 'react';
const Left_Home = ({ news }) => {
    let text = news.title + "";
    let title = MyComponent(text);
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
            <div className="post-entry-1 lg">
                <div className="col-lg-5 " style={{float :"left", height: 150}}>
                    <a to={news.link} onClick={() => handleViewNews(news)}><img src={news.image} alt=""
                                           className="img-fluid"></img></a>
                </div>
                <div className="col-lg-6 " style={{float:"right", height: 150}}>
                    <p><a href={news.link} onClick={() => handleViewNews(news)} style={{textDecoration:"none",color:"black"}}>{title}</a>
                    </p>
                </div>
            </div>
    );
};

const MAX_LENGTH = 100; //Giới hạn số ký tự cho phép hiển thị
const ELLIPSIS = '...'; //Dấu ba chấm để hiển thị ẩn đi

function MyComponent(text) {
    const [summary, detail] = text.split(' ').reduce((acc, value) => {
        if (acc[0].length + value.length < MAX_LENGTH) {
            acc[0] += ` ${value}`;
        } else {
            acc[1] += ` ${value}`;
        }
        return acc;
    }, ['', '']);

    const displayText = `${summary}${detail.length > 0 ? ELLIPSIS : ''}`;

    return (
        <div>
            <p>{displayText}</p>
        </div>
    );
}

export default Left_Home;