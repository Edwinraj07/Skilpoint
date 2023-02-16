import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import imge from './img1.jpeg'
import img2 from './img2.jpeg'
import img3 from './img3.jpeg'
import img4 from './img4.jpeg'
import img5 from './img5.jpeg'
import img6 from './img6.jpeg'
import img7 from './img7.jpeg'
import img8 from './img8.jpeg'
import img9 from './img9.jpeg'
import img10 from './img10.jpeg'
import img11 from './img11.png'
import img12 from './img12.jpeg'
import StarRatings from 'react-star-ratings';
import "./card.css"
export default function Photos(){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

    return(
        <>
        <h1>FIND TOP SKILLED RESOURCES</h1>
        <Carousel responsive={responsive}>
            <div className="p-3">
        <div class="card text-white bgsecondary mb-3">
  <div ><img src={img4} class="card-img-top"/></div>
  <div class="card-body text-center">
    <h5 class="card-title">Ajay Krishnan</h5>
    <p class="card-text">Software Developer</p>
    <p> <StarRatings className="col-sm-12 d-flex" rating={5} starDimension="10px" starSpacing="10px" starRatedColor="gold"/></p>

  </div>
</div>
<div class="card text-white bgsecondary mb-3">
<div ><img src={img8} class="card-img-top"/></div>
  <div class="card-body text-center">
  <h5 class="card-title">Ajay Krishnan</h5>
    <p class="card-text">Software Developer</p>
    <p> <StarRatings className="col-sm-12 d-flex" rating={5} starDimension="10px" starSpacing="10px" starRatedColor="gold"/></p>
  </div>

</div>
</div>

<div className="p-3">
        <div class="card text-white bgsecondary mb-3">
        <div ><img src={img2} class="card-img-top"/></div>
  <div class="card-body text-center">
  <h5 class="card-title">Ajay Krishnan</h5>
    <p class="card-text">Software Developer</p> 
    <p> <StarRatings className="col-sm-12 d-flex" rating={5} starDimension="10px" starSpacing="10px" starRatedColor="gold"/></p>
 </div>

</div>
<div class="card text-white bgsecondary mb-3">
<div ><img src={img4} class="card-img-top"/></div>
  <div class="card-body text-center">
  <h5 class="card-title">Ajay Krishnan</h5>
    <p class="card-text">Software Developer</p> 
    <p> <StarRatings className="col-sm-12 d-flex" rating={5} starDimension="10px" starSpacing="10px" starRatedColor="gold"/></p>
 </div>
</div>
</div>


<div className="p-3">
        <div class="card text-white bgsecondary mb-3">
        <div ><img src={img8} class="card-img-top"/></div>
  <div class="card-body text-center">
  <h5 class="card-title">Ajay Krishnan</h5>
    <p class="card-text">Software Developer</p>  
    <p> <StarRatings className="col-sm-12 d-flex" rating={5} starDimension="10px" starSpacing="10px" starRatedColor="gold"/></p>
</div>
</div>
<div class="card text-white bgsecondary mb-3">
<div ><img src={img4} class="card-img-top"/></div>
  <div class="card-body text-center">
  <h5 class="card-title">Ajay Krishnan</h5>
    <p class="card-text">Software Developer</p> 
    <p> <StarRatings className="col-sm-12 d-flex" rating={5} starDimension="10px" starSpacing="10px" starRatedColor="gold"/></p>
 </div>
</div>
</div>


<div className="p-3">
        <div class="card text-white bgsecondary mb-3">
        <div ><img src={img4} class="card-img-top"/></div>
  <div class="card-body text-center">
  <h5 class="card-title">Ajay Krishnan</h5>
    <p class="card-text">Software Developer</p> 
    <p> <StarRatings className="col-sm-12 d-flex" rating={5} starDimension="10px" starSpacing="10px" starRatedColor="gold"/></p>
 </div>
</div>
<div class="card text-white bgsecondary mb-3">
<div ><img src={img2} class="card-img-top"/></div>
  <div class="card-body text-center">
  <h5 class="card-title">Ajay Krishnan</h5>
    <p class="card-text">Software Developer</p>
    <p> <StarRatings className="col-sm-12 d-flex" rating={5} starDimension="10px" starSpacing="10px" starRatedColor="gold"/></p>
  </div>
</div>
</div>


<div className="p-3">
        <div class="card text-white bgsecondary mb-3">
        <div ><img src={img4} class="card-img-top"/></div>
  <div class="card-body text-center">
  <h5 class="card-title">Ajay Krishnan</h5>
    <p class="card-text">Software Developer</p>  
    <p> <StarRatings className="col-sm-12 d-flex" rating={5} starDimension="10px" starSpacing="10px" starRatedColor="gold"/></p>
</div>
</div>
<div class="card text-white bgsecondary mb-3">
<div ><img src={img4} class="card-img-top"/></div>
  <div class="card-body text-center">
  <h5 class="card-title">Ajay Krishnan</h5>
    <p class="card-text">Software Developer</p> 
    <p> <StarRatings className="col-sm-12 d-flex" rating={5} starDimension="10px" starSpacing="10px" starRatedColor="gold"/></p>
 </div>
</div>
</div>

<div className="p-3">
        <div class="card text-white bgsecondary mb-3">
        <div ><img src={img8} class="card-img-top"/></div>
  <div class="card-body text-center">
  <h5 class="card-title">Ajay Krishnan</h5>
    <p class="card-text">Software Developer</p> 
    <p> <StarRatings className="col-sm-12 d-flex" rating={5} starDimension="10px" starSpacing="10px" starRatedColor="gold"/></p>
 </div>
</div>
<div class="card text-white bgsecondary mb-3">
<div ><img src={img2} class="card-img-top"/></div>
  <div class="card-body text-center">
  <h5 class="card-title">Ajay Krishnan</h5>
    <p class="card-text">Software Developer</p> 
    <p> <StarRatings className="col-sm-12 d-flex" rating={5} starDimension="10px" starSpacing="10px" starRatedColor="gold"/></p>
 </div>
</div>
</div>
</Carousel>;
        </>
    );
}