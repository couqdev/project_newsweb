import React, {useEffect, useState} from 'react';

const Bottom = ({news, setViewedNews}) => {
    const viewedNews = JSON.parse(JSON.stringify(localStorage.getItem("viewedNews")));

    const handleDelete = (link) => {
        const viewedNews = JSON.parse(localStorage.getItem("viewedNews"));
        for (let i = 0; i < viewedNews.length; i++) {
            if (link === viewedNews[i].link) {
                // Xoa value trong LocalStorage
                viewedNews.splice(i, 1);
                // Cap nhat lai du lieu trong LocalStorage va state
                setViewedNews(viewedNews);
                localStorage.setItem("viewedNews", JSON.stringify(viewedNews));
                return;
            }
        }
    }

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
        <div className="post-entry-1 border-bottom">
            <div className="left-layout">
                {news.audio ? <a href={"/podcast/" + news.link} onClick={() => handleViewNews(news)}>
                    <img src="headphone.png" alt="podcast" width={"30px"} height={"30px"} style={{
                        position: "absolute",
                        margin: "5px",
                        borderRadius: "50%",
                        backgroundColor: "rgb(242,242,242,0.3)"
                    }}/>
                    <img src={news.image} alt="" className="img-fix-size"/>
                </a> : <a href={"/news/" + news.link} onClick={() => handleViewNews(news)}>
                    <img src={news.image} alt="" className="img-fix-size"></img></a>
                }
            </div>
            <div className="right-layout">
                <div className="mar-left">
                    <div className="post-meta"><span
                        className="mx-1">•</span> <span>{news.pubDate}</span></div>
                    {news.audio ? <h2 className="mb-2">
                        <a href={"/podcast/" + news.link} onClick={() => handleViewNews(news)}
                           style={{textDecoration: "none"}}>
                            {news.title}
                        </a>
                    </h2> : <h2 className="mb-2">
                        <a href={"/news/" + news.link} style={{textDecoration: "none"}}
                           onClick={() => handleViewNews(news)}>{news.title}</a></h2>
                    }
                    <p>{news.description}</p>
                </div>
                <div className="mar-right" role={"button"} onClick={() => handleDelete(news.link)}>
                    <img src="x.png" style={{width: "20px", height: "20px"}} alt="Xóa"/>
                </div>
            </div>

        </div>
    );
};

export default Bottom;