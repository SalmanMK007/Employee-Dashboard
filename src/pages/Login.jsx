import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginImg from '../images/login_img.png'
import Form from '../images/Form.png'
import FormLogo from '../images/form-login.png'

const Login = () => {
    return (

        <>

            <section>
                <div className="login_bg">
                    <div className='container'>
                        <Row className='login' >
                            <Col md={6} className='login_center' >
                                <div className="login_right">

                                    <img src={LoginImg} alt="top logo" />
                                    <h4>The Ultimate <span> HR Management Solution</span></h4>
                                    <p>At SourceCode, we have a reliable, secure and adaptable HR management built from the ground up.We are determined to help our employees to give their best efforts every day to achieve the goals of their job.</p>
                                </div>
                            </Col>
                            <Col md={6} className='login_center' >
                                <div className="login_left">
                                    <img src={Form} alt="Form logo" />
                                    <p>Log in to start your session</p>
                                    <form class="login_form">
                                        <input type="text" class="form-control" placeholder="Employee Code" required autofocus />
                                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                                        <button class="btn login_btn" type="submit" >LOG IN</button>
                                    </form>
                                    <img src={FormLogo} alt="top logo" />
                                    <p className='copy_right'>© 2024 MegaHCM. All Rights Reserved</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login