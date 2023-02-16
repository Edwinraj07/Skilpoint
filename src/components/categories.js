import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from './homebg.jpg'
import {MdAgriculture } from "react-icons/md";
import { BsFillCameraFill,BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { } from "react-icons/go";

import { IoGameController } from "react-icons/io5";
import { FcBiotech } from "react-icons/fc";
import { RiGlobalLine } from "react-icons/ri";
import { HiComputerDesktop } from "react-icons/hi2";
import { GiCook, GiWomanElfFace,GiMonkFace } from "react-icons/gi";
import { BiCodeBlock } from "react-icons/bi";
import './categories.css'
export function Categories(){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };

    return(
        <>
        
        <div id="category">
          <div className="div1">
        <h1 className="col-12 text-center navout1">Job Categories</h1>
            <Carousel responsive={responsive} className="mt-5">
                
            <div class="card categories-card">
                <div className="d-flex column-row justify-content-center">
  <MdAgriculture class="card-img-top text-center categories-img navout1"/>
  </div>
  <div class="card-body">
    <h2 class="card-text text-center ">Agriculture</h2>
  </div>
</div>
        
<div class="card categories-card">
                <div className="d-flex column-row justify-content-center">
  <BsFillCameraFill class="card-img-top text-center categories-img navout1"/>
  </div>
  <div class="card-body">
    <h2 class="card-text text-center">Photograph</h2>
  </div>
</div>

<div class="card categories-card">
                <div className="d-flex column-row justify-content-center">
  <BiCodeBlock class="card-img-top text-center categories-img navout1"/>
  </div>
  <div class="card-body">
    <h2 class="card-text text-center">IT</h2>
  </div>
</div>

<div class="card categories-card">
                <div className="d-flex column-row justify-content-center">
  <BsFillFileEarmarkBarGraphFill class="card-img-top text-center categories-img navout1"/>
  </div>
  <div class="card-body">
    <h2 class="card-text text-center">Marketing</h2>
  </div>
</div>

<div class="card categories-card">
                <div className="d-flex column-row justify-content-center">
  <GiCook class="card-img-top text-center categories-img navout1"/>
  </div>
  <div class="card-body">
    <h2 class="card-text text-center">Catering</h2>
  </div>
</div>

<div class="card categories-card">
                <div className="d-flex column-row justify-content-center">
  <GiWomanElfFace class="card-img-top text-center categories-img navout1"/>
  </div>
  <div class="card-body">
    <h2 class="card-text text-center">Fashion</h2>
  </div>
</div>

<div class="card categories-card">
                <div className="d-flex column-row justify-content-center">
  <GiMonkFace class="card-img-top text-center categories-img navout1"/>
  </div>
  <div class="card-body">
    <h2 class="card-text text-center">Designing</h2>
  </div>
</div>

<div class="card categories-card">
                <div className="d-flex column-row justify-content-center">
  <HiComputerDesktop class="card-img-top text-center categories-img navout1"/>
  </div>
  <div class="card-body">
    <h2 class="card-text text-center">Computer</h2>
  </div>
</div>

<div class="card categories-card">
                <div className="d-flex column-row justify-content-center">
  <RiGlobalLine class="card-img-top text-center categories-img navout1"/>
  </div>
  <div class="card-body">
    <h2 class="card-text text-center">Global</h2>
  </div>
</div>
<div class="card categories-card">
                <div className="d-flex column-row justify-content-center">
  <FcBiotech class="card-img-top text-center categories-img navout1"/>
  </div>
  <div class="card-body">
    <h2 class="card-text text-center">DNA</h2>
  </div>
</div>
<div class="card categories-card">
                <div className="d-flex column-row justify-content-center">
  <IoGameController class="card-img-top text-center categories-img navout1"/>
  </div>
  <div class="card-body">
    <h2 class="card-text text-center">Gaming</h2>
  </div>
</div>
   </Carousel>;
   </div>
   </div>
        </>
    );
}