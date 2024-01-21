import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Progress from './Progress'
import { FaArrowTrendUp } from "react-icons/fa6";

const Cards = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="section_title  pt-5 pb-4">
                        <h5>My Attendance Summary <span>(January-2024)</span></h5>
                    </div>
                    <CardGroup>
                        <Card className='cards'>
                            <Card.Body className='card_body'>
                                <div className='card_text' >
                                    <h5>Total Present</h5>
                                    <h4>24</h4>
                                    <p> <span className='trend_up'><FaArrowTrendUp /></span> 31 DAYS</p>
                                </div>
                                <div className='card_progress' >
                                <Progress percentage={74} />

                                </div>
                            </Card.Body>
                        </Card>
                        <Card className='cards'>
                            <Card.Body className='card_body' style={{ background: '#FFA600' }}>
                                <div className='card_text' >
                                    <h5>On Leaves</h5>
                                    <h4>02</h4>
                                    <p> <span className='trend_up'><FaArrowTrendUp /></span> Casual</p>
                                </div>
                                <div className='card_progress' >
                                <Progress percentage={4} />
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className='cards'>
                            <Card.Body className='card_body' style={{ background: '#FF5630' }}>
                                <div className='card_text' >
                                    <h5>On Absent</h5>
                                    <h4>03</h4>
                                    <p> <span className='trend_up'><FaArrowTrendUp /></span> Leave Disprove</p>
                                </div>
                                <div className='card_progress' >
                                <Progress percentage={2} />
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className='cards'>
                            <Card.Body className='card_body' style={{ background: '#377DFF' }}>
                                <div className='card_text' >
                                    <h5>OFF Days</h5>
                                    <h4>08</h4>
                                    <p> <span className='trend_up'><FaArrowTrendUp /></span> Weeks</p>
                                </div>
                                <div className='card_progress' >
                                <Progress percentage={8} />
                                </div>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </section>
        </>
    )
}

export default Cards