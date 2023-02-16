import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './contact.css';
import { MdContactPhone,MdSettingsSuggest,MdCopyright} from "react-icons/md";


export default function Contact()
{
    return(
        <>
        <div className="container-fluid text-center leave" id="faq" >
            <h1>Leave Comment</h1>
        </div>
        <div className="container-fluid mainbackground">
            <div className="container">
                <form>
                    <div className="row mt-5">
                            <div className="col-lg-1">&nbsp;</div>
                            <div className=" col-lg-4">
                                <input type="text " placeholder="First Name" className="form-control"/>
                            </div>
                            <div className="col-lg-2">&nbsp;</div>
                            <div className=" col-lg-4">
                                <input type="text" placeholder="Last Name" className="form-control"/>
                            </div>
                    </div>
                        <div className="row mt-5">
                            <div className="col-lg-1">&nbsp;</div>
                            <div className=" col-lg-4">
                                <input type="text" placeholder="Designation" className="form-control"/>
                            </div>
                            <div className="col-lg-2">&nbsp;</div>
                            <div className=" col-lg-4">
                                <input type="text" placeholder="Location" className="form-control"/>
                            </div>
                        </div>
                    <div className="row mt-5">
                        <div className="col-lg-1">&nbsp;</div>
                        <div className=" col-lg-10">
                            <textarea rows="7" placeholder="Add a comment..." className="form-control"/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-9">&nbsp;</div>
                        <div>
                            <button className="btn btncolor cbtn">SUBMIT COMMENT</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
        <div className="container-fluid secondbackground p-4" id="contact">
            <div className="col-lg-12">
                <h1 className="leave">Skills Point</h1>
            </div>
            <div className="row p-2 ml-1">
            <div className="col-lg-4">
                <p className="para">About</p>
            </div>
            <div className="col-lg-4">
                <p className="para">Accessibility</p>
            </div>
            <div className="col-lg-4">
                <p className="para paracolor">Questions ?</p>
            </div>
            </div>

            <div className="row p-2 ml-1">
            <div className="col-lg-4">
                <p className="para">Community Guidelines</p>
            </div>
            <div className="col-lg-4">
                <p className="para">Careers</p>
            </div>
            <div className="col-lg-4 borderwhite pt-2 row">
                <MdContactPhone className="col-lg-3 col-3 iconcolor ml-1 pt-1"/><p className="col-lg-9 col-9 para paracolor2">Visit our Help Center</p>
                
            </div>
            </div>

            <div className="row p-2 ml-1">
            <div className="col-lg-4">
                <p className="para">Privacy & Terms</p>
            </div>
            <div className="col-lg-4">
                <p className="para">Marketing</p>
            </div>
            <div className="col-lg-4">

                <p className="para paracolor">Manage your Account</p>
            </div>
            </div>

            <div className="row p-2 ml-1">
            <div className="col-lg-4">
                <p className="para">Safety Center</p>
            </div>
            <div className="col-lg-4">
                <p className="para">Advertising</p>
            </div>
            <div className="col-lg-4 row borderwhite pt-2">
                <MdSettingsSuggest className="col-lg-3 col-3 iconcolor ml-1 pt-1"/>
                <p className="col-lg-9 col-9 para paracolor2 ml-5">Go To Settings</p>
            </div>
            </div>
        </div>
        <div className="container-fluid thirdbackground">
            <h3 className="text-center text-white">Copyrights <MdCopyright/> Skills point</h3>
        </div>
        
        </>
    );
}