import { useState } from 'react';
import Header from '../components/Header'
import HeaderBanner from '../components/HeaderBanner'
import ImageUploader from '../components/ImageUploader';

import Featured from '../images/Featuredicon.png'



import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


import { FaPlus } from "react-icons/fa6";
import DataList from '../components/DataList';
import { LuImagePlus } from "react-icons/lu";



const AttendanceRequest = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Header />
            <HeaderBanner />




            <section>
                <div className="container">
                    <div className="section_title attendance_title pt-5 pb-4">
                        <h5>My Attendance Summary <span>(January-2024)</span></h5>
                        <Button variant="primary" onClick={handleShow} className='attendance_btn'>
                            View Attendance Report  <FaPlus />
                        </Button>

                        <Modal size="lg" show={show} onHide={handleClose} >
                            <div className="attendance_reques_modal-content">
                                <Modal.Header closeButton>
                                    <div className="attendance_request">
                                        <img src={Featured} alt="" />
                                        <div className="attendance_request_text">
                                            <h5>Apply For Attendance Request</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </Modal.Header>

                                <Modal.Body className='border_b' >
                                    <Form>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                            <Form.Label column sm="4">
                                                Attendance Day(s)*
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Select aria-label="Default select example">
                                                    <option>Single Day</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                            <Form.Label column sm="4">
                                                Select Attendance Date*
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control type="date" />
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Body className='border_b' >
                                    <Form>
                                        <Form.Group as={Row} className="mb-3 d-flex align-items-sm-center" controlId="formPlaintextPassword">
                                            <Form.Label column sm="4">
                                                Upload image*
                                            </Form.Label>
                                            <Col sm="8">
                                                <div className="upload_img ">
                                                    <div className="upload_img_icon">
                                                    <LuImagePlus />
                                                    </div>
                                                    <ImageUploader />
                                                </div>
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>




                                <Modal.Body>
                                    <Form>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                            <Form.Label column sm="4">
                                                Mark My Attendance*
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Select aria-label="Default select example">
                                                    <option>Single Day</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                            <Form.Label column sm="4">
                                                Description*
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control as="textarea" rows={3} placeholder="Write a few sentences about Request...." />
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>

                                <Modal.Footer className="attendance_footer_button">
                                    <div className="attendance_footer_btns">
                                        <Button variant="outline-secondary" onClick={handleClose} className='attendance_footer_btn' >
                                            Cancel
                                        </Button>
                                    </div>
                                    <div className="attendance_footer_btns" >
                                        <Button variant="primary" onClick={handleClose} className='attendance_footer_btn'>
                                            Confirm
                                        </Button>
                                    </div>
                                </Modal.Footer>
                            </div>
                        </Modal>


                    </div>
                    <CardGroup>
                        <Card className='cards'>
                            <Card.Body className='card_body'>
                                <div className='card_text' >
                                    <h5>Total Present</h5>
                                    <h4>24</h4>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className='cards'>
                            <Card.Body className='card_body' >
                                <div className='card_text' >
                                    <h5>Late/Early</h5>
                                    <h4>02</h4>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className='cards'>
                            <Card.Body className='card_body' >
                                <div className='card_text' >
                                    <h5>Half Day</h5>
                                    <h4>08</h4>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className='cards'>
                            <Card.Body className='card_body'>
                                <div className='card_text' >
                                    <h5>Absent</h5>
                                    <h4>24</h4>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className='cards'>
                            <Card.Body className='card_body'>
                                <div className='card_text' >
                                    <h5>OffDay/Holiday</h5>
                                    <h4>03</h4>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className='cards'>
                            <Card.Body className='card_body' >
                                <div className='card_text' >
                                    <h5>On Leaves</h5>
                                    <h4>08</h4>
                                </div>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </section>

            <DataList />
        </>
    )
}

export default AttendanceRequest