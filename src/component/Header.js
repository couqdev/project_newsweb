import React from 'react';
import {Link} from "react-router-dom";
import Form from "./search/Form";
import SearchByVoice from "./search/SearchByVoice";

const Header = ({news}) => {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl align-items-center justify-content-between">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <Link style={{textDecoration: "none"}} className="logo d-flex align-items-center" to="/">
                        <h1>VietNamNet</h1></Link>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link style={{textDecoration: "none"}} to="/" className="bi-house-fill"></Link></li>
                            <li className="dropdown">
                                <Link style={{textDecoration: "none"}} to="/life">Đời sống<i
                                    className="bi bi-chevron-down dropdown-indicator"></i></Link>
                                <ul>
                                    <Link style={{textDecoration: "none"}} to="/life/family">Gia đình</Link>
                                    <Link style={{textDecoration: "none"}} to="/life/story">Chuyện lạ</Link>
                                    <Link style={{textDecoration: "none"}} to="/life/cuisine">Ẩm thực</Link>
                                    <Link style={{textDecoration: "none"}} to="/life/youth">Giới trẻ</Link>
                                    <Link style={{textDecoration: "none"}} to="/life/tip">Mẹo vặt</Link>
                                    <Link style={{textDecoration: "none"}} to="/life/confide">Tâm sự</Link>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link style={{textDecoration: "none"}} to="/education">Giáo dục<i
                                    className="bi bi-chevron-down dropdown-indicator"></i></Link>
                                <ul>
                                    <Link style={{textDecoration: "none"}} to="/education/teacher">Người thầy</Link>
                                    <Link style={{textDecoration: "none"}} to="/education/admissions">Tuyển sinh</Link>
                                    <Link style={{textDecoration: "none"}} to="/education/young-face">Gương mặt trẻ</Link>
                                    <Link style={{textDecoration: "none"}} to="/education/parents">Góc phụ huynh</Link>
                                    <Link style={{textDecoration: "none"}} to="/education/study-abroad">Du học</Link>
                                    <Link style={{textDecoration: "none"}} to="/education/science">Khoa học</Link>
                                    <Link style={{textDecoration: "none"}} to="/education/english">Học tiếng anh</Link>
                                    <Link style={{textDecoration: "none"}} to="/education/recruitment">Tuyển dụng</Link>
                                    <Link style={{textDecoration: "none"}} to="/education/ai-contest">AI CONTEST 2023</Link>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link style={{textDecoration: "none"}} to="/current-events">Thời sự<i
                                    className="bi bi-chevron-down dropdown-indicator"></i></Link>
                                <ul>
                                    <Link style={{textDecoration: "none"}} to="/current-events/congress">Quốc hội</Link>
                                    <Link style={{textDecoration: "none"}} to="/current-events/traffic">An toàn giao thông</Link>
                                    <Link style={{textDecoration: "none"}} to="/current-events/insurance">BHXH-BHYT</Link>
                                    <Link style={{textDecoration: "none"}} to="/current-events/corruption">Chống tham nhũng</Link>
                                    <Link style={{textDecoration: "none"}} to="/current-events/naitional-defense">Quốc phòng</Link>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link style={{textDecoration: "none"}} to="/travel">Du lịch<i
                                    className="bi bi-chevron-down dropdown-indicator"></i></Link>
                                <ul>
                                    <Link style={{textDecoration: "none"}} to="/go">Đi đâu chơi đi</Link>
                                    <Link style={{textDecoration: "none"}} to="/eat">Ăn ăn uống uống</Link>
                                    <Link style={{textDecoration: "none"}} to="/sleep">Ngủ ngủ nghỉ nghỉ</Link>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link style={{textDecoration: "none"}} to="/real-estate">Bất động sản<i
                                    className="bi bi-chevron-down dropdown-indicator"></i></Link>
                                <ul>
                                    <Link style={{textDecoration: "none"}} to="/project">Dự án</Link>
                                    <Link style={{textDecoration: "none"}} to="/interior">Nội thất</Link>
                                    <Link style={{textDecoration: "none"}} to="/advise">Tư vấn</Link>
                                    <Link style={{textDecoration: "none"}} to="/stock-market">Thị trường</Link>
                                    <Link style={{textDecoration: "none"}} to="/beautiful-house">Nhà đẹp</Link>
                                    <Link style={{textDecoration: "none"}} to="/chance-to-settle-down">Cơ hội an
                                        cư</Link>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link style={{textDecoration: "none"}} to="/business">Kinh doanh<i
                                    className="bi bi-chevron-down dropdown-indicator"></i></Link>
                                <ul>
                                    <li><Link style={{textDecoration: "none"}} to="/business/finance">Tài chính</Link>
                                    </li>
                                    <li><Link style={{textDecoration: "none"}} to="/business/invest">Đầu tư</Link></li>
                                    <li><Link style={{textDecoration: "none"}} to="/business/market">Thị trường</Link>
                                    </li>
                                    <li><Link style={{textDecoration: "none"}} to="/business/businessmen">Doanh
                                        nhân</Link>
                                    </li>
                                    <li><Link style={{textDecoration: "none"}} to="/business/finance-support">Tư vấn tài
                                        chính</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link style={{textDecoration: "none"}} to="/sport">Thể thao<i
                                    className="bi bi-chevron-down dropdown-indicator"></i></Link>
                                <ul>
                                    <li><Link style={{textDecoration: "none"}} to="/sport/international-football">Bóng
                                        đá
                                        quốc tế</Link></li>
                                    <li><Link style={{textDecoration: "none"}} to="/sport/vn-football">Bóng đá Việt
                                        Nam</Link>
                                    </li>
                                    <li><Link style={{textDecoration: "none"}} to="/sport/transfer-news">Tin chuyển
                                        nhượng</Link></li>
                                    <li><Link style={{textDecoration: "none"}} to="/sport/other-sport">Các môn
                                        khác</Link>
                                    </li>
                                    <li><Link style={{textDecoration: "none"}} to="/sport/backstage">Hậu trường</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <Link style={{textDecoration: "none"}} to="/entertainment">Giải trí<i
                                    className="bi bi-chevron-down dropdown-indicator"></i></Link>
                                <ul>
                                    <li><Link style={{textDecoration: "none"}} to="/entertainment/star-world">Sao thế
                                        giới</Link></li>
                                    <li><Link style={{textDecoration: "none"}} to="/entertainment/miss">Hoa hậu</Link>
                                    </li>
                                    <li><Link style={{textDecoration: "none"}} to="/entertainment/fashion">Thời
                                        trang</Link></li>
                                    <li><Link style={{textDecoration: "none"}} to="/entertainment/music">Âm nhạc</Link>
                                    </li>
                                    <li><Link style={{textDecoration: "none"}} to="/entertainment/movie">Phim</Link>
                                    </li>
                                    <li><Link style={{textDecoration: "none"}} to="/entertainment/tv">Truyền hình</Link>
                                    </li>
                                </ul>
                            </li>
                            <Link style={{textDecoration: "none"}} to="/podcast">
                                <img src="/headphone.png" alt="Podcast" width={"30px"} height={"30px"}/>
                            </Link>
                            <Link style={{textDecoration: "none"}} to="/viewed-news">
                                <img src="/history.png" alt="Tin tức đã xem" width={"30px"} height={"30px"}/>
                            </Link>
                        </ul>
                    </nav>
                    <div className="position-relative">
                        <a target="_blank" href="https://www.facebook.com/" className="mx-2"
                           style={{color: "#212529"}}><span
                            className="bi-facebook"></span></a>
                        <a target="_blank" href="https://twitter.com/" className="mx-2" style={{color: "#212529"}}><span
                            className="bi-twitter"></span></a>
                        <a target="_blank" href="https://www.instagram.com/" className="mx-2"
                           style={{color: "#212529"}}><span className="bi-instagram"></span></a>
                    </div>
                </div>
                <div className="container-fluid container-xl position-absolute">
                    <Form/>
                </div>
            </div>
        </header>
    );
};

export default Header;