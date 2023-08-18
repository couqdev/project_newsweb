import React from 'react';
// import '../../../assets/css/style.css';
const Image = ({ link, p}) => {
    return (
        <div>
        <figure className="my-4">
            <img  src={link} alt="" className="img-fluid" style={{maxWidth:"90%"}}/>
            <figcaption>
            </figcaption>
        </figure>
        <p style={{maxWidth:"90%"}}>{p}</p>
        </div>
    );
};

export default Image;