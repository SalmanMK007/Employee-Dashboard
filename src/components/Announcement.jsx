import React from 'react'

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ProgressImg from '../images/Group291.png'
import Dropdown from 'react-bootstrap/Dropdown';
import Figma from '../images/figma.png'
import Ios from '../images/ios.png'
import Spotify from '../images/spotify.png'
import BE from '../images/be.png'

import { HiDotsVertical } from "react-icons/hi";
import { CiFilter } from "react-icons/ci";

const Announcement = () => {
    return (

        <>
        <section>
                <div className="container pt-4">
                    <Row className="section">
                        <div className="left_section">
                            <Card className='cards'>
                                <Card.Body className='section_card_body'>
                                    <div className='section_card_title'>
                                        <div className="leave_remains">
                                            <h5>Number of Leave Remains</h5>
                                            <p>As of now August 28, 2023.</p>
                                        </div>
                                        <div className="progress_Filter">
                                            <CiFilter />
                                        </div>
                                    </div>
                                    <div className="section_card_progress">
                                        <img src={ProgressImg} alt="" />
                                        <div className='ProgressImg_rel' >
                                            <p>Total Leave </p>
                                            <h4>16</h4>
                                        </div>
                                    </div>
                                    <div className='section_progress_text' >
                                        <div className='section_progress_text_right'>
                                            <p><span className="circle" style={{ background: '#008EFF' }}></span>Sick Leaves</p>
                                            <p><span className="circle" style={{ background: '#2DD4BF' }}></span>Annual Leaves</p>
                                            <p><span className="circle" style={{ background: '#2DD4BF' }}></span>Casual Leaves</p>
                                        </div>
                                        <div className='section_progress_text_left'>
                                            <p>05<span style={{ background: '#F4F0FF', color: '#008EFF' }}>43%</span></p>
                                            <p>65<span style={{ background: '#EAFBF9', color: '#2DD4BF' }}>30%</span></p>
                                            <p>65<span style={{ background: '#EAFBF9', color: '#2DD4BF' }}>30%</span></p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                            <Card className='cards mt-4'>
                                <Card.Body className='section_card_body'>
                                    <div className="all_title">
                                        <h5>Recent Added Jobs</h5>
                                    </div>
                                    <div className="small_card">
                                        <div className="small_card_logo">
                                            <img src={Figma} alt="logo" />
                                        </div>
                                        <div className="small_card_text">
                                            <h5>Jr. Frontend Engineer</h5>
                                            <p>Spotify, Singapore  -  2 Days ago</p>
                                        </div>
                                    </div>
                                    <div className="small_card">
                                        <div className="small_card_logo">
                                            <img src={Spotify} alt="logo" />
                                        </div>
                                        <div className="small_card_text">
                                            <h5>Product Designer</h5>
                                            <p>Spotify, Singapore  -  2 Days ago</p>
                                        </div>
                                    </div>
                                    <div className="small_card">
                                        <div className="small_card_logo">
                                            <img src={Ios} alt="logo" />
                                        </div>
                                        <div className="small_card_text">
                                            <h5>iOS Developer</h5>
                                            <p>San Francisco, CA  -  2 Days ago</p>
                                        </div>
                                    </div>
                                    <div className="small_card">
                                        <div className="small_card_logo">
                                            <img src={BE} alt="logo" />
                                        </div>
                                        <div className="small_card_text">
                                            <h5>Brand Strategist</h5>
                                            <p>New york, US  -  2 Days ago</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="right_section">
                            <Card className='cards'>
                                <Card.Body className='progress_right_section_card_body'>
                                    <div className='progress_right_section_card_text'>
                                        <h5>Announcement </h5>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                                Create New
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="progress_right_section_card-text">
                                        <h5>Quaid E Azam Day & Christmas</h5>
                                        <p>Dear Team,
                                            <br />
                                            <br />

                                            We wanted to inform you that the office will be closed on Monday,
                                            December 25th, 2023, in celebration of
                                            <strong> Quaid E Azam Day & Christmas.</strong> Please be advised that all team members are expected
                                            to resume work on Tuesday, <strong>December 26th, 2023.</strong> Work from home or leave requests on this day will not be permitted, and absences may result in sandwich leave deduction as per company policy. We wish you a delightful holiday filled with joy and relaxation.

                                            <br />
                                            <br />
                                            Best Regards,</p>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className='cards mt-4'>
                                <Card.Body className='progress_right_section_card_body card-body'>
                                    <div className='progress_right_section_card_text'>
                                        <h5>Meetings and Interveiw </h5>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                                Create New
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="small_card2">
                                        <div className="small_card2_left">
                                            <div className="small_card2_logo">
                                                <p><span>Mon</span> <br />10</p>
                                            </div>
                                            <div className="small_card2_text">
                                                <h5>Interview</h5>
                                                <p>9:00 am - 11:30 am</p>
                                            </div>
                                        </div>
                                        <div className="dot">
                                            <HiDotsVertical />
                                        </div>
                                    </div>
                                    <div className="small_card2">
                                        <div className="small_card2_left">
                                            <div className="small_card2_logo">
                                                <p><span>Mon</span> <br />10</p>
                                            </div>
                                            <div className="small_card2_text">
                                                <h5>Interview</h5>
                                                <p>9:00 am - 11:30 am</p>
                                            </div>
                                        </div>
                                        <div className="dot">
                                            <HiDotsVertical />
                                        </div>
                                    </div>
                                    <div className="small_card2">
                                        <div className="small_card2_left">
                                            <div className="small_card2_logo">
                                                <p><span>Mon</span> <br />10</p>
                                            </div>
                                            <div className="small_card2_text">
                                                <h5>Interview</h5>
                                                <p>9:00 am - 11:30 am</p>
                                            </div>
                                        </div>
                                        <div className="dot">
                                            <HiDotsVertical />
                                        </div>
                                    </div>
                                    <div className="small_card2">
                                        <div className="small_card2_left">
                                            <div className="small_card2_logo">
                                                <p><span>Mon</span> <br />10</p>
                                            </div>
                                            <div className="small_card2_text">
                                                <h5>Interview</h5>
                                                <p>9:00 am - 11:30 am</p>
                                            </div>
                                        </div>
                                        <div className="dot">
                                            <HiDotsVertical />
                                        </div>
                                    </div>
                                    <div className="small_card2">
                                        <div className="small_card2_left">
                                            <div className="small_card2_logo">
                                                <p><span>Mon</span> <br />10</p>
                                            </div>
                                            <div className="small_card2_text">
                                                <h5>Interview</h5>
                                                <p>9:00 am - 11:30 am</p>
                                            </div>
                                        </div>
                                        <div className="dot">
                                            <HiDotsVertical />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Announcement