import React from 'react';

const Footer = ({news}) => {
    return (
        <footer id="footer" className="footer">

            <div className="footer-content">
                <div className="container">

                    <div className="row g-5">
                        <div className="col-lg-4">
                            <h3 className="footer-heading">VietNamNet</h3>
                            <p>Trang tin tức sử dụng rss của <span>vietnamnet.vn</span></p>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h3 className="footer-heading">Chức năng</h3>
                            <ul className="footer-links list-unstyled">
                                <li><i className="bi bi-chevron-right"></i> Trang chi tiết</li>
                                <li><i className="bi bi-chevron-right"></i> Tìm kiếm</li>
                                <li><a style={{textDecoration: "none"}} href="/viewed-news"><i
                                    className="bi bi-chevron-right"></i> Lịch sử xem</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-2">
                            <h3 className="footer-heading">Danh mục</h3>
                            <ul className="footer-links list-unstyled">
                                <li><a style={{textDecoration: "none"}} href="/"><i
                                    className="bi bi-chevron-right"></i> Trang chủ</a></li>
                                <li><a style={{textDecoration: "none"}} href="/life"><i
                                    className="bi bi-chevron-right"></i> Đời sống</a></li>
                                <li><a style={{textDecoration: "none"}} href="/education"><i
                                    className="bi bi-chevron-right"></i> Giáo dục</a></li>
                                <li><a style={{textDecoration: "none"}} href="/current-events"><i
                                    className="bi bi-chevron-right"></i> Thời sự</a></li>
                                <li><a style={{textDecoration: "none"}} href="/travel"><i
                                    className="bi bi-chevron-right"></i> Du lịch</a></li>
                                <li><a style={{textDecoration: "none"}} href="/real-estate"><i
                                    className="bi bi-chevron-right"></i> Bất động sản</a></li>
                                <li><a style={{textDecoration: "none"}} href="/business"><i
                                    className="bi bi-chevron-right"></i> Kinh doanh</a></li>
                                <li><a style={{textDecoration: "none"}} href="/sport"><i
                                    className="bi bi-chevron-right"></i> Thể thao</a></li>
                                <li><a style={{textDecoration: "none"}} href="/entertainment"><i
                                    className="bi bi-chevron-right"></i> Giải trí</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-legal">
                <div className="container">

                    <div className="row justify-content-between">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <div className="copyright">
                                © Copyright <strong><span>ZenBlog</span></strong>. All Rights Reserved
                            </div>

                            <div className="credits">
                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                            </div>

                        </div>

                        <div className="col-md-6">
                            <div className="social-links mb-3 mb-lg-0 text-center text-md-end">
                                <a target={"_blank"} href="https://twitter.com/" className="twitter"><i
                                    className="bi bi-twitter"></i></a>
                                <a target={"_blank"} href="https://www.facebook.com/" className="facebook"><i
                                    className="bi bi-facebook"></i></a>
                                <a target={"_blank"} href="https://www.instagram.com/" className="instagram"><i
                                    className="bi bi-instagram"></i></a>
                                <a target={"_blank"} href="https://www.linkedin.com/" className="linkedin"><i
                                    className="bi bi-linkedin"></i></a>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;