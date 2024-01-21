import React from 'react'
import BannerImg from "../images/header_bg.png"
import Avatar1 from "../images/avatar1.png"


import { FaPen } from "react-icons/fa";
import { BsBoxFill } from "react-icons/bs";

const HeaderBanner = () => {
    return (
        <>
            <section>
                <div className="container pb-3">
                    <div className="banner_img">
                        <img src={BannerImg} alt="" />
                        <div className='avatar_banner'>
                            <div className='avatar1' >
                                <div className='avatar_img' >
                                    <img src={Avatar1} alt="" />
                                    <span className='avatar_pen' ><FaPen /></span>
                                </div>
                                <div className='avatar_text' >
                                    <h5>M Rameez </h5>
                                    <p>Senior</p>
                                </div>
                            </div>
                            <div className='avatar_btn' >
                                <button><span><BsBoxFill /></span>  Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeaderBanner