import React from "react";
import './skillset.css';
import 'bootstrap/dist/css/bootstrap.css';


export default function About(){
    return(
    <>
    <div className="container-fluid about-backround" id="skillset">
       <div className="row">
        <div className=" mt-5">
            <div className="row">
                <div className="col-lg-1"/>
                <div className="col-lg-4">
                    <h3 className="ml-3">Find resourses with required Skill Set</h3>
                    <p className="ml-4 paracontent">A skill set is a collection of skills, qualities and experiences that someone develops through their life and work. Each individual has a different set of skills depending on their interests,A skill set is a collection of skills, qualities and experiences that someone develops through their life and work. Each individual has a different set of skills depending on their interests,  natural abilities and personal qualities. Possessing more skills can help expand your professional competency and allow you to excel in your job. As each skil..</p>
                    <button className="btn back-botton ml-5">Browse all</button>
                </div>
                <div className="col-lg-1"/>
                <div className="col-lg-3  ">
                   <div className="col-lg-12 html text-center">
                    <p>HTML/CSS</p>
                   </div>
                   <div className="col-lg-12 html1 text-center">
                    <p>Adobe XD</p>
                   </div>
                   <div className="col-lg-12 html2 text-center">
                    <p>UI/UX Designing</p>
                   </div>
                   <div className="col-lg-12 html3 text-center">
                    <p>Programming</p>
                   </div>

                </div>
                <div className="col-lg-3">
                <div className="col-lg-12 html text-center">
                    <p>Hotel Management</p>
                   </div>
                   <div className="col-lg-12 html1 text-center">
                    <p>Catering</p>
                   </div>
                   <div className="col-lg-12 html2 text-center">
                    <p>UI/UX Designing</p>
                   </div>
                   <div className="col-lg-12 html4 text-center">
                    <button className="btn text-white ">Find More</button>
                   </div>
                </div>
               
                

            </div>

        </div>
            

       </div>

    </div>
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>);
}