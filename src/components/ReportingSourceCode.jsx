import React from 'react'
import Avatar2 from '../images/avatar2.png'
import Logo2 from '../images/Vector.png'
import SourceCode from '../images/SourceCode.png'
import PDF from '../images/pdf.png'

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaHeart } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { MdBookmarkBorder } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";




import { HiOutlineDotsHorizontal } from "react-icons/hi";


const ReportingSourceCode = () => {
    return (
        <>
            <section>
                <div className="container mb-5">
                    <Row>
                        <div className="report_left">
                            <Card className='cards mt-4'>
                                <Card.Body className='section_card_body'>
                                    <div className="all_title">
                                        <h5>Recent Added Jobs</h5>
                                    </div>
                                    <div className="section_report">

                                        <div className="report_single_card">
                                            <div className="reporting_card_img">
                                                <img src={Avatar2} alt="" />
                                            </div>
                                            <div className="reporting_card_text">
                                                <p>Senior Manager</p>
                                                <h5>Muhammad Zain Shaikh</h5>
                                            </div>
                                        </div>
                                        <div className="report_single_card">
                                            <div className="reporting_card_img">
                                                <img src={Avatar2} alt="" />
                                            </div>
                                            <div className="reporting_card_text">
                                                <p>Senior Manager</p>
                                                <h5>Muhammad Zain Shaikh</h5>
                                            </div>
                                        </div>
                                        <div className="report_single_card">
                                            <div className="reporting_card_img">
                                                <img src={Avatar2} alt="" />
                                            </div>
                                            <div className="reporting_card_text">
                                                <p>Senior Manager</p>
                                                <h5>Muhammad Zain Shaikh</h5>
                                            </div>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>
                            <Card className='cards mt-4'>
                                <Card.Body className='section_card_body'>
                                <div className="all_title">
                                        <h5>Recent Added Jobs</h5>
                                    </div>
                                    <div className="small_card2">
                                        <div className="small_card2_left">
                                            <div className="report_small_card2_logo">
                                                <img src={PDF} alt="" />
                                            </div>
                                            <div className="small_card2_text">
                                                <h5>Leaves and Holiday Policy</h5>
                                                <p>01-jan-2024</p>
                                            </div>
                                        </div>
                                        <div className="dot">
                                            <HiDotsVertical />
                                        </div>
                                    </div>
                                    <div className="small_card2">
                                        <div className="small_card2_left">
                                            <div className="report_small_card2_logo">
                                                <img src={PDF} alt="" />
                                            </div>
                                            <div className="small_card2_text">
                                                <h5>Leaves and Holiday Policy</h5>
                                                <p>01-jan-2024</p>
                                            </div>
                                        </div>
                                        <div className="dot">
                                            <HiDotsVertical />
                                        </div>
                                    </div>
                                    <div className="small_card2">
                                        <div className="small_card2_left">
                                            <div className="report_small_card2_logo">
                                                <img src={PDF} alt="" />
                                            </div>
                                            <div className="small_card2_text">
                                                <h5>Leaves and Holiday Policy</h5>
                                                <p>01-jan-2024</p>
                                            </div>
                                        </div>
                                        <div className="dot">
                                            <HiDotsVertical />
                                        </div>
                                    </div>
                                    <div className="small_card2">
                                        <div className="small_card2_left">
                                            <div className="report_small_card2_logo">
                                                <img src={PDF} alt="" />
                                            </div>
                                            <div className="small_card2_text">
                                                <h5>Leaves and Holiday Policy</h5>
                                                <p>01-jan-2024</p>
                                            </div>
                                        </div>
                                        <div className="dot">
                                            <HiDotsVertical />
                                        </div>
                                    </div>
                                    <div className="small_card2">
                                        <div className="small_card2_left">
                                            <div className="report_small_card2_logo">
                                                <img src={PDF} alt="" />
                                            </div>
                                            <div className="small_card2_text">
                                                <h5>Leaves and Holiday Policy</h5>
                                                <p>01-jan-2024</p>
                                            </div>
                                        </div>
                                        <div className="dot">
                                            <HiDotsVertical />
                                        </div>
                                    </div>
                                    <div className="small_card2">
                                        <div className="small_card2_left">
                                            <div className="report_small_card2_logo">
                                                <img src={PDF} alt="" />
                                            </div>
                                            <div className="small_card2_text">
                                                <h5>Leaves and Holiday Policy</h5>
                                                <p>01-jan-2024</p>
                                            </div>
                                        </div>
                                        <div className="dot">
                                            <HiDotsVertical />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="report_right">
                            <Card className='cards mt-4'>
                                <Card.Body className='progress_right_section_card_body'>
                                    <div className='progress_right_section_card_text'>
                                        <h5>SourceCode  </h5>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                                FaceBook
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <Card className='cards mt-4'>
                                        <Card.Body className='progress_right_section_card_body'>
                                            <div className="report_card2_logo">
                                                <div className="report_card2_img">
                                                    <img src={Logo2} alt="" />
                                                    <h5>SourceCode</h5>
                                                </div>
                                                <HiOutlineDotsHorizontal />
                                            </div>
                                            <div className="report_card2_main_imag">
                                                <img src={SourceCode} alt="" />
                                            </div>
                                            <div className="report_icons">
                                                <div className="report_icons_left">
                                                    <FaHeart style={{ color: 'red' }} />
                                                    <BiMessageRounded />
                                                    <FiSend />
                                                </div>
                                                <div className="report_icons_right">
                                                    <MdBookmarkBorder />
                                                </div>
                                            </div>
                                            <div>
                                                <h5>SourceCode</h5>
                                                <p>View all 145 comments</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>

                </div>
            </section>
        </>
    )
}

export default ReportingSourceCode