import React  from "react";
import './home.css';
import "bootstrap/dist/css/bootstrap.css";
import { BsSearch } from "react-icons/bs";
import { RiFilter3Fill } from "react-icons/ri";

export default function Home(){
    return(
        <>
        <div className="container-fluid homebg" id="home">
            <div className="container hcontent1">
                <p className="hcontent">Get Started now with Skills Points!</p>
                <p className="hcontent">Skilled Candidates! Here you can find them</p>
            </div>
            <div className="searchbox">
                
                <BsSearch className="searchicon"/><input placeholder="Search by skills/resources" className="searchbox1" type="text"/><RiFilter3Fill className="filter"/>
                <button className="btn searchbtn">Search</button>
                
            </div>

        </div>
        </>
    );
}