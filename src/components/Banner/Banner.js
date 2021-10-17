import React from 'react';
import bannerImage1 from '../../image/imge1.jpg';

const Banner = () => {
    return (
        <div>
         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src={bannerImage1} alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={bannerImage1} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={bannerImage1} alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                
            </a>
            </div>
        </div>
    );
};

export default Banner;