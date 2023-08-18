import React, {useState} from 'react';
// import '../../../assets/css/style.css';
const Relate = ({link, title}) => {
    return (<div className="post-entry-1 border-bottom">
        <div className="post-meta"></div>
        <h2 className="mb-2"><a style={{textDecoration: "none"}} href={"/news" + link}>{title}</a></h2>
    </div>);
};

export default Relate;